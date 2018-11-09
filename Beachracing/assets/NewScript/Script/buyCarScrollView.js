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
        buyMore: {
            default: null,
            type: cc.Button,
        },

        scrollViewBuyCar: {
            default: null,
            type: cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.scrollViewShowHide();
    },

    start() {

    },

    // button 切换scrollView显示状态
    scrollViewShowHide: function () {
        var self = this
        this.buyMore.node.on(cc.Node.EventType.TOUCH_END, () => {
            if (self.scrollViewBuyCar.active === false) {
                self.scrollViewBuyCar.active = true;
            }
            else if (self.scrollViewBuyCar.active === true) {
                self.scrollViewBuyCar.active = false
            }

        })
    },

    // update (dt) {},
});
