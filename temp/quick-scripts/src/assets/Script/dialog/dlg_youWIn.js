"use strict";
cc._RF.push(module, '40f1cmcPkVCqr74jyPFSUds', 'dlg_youWIn');
// Script/dialog/dlg_youWIn.ts

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
exports.DlgYouWin = void 0;
var base_dialog_1 = require("./base_dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DlgYouWin = /** @class */ (function (_super) {
    __extends(DlgYouWin, _super);
    function DlgYouWin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onNext = null;
        return _this;
    }
    DlgYouWin_1 = DlgYouWin;
    DlgYouWin.prototype.initView = function (onNext) {
        this.onNext = onNext;
    };
    DlgYouWin.prototype.exitView = function () {
    };
    DlgYouWin.prototype.onBtn_Next = function () {
        this.dismiss(true);
        if (this.onNext) {
            this.onNext();
        }
    };
    DlgYouWin.show = function (onNext) {
        DlgYouWin_1.create("prefabs/dialog_youWIn", onNext);
    };
    var DlgYouWin_1;
    DlgYouWin = DlgYouWin_1 = __decorate([
        ccclass
    ], DlgYouWin);
    return DlgYouWin;
}(base_dialog_1.BaseDialog));
exports.DlgYouWin = DlgYouWin;

cc._RF.pop();