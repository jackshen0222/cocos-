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
        AnimSpeedControl: {
            default: null,
            type: cc.Button
        },

        AnimationFile: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        this.AnimeAccelerate();
    },

    AnimeAccelerate() {
        //所有的动画
        var animeNode = this.AnimationFile.getComponent(cc.Animation)._clips
        //所有实例化节点的父节点
        const animeParentNode = cc.director.getScene().getChildByName('Canvas').children[7].children

        var state = 0//加速状态
        this.AnimSpeedControl.node.on(cc.Node.EventType.TOUCH_END, () => {

            if (state) {
                return
            }
            state += 1

            //实例化节点加速
            animeParentNode.forEach(function (v) {
                var clipName = v.getComponent(cc.Animation)._clips[0].name
                v.getComponent(cc.Animation).getAnimationState(clipName).speed += 0.15
            })
            //加速持续期间，后面加入的节点也加速
            animeNode.forEach(function (v) {  //后面拖放开始播放的动画也要进行加速
                v.speed += 0.15
            })

            //60s加速时间耗尽，恢复原速
            this.scheduleOnce(function () {
                animeNode.forEach(function (v) {  //后面拖放开始播放的动画也要进行加速
                    v.speed -= 0.15
                })
                animeParentNode.forEach(function (v) {
                    var clipName = v.getComponent(cc.Animation)._clips[0].name
                    v.getComponent(cc.Animation).getAnimationState(clipName).speed -= 0.15
                })
                state -= 1
            }, 60)
        })
    },

    start() {

    },

    // update (dt) {},
});


