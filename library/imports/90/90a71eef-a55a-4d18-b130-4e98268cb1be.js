"use strict";
cc._RF.push(module, '90a717vpVpNGLEwTpgmjLG+', 'water');
// Script/views/water.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, executeInEditMode = _a.executeInEditMode, disallowMultiple = _a.disallowMultiple, executionOrder = _a.executionOrder;
var MAX_ARR_LEN = 6;
var PourAction;
(function (PourAction) {
    PourAction[PourAction["none"] = 0] = "none";
    /**往里加水 */
    PourAction[PourAction["in"] = 1] = "in";
    /**向外倒水 */
    PourAction[PourAction["out"] = 2] = "out";
})(PourAction || (PourAction = {}));
var Water = /** @class */ (function (_super) {
    __extends(Water, _super);
    function Water() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._action = PourAction.none;
        _this.infos = [];
        /**到这里停止倒水 */
        _this.stopIdx = -1;
        /**当前是有几层水 */
        _this.curIdx = 0;
        /**节点高宽比 */
        _this._ratio = 1;
        _this.effect = null;
        _this._skewAngle = 0;
        _this.material = null;
        _this.addHeight = 0;
        _this.onOutStart = null;
        _this.onOutFinish = null;
        _this.onInFInish = null;
        _this.dot = null;
        return _this;
    }
    Object.defineProperty(Water.prototype, "skewAngle", {
        get: function () { return this._skewAngle; },
        set: function (value) {
            value = Math.round(value * 100) / 100;
            // cc.log("angle",value)
            this._skewAngle = value;
            this.updateAngleHeight();
        },
        enumerable: false,
        configurable: true
    });
    Water.prototype.onLoad = function () {
        var sp = this.node.getComponent(cc.Sprite);
        if (sp.spriteFrame)
            sp.spriteFrame.getTexture().packable = false;
        // 生成并应用材质
        if (this.effect) {
            this.material = cc.Material.create(this.effect);
            sp.setMaterial(0, this.material);
        }
        this.material = sp.getMaterial(0);
        this._ratio = this.node.height / this.node.width;
    };
    Water.prototype.initInfos = function (infos) {
        this.infos = infos;
        this.curIdx = this.infos.length - 1;
        this.initSizeColor();
        this.updateAngleHeight();
    };
    Water.prototype.addInfo = function (info) {
        this.addHeight = info.height;
        info.height = 0;
        this.infos.push(info);
        this._action = PourAction.in;
        this.curIdx = this.infos.length - 1;
        this.initSizeColor();
    };
    Water.prototype.setPourOutCallback = function (onOutStart, onOutFinish) {
        this.onOutStart = onOutStart;
        this.onOutFinish = onOutFinish;
    };
    Water.prototype.setPourInCallback = function (onInFInish) {
        this.onInFInish = onInFInish;
    };
    /**
     * 倾斜到哪个角度开始往外边倒水
     */
    Water.prototype.getPourStartAngle = function () {
        var _height = 0;
        for (var i = 0; i <= this.curIdx; i++) {
            _height += this.infos[i].height;
        }
        return this.getCriticalAngleWithHeight(_height);
    };
    /**
     * 倾斜到哪个角度开始停止倒水（当前颜色的水倒完了）
     */
    Water.prototype.getPourEndAngle = function () {
        this.stopIdx = this.curIdx - this.getTopSameColorNum();
        var _height = 0;
        for (var i = 0; i <= this.stopIdx; i++) {
            _height += this.infos[i].height;
        }
        return this.getCriticalAngleWithHeight(_height);
    };
    /**获取某一高度的水刚好碰到瓶口的临界倾斜角度 */
    Water.prototype.getCriticalAngleWithHeight = function (_height) {
        var ret = 0;
        if (_height == 0) {
            ret = 90;
            return ret;
        }
        if (_height < 0.5) { //水的体积小于杯子的一半,先碰到下瓶底
            var tanVal = this._ratio / (_height * 2.0);
            ret = Math.atan(tanVal);
        }
        else {
            var tanVal = 2.0 * this._ratio * (1.0 - _height);
            ret = Math.atan(tanVal);
        }
        ret = radian2angle(ret);
        return ret;
    };
    Water.prototype.getTopSameColorNum = function () {
        var sameColorNum = 0;
        var colorId = null;
        for (var i = this.curIdx; i >= 0; i--) {
            if (colorId == null) {
                sameColorNum++;
                colorId = this.infos[i].colorId;
            }
            else if (this.infos[i].colorId == colorId) {
                sameColorNum++;
            }
            else {
                break;
            }
        }
        return sameColorNum;
    };
    /**
     * 开始倒水
     * 一直倒水直到不同颜色的水到达瓶口，为当前最大能倾斜的角度
     * @returns 返回值为倾斜角度的绝对值
     */
    Water.prototype.onStartPour = function () {
        this._action = PourAction.out;
        this.stopIdx = this.curIdx - this.getTopSameColorNum();
    };
    Water.prototype.update = function () {
        if (this._action == PourAction.out) {
            this.pourStep();
        }
        else if (this._action == PourAction.in) {
            this.addStep();
        }
    };
    /**
     * 每帧调用，升高水面高度
     */
    Water.prototype.addStep = function () {
        if (this.curIdx < 0) {
            return;
        }
        var info = this.infos[this.curIdx];
        info.height = Math.round((info.height + 0.005) * 1000) / 1000;
        // cc.log("--------info.height",info.height)
        if (info.height >= this.addHeight) {
            info.height = this.addHeight;
            this._action = PourAction.none;
            if (this.onInFInish) {
                this.onInFInish();
                this.onInFInish = null;
            }
        }
        this.updateAngleHeight();
    };
    /**
     * * 每帧调用
     * * 降低水面高度
     */
    Water.prototype.pourStep = function () {
        if (this.curIdx < 0) {
            this._action = PourAction.none;
            return;
        }
        var _height = 0;
        for (var i = 0; i <= this.curIdx; i++) {
            _height += this.infos[i].height;
        }
        var is_top = false;
        var angle = (this.skewAngle % 360) * Math.PI / 180.0;
        var _t = Math.abs(Math.tan(angle));
        if (_height < 0.5) { //水的体积小于杯子的一半,先碰到下瓶底
            is_top = _t > (this._ratio) / (_height * 2.0);
        }
        else {
            is_top = _t > 2.0 * this._ratio * (1.0 - _height);
        }
        var info = this.infos[this.curIdx];
        if (!is_top) { //没到瓶口，不往下倒
            if (info.height < 0.05) { //可能还留了一点点水,要继续倒出去
            }
            else {
                return;
            }
        }
        if (this.onOutStart) {
            this.onOutStart();
            this.onOutStart = null;
        }
        info.height = Math.round((info.height - 0.005) * 1000) / 1000;
        if (info.height < 0.01) {
            info.height = 0;
            this.infos.pop();
            this.curIdx--;
            // cc.log("------this.curIdx",this.curIdx,this.stopIdx)
            if (this.curIdx == this.stopIdx) {
                if (this.onOutFinish) {
                    this.onOutFinish();
                    this.onOutFinish = null;
                }
                this._action = PourAction.none;
            }
        }
        // cc.log("this.curIdx",this.curIdx,"info.height",info.height.toFixed(2),"angle",this.skewAngle.toFixed(2))
        this.updateAngleHeight();
    };
    Water.prototype.initSizeColor = function () {
        var _colors = new Float32Array(MAX_ARR_LEN * 4); //数组只支持一维数组
        for (var i = 0; i < this.infos.length; i++) {
            var color = this.infos[i].color;
            _colors[i * 4] = color.r / 255;
            _colors[i * 4 + 1] = color.g / 255;
            _colors[i * 4 + 2] = color.b / 255;
            _colors[i * 4 + 3] = 1.0;
        }
        this.material.setProperty('colors', _colors); //数组只支持一维数组
        this.material.setProperty('iResolution', cc.v2(this.node.width, this.node.height));
        this.material.setProperty('waveType', 0);
    };
    Water.prototype.updateAngleHeight = function () {
        var _heights = new Float32Array(MAX_ARR_LEN * 4);
        for (var i = 0; i < this.infos.length; i++) {
            _heights[i * 4] = this.infos[i].height;
            _heights[i * 4 + 1] = 0;
            _heights[i * 4 + 2] = 0;
            _heights[i * 4 + 3] = 0;
        }
        this.material.setProperty('heights', _heights);
        this.material.setProperty('skewAngle', this._skewAngle);
        var waveType = 0.0;
        if (this._action == PourAction.in) {
            waveType = 1.0;
        }
        else if (this._action == PourAction.out) {
            waveType = 2.0;
        }
        this.material.setProperty('waveType', waveType);
        // this.showDebugCenter();
    };
    /**显示水面的中心点，调试shader脚本用 */
    Water.prototype.showDebugCenter = function () {
        if (CC_EDITOR) {
            return;
        }
        if (this.dot == null) {
            this.dot = new cc.Node();
            this.dot.parent = this.node;
            var label = this.dot.addComponent(cc.Label);
            label.string = "·";
            label.fontSize = 60;
            this.dot.color = cc.Color.RED;
        }
        var ratio = this.node.height / this.node.width;
        var angle = angle2radian(this.skewAngle);
        var _height = 0;
        for (var i = 0; i <= this.curIdx; i++) {
            _height += this.infos[i].height;
        }
        var toLeft = Math.sin(angle) >= 0.0;
        var center = cc.v2(0.5, 1.0 - _height); //水面倾斜时，以哪个店为中心店
        var _t = Math.abs(Math.tan(angle));
        if (_height <= 0.5) { //水的体积小于杯子的一半,先碰到下瓶底
            var is_bottom = _t > ratio * 2.0 * _height; //倾斜角度达到瓶底
            if (is_bottom) {
                center.x = Math.sqrt((2.0 * _height / _t) * ratio) / 2.0;
                center.y = 1.0 - Math.sqrt((2.0 * _height * _t) / ratio) / 2.0;
                var is_top = _t > (ratio) / (_height * 2.0); //倾斜角度达到瓶口
                if (is_top) {
                    center.y = 0.5;
                    center.x = _height;
                }
            }
            if (!toLeft) {
                center.x = 1.0 - center.x;
            }
            if (Math.abs(center.x - 0.25) < 0.01) {
                var i = 0;
            }
            // cc.log("aa-------center",center.x.toFixed(2),center.y.toFixed(2));
        }
        else { //水比较多，先碰到上瓶底
            var is_top = _t > 2.0 * ratio * (1.0 - _height);
            if (is_top) {
                center.x = Math.sqrt(2.0 * ratio * (1.0 - _height) / _t) / 2.0;
                center.y = Math.sqrt(2.0 * ratio * (1.0 - _height) * _t) / 2.0 / ratio;
                var is_bottom = _t > ratio / (2.0 * (1.0 - _height));
                if (is_bottom) {
                    center.y = 0.5;
                    center.x = 1.0 - _height;
                }
            }
            else {
            }
            if (toLeft) {
                center.x = 1.0 - center.x;
            }
            // cc.log("bb-------center",center.x.toFixed(2),center.y.toFixed(2));
        }
        center.x = center.x - 0.5;
        center.y = -center.y + 0.5;
        var pt = cc.v3(center.x * this.node.width, center.y * this.node.height);
        this.dot.position = pt;
    };
    __decorate([
        property(cc.EffectAsset)
    ], Water.prototype, "effect", void 0);
    __decorate([
        property
    ], Water.prototype, "_skewAngle", void 0);
    __decorate([
        property({ tooltip: CC_DEV && '旋转角度' })
    ], Water.prototype, "skewAngle", null);
    Water = __decorate([
        ccclass,
        requireComponent(cc.Sprite),
        executeInEditMode,
        disallowMultiple,
        executionOrder(-100)
    ], Water);
    return Water;
}(cc.Component));
exports.default = Water;
function angle2radian(angle) {
    while (angle > 360) {
        angle -= 360;
    }
    while (angle < -360) {
        angle += 360;
    }
    return (angle % 360) * Math.PI / 180.0;
}
function radian2angle(radian) {
    return radian / Math.PI * 180;
}

cc._RF.pop();