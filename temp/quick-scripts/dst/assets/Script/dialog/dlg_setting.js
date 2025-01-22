
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/dialog/dlg_setting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69e6fyb4o5IYbztjdJ/KGJy', 'dlg_setting');
// Script/dialog/dlg_setting.ts

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
exports.DlgSetting = void 0;
var base_dialog_1 = require("./base_dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DlgSetting = /** @class */ (function (_super) {
    __extends(DlgSetting, _super);
    function DlgSetting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.check_effect = null;
        _this.check_shock = null;
        return _this;
    }
    DlgSetting_1 = DlgSetting;
    DlgSetting.show = function () {
        DlgSetting_1.create("prefabs/dialog_setting");
    };
    DlgSetting.prototype.initView = function () {
    };
    DlgSetting.prototype.exitView = function (bundleData) {
    };
    DlgSetting.prototype.onToggle_effect = function () {
    };
    DlgSetting.prototype.onToggle_shock = function () {
    };
    DlgSetting.prototype.onBtn_like = function () {
    };
    DlgSetting.prototype.onBtn_hideAd = function () {
    };
    var DlgSetting_1;
    __decorate([
        property(cc.Toggle)
    ], DlgSetting.prototype, "check_effect", void 0);
    __decorate([
        property(cc.Toggle)
    ], DlgSetting.prototype, "check_shock", void 0);
    DlgSetting = DlgSetting_1 = __decorate([
        ccclass
    ], DlgSetting);
    return DlgSetting;
}(base_dialog_1.BaseDialog));
exports.DlgSetting = DlgSetting;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkaWFsb2dcXGRsZ19zZXR0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBMkM7QUFFckMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0MsOEJBQVU7SUFBMUM7UUFBQSxxRUFnQ0M7UUE5Qlcsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7O0lBNEJ6QyxDQUFDO21CQWhDWSxVQUFVO0lBTVosZUFBSSxHQUFYO1FBQ0ksWUFBVSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFFRCw2QkFBUSxHQUFSO0lBRUEsQ0FBQztJQUNELDZCQUFRLEdBQVIsVUFBUyxVQUFnQjtJQUV6QixDQUFDO0lBRUQsb0NBQWUsR0FBZjtJQUVBLENBQUM7SUFFRCxtQ0FBYyxHQUFkO0lBRUEsQ0FBQztJQUVELCtCQUFVLEdBQVY7SUFFQSxDQUFDO0lBRUQsaUNBQVksR0FBWjtJQUVBLENBQUM7O0lBN0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ2tCO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ2lCO0lBSjVCLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0FnQ3RCO0lBQUQsaUJBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQytCLHdCQUFVLEdBZ0N6QztBQWhDWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VEaWFsb2cgfSBmcm9tIFwiLi9iYXNlX2RpYWxvZ1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgRGxnU2V0dGluZyBleHRlbmRzIEJhc2VEaWFsb2d7XHJcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxyXG4gICAgcHJpdmF0ZSBjaGVja19lZmZlY3Q6Y2MuVG9nZ2xlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXHJcbiAgICBwcml2YXRlIGNoZWNrX3Nob2NrOmNjLlRvZ2dsZSA9IG51bGw7XHJcblxyXG4gICAgc3RhdGljIHNob3coKXtcclxuICAgICAgICBEbGdTZXR0aW5nLmNyZWF0ZShcInByZWZhYnMvZGlhbG9nX3NldHRpbmdcIilcclxuICAgIH1cclxuXHJcbiAgICBpbml0VmlldygpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGV4aXRWaWV3KGJ1bmRsZURhdGE/OiBhbnkpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25Ub2dnbGVfZWZmZWN0KCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uVG9nZ2xlX3Nob2NrKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5fbGlrZSgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bl9oaWRlQWQoKXtcclxuICAgICAgICBcclxuICAgIH1cclxufSJdfQ==