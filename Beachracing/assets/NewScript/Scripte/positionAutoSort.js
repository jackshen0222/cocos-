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
        playerSortButton: {
            default: null,
            type: cc.Button
        },
    
    },
    onLoad() {
        this.PlayerAutoSort();

    },

    PlayerAutoSort() {
        var carArray = []; //添加子节点到新数组
        var chi = cc.find('Canvas/car').children;
        for (let i = 0; i < chi.length; i++) {
            carArray.push(chi[i])
        }
        var carSpriteArr = []
        var chi = cc.find('Canvas/carSprite').children
        for (let i = 0; i < chi.length; i++) {
            carSpriteArr.push(chi[i])
        }

        var self = this
        this.playerSortButton.node.on(cc.Node.EventType.TOUCH_END, function () {


            var existCar = []
            var sortExistCar = []

            var continueJudge = false;
            carArray.forEach(function (v) {
                if (v.opacity === 100)
                    continueJudge = true
            })
            if (continueJudge) {
                console.log('动画进行中，禁止变更位置')
                return;
            }
            for (let i = 0; i < carArray.length; i++) {
                if (carArray[i].active === true) {
                    existCar.push(carArray[i])//获得存在的节点
                }
                carArray[i].active = false
            }

            sortExistCar = existCar.sort((a, b) => {
                var aName = Number(a.getComponent(cc.Sprite).spriteFrame.name)
                var bName = Number(b.getComponent(cc.Sprite).spriteFrame.name)
                return bName - aName
            })

            for (let i = 0; i < existCar.length; i++) {//实行排序
                carArray[i].active = true
                var name = sortExistCar[i].getComponent(cc.Sprite).spriteFrame.name
                cc.loader.loadRes(name, cc.SpriteFrame, function (err, res) {
                    carArray[i].getComponent(cc.Sprite).spriteFrame = res
                })

            }

            // console.log(sortExistCar)

        })

    },


    // update (dt) {},
});
