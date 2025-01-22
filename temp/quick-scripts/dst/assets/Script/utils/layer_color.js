
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/utils/layer_color.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx1dGlsc1xcbGF5ZXJfY29sb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsdUNBQW9EO0FBRXBEO0lBQWdDLDhCQUFPO0lBRW5DLG9CQUFZLEtBQTZCO1FBQTdCLHNCQUFBLEVBQUEsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO1FBQXpDLFlBQ0ksaUJBQU8sU0FJVjtRQU5PLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHNUIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxLQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxpQ0FBc0IsRUFBRSxDQUFDO1FBQ25ELEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztJQUN2QixDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLElBQVcsRUFBQyxPQUFjLEVBQUMsV0FBa0I7UUFBbEIsNEJBQUEsRUFBQSxrQkFBa0I7UUFDaEQsSUFBRyxXQUFXLEVBQUM7WUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLElBQVc7UUFDZCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxJQUFXO1FBQ2YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFDTCxpQkFBQztBQUFELENBekJBLEFBeUJDLENBekIrQixFQUFFLENBQUMsSUFBSSxHQXlCdEM7QUF6QlksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIOe6r+iJsuiDjOaZr+e7hOS7tlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNvbG9yU3ByaXRlRnJhbWUgfSBmcm9tIFwiLi9mdW5jdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExheWVyQ29sb3IgZXh0ZW5kcyBjYy5Ob2Rle1xyXG4gICAgcHJpdmF0ZSBzcHJpdGU6Y2MuU3ByaXRlID0gbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKGNvbG9yID0gY2MuY29sb3IoMjU1LDI1NSwyNTUpKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gdGhpcy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IGNyZWF0ZUNvbG9yU3ByaXRlRnJhbWUoKTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZmFkZVRvKHRpbWU6bnVtYmVyLG9wYWNpdHk6bnVtYmVyLGZyb21PcGFjaXR5ID0gbnVsbCl7XHJcbiAgICAgICAgaWYoZnJvbU9wYWNpdHkpe1xyXG4gICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSBmcm9tT3BhY2l0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ydW5BY3Rpb24oY2MuZmFkZVRvKHRpbWUsb3BhY2l0eSkpXHJcbiAgICB9XHJcblxyXG4gICAgZmFkZUluKHRpbWU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5ydW5BY3Rpb24oY2MuZmFkZUluKHRpbWUpKVxyXG4gICAgfVxyXG5cclxuICAgIGZhZGVPdXQodGltZTpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnJ1bkFjdGlvbihjYy5mYWRlT3V0KHRpbWUpKVxyXG4gICAgfVxyXG59Il19