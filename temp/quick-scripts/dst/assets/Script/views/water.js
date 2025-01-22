
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/views/water.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx2aWV3c1xcd2F0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUErRixFQUFFLENBQUMsVUFBVSxFQUExRyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxpQkFBaUIsdUJBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxjQUFjLG9CQUFrQixDQUFDO0FBUW5ILElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQztBQUV0QixJQUFLLFVBTUo7QUFORCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osVUFBVTtJQUNWLHVDQUFFLENBQUE7SUFDRixVQUFVO0lBQ1YseUNBQUcsQ0FBQTtBQUNQLENBQUMsRUFOSSxVQUFVLEtBQVYsVUFBVSxRQU1kO0FBT0Q7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUF3VUM7UUF2VVcsYUFBTyxHQUFjLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDckMsV0FBSyxHQUFlLEVBQUUsQ0FBQztRQUMvQixhQUFhO1FBQ0wsYUFBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLGFBQWE7UUFDTCxZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLFdBQVc7UUFDSCxZQUFNLEdBQVUsQ0FBQyxDQUFDO1FBRWxCLFlBQU0sR0FBa0IsSUFBSSxDQUFDO1FBQ25CLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBVWpDLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBc0I3QixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBV2QsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFNNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFzTTNCLFNBQUcsR0FBVyxJQUFJLENBQUM7O0lBb0UvQixDQUFDO0lBMVRHLHNCQUFXLDRCQUFTO2FBQXBCLGNBQXlCLE9BQU8sSUFBSSxD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QUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBNVREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7eUNBQ1k7SUFDM0I7UUFBVCxRQUFROzZDQUFnQztJQUV6QztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksTUFBTSxFQUFFLENBQUM7MENBQ1U7SUFkakMsS0FBSztRQUx6QixPQUFPO1FBQ1AsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUMzQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztPQUNBLEtBQUssQ0F3VXpCO0lBQUQsWUFBQztDQXhVRCxBQXdVQyxDQXhVa0MsRUFBRSxDQUFDLFNBQVMsR0F3VTlDO2tCQXhVb0IsS0FBSztBQTBVMUIsU0FBUyxZQUFZLENBQUMsS0FBWTtJQUM5QixPQUFNLEtBQUssR0FBQyxHQUFHLEVBQUM7UUFDWixLQUFLLElBQUUsR0FBRyxDQUFDO0tBQ2Q7SUFDRCxPQUFNLEtBQUssR0FBQyxDQUFDLEdBQUcsRUFBQztRQUNiLEtBQUssSUFBRSxHQUFHLENBQUM7S0FDZDtJQUNELE9BQU8sQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7QUFDekMsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLE1BQWE7SUFDL0IsT0FBTyxNQUFNLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUM7QUFDOUIsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCByZXF1aXJlQ29tcG9uZW50LCBleGVjdXRlSW5FZGl0TW9kZSwgZGlzYWxsb3dNdWx0aXBsZSwgZXhlY3V0aW9uT3JkZXIgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdhdGVySW5mb3tcclxuICAgIGNvbG9ySWQ6bnVtYmVyLFxyXG4gICAgY29sb3I6Y2MuQ29sb3IsLy/popzoibJcclxuICAgIGhlaWdodDpudW1iZXIsLy/pu5jorqTmg4XlhrXkuIvvvIzljaDmna/lrZDnmoTpq5jluqZcclxufVxyXG5cclxuY29uc3QgTUFYX0FSUl9MRU4gPSA2O1xyXG5cclxuZW51bSBQb3VyQWN0aW9ue1xyXG4gICAgbm9uZSxcclxuICAgIC8qKuW+gOmHjOWKoOawtCAqL1xyXG4gICAgaW4sXHJcbiAgICAvKirlkJHlpJblgJLmsLQgKi9cclxuICAgIG91dCxcclxufVxyXG5cclxuQGNjY2xhc3NcclxuQHJlcXVpcmVDb21wb25lbnQoY2MuU3ByaXRlKVxyXG5AZXhlY3V0ZUluRWRpdE1vZGVcclxuQGRpc2FsbG93TXVsdGlwbGVcclxuQGV4ZWN1dGlvbk9yZGVyKC0xMDApXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhdGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX2FjdGlvbjpQb3VyQWN0aW9uID0gUG91ckFjdGlvbi5ub25lO1xyXG4gICAgcHJpdmF0ZSBpbmZvczpXYXRlckluZm9bXSA9IFtdO1xyXG4gICAgLyoq5Yiw6L+Z6YeM5YGc5q2i5YCS5rC0ICovXHJcbiAgICBwcml2YXRlIHN0b3BJZHggPSAtMTtcclxuICAgIC8qKuW9k+WJjeaYr+acieWHoOWxguawtCAqL1xyXG4gICAgcHJpdmF0ZSBjdXJJZHggPSAwO1xyXG5cclxuICAgIC8qKuiKgueCuemrmOWuveavlCAqL1xyXG4gICAgcHJpdmF0ZSBfcmF0aW86bnVtYmVyID0gMTtcclxuICAgIEBwcm9wZXJ0eShjYy5FZmZlY3RBc3NldClcclxuICAgIHByaXZhdGUgZWZmZWN0OmNjLkVmZmVjdEFzc2V0ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSBwcml2YXRlIF9za2V3QW5nbGU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBDQ19ERVYgJiYgJ+aXi+i9rOinkuW6picgfSlcclxuICAgIHB1YmxpYyBnZXQgc2tld0FuZ2xlKCkgeyByZXR1cm4gdGhpcy5fc2tld0FuZ2xlOyB9XHJcbiAgICBwdWJsaWMgc2V0IHNrZXdBbmdsZSh2YWx1ZTogbnVtYmVyKSB7IFxyXG4gICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSoxMDApLzEwMDtcclxuICAgICAgICAvLyBjYy5sb2coXCJhbmdsZVwiLHZhbHVlKVxyXG4gICAgICAgIHRoaXMuX3NrZXdBbmdsZSA9IHZhbHVlOyBcclxuICAgICAgICB0aGlzLnVwZGF0ZUFuZ2xlSGVpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYXRlcmlhbDogY2MuTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgbGV0IHNwID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIGlmIChzcC5zcHJpdGVGcmFtZSkgc3Auc3ByaXRlRnJhbWUuZ2V0VGV4dHVyZSgpLnBhY2thYmxlID0gZmFsc2U7XHJcbiAgICAgICAgLy8g55Sf5oiQ5bm25bqU55So5p2Q6LSoXHJcbiAgICAgICAgaWYodGhpcy5lZmZlY3Qpe1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gY2MuTWF0ZXJpYWwuY3JlYXRlKHRoaXMuZWZmZWN0KTtcclxuICAgICAgICAgICAgc3Auc2V0TWF0ZXJpYWwoMCwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSBzcC5nZXRNYXRlcmlhbCgwKVxyXG4gICAgICAgIHRoaXMuX3JhdGlvID0gdGhpcy5ub2RlLmhlaWdodC90aGlzLm5vZGUud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRJbmZvcyhpbmZvczpBcnJheTxXYXRlckluZm8+KXtcclxuICAgICAgICB0aGlzLmluZm9zID0gaW5mb3M7XHJcbiAgICAgICAgdGhpcy5jdXJJZHggPSB0aGlzLmluZm9zLmxlbmd0aC0xO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRTaXplQ29sb3IoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFuZ2xlSGVpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRIZWlnaHQgPSAwO1xyXG4gICAgcHVibGljIGFkZEluZm8oaW5mbzpXYXRlckluZm8pe1xyXG4gICAgICAgIHRoaXMuYWRkSGVpZ2h0ID0gaW5mby5oZWlnaHQ7XHJcbiAgICAgICAgaW5mby5oZWlnaHQgPSAwO1xyXG4gICAgICAgIHRoaXMuaW5mb3MucHVzaChpbmZvKTtcclxuICAgICAgICB0aGlzLl9hY3Rpb24gPSBQb3VyQWN0aW9uLmluO1xyXG4gICAgICAgIHRoaXMuY3VySWR4ID0gdGhpcy5pbmZvcy5sZW5ndGgtMTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0U2l6ZUNvbG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk91dFN0YXJ0OkZ1bmN0aW9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgb25PdXRGaW5pc2g6RnVuY3Rpb24gPSBudWxsO1xyXG4gICAgcHVibGljIHNldFBvdXJPdXRDYWxsYmFjayhvbk91dFN0YXJ0OkZ1bmN0aW9uLG9uT3V0RmluaXNoOkZ1bmN0aW9uKXtcclxuICAgICAgICB0aGlzLm9uT3V0U3RhcnQgPSBvbk91dFN0YXJ0O1xyXG4gICAgICAgIHRoaXMub25PdXRGaW5pc2ggPSBvbk91dEZpbmlzaDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uSW5GSW5pc2g6RnVuY3Rpb24gPSBudWxsO1xyXG4gICAgcHVibGljIHNldFBvdXJJbkNhbGxiYWNrKG9uSW5GSW5pc2g6RnVuY3Rpb24pe1xyXG4gICAgICAgIHRoaXMub25JbkZJbmlzaCA9IG9uSW5GSW5pc2g7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgL7mlpzliLDlk6rkuKrop5LluqblvIDlp4vlvoDlpJbovrnlgJLmsLRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFBvdXJTdGFydEFuZ2xlKCl7XHJcbiAgICAgICAgbGV0IF9oZWlnaHQgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8PXRoaXMuY3VySWR4O2krKyl7XHJcbiAgICAgICAgICAgIF9oZWlnaHQrPXRoaXMuaW5mb3NbaV0uaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDcml0aWNhbEFuZ2xlV2l0aEhlaWdodChfaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWAvuaWnOWIsOWTquS4quinkuW6puW8gOWni+WBnOatouWAkuawtO+8iOW9k+WJjeminOiJsueahOawtOWAkuWujOS6hu+8iVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UG91ckVuZEFuZ2xlKCl7XHJcbiAgICAgICAgdGhpcy5zdG9wSWR4ID0gdGhpcy5jdXJJZHgtdGhpcy5nZXRUb3BTYW1lQ29sb3JOdW0oKTtcclxuXHJcbiAgICAgICAgbGV0IF9oZWlnaHQgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8PXRoaXMuc3RvcElkeDtpKyspe1xyXG4gICAgICAgICAgICBfaGVpZ2h0Kz10aGlzLmluZm9zW2ldLmhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q3JpdGljYWxBbmdsZVdpdGhIZWlnaHQoX2hlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+W5p+Q5LiA6auY5bqm55qE5rC05Yia5aW956Kw5Yiw55O25Y+j55qE5Li055WM5YC+5pac6KeS5bqmICovXHJcbiAgICBwcml2YXRlIGdldENyaXRpY2FsQW5nbGVXaXRoSGVpZ2h0KF9oZWlnaHQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCByZXQgPSAwO1xyXG4gICAgICAgIGlmKF9oZWlnaHQ9PTApe1xyXG4gICAgICAgICAgICByZXQgPSA5MDtcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKF9oZWlnaHQ8MC41KXsvL+awtOeahOS9k+enr+Wwj+S6juadr+WtkOeahOS4gOWNiizlhYjnorDliLDkuIvnk7blupVcclxuICAgICAgICAgICAgbGV0IHRhblZhbCA9IHRoaXMuX3JhdGlvLyhfaGVpZ2h0KjIuMCk7XHJcbiAgICAgICAgICAgIHJldCA9IE1hdGguYXRhbih0YW5WYWwpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgdGFuVmFsID0gMi4wKnRoaXMuX3JhdGlvKigxLjAtX2hlaWdodCk7IFxyXG4gICAgICAgICAgICByZXQgPSBNYXRoLmF0YW4odGFuVmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0ID0gcmFkaWFuMmFuZ2xlKHJldCk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRvcFNhbWVDb2xvck51bSgpe1xyXG4gICAgICAgIGxldCBzYW1lQ29sb3JOdW0gPSAwO1xyXG4gICAgICAgIGxldCBjb2xvcklkPW51bGw7XHJcbiAgICAgICAgZm9yKGxldCBpPXRoaXMuY3VySWR4O2k+PTA7aS0tKXtcclxuICAgICAgICAgICAgaWYoY29sb3JJZD09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzYW1lQ29sb3JOdW0rKztcclxuICAgICAgICAgICAgICAgIGNvbG9ySWQgPSB0aGlzLmluZm9zW2ldLmNvbG9ySWQ7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuaW5mb3NbaV0uY29sb3JJZD09Y29sb3JJZCl7XHJcbiAgICAgICAgICAgICAgICBzYW1lQ29sb3JOdW0rKztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2FtZUNvbG9yTnVtXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4vlgJLmsLRcclxuICAgICAqIOS4gOebtOWAkuawtOebtOWIsOS4jeWQjOminOiJsueahOawtOWIsOi+vueTtuWPo++8jOS4uuW9k+WJjeacgOWkp+iDveWAvuaWnOeahOinkuW6plxyXG4gICAgICogQHJldHVybnMg6L+U5Zue5YC85Li65YC+5pac6KeS5bqm55qE57ud5a+55YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvblN0YXJ0UG91cigpe1xyXG4gICAgICAgIHRoaXMuX2FjdGlvbiA9IFBvdXJBY3Rpb24ub3V0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RvcElkeCA9IHRoaXMuY3VySWR4LXRoaXMuZ2V0VG9wU2FtZUNvbG9yTnVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgaWYodGhpcy5fYWN0aW9uPT1Qb3VyQWN0aW9uLm91dCl7XHJcbiAgICAgICAgICAgIHRoaXMucG91clN0ZXAoKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLl9hY3Rpb249PVBvdXJBY3Rpb24uaW4pe1xyXG4gICAgICAgICAgICB0aGlzLmFkZFN0ZXAoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOavj+W4p+iwg+eUqO+8jOWNh+mrmOawtOmdoumrmOW6plxyXG4gICAgICovXHJcbiAgICBhZGRTdGVwKCl7XHJcbiAgICAgICAgaWYodGhpcy5jdXJJZHg8MCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGluZm8gPSB0aGlzLmluZm9zW3RoaXMuY3VySWR4XTtcclxuICAgICAgICBpbmZvLmhlaWdodCA9IE1hdGgucm91bmQoKGluZm8uaGVpZ2h0ICsgMC4wMDUpKjEwMDApLzEwMDA7XHJcbiAgICAgICAgLy8gY2MubG9nKFwiLS0tLS0tLS1pbmZvLmhlaWdodFwiLGluZm8uaGVpZ2h0KVxyXG4gICAgICAgIGlmKGluZm8uaGVpZ2h0Pj10aGlzLmFkZEhlaWdodCl7XHJcbiAgICAgICAgICAgIGluZm8uaGVpZ2h0ID0gdGhpcy5hZGRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbiA9IFBvdXJBY3Rpb24ubm9uZTtcclxuICAgICAgICAgICAgaWYodGhpcy5vbkluRkluaXNoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub25JbkZJbmlzaCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkluRkluaXNoID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVBbmdsZUhlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKiDmr4/luKfosIPnlKhcclxuICAgICAqICog6ZmN5L2O5rC06Z2i6auY5bqmIFxyXG4gICAgICovXHJcbiAgICBwb3VyU3RlcCgpe1xyXG4gICAgICAgIGlmKHRoaXMuY3VySWR4PDApe1xyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb24gPSBQb3VyQWN0aW9uLm5vbmU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IF9oZWlnaHQgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8PXRoaXMuY3VySWR4O2krKyl7XHJcbiAgICAgICAgICAgIF9oZWlnaHQrPXRoaXMuaW5mb3NbaV0uaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaXNfdG9wID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gKHRoaXMuc2tld0FuZ2xlJTM2MCkgKiBNYXRoLlBJIC8gMTgwLjBcclxuICAgICAgICBsZXQgX3QgPSBNYXRoLmFicyhNYXRoLnRhbihhbmdsZSkpO1xyXG4gICAgICAgIGlmKF9oZWlnaHQ8MC41KXsvL+awtOeahOS9k+enr+Wwj+S6juadr+WtkOeahOS4gOWNiizlhYjnorDliLDkuIvnk7blupVcclxuICAgICAgICAgICAgaXNfdG9wID0gX3Q+KHRoaXMuX3JhdGlvKS8oX2hlaWdodCoyLjApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpc190b3AgPSBfdD4yLjAqdGhpcy5fcmF0aW8qKDEuMC1faGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5pbmZvc1t0aGlzLmN1cklkeF07XHJcbiAgICAgICAgaWYoIWlzX3RvcCl7Ly/msqHliLDnk7blj6PvvIzkuI3lvoDkuIvlgJJcclxuICAgICAgICAgICAgaWYoaW5mby5oZWlnaHQ8MC4wNSl7Ly/lj6/og73ov5jnlZnkuobkuIDngrnngrnmsLQs6KaB57un57ut5YCS5Ye65Y67XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5vbk91dFN0YXJ0KXtcclxuICAgICAgICAgICAgdGhpcy5vbk91dFN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMub25PdXRTdGFydCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGluZm8uaGVpZ2h0ID0gTWF0aC5yb3VuZCgoaW5mby5oZWlnaHQgLSAwLjAwNSkqMTAwMCkvMTAwMDtcclxuICAgICAgICBpZihpbmZvLmhlaWdodDwwLjAxKXtcclxuICAgICAgICAgICAgaW5mby5oZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pbmZvcy5wb3AoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJJZHgtLTtcclxuICAgICAgICAgICAgLy8gY2MubG9nKFwiLS0tLS0tdGhpcy5jdXJJZHhcIix0aGlzLmN1cklkeCx0aGlzLnN0b3BJZHgpXHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VySWR4PT10aGlzLnN0b3BJZHgpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5vbk91dEZpbmlzaCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk91dEZpbmlzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25PdXRGaW5pc2ggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aW9uID0gUG91ckFjdGlvbi5ub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNjLmxvZyhcInRoaXMuY3VySWR4XCIsdGhpcy5jdXJJZHgsXCJpbmZvLmhlaWdodFwiLGluZm8uaGVpZ2h0LnRvRml4ZWQoMiksXCJhbmdsZVwiLHRoaXMuc2tld0FuZ2xlLnRvRml4ZWQoMikpXHJcbiAgICAgICAgdGhpcy51cGRhdGVBbmdsZUhlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFNpemVDb2xvcigpe1xyXG4gICAgICAgIGxldCBfY29sb3JzID0gbmV3IEZsb2F0MzJBcnJheShNQVhfQVJSX0xFTio0KTsvL+aVsOe7hOWPquaUr+aMgeS4gOe7tOaVsOe7hFxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5pbmZvcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmluZm9zW2ldLmNvbG9yO1xyXG4gICAgICAgICAgICBfY29sb3JzW2kqNF0gPSBjb2xvci5yLzI1NTtcclxuICAgICAgICAgICAgX2NvbG9yc1tpKjQrMV0gPSBjb2xvci5nLzI1NTtcclxuICAgICAgICAgICAgX2NvbG9yc1tpKjQrMl0gPSBjb2xvci5iLzI1NTtcclxuICAgICAgICAgICAgX2NvbG9yc1tpKjQrM10gPSAxLjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwuc2V0UHJvcGVydHkoJ2NvbG9ycycsIF9jb2xvcnMpOy8v5pWw57uE5Y+q5pSv5oyB5LiA57u05pWw57uEXHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbC5zZXRQcm9wZXJ0eSgnaVJlc29sdXRpb24nLCBjYy52Mih0aGlzLm5vZGUud2lkdGgsdGhpcy5ub2RlLmhlaWdodCkpO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3dhdmVUeXBlJywgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVBbmdsZUhlaWdodCgpIHtcclxuICAgICAgICBsZXQgX2hlaWdodHMgPSBuZXcgRmxvYXQzMkFycmF5KE1BWF9BUlJfTEVOKjQpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5pbmZvcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgX2hlaWdodHNbaSo0XSA9IHRoaXMuaW5mb3NbaV0uaGVpZ2h0O1xyXG4gICAgICAgICAgICBfaGVpZ2h0c1tpKjQrMV0gPSAwO1xyXG4gICAgICAgICAgICBfaGVpZ2h0c1tpKjQrMl0gPSAwO1xyXG4gICAgICAgICAgICBfaGVpZ2h0c1tpKjQrM10gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1hdGVyaWFsLnNldFByb3BlcnR5KCdoZWlnaHRzJywgX2hlaWdodHMpO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3NrZXdBbmdsZScsIHRoaXMuX3NrZXdBbmdsZSk7XHJcblxyXG4gICAgICAgIGxldCB3YXZlVHlwZSA9IDAuMDtcclxuICAgICAgICBpZih0aGlzLl9hY3Rpb249PVBvdXJBY3Rpb24uaW4pe1xyXG4gICAgICAgICAgICB3YXZlVHlwZSA9IDEuMDtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLl9hY3Rpb249PVBvdXJBY3Rpb24ub3V0KXtcclxuICAgICAgICAgICAgd2F2ZVR5cGUgPSAyLjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3dhdmVUeXBlJywgd2F2ZVR5cGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMuc2hvd0RlYnVnQ2VudGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkb3Q6Y2MuTm9kZSA9IG51bGw7XHJcbiAgICAvKirmmL7npLrmsLTpnaLnmoTkuK3lv4PngrnvvIzosIPor5VzaGFkZXLohJrmnKznlKggKi9cclxuICAgIHByaXZhdGUgc2hvd0RlYnVnQ2VudGVyKCl7XHJcbiAgICAgICAgaWYoQ0NfRURJVE9SKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmRvdD09bnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuZG90ID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5kb3QucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLmRvdC5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIsK3XCI7XHJcbiAgICAgICAgICAgIGxhYmVsLmZvbnRTaXplID0gNjA7XHJcbiAgICAgICAgICAgIHRoaXMuZG90LmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJhdGlvID0gdGhpcy5ub2RlLmhlaWdodC90aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gYW5nbGUycmFkaWFuKHRoaXMuc2tld0FuZ2xlKTtcclxuICAgICAgICBsZXQgX2hlaWdodCA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTw9dGhpcy5jdXJJZHg7aSsrKXtcclxuICAgICAgICAgICAgX2hlaWdodCs9dGhpcy5pbmZvc1tpXS5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB0b0xlZnQgPSBNYXRoLnNpbihhbmdsZSk+PTAuMDtcclxuICAgICAgICBsZXQgY2VudGVyID0gY2MudjIoMC41LDEuMC1faGVpZ2h0KTsvL+awtOmdouWAvuaWnOaXtu+8jOS7peWTquS4quW6l+S4uuS4reW/g+W6l1xyXG5cclxuICAgICAgICBsZXQgX3QgPSBNYXRoLmFicyhNYXRoLnRhbihhbmdsZSkpO1xyXG4gICAgICAgIGlmKF9oZWlnaHQ8PTAuNSl7Ly/msLTnmoTkvZPnp6/lsI/kuo7mna/lrZDnmoTkuIDljYos5YWI56Kw5Yiw5LiL55O25bqVXHJcbiAgICAgICAgICAgIGxldCBpc19ib3R0b20gPSBfdD5yYXRpbyoyLjAqX2hlaWdodDsvL+WAvuaWnOinkuW6pui+vuWIsOeTtuW6lVxyXG4gICAgICAgICAgICBpZihpc19ib3R0b20pe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyLnggPSBNYXRoLnNxcnQoKDIuMCpfaGVpZ2h0L190KSpyYXRpbykvMi4wO1xyXG4gICAgICAgICAgICAgICAgY2VudGVyLnkgPSAxLjAgLSBNYXRoLnNxcnQoKDIuMCpfaGVpZ2h0Kl90KS9yYXRpbykvMi4wO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpc190b3AgPSBfdD4ocmF0aW8pLyhfaGVpZ2h0KjIuMCk7Ly/lgL7mlpzop5Lluqbovr7liLDnk7blj6NcclxuICAgICAgICAgICAgICAgIGlmKGlzX3RvcCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyLnkgPSAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyLnggPSBfaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCF0b0xlZnQpe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyLnggPSAxLjAtY2VudGVyLng7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoTWF0aC5hYnMoY2VudGVyLngtMC4yNSk8MC4wMSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2MubG9nKFwiYWEtLS0tLS0tY2VudGVyXCIsY2VudGVyLngudG9GaXhlZCgyKSxjZW50ZXIueS50b0ZpeGVkKDIpKTtcclxuICAgICAgICB9ZWxzZXsvL+awtOavlOi+g+Wkmu+8jOWFiOeisOWIsOS4iueTtuW6lVxyXG4gICAgICAgICAgICBsZXQgaXNfdG9wID0gX3Q+Mi4wKnJhdGlvKigxLjAtX2hlaWdodCk7XHJcbiAgICAgICAgICAgIGlmKGlzX3RvcCl7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXIueCA9IE1hdGguc3FydCgyLjAqcmF0aW8qKDEuMC1faGVpZ2h0KS9fdCkvMi4wO1xyXG4gICAgICAgICAgICAgICAgY2VudGVyLnkgPSBNYXRoLnNxcnQoMi4wKnJhdGlvKigxLjAtX2hlaWdodCkqX3QpLzIuMC9yYXRpbztcclxuICAgICAgICAgICAgICAgIGxldCBpc19ib3R0b20gPSBfdD5yYXRpby8oMi4wKigxLjAtX2hlaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgaWYoaXNfYm90dG9tKXtcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXIueSA9IDAuNTtcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXIueCA9IDEuMC1faGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodG9MZWZ0KXtcclxuICAgICAgICAgICAgICAgIGNlbnRlci54ID0gMS4wLWNlbnRlci54O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcImJiLS0tLS0tLWNlbnRlclwiLGNlbnRlci54LnRvRml4ZWQoMiksY2VudGVyLnkudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNlbnRlci54ID0gY2VudGVyLnggLSAwLjU7XHJcbiAgICAgICAgY2VudGVyLnkgPSAtY2VudGVyLnkgKyAwLjU7XHJcbiAgICAgICAgbGV0IHB0ID0gY2MudjMoY2VudGVyLngqdGhpcy5ub2RlLndpZHRoLGNlbnRlci55KnRoaXMubm9kZS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuZG90LnBvc2l0aW9uID0gcHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuZ2xlMnJhZGlhbihhbmdsZTpudW1iZXIpe1xyXG4gICAgd2hpbGUoYW5nbGU+MzYwKXtcclxuICAgICAgICBhbmdsZS09MzYwO1xyXG4gICAgfVxyXG4gICAgd2hpbGUoYW5nbGU8LTM2MCl7XHJcbiAgICAgICAgYW5nbGUrPTM2MDtcclxuICAgIH1cclxuICAgIHJldHVybiAoYW5nbGUlMzYwKSAqIE1hdGguUEkgLyAxODAuMDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFkaWFuMmFuZ2xlKHJhZGlhbjpudW1iZXIpIHtcclxuICAgIHJldHVybiByYWRpYW4vTWF0aC5QSSoxODA7XHJcbn0iXX0=