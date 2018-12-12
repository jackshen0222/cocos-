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
     
    },


    onLoad () {
        this.MovingCar()
    },

    start() {

    },

    MovingCar() {
        var carPosition = []//车辆原始位置
        var chi = cc.find('Canvas/carPosition').children;
        for (let i = 0; i < chi.length; i++) {
            carPosition.push(chi[i]);
        }
        var carArray = []; //添加子节点到新数组
        var chi = cc.find('Canvas/car').children;
        for (let i = 0; i < chi.length; i++) {
            carArray.push(chi[i])
        }

        var self = this;
        var state = [] //车辆状态，禁止多点触碰
        //鼠标拖动车辆
        for (let i = 0; i < carArray.length; i++) {
            //触碰开始时获取当前节点位置
            carArray[i].on(cc.Node.EventType.TOUCH_START, function (event) {
                if (state) { state.push("1"); }
                else { state = []; }
                if (state.length > 1) { return; }//禁止多点触碰

                carArray[i]._sourcePos = carPosition[i].position
            })
            carArray[i].on(cc.Node.EventType.TOUCH_MOVE, function (event) {
                if (state.length > 1) { return; }
                cc.director.getCollisionManager().enabled = false;
                // 获取当前光标与上一光标的偏移量
                var delta = event.touch.getDelta();
                carArray[i].x += delta.x;
                carArray[i].y += delta.y;
            })
            carArray[i].on(cc.Node.EventType.TOUCH_END, function () {
                state.pop();
                cc.director.getCollisionManager().enabled = true;//拖动结束后开启碰撞
                self.scheduleOnce(function () {
                    carArray[i].position = carArray[i]._sourcePos;
                }, 0.01)
            })
            carArray[i].on(cc.Node.EventType.TOUCH_CANCEL, function () {
                state.pop();
                carArray[i].position = carArray[i]._sourcePos;
            })
        };

    },

    // update (dt) {},
});
