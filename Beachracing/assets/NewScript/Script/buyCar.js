

// var carArrSpriteV;
var buyNine = 0;

var window = require('Windows')
cc.Class({
    extends: cc.Component,

    properties: {


        buy: {  //买车 基础车
            default: null,
            type: cc.Button,
        },

        scrollViewBuyCar: {   //滚动视图 买高级车
            default: null,
            type: cc.Node
        },

        coinTotal: {//总钱
            default: null,
            type: cc.Label,
        },
        carDeblock: {//解锁车辆图片
            default: null,
            type: cc.Node
        },


        lab1: {//基础车辆
            default: null,
            type: cc.Label,
        },

    },

    onLoad() {
        this.buyCar();
        this.ViewEffect();

    },

    update(dt) {
        this.coinTotal.string = Math.round(window.coinTotalLabel)//总金钱取整
        this.ViewEffectUpdate();//图片复原
    },
    //初始滚动试图中的图片颜色为黑，按钮为透明
    ViewEffect: function () {
        for (let i = 0; i < this.scrollViewBuyCar.children.length; i++) {
            this.scrollViewBuyCar.children[i].children[0].color = new cc.Color(0, 0, 0, 255);
            this.scrollViewBuyCar.children[i].children[1].opacity = 20
        }
    },
    //图片复原
    ViewEffectUpdate: function () {
        //复原图片和复原按钮 为原先模样
        //第四辆车合成后，第二辆车解锁并可以购买

        var carArrSprite = []//图片等级
        var chi = cc.find("Canvas/carSprite").children
        for (let i = 0; i < chi.length; i++) {
            carArrSprite.push(chi[i])
        }
        // if (carArrSprite[2].active === true) {
        //     this.carDeblock.children[1].active = true //三级车
        //     this.carDeblock.active = true
        // }

        if (carArrSprite[3].active === true) {
            this.scrollViewBuyCar.children[0].children[0].color = new cc.Color(255, 255, 255, 255);
            this.scrollViewBuyCar.children[0].children[1].opacity = 255
            // this.carDeblock.active = true
            // this.carDeblock.children[2].active = true

        }
        if (carArrSprite[4].active === true) {
            this.scrollViewBuyCar.children[1].children[0].color = new cc.Color(255, 255, 255, 255);
            this.scrollViewBuyCar.children[1].children[1].opacity = 255
            // this.carDeblock.active = true
            // this.carDeblock.children[3].active = true

        }
        if (carArrSprite[5].active === true) {
            this.scrollViewBuyCar.children[2].children[0].color = new cc.Color(255, 255, 255, 255);
            this.scrollViewBuyCar.children[2].children[1].opacity = 255
            // this.carDeblock.active = true
            // this.carDeblock.children[4].active = true
        }
        if (carArrSprite[6].active === true) {
            this.scrollViewBuyCar.children[3].children[0].color = new cc.Color(255, 255, 255, 255);
            this.scrollViewBuyCar.children[3].children[1].opacity = 255
            //     this.carDeblock.active = true
            //     this.carDeblock.children[5].active = true
        }
        if (carArrSprite[7].active === true) {
            this.scrollViewBuyCar.children[4].children[0].color = new cc.Color(255, 255, 255, 255);
            this.scrollViewBuyCar.children[4].children[1].opacity = 255
            // this.carDeblock.active = true
            // this.carDeblock.children[6].active = true
        }
        if (carArrSprite[8].active === true) {
            this.scrollViewBuyCar.children[5].children[0].color = new cc.Color(255, 255, 255, 255);
            this.scrollViewBuyCar.children[5].children[1].opacity = 255
            // this.carDeblock.active = true
            // this.carDeblock.children[7].active = true
        }
        if (carArrSprite[9].active === true) {
            this.scrollViewBuyCar.children[6].children[0].color = new cc.Color(255, 255, 255, 255);
            this.scrollViewBuyCar.children[6].children[1].opacity = 255
            // this.carDeblock.active = true
            // this.carDeblock.children[8].active = true
        }
        if (buyNine >= 8) {
            this.scrollViewBuyCar.children[7].children[0].color = new cc.Color(255, 255, 255, 255);
            this.scrollViewBuyCar.children[7].children[1].opacity = 255
        }
    },


    //购买车辆，判断是否有空位，才可以继续购买车辆，否则return
    JudgeCarPositionIfNull() {
        var carArray = []; //添加子节点到新数组
        var chi = cc.find('Canvas/car').children;
        for (let i = 0; i < chi.length; i++) {
            carArray.push(chi[i])
        }
        var buyOrOff = false
        for (let i = 0; i < carArray.length; i++) {
            if (carArray[i].active === false) {
                buyOrOff = true
            }
        }
        if (buyOrOff === true) {
            return true
        }
    },

    buyCar: function () {

        var carArray = []; //添加子节点到新数组
        var chi = cc.find('Canvas/car').children;
        for (let i = 0; i < chi.length; i++) {
            carArray.push(chi[i])
        }
        var carArrSprite = []//图片等级
        var chi = cc.find("Canvas/carSprite").children
        for (let i = 0; i < chi.length; i++) {
            carArrSprite.push(chi[i])
        }

        //记录当前第几次购买车辆

        var coin2 = -1
        var coin3 = -1
        var coin4 = -1
        var coin5 = -1
        var coin6 = -1
        var coin7 = -1
        var coin8 = -1
        var coin9 = -1
        //button 购买车辆
        var coin1 = -1
        this.buy.node.on(cc.Node.EventType.TOUCH_END, () => {
            var b = this.lab1.string
            var carPositionStillNull = this.JudgeCarPositionIfNull()
            //判断玩家池为空 且金额足够
            if (carPositionStillNull && window.coinTotalLabel >= b) {
                coin1 += 1//购买次数
                window.coinTotalLabel -= Math.round(100 + 100 * (1.1 * coin1));//购买后的溢价
                this.lab1.string = Math.round(100 + 100 * (1.1 * (coin1 + 1)))

                for (let i = 0; i < carArray.length; i++) {
                    if (carArray[i].active === false) {
                        cc.loader.loadRes('1', cc.SpriteFrame, function (err, spriteFrame) {
                            carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                        })
                        carArray[i].active = true;
                        break;
                    }
                }
            }
        })
        //购买更多车辆内的第一辆车(二级车辆) this.scrollViewBuyCar.children[0] ，children[1]为button
        this.scrollViewBuyCar.children[0].children[1].on(cc.Node.EventType.TOUCH_END, () => {
            var b1 = this.scrollViewBuyCar.children[0].children[1].children[0].getComponent(cc.Label).string
            var carPositionStillNull = this.JudgeCarPositionIfNull()

            //当合成后为第四辆车，才可以购买第二辆车
            if (carArrSprite[3].active === true) {
                //判断玩家池为空 且金额足够
                if (carPositionStillNull && window.coinTotalLabel >= b1) {
                    coin2 += 1;//购买次数
                    window.coinTotalLabel -= Math.round(500 + 500 * (1.15 * coin2))//购买后的溢价
                    this.scrollViewBuyCar.children[0].children[1].children[0].getComponent(cc.Label).string = Math.round(500 + 500 * (1.5 * (coin2 + 1)))

                    for (let i = 0; i < carArray.length; i++) {
                        if (carArray[i].active === false) {
                            cc.loader.loadRes('2', cc.SpriteFrame, function (err, spriteFrame) {
                                carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                            })
                            carArray[i].active = true;
                            break;
                        }
                    }
                }
            }
        })
        this.scrollViewBuyCar.children[1].children[1].on(cc.Node.EventType.TOUCH_END, () => {
            var b2 = this.scrollViewBuyCar.children[1].children[1].children[0].getComponent(cc.Label).string
            var carPositionStillNull = this.JudgeCarPositionIfNull()
            //第五辆车 解锁第三辆购买权(滚动试图中的第二辆)
            if (carArrSprite[4].active === true) {
                if (carPositionStillNull && window.coinTotalLabel >= b2) {
                    coin3 += 1;
                    window.coinTotalLabel -= Math.round(1500 + 1500 * 1.2 * coin3);
                    this.scrollViewBuyCar.children[1].children[1].children[0].getComponent(cc.Label).string = Math.round(1500 + 1500 * 1.2 * (coin3 + 1))

                    for (let i = 0; i < carArray.length; i++) {
                        if (carArray[i].active === false) {
                            cc.loader.loadRes('3', cc.SpriteFrame, function (err, spriteFrame) {
                                carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                            })
                            carArray[i].active = true;
                            break;
                        }
                    }
                }
            }
        })
        this.scrollViewBuyCar.children[2].children[1].on(cc.Node.EventType.TOUCH_END, () => {

            var b3 = this.scrollViewBuyCar.children[2].children[1].children[0].getComponent(cc.Label).string
            var carPositionStillNull = this.JudgeCarPositionIfNull()
            //判断玩家池为空 且金额足够
            //解锁六级车辆  可以购买滚动窗口中第三辆车(第四种车辆)
            if (carArrSprite[5].active === true) {
                if (carPositionStillNull && window.coinTotalLabel >= b3) {
                    coin4 += 1;
                    window.coinTotalLabel -= Math.round(3000 + 3000 * 1.25 * coin4);
                    this.scrollViewBuyCar.children[2].children[1].children[0].getComponent(cc.Label).string = Math.round(3000 + 3000 * 1.25 * (coin4 + 1));

                    for (let i = 0; i < carArray.length; i++) {
                        if (carArray[i].active === false) {
                            cc.loader.loadRes('4', cc.SpriteFrame, function (err, spriteFrame) {
                                carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                            })
                            carArray[i].active = true;
                            break;
                        }
                    }
                }
            }
        })
        this.scrollViewBuyCar.children[3].children[1].on(cc.Node.EventType.TOUCH_END, () => {

            var b4 = this.scrollViewBuyCar.children[3].children[1].children[0].getComponent(cc.Label).string
            var carPositionStillNull = this.JudgeCarPositionIfNull()
            //判断玩家池为空 且金额足够
            if (carArrSprite[6].active === true) {
                if (carPositionStillNull && window.coinTotalLabel >= b4) {
                    coin5 += 1;
                    window.coinTotalLabel -= Math.round(5000 + 5000 * 1.3 * coin5);
                    this.scrollViewBuyCar.children[3].children[1].children[0].getComponent(cc.Label).string = Math.round(5000 + 5000 * 1.3 * (coin5 + 1))

                    for (let i = 0; i < carArray.length; i++) {
                        if (carArray[i].active === false) {
                            cc.loader.loadRes('5', cc.SpriteFrame, function (err, spriteFrame) {
                                carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                            })
                            carArray[i].active = true;
                            break;
                        }
                    }
                }
            }
        })
        this.scrollViewBuyCar.children[4].children[1].on(cc.Node.EventType.TOUCH_END, () => {

            var b5 = this.scrollViewBuyCar.children[4].children[1].children[0].getComponent(cc.Label).string
            var carPositionStillNull = this.JudgeCarPositionIfNull()
            //判断玩家池为空 且金额足够
            if (carArrSprite[7].active === true) {
                if (carPositionStillNull && window.coinTotalLabel >= b5) {
                    coin6 += 1;
                    window.coinTotalLabel -= Math.round(7500 + 7500 * 1.4 * coin6);
                    this.scrollViewBuyCar.children[4].children[1].children[0].getComponent(cc.Label).string = Math.round(7500 + 7500 * 1.4 * (coin6 + 1))

                    for (let i = 0; i < carArray.length; i++) {
                        if (carArray[i].active === false) {
                            cc.loader.loadRes('6', cc.SpriteFrame, function (err, spriteFrame) {
                                carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                            })
                            carArray[i].active = true;
                            break;
                        }
                    }
                }
            }
        })
        this.scrollViewBuyCar.children[5].children[1].on(cc.Node.EventType.TOUCH_END, () => {

            var b6 = this.scrollViewBuyCar.children[5].children[1].children[0].getComponent(cc.Label).string
            var carPositionStillNull = this.JudgeCarPositionIfNull()
            //判断玩家池为空 且金额足够
            if (carArrSprite[8].active === true) {
                if (carPositionStillNull && window.coinTotalLabel >= b6) {
                    coin7 += 1;
                    window.coinTotalLabel -= Math.round(12500 + 12500 * 1.5 * coin7);
                    this.scrollViewBuyCar.children[5].children[1].children[0].getComponent(cc.Label).string = Math.round(12500 + 12500 * 1.5 * (coin7 + 1))

                    for (let i = 0; i < carArray.length; i++) {
                        if (carArray[i].active === false) {
                            cc.loader.loadRes('7', cc.SpriteFrame, function (err, spriteFrame) {
                                carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                            })
                            carArray[i].active = true;
                            break;
                        }
                    }
                }
            }
        })
        this.scrollViewBuyCar.children[6].children[1].on(cc.Node.EventType.TOUCH_END, () => {

            var b7 = this.scrollViewBuyCar.children[6].children[1].children[0].getComponent(cc.Label).string
            var carPositionStillNull = this.JudgeCarPositionIfNull()
            //判断玩家池为空 且金额足够
            if (carArrSprite[9].active === true) {
                buyNine++//购买八级赛车次数，8次时解锁九级购买权
                if (carPositionStillNull && window.coinTotalLabel >= b7) {
                    coin8 += 1;
                    window.coinTotalLabel -= Math.round(17000 + 17000 * 1.6 * coin8);
                    this.scrollViewBuyCar.children[6].children[1].children[0].getComponent(cc.Label).string = Math.round(17000 + 17000 * 1.6 * (coin8 + 1))

                    for (let i = 0; i < carArray.length; i++) {
                        if (carArray[i].active === false) {
                            cc.loader.loadRes('8', cc.SpriteFrame, function (err, spriteFrame) {
                                carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                            })
                            carArray[i].active = true;
                            break;
                        }
                    }
                }
            }
        })
        this.scrollViewBuyCar.children[7].children[1].on(cc.Node.EventType.TOUCH_END, () => {

            var b8 = this.scrollViewBuyCar.children[7].children[1].children[0].getComponent(cc.Label).string
            var carPositionStillNull = this.JudgeCarPositionIfNull()
            //判断玩家池为空 且金额足够
            //够了八辆或以上八级车辆  即可购买九级车辆
            if (buyNine >= 8) {
                if (carPositionStillNull && window.coinTotalLabel >= b8) {
                    coin9 += 1;
                    window.coinTotalLabel -= Math.round(25000 + 25000 * 1.8 * coin9);
                    this.scrollViewBuyCar.children[7].children[1].children[0].getComponent(cc.Label).string = Math.round(25000 + 25000 * 1.8 * (coin9 + 1))

                    for (let i = 0; i < carArray.length; i++) {
                        if (carArray[i].active === false) {
                            cc.loader.loadRes('9', cc.SpriteFrame, function (err, spriteFrame) {
                                carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                            })
                            carArray[i].active = true;
                            break;
                        }
                    }
                }
            }
        })
    },



});
