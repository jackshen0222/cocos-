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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // var ws = new WebSocket('http:localhost:3000')


    },

    start() {

    },

    // update (dt) {},

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
            if (selfSp.spriteFrame === otherSp.spriteFrame) {
                for (let i = 0; i < carArr.length; i++) {
                    if (selfSp.spriteFrame === carArr[i].getComponent(cc.Sprite).spriteFrame) {
                        if (carArr[i] === carArr[9]) {
                            return;
                        }
                        otherSp.spriteFrame = carArr[i + 1].getComponent(cc.Sprite).spriteFrame;
                        carArr[i].active = true//当前等级图片显示
                        carArr[i + 1].active = true//下一等级图片显示
                    }
                }
                self.node.active = false;
            }
        };


        // var selff = this
        // if (other.node.group === 'carPosition') {
        //     if(array[other.tag-1].active ===false){
        //         other.active=false
        //         // var spri=self.getComponent(cc.Sprite).spriteFrame
        //         // self.spriteFrame=carArr[0].getComponent(cc.Sprite).spriteFrame
        //         // array[other.tag-1].spriteFrame=spri
        //         array[other.tag-1].active=true;
        //     }
        // }



        // if (other.tag === 1) {
        //     position = 1
        // }
        // else if (other.tag === 2) {
        //     position = 2
        // }
        // else if (other.tag === 3) {
        //     position = 3
        // }
        // else if (other.tag === 4) {
        //     position = 4
        // }
        // else if (other.tag === 5) {
        //     position = 5
        // }
        // else if (other.tag === 6) {
        //     position = 6
        // }
        // else if (other.tag === 7) {
        //     position = 7
        // }
        // else if (other.tag === 8) {
        //     position = 8
        // }
        // else if (other.tag === 9) {
        //     position = 9
        // }
        // else if (other.tag === 10) {
        //     position = 10
        // }
        // else if (other.tag === 11) {
        //     position = 11
        // }
        // else if (other.tag === 12) {
        //     position = 12
        // }
    },



});
