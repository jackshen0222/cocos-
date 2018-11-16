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
        cardeblock3: {
            default: null,
            type: cc.Button
        },
        cardeblock4: {
            default: null,
            type: cc.Button
        },
        cardeblock5: {
            default: null,
            type: cc.Button
        },
        cardeblock6: {
            default: null,
            type: cc.Button
        },
        cardeblock7: {
            default: null,
            type: cc.Button
        },
        cardeblock8: {
            default: null,
            type: cc.Button
        },
        cardeblock9: {
            default: null,
            type: cc.Button
        },
        cardeblock10: {
            default: null,
            type: cc.Button
        },


    },
    onLoad() {


        this.cardeblock3.node.on(cc.Node.EventType.TOUCH_END, () => {
            this.cardeblock3.node.destroy()
        })
        this.cardeblock4.node.on(cc.Node.EventType.TOUCH_END, () => {
            this.cardeblock4.node.destroy()
        })
        this.cardeblock5.node.on(cc.Node.EventType.TOUCH_END, () => {
            this.cardeblock5.node.destroy()
        })
        this.cardeblock6.node.on(cc.Node.EventType.TOUCH_END, () => {
            this.cardeblock6.node.destroy()
        })
        this.cardeblock7.node.on(cc.Node.EventType.TOUCH_END, () => {
            this.cardeblock7.node.destroy()
        })
        this.cardeblock8.node.on(cc.Node.EventType.TOUCH_END, () => {
            this.cardeblock8.node.destroy()
        })
        this.cardeblock9.node.on(cc.Node.EventType.TOUCH_END, () => {
            this.cardeblock9.node.destroy()
        })
        this.cardeblock10.node.on(cc.Node.EventType.TOUCH_END, () => {
            this.cardeblock10.node.destroy()
        })

    },

    start() {

    },

    cardeblock() {
      
        if (window.carDeblockWindow === 3) {
            var state = cc.isValid(this.cardeblock3)
            if (state==true) {
                this.cardeblock3.node.active = true
                this.cardeblock3.node.children[0].active = true
               
               
            }
        }
        if (window.carDeblockWindow === 4) {
            var state = cc.isValid(this.cardeblock4)
            if (state==true) {
                this.cardeblock4.node.active = true
                this.cardeblock4.node.children[0].active = true
                
            }
        }
        if (window.carDeblockWindow === 5) {
            var state = cc.isValid(this.cardeblock5)
            if (state==true) {
                this.cardeblock5.node.active = true
                this.cardeblock5.node.children[0].active = true
                
            }
        }
        if (window.carDeblockWindow === 6) {
            var state = cc.isValid(this.cardeblock6)
            if (state==true) {
                this.cardeblock6.node.active = true
                this.cardeblock6.node.children[0].active = true
               
            }
        }
        if (window.carDeblockWindow === 7) {
            var state = cc.isValid(this.cardeblock7)
            if (state==true) {
                this.cardeblock7.node.active = true
                this.cardeblock7.node.children[0].active = true
               
            }
        }
        if (window.carDeblockWindow === 8) {
            var state = cc.isValid(this.cardeblock8)
            if (state==true) {
                this.cardeblock8.node.active = true
                this.cardeblock8.node.children[0].active = true
               
            }
        }
        if (window.carDeblockWindow === 9) {
            var state = cc.isValid(this.cardeblock9)
            if (state==true) {
                this.cardeblock9.node.active = true
                this.cardeblock9.node.children[0].active = true
                
            }
        }
        if (window.carDeblockWindow === 10) {
            var state = cc.isValid(this.cardeblock10)
            if (state==true) {
                this.cardeblock10.node.active = true
                this.cardeblock10.node.children[0].active = true
                
            }
        }
    },

    update(dt) {
        this.cardeblock()
    },
});
