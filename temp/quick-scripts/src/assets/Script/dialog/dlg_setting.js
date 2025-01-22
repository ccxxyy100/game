"use strict";
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