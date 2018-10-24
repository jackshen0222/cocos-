// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var canDropCar = 0;//跑道上总车辆
cc.Class({
    extends: cc.Component,

    properties: {
        DragCar: {
            default: null,
            type: cc.Label
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        cc.director.getCollisionManager().enabled = true
        // this.DragCar.string ='123'


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
        if (self.tag == 1) {//碰撞跑道上的节点
            for (let i = 0; i < carArr.length; i++) {
                if (otherSp.spriteFrame == carArr[i].getComponent(cc.Sprite).spriteFrame) {
                    other.node.active = true //默认显示节点
                    scene = cc.director.getScene().getChildByName('Canvas');//获取场景
                    animNode = cc.instantiate(run[i])
                    // getComponent(cc.Animation).defaultClip.speed //动画加速
                }
            }


            this.scheduleOnce(function () {//延后加载，解决屏幕闪烁图片
                animNode.parent = scene//添加至场景
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
        // this.doubleSpeedButton.node.on(cc.Node.EventType.TOUCH_END, function () {
        //     carTotal.forEach(function (v) {
        //         v.getComponent(cc.Animation).defaultClip.speed = 2
        //     })
        //     console.log(carTotal)
        // })

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
