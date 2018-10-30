// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
    },

    update(dt) {
    },

    onCollisionExit: function (other, self) {
        var carArr = []//图片等级
        var chi = cc.find("Canvas/carSprite").children
        for (let i = 0; i < chi.length; i++) {
            carArr.push(chi[i])
        }
        var array = [];//玩家车辆
        var chi = cc.find('Canvas/car').children;
        for (let i = 0; i < chi.length; i++) {
            array.push(chi[i])
        }

        //碰撞车辆图片 与 被碰撞车辆图片
        var otherSp = other.getComponent(cc.Sprite)
        var selfSp = self.getComponent(cc.Sprite)
        //碰撞其他车辆
        if (other.node.group === 'CarCollider' && self.node.group === 'CarCollider') {
            if (selfSp.spriteFrame === otherSp.spriteFrame && selfSp.spriteFrame.name !== 'Money2') {//车辆合成
                for (let i = 0; i < carArr.length; i++) {
                    if (selfSp.spriteFrame === carArr[i].getComponent(cc.Sprite).spriteFrame) {
                        if (carArr[i] === carArr[9]) { return; }//最高等级时不能合成
                        otherSp.spriteFrame = carArr[i + 1].getComponent(cc.Sprite).spriteFrame;
                        carArr[i].active = true//当前等级图片显示,购买栏里黑色的图片
                        carArr[i + 1].active = true//下一等级图片显示
                    }
                }
                self.node.active = false;//self被碰的隐藏,other-拖动的不隐藏

                // /************************************* */
                // //self.SpriteFrame需要加载回原样，节点才可以正确隐藏还原
                // cc.loader.loadRes('Money2', cc.SpriteFrame, function (err, res) {
                //     selfSp.spriteFrame = res
                // })
            }

            // /*********************************** */
            // //变更位置 
            // //在car.js 中的鼠标拖放End事件中，让节点全部显示，之后购买车辆时，再将图片为空的隐藏
            // if (selfSp.spriteFrame.name === 'Money2') {
            //     for (let i = 0; i < carArr.length; i++) {
            //         if (otherSp.spriteFrame === carArr[i].getComponent(cc.Sprite).spriteFrame) {
            //             this.scheduleOnce(function(){
            //                 selfSp.spriteFrame = carArr[i].getComponent(cc.Sprite).spriteFrame
            //             },0.01)
            //         }
            //     }
            //     cc.loader.loadRes('Money2', cc.SpriteFrame, function (err, res) {
            //         otherSp.spriteFrame = res
            //     })
            // }


        }

    },



});
