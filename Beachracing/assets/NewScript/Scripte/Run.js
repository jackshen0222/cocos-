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
        var selff = this;
        var scene, animNode//场景，实例化动画节点
        if (self.tag == 1) {//碰撞跑道上的节点
            if (otherSp.spriteFrame.name === 'Money2')//无车辆的节点禁止实例化动画
                return
            var spC//车俩等级
            for (let i = 0; i < carArr.length; i++) {
                if (otherSp.spriteFrame == carArr[i].getComponent(cc.Sprite).spriteFrame)
                    spC = i
            }
            other.node.active = true //默认显示节点
            scene = cc.director.getScene().getChildByName('Canvas');//获取场景
            animNode = cc.instantiate(run[spC])

            this.scheduleOnce(function () {//延后加载，解决屏幕闪烁图片
                scene.children[7].addChild(animNode)//添加至场景节点instAnimeNode 
            }, 0.1)

            var anim = animNode.getComponent(cc.Animation)//获取克隆节点的动画
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

            //动画加速
            this.speedButt.node.on(cc.Node.EventType.TOUCH_END, function () {
                var accelerance = [];//原速度
                var changesSpeed = []//改变后的速度
                var animeParentNode = scene.children[7]

                // var arr = [];

                for (let i = 0; i < animeParentNode.children.length; i++) {
                    // animeParentNode.children[i].getComponent(cc.Animation).speed = 10;
                    // arr.push(cc.sequence(cc.delayTime(1), cc.callFunc(() => {
                    //     animeParentNode.children[i].getComponent(cc.Animation).play();
                    // })))

                    accelerance.push(animeParentNode.children[i].getComponent(cc.Animation).currentClip.speed) //获取原先车辆的速度
                    changesSpeed[i] = accelerance[i] * 2.5//在原先车辆速度的基础上加速


                    cc.sequence(cc.delayTime(1), cc.callFunc(() => {
                        for (let j = 0; j < animeParentNode.children.length; j++) {
                            animeParentNode.children[j].getComponent(cc.Animation).play().speed = changesSpeed[i]
                            selff.scheduleOnce(function (v) {
                                animeParentNode.children[j].getComponent(cc.Animation).play().speed = accelerance[i]  //加速时间耗尽，还原原速度
                            }, 5)
                        }
                    }))

                }
                // scene.runAction(cc.sequence(arr)) 

             }
            );



        }



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
