// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var CarSpeed = require('speedButton')
cc.Class({
    extends: cc.Component,

    properties: {
        speedButt: {
            default: null,
            type: cc.Button
        },

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        cc.director.getCollisionManager().enabled = true

    },
    onCollisionExit: function (other, self) {
        var carArr = []//图片等级
        var chi = cc.find("Canvas/carSprite").children
        for (let i = 0; i < chi.length; i++) {
            carArr.push(chi[i])
        }
        var run = []
        var chi = cc.find('Canvas/Run').children
        for (let i = 0; i < chi.length; i++) {
            run.push(chi[i])
        }
        var otherSp = other.getComponent(cc.Sprite)
        var scene, animNode//场景，实例化动画节点
        var instNode=[]
        if (self.tag == 1) {//碰撞跑道上的节点
            for (let i = 0; i < carArr.length; i++) {
                if (otherSp.spriteFrame == carArr[i].getComponent(cc.Sprite).spriteFrame) {
                    other.node.active = true //默认显示节点
                    scene = cc.director.getScene().getChildByName('Canvas');//获取场景
                    animNode = cc.instantiate(run[i])
                    // getComponent(cc.Animation).defaultClip.speed //动画加速
                }
            }

            //animNode已经添加到了parent。不能再更改
            this.scheduleOnce(function () {//延后加载，解决屏幕闪烁图片
                animNode.parent = scene.children[7]//添加至场景   节点instAnimeNode 
            }, 0.03)
            animNode.active = true//显示动画节点
            var anim = animNode.getComponent(cc.Animation)//获取克隆节点的动画
            anim.playAdditive(); // 播放第一个动画
            other.getComponent(cc.Collider).enabled = false;//关闭碰撞
            other.node.opacity = 100//节点半透明
            //关闭动画显示节点
            other.node.on(cc.Node.EventType.TOUCH_END, function () {
                if (other.node.opacity = 100) {
                    other.getComponent(cc.Collider).enabled = true;//开启碰撞
                    other.node.opacity = 255//全显示 不透明
                    anim.stop();//停止动画
                    animNode.active = false//隐藏动画节点
                }
            });
            
        }

        this.speedButt.node.on(cc.Node.EventType.TOUCH_END, function () {
           console.log(instNode)
            // for (let i = 0; i < instNode.children.length; i++) {
            //     instNode.children[i].getComponent(cc.Animation).defaultClip.speed = 5
            // }
            // instNode.children.getComponent(cc.Animation).defaultClip.speed = 5
        })


    },

    update(dt) {


    },

    carone() {
        window.coinTotalLabel += 10 / 9
    },
    cartwo() {
        window.coinTotalLabel += 20 / 9
    },
    carthree() {
        window.coinTotalLabel += 40 / 9
    },
    carfour() {
        window.coinTotalLabel += 80 / 9
    },
    carfive() {
        window.coinTotalLabel += 150 / 9
    },
    carsix() {
        window.coinTotalLabel += 300 / 9
    },
    carseven() {
        window.coinTotalLabel += 500 / 9
    },
    careight() {
        window.coinTotalLabel += 800 / 9
    },
    carnine() {
        window.coinTotalLabel += 1500 / 9
    },
    carten() {
        window.coinTotalLabel += 2000 / 9
    },

    start() {

    },


});
