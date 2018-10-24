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

        GameBegin: {
            default: null,
            type: cc.Node
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        var self = this;
        var a = cc.find('Canvas/background')
        var ca = cc.find('Canvas')
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            // self.GameBegin.runAction(cc.moveTo(1,cc.v2(-300,0)));
            self.GameBegin.position = a.position
            //cc.game.addPersistRootNode(ca)
             
        })
    },
    start() {

    },

    // update (dt) {},
});
