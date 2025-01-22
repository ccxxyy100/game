
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/dialog/dlg_youWIn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkaWFsb2dcXGRsZ195b3VXSW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUEyQztBQUVyQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUErQiw2QkFBVTtJQUF6QztRQUFBLHFFQW9CQztRQW5CVyxZQUFNLEdBQVksSUFBSSxDQUFDOztJQW1CbkMsQ0FBQztrQkFwQlksU0FBUztJQUVsQiw0QkFBUSxHQUFSLFVBQVMsTUFBZTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsNEJBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCw4QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDWCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBRU0sY0FBSSxHQUFYLFVBQVksTUFBTTtRQUNkLFdBQVMsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUMsTUFBTSxDQUFDLENBQUE7SUFDcEQsQ0FBQzs7SUFuQlEsU0FBUztRQURyQixPQUFPO09BQ0ssU0FBUyxDQW9CckI7SUFBRCxnQkFBQztDQXBCRCxBQW9CQyxDQXBCOEIsd0JBQVUsR0FvQnhDO0FBcEJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZURpYWxvZyB9IGZyb20gXCIuL2Jhc2VfZGlhbG9nXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBEbGdZb3VXaW4gZXh0ZW5kcyBCYXNlRGlhbG9ne1xyXG4gICAgcHJpdmF0ZSBvbk5leHQ6RnVuY3Rpb24gPSBudWxsO1xyXG4gICAgaW5pdFZpZXcob25OZXh0OkZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5vbk5leHQgPSBvbk5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdFZpZXcoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uQnRuX05leHQoKXtcclxuICAgICAgICB0aGlzLmRpc21pc3ModHJ1ZSk7XHJcbiAgICAgICAgaWYodGhpcy5vbk5leHQpe1xyXG4gICAgICAgICAgICB0aGlzLm9uTmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hvdyhvbk5leHQpe1xyXG4gICAgICAgIERsZ1lvdVdpbi5jcmVhdGUoXCJwcmVmYWJzL2RpYWxvZ195b3VXSW5cIixvbk5leHQpXHJcbiAgICB9XHJcbn0iXX0=