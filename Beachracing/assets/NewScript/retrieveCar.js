// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var GameValueJs = require('ModuleJs')

cc.Class({
    extends: cc.Component,

    properties: {
        coinCount: {
            default: null,
            type: cc.Label
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        // console.log(GameValueJs.CoinNumOfPurch.coin1)
    },

    onCollisionExit: function (other, self) {

        var carArrSprite = []//图片等级
        var chi = cc.find("Canvas/carSprite").children
        for (let i = 0; i < chi.length; i++) {
            carArrSprite.push(chi[i])
        }
        var retrieveCarCoinGrade = [100, 500, 1500, 3000, 5000, 7500, 12500, 17000, 25000, 50000]
        var self = this

        var selfSp = self.getComponent(cc.Sprite)
        var otherSp = other.getComponent(cc.Sprite)

        //碰撞 获取图片等级，图片等级对应图片回收金币
        //回收值=金币*八折*购买次数(需要模块化获取)
        //总金币加上回收值,最后将原先回收的图片等级设置为初始值，并且图片为隐藏;
        if (self.node.group === 'retrieveCar') {
            for (let i = 0; i < carArrSprite.length; i++) {
                if (otherSp.spriteFrame === carArrSprite[i].getComponent(cc.Sprite).spriteFrame) {
                    console.log('spriteFrame load be done')
                    window.coinTotalLabel += retrieveCarCoinGrade[i]
                    this.coinCount.string = window.coinTotalLabel
                }
                otherSp.spriteFrame = carArrSprite[1].getComponent(cc.Sprite).spriteFrame
                otherSp.node.active = false
            }
        }

    }


    // update (dt) {},
});