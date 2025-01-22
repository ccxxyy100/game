"use strict";
cc._RF.push(module, '269c8TgMfZK57n4E5+jA2Ql', 'layer_color');
// Script/utils/layer_color.ts

"use strict";
/**
 * 纯色背景组件
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerColor = void 0;
var function_1 = require("./function");
var LayerColor = /** @class */ (function (_super) {
    __extends(LayerColor, _super);
    function LayerColor(color) {
        if (color === void 0) { color = cc.color(255, 255, 255); }
        var _this = _super.call(this) || this;
        _this.sprite = null;
        _this.sprite = _this.addComponent(cc.Sprite);
        _this.sprite.spriteFrame = function_1.createColorSpriteFrame();
        _this.color = color;
        return _this;
    }
    LayerColor.prototype.fadeTo = function (time, opacity, fromOpacity) {
        if (fromOpacity === void 0) { fromOpacity = null; }
        if (fromOpacity) {
            this.opacity = fromOpacity;
        }
        this.runAction(cc.fadeTo(time, opacity));
    };
    LayerColor.prototype.fadeIn = function (time) {
        this.stopAllActions();
        this.runAction(cc.fadeIn(time));
    };
    LayerColor.prototype.fadeOut = function (time) {
        this.stopAllActions();
        this.runAction(cc.fadeOut(time));
    };
    return LayerColor;
}(cc.Node));
exports.LayerColor = LayerColor;

cc._RF.pop();