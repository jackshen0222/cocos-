

var carArrSpriteV;
var buyNine = 0;
cc.Class({
    extends: cc.Component,

    properties: {

        //买车
        buy: {
            default: null,
            type: cc.Button,
        },
        buyMore: {
            default: null,
            type: cc.Button,
        },
        buySp1: {
            default: null,
            type: cc.Button,
        },
        buySp2: {
            default: null,
            type: cc.Button,
        },
        buySp3: {
            default: null,
            type: cc.Button,
        },
        buySp4: {
            default: null,
            type: cc.Button,
        },
        buySp5: {
            default: null,
            type: cc.Button,
        },
        buySp6: {
            default: null,
            type: cc.Button,
        },
        buySp7: {
            default: null,
            type: cc.Button,
        },
        buySp8: {
            default: null,
            type: cc.Button,
        },

        //购买车辆显示的图片
        b1Sprite: {
            default: null,
            type: cc.Sprite
        },
        b2Sprite: {
            default: null,
            type: cc.Sprite
        },
        b3Sprite: {
            default: null,
            type: cc.Sprite
        },
        b4Sprite: {
            default: null,
            type: cc.Sprite
        },
        b5Sprite: {
            default: null,
            type: cc.Sprite
        },
        b6Sprite: {
            default: null,
            type: cc.Sprite
        },
        b7Sprite: {
            default: null,
            type: cc.Sprite
        },
        b8Sprite: {
            default: null,
            type: cc.Sprite
        },




        lab1: {
            default: null,
            type: cc.Label,
        },
        lab2: {
            default: null,
            type: cc.Label,
        },
        lab3: {
            default: null,
            type: cc.Label,
        },
        lab4: {
            default: null,
            type: cc.Label,
        },
        lab5: {
            default: null,
            type: cc.Label,
        },
        lab6: {
            default: null,
            type: cc.Label,
        },
        lab7: {
            default: null,
            type: cc.Label,
        },
        lab8: {
            default: null,
            type: cc.Label,
        },
        lab9: {
            default: null,
            type: cc.Label,
        },





        //总钱
        coinTotal: {
            default: null,
            type: cc.Label,
        },
        //每秒钱
        coinSecond: {
            default: null,
            type: cc.Label
        },

        //滚动视图
        scrollNode: {
            default: null,
            type: cc.Node,
        },

    },

    onLoad() {
        cc.director.getCollisionManager().enabled = true;//开启碰撞
        this.coinTotal.string = window.coinTotalLabel//总金钱
        this.coinSecond.string = window.coinSecondLabel;//秒钱数

        this.scrollViewShowHide();
        this.buyCar();
        this.ViewEffect();

    },

    update(dt) {
        //总金钱+=秒钱数 每秒
        // window.coinTotalLabel += window.coinSecondLabel * dt / 1
        this.coinTotal.string = Math.round(window.coinTotalLabel)//取整
        this.coinSecond.string = Math.round(window.coinSecondLabel);

        this.ViewEffectUpdate();//图片复原

    },

    //初始滚动试图中的图片颜色为黑，按钮为透明
    ViewEffect: function () {
        this.b1Sprite.node.color = new cc.Color(0, 0, 0, 255);
        this.buySp1.node.opacity = 20;

        this.b2Sprite.node.color = new cc.Color(0, 0, 0, 255);
        this.buySp2.node.opacity = 20;

        this.b3Sprite.node.color = new cc.Color(0, 0, 0, 255);
        this.buySp3.node.opacity = 20;

        this.b4Sprite.node.color = new cc.Color(0, 0, 0, 255);
        this.buySp4.node.opacity = 20;

        this.b5Sprite.node.color = new cc.Color(0, 0, 0, 255);
        this.buySp5.node.opacity = 20;

        this.b6Sprite.node.color = new cc.Color(0, 0, 0, 255);
        this.buySp6.node.opacity = 20;

        this.b7Sprite.node.color = new cc.Color(0, 0, 0, 255);
        this.buySp7.node.opacity = 20;

        this.b8Sprite.node.color = new cc.Color(0, 0, 0, 255);
        this.buySp8.node.opacity = 20;
    },
    //图片复原
    ViewEffectUpdate: function () {
        //复原图片和复原按钮 为原先模样
        //第四辆车合成后，第二辆车解锁并可以购买

        // var carArrSprite = []//图片等级
        // var chi = cc.find("Canvas/carSprite").children
        // for (let i = 0; i < chi.length; i++) {
        //     carArrSprite.push(chi[i])
        // }
        // carArrSpriteV = carArrSprite

        if (carArrSpriteV[3].active === true) {
            this.b1Sprite.node.color = new cc.Color(255, 255, 255, 255);
            this.buySp1.node.opacity = 255;
        }
        if (carArrSpriteV[4].active === true) {
            this.b2Sprite.node.color = new cc.Color(255, 255, 255, 255);
            this.buySp2.node.opacity = 255;
        }
        if (carArrSpriteV[5].active === true) {
            this.b3Sprite.node.color = new cc.Color(255, 255, 255, 255);
            this.buySp3.node.opacity = 255;
        }
        if (carArrSpriteV[6].active === true) {
            this.b4Sprite.node.color = new cc.Color(255, 255, 255, 255);
            this.buySp4.node.opacity = 255;
        }
        if (carArrSpriteV[7].active === true) {
            this.b5Sprite.node.color = new cc.Color(255, 255, 255, 255);
            this.buySp5.node.opacity = 255;
        }
        if (carArrSpriteV[8].active === true) {
            this.b6Sprite.node.color = new cc.Color(255, 255, 255, 255);
            this.buySp6.node.opacity = 255;
        }
        if (carArrSpriteV[9].active === true) {
            this.b7Sprite.node.color = new cc.Color(255, 255, 255, 255);
            this.buySp7.node.opacity = 255;
        }
        if (buyNine >= 8) {
            this.b8Sprite.node.color = new cc.Color(255, 255, 255, 255);
            this.buySp8.node.opacity = 255;
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
        carArrSpriteV = carArrSprite
        var carPosition = []//车辆位置
        var chi = cc.find('Canvas/carPosition').children;
        for (let i = 0; i < chi.length; i++) {
            carPosition.push(chi[i]);
        }

        var self = this;
        var state = []
        //鼠标拖动车辆
        for (let i = 0; i < carArray.length; i++) {
            //节点停放位置 
            //触碰开始时获取当前节点位置

            carArray[i].on(cc.Node.EventType.TOUCH_START, function (event) {
                if (state) {
                    state.push("1");
                } else {
                    state = [];
                }
                if (state.length > 1) {
                    return;
                }
                carArray[i]._sourcePos = carPosition[i].position
            })
            // if (state.length == 1) {
            carArray[i].on(cc.Node.EventType.TOUCH_MOVE, function (event) {
                // console.log("touche move",cc.__carTouch.length);
                // console.log("move",state)
                if (state.length > 1) {
                    return;
                }
                cc.director.getCollisionManager().enabled = false;
                // 获取当前光标与上一光标的偏移量
                var delta = event.touch.getDelta();
                this.x += delta.x;
                this.y += delta.y;

            })
            carArray[i].on(cc.Node.EventType.TOUCH_END, function () {
                state.pop();
                cc.director.getCollisionManager().enabled = true;//拖动结束后开启碰撞

                // carArray.forEach(function (v) {//开启为了变换位置
                //     v.active = true
                // })

                self.scheduleOnce(function () {
                    carArray[i].position = carArray[i]._sourcePos;
                    // carArray.forEach(function (v) {
                    //     if (v.getComponent(cc.Sprite).spriteFrame.name === 'Money2') {
                    //         v.active = false//开碰撞完后，将没有图片的车辆隐藏
                    //     }
                    // })
                }, 0.2)
            })
            carArray[i].on(cc.Node.EventType.TOUCH_CANCEL, function () {
                state.pop();
                carArray[i].position = carArray[i]._sourcePos;

            })

        };


        //记录当前第几次购买车辆
        var coin1 = -1
        var coin2 = -1
        var coin3 = -1
        var coin4 = -1
        var coin5 = -1
        var coin6 = -1
        var coin7 = -1
        var coin8 = -1
        var coin9 = -1
        //button 购买车辆
        this.buy.node.on(cc.Node.EventType.TOUCH_END, () => {
            var b = this.lab1.string
            var buyOrOff = false
            for (let i = 0; i < carArray.length; i++) {
                if (carArray[i].active === false) {
                    buyOrOff = true
                }
            }
            //判断玩家池为空 且金额足够
            if (buyOrOff && window.coinTotalLabel >= b) {
                coin1 += 1//购买次数
                window.coinTotalLabel -= Math.round(100 + 100 * (1.1 * coin1));//购买后的溢价
                this.lab1.string = Math.round(100 + 100 * (1.1 * (coin1 + 1)))

                for (let i = 0; i < carArray.length; i++) {
                    if (carArray[i].active === false) {
                        cc.loader.loadRes('Car1', cc.SpriteFrame, function (err, spriteFrame) {
                            carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                        })
                        carArray[i].active = true;
                        break;
                    }
                }
            }

        })
        this.buySp1.node.on(cc.Node.EventType.TOUCH_END, () => {
            var b1 = this.lab2.string
            var buyOrOff = false
            for (let i = 0; i < carArray.length; i++) {
                if (carArray[i].active === false) {
                    buyOrOff = true
                }
            }
            //当合成后为第四辆车，才可以购买第二辆车
            if (carArrSprite[3].active === true) {

                if (buyOrOff && window.coinTotalLabel >= b1) {
                    coin2 += 1;
                    window.coinTotalLabel -= Math.round(500 + 500 * (1.15 * coin2))
                    this.lab2.string = Math.round(500 + 500 * (1.5 * (coin2 + 1)))

                    for (let i = 0; i < carArray.length; i++) {
                        if (carArray[i].active === false) {
                            cc.loader.loadRes('Car2', cc.SpriteFrame, function (err, spriteFrame) {
                                carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                            })
                            carArray[i].active = true;
                            break;
                        }
                    }
                }
            }
        })
        this.buySp2.node.on(cc.Node.EventType.TOUCH_END, () => {
            var b2 = this.lab3.string
            var buyOrOff = false
            for (let i = 0; i < carArray.length; i++) {
                if (carArray[i].active === false) {
                    buyOrOff = true
                }
            }
            //第五辆车 解锁第三辆购买权(滚动试图中的第二辆)
            if (carArrSprite[4].active === true) {
                if (buyOrOff && window.coinTotalLabel >= b2) {
                    coin3 += 1;
                    window.coinTotalLabel -= Math.round(1500 + 1500 * 1.2 * coin3);
                    this.lab3.string = Math.round(1500 + 1500 * 1.2 * (coin3 + 1))

                    for (let i = 0; i < carArray.length; i++) {
                        if (carArray[i].active === false) {
                            cc.loader.loadRes('Car3', cc.SpriteFrame, function (err, spriteFrame) {
                                carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                            })
                            carArray[i].active = true;
                            break;
                        }
                    }
                }
            }
        })
        this.buySp3.node.on(cc.Node.EventType.TOUCH_END, () => {
            var b3 = this.lab4.string
            var buyOrOff = false
            for (let i = 0; i < carArray.length; i++) {
                if (carArray[i].active === false) {
                    buyOrOff = true
                }
            }
            //判断玩家池为空 且金额足够
            //解锁六级车辆  可以购买滚动窗口中第三辆车(第四种车辆)
            if (carArrSprite[5].active === true) {
                if (buyOrOff && window.coinTotalLabel >= b3) {
                    coin4 += 1;
                    window.coinTotalLabel -= Math.round(3000 + 3000 * 1.25 * coin4);
                    this.lab4.string = Math.round(3000 + 3000 * 1.25 * (coin4 + 1));

                    for (let i = 0; i < carArray.length; i++) {
                        if (carArray[i].active === false) {
                            cc.loader.loadRes('Car4', cc.SpriteFrame, function (err, spriteFrame) {
                                carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                            })
                            carArray[i].active = true;
                            break;
                        }
                    }
                }
            }
        })
        this.buySp4.node.on(cc.Node.EventType.TOUCH_END, () => {
            var b4 = this.lab5.string
            var buyOrOff = false
            for (let i = 0; i < carArray.length; i++) {
                if (carArray[i].active === false) {
                    buyOrOff = true
                }
            }
            //判断玩家池为空 且金额足够
            if (carArrSprite[6].active === true) {
                if (buyOrOff && window.coinTotalLabel >= b4) {
                    coin5 += 1;
                    window.coinTotalLabel -= Math.round(5000 + 5000 * 1.3 * coin5);
                    this.lab5.string = Math.round(5000 + 5000 * 1.3 * (coin5 + 1))

                    for (let i = 0; i < carArray.length; i++) {
                        if (carArray[i].active === false) {
                            cc.loader.loadRes('Car5', cc.SpriteFrame, function (err, spriteFrame) {
                                carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                            })
                            carArray[i].active = true;
                            break;
                        }
                    }
                }
            }
        })
        this.buySp5.node.on(cc.Node.EventType.TOUCH_END, () => {
            var b5 = this.lab6.string
            var buyOrOff = false
            for (let i = 0; i < carArray.length; i++) {
                if (carArray[i].active === false) {
                    buyOrOff = true
                }
            }
            //判断玩家池为空 且金额足够
            if (carArrSprite[7].active === true) {
                if (buyOrOff && window.coinTotalLabel >= b5) {
                    coin6 += 1;
                    window.coinTotalLabel -= Math.round(7500 + 7500 * 1.4 * coin6);
                    this.lab6.string = Math.round(7500 + 7500 * 1.4 * (coin6 + 1))

                    for (let i = 0; i < carArray.length; i++) {
                        if (carArray[i].active === false) {
                            cc.loader.loadRes('Car6', cc.SpriteFrame, function (err, spriteFrame) {
                                carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                            })
                            carArray[i].active = true;
                            break;
                        }
                    }
                }
            }
        })
        this.buySp6.node.on(cc.Node.EventType.TOUCH_END, () => {
            var b6 = this.lab7.string
            var buyOrOff = false
            for (let i = 0; i < carArray.length; i++) {
                if (carArray[i].active === false) {
                    buyOrOff = true
                }
            }
            //判断玩家池为空 且金额足够
            if (carArrSprite[8].active === true) {
                if (buyOrOff && window.coinTotalLabel >= b6) {
                    coin7 += 1;
                    window.coinTotalLabel -= Math.round(12500 + 12500 * 1.5 * coin7);
                    this.lab7.string = Math.round(12500 + 12500 * 1.5 * (coin7 + 1))

                    for (let i = 0; i < carArray.length; i++) {
                        if (carArray[i].active === false) {
                            cc.loader.loadRes('Car7', cc.SpriteFrame, function (err, spriteFrame) {
                                carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                            })
                            carArray[i].active = true;
                            break;
                        }
                    }
                }
            }
        })
        this.buySp7.node.on(cc.Node.EventType.TOUCH_END, () => {
            var b7 = this.lab8.string
            var buyOrOff = false
            for (let i = 0; i < carArray.length; i++) {
                if (carArray[i].active === false) {
                    buyOrOff = true
                }
            }
            //判断玩家池为空 且金额足够
            if (carArrSprite[9].active === true) {
                buyNine++//购买八级赛车次数，8次时解锁九级购买权
                if (buyOrOff && window.coinTotalLabel >= b7) {
                    coin8 += 1;
                    window.coinTotalLabel -= Math.round(17000 + 17000 * 1.6 * coin8);
                    this.lab8.string = Math.round(17000 + 17000 * 1.6 * (coin8 + 1))

                    for (let i = 0; i < carArray.length; i++) {
                        if (carArray[i].active === false) {
                            cc.loader.loadRes('Car8', cc.SpriteFrame, function (err, spriteFrame) {
                                carArray[i].getComponent(cc.Sprite).spriteFrame = spriteFrame
                            })
                            carArray[i].active = true;
                            break;
                        }
                    }
                }
            }
        })
        this.buySp8.node.on(cc.Node.EventType.TOUCH_END, () => {
            var b8 = this.lab9.string
            var buyOrOff = false;
            for (let i = 0; i < carArray.length; i++) {
                if (carArray[i].active === false) {
                    buyOrOff = true
                }
            }
            //判断玩家池为空 且金额足够
            //够了八辆或以上八级车辆  即可购买九级车辆
            if (buyNine >= 8) {
                if (buyOrOff && window.coinTotalLabel >= b8) {
                    coin9 += 1;
                    window.coinTotalLabel -= Math.round(25000 + 25000 * 1.8 * coin9);
                    this.lab9.string = Math.round(25000 + 25000 * 1.8 * (coin9 + 1))

                    for (let i = 0; i < carArray.length; i++) {
                        if (carArray[i].active === false) {
                            cc.loader.loadRes('Car9', cc.SpriteFrame, function (err, spriteFrame) {
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
    // button 切换scrollView显示状态
    scrollViewShowHide: function () {

        var showHide = this.scrollNode;
        this.buyMore.node.on(cc.Node.EventType.TOUCH_START, () => {
            if (showHide.active === false) {
                showHide.active = true;
            }
            else if (showHide.active === true) {
                showHide.active = false
            }
        })
    },



});
