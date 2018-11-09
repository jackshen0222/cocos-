// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var window = require('Windows')
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        cc.director.getCollisionManager().enabled = true

    },

    //每次拖放车辆播放动画，是实例化一个节点，
    //但取消动画后，节点还未删除，依旧存在，到后面游戏肯定会崩溃
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

        scene = cc.director.getScene().getChildByName('Canvas');//获取场景
        other.node.active = true //显示节点
        for (let i = 0; i < carArr.length; i++) {
            if (otherSp.spriteFrame == carArr[i].getComponent(cc.Sprite).spriteFrame)
                animNode = cc.instantiate(run[i])
        }
        scene.children[7].addChild(animNode)//添加至场景节点instAnimeNode 

        var anim = animNode.getComponent(cc.Animation)//获取instantiate节点的动画
        anim.playAdditive(); // 播放第一个动画
        other.getComponent(cc.Collider).enabled = false;//关闭碰撞
        other.node.opacity = 100//节点半透明

        //取消动画
        other.node.on(cc.Node.EventType.TOUCH_END, function () { //关闭动画显示节点
            if (other.node.opacity = 100) {
                other.getComponent(cc.Collider).enabled = true;//开启碰撞
                other.node.opacity = 255//全显示 不透明
                anim.stop();//停止动画
                animNode.active = false//隐藏动画节点
            }
        });

    },

    update(dt) {


    },
    //每圈加钱
    carone() {
        window.coinTotalLabel += 10
    },
    cartwo() {
        window.coinTotalLabel += 20
    },
    carthree() {
        window.coinTotalLabel += 40
    },
    carfour() {
        window.coinTotalLabel += 80
    },
    carfive() {
        window.coinTotalLabel += 150
    },
    carsix() {
        window.coinTotalLabel += 300
    },
    carseven() {
        window.coinTotalLabel += 500
    },
    careight() {
        window.coinTotalLabel += 800
    },
    carnine() {
        window.coinTotalLabel += 1500
    },
    carten() {
        window.coinTotalLabel += 2000
    },

    start() {

    },


});
