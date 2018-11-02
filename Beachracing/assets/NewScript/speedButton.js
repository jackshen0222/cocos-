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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.AnimSpeedControl.node.on(cc.Node.EventType.TOUCH_END, () => {
            var scene = cc.director.getScene().getChildByName('Canvas');
            var animeParentNode = scene.children[7]
            for (let i = 0; i < animeParentNode.children.length; i++) {
                //    console.log(animeParentNode.children[i])
                var anim = animeParentNode.children[i].getComponent(cc.Animation)
                var animState = anim.getAnimationState('Car_1')
                // var animState1 = anim.getAnimationState('Car_2');
                animState.speed += 0.5
                // animState1.speed = 0.7
                console.log(animState.speed)
               
            }
        })
    },

    start() {

    },

    // update (dt) {},
});


