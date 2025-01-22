
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/play_scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f079lIIJlOpJA1xOS53TX8', 'play_scene');
// Script/play_scene.ts

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
var dlg_setting_1 = require("./dialog/dlg_setting");
var dlg_youWIn_1 = require("./dialog/dlg_youWIn");
var audio_util_1 = require("./utils/audio_util");
var cupMgr_1 = require("./views/cupMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayScene = /** @class */ (function (_super) {
    __extends(PlayScene, _super);
    function PlayScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cupMgr = null;
        _this.text_level = null;
        _this.text_actionNum = null;
        return _this;
    }
    PlayScene.prototype.onLoad = function () {
        this.cupMgr.node.on("level_finish", this.onFinishOneLevel, this);
        this.cupMgr.node.on("do_pour", this.onPourAction, this);
    };
    PlayScene.prototype.onDestroy = function () {
        this.cupMgr.node.off("level_finish", this.onFinishOneLevel, this);
        this.cupMgr.node.off("do_pour", this.onPourAction, this);
    };
    PlayScene.prototype.start = function () {
        this.text_level.string = "level_" + this.cupMgr.getLevel();
        this.text_actionNum.string = this.cupMgr.getActionNum() + '';
    };
    PlayScene.prototype.onFinishOneLevel = function () {
        var _this = this;
        audio_util_1.AudioUtil.playEffect(audio_util_1.AudioEnum.youWin);
        dlg_youWIn_1.DlgYouWin.show(function () {
            _this.cupMgr.nextLevel();
            _this.text_level.string = "level_" + _this.cupMgr.getLevel();
            _this.text_actionNum.string = _this.cupMgr.getActionNum() + '';
        });
    };
    PlayScene.prototype.onPourAction = function () {
        this.text_actionNum.string = this.cupMgr.getActionNum() + '';
    };
    PlayScene.prototype.onBtn_restart = function () {
        this.cupMgr.nextLevel();
        this.text_actionNum.string = this.cupMgr.getActionNum() + '';
    };
    PlayScene.prototype.onBtn_recover = function () {
        this.cupMgr.undoAction();
        this.text_actionNum.string = this.cupMgr.getActionNum() + '';
    };
    PlayScene.prototype.onBtn_tip = function () {
    };
    PlayScene.prototype.onBtn_setting = function () {
        dlg_setting_1.DlgSetting.show();
    };
    __decorate([
        property(cupMgr_1.CupMgr)
    ], PlayScene.prototype, "cupMgr", void 0);
    __decorate([
        property(cc.Label)
    ], PlayScene.prototype, "text_level", void 0);
    __decorate([
        property(cc.Label)
    ], PlayScene.prototype, "text_actionNum", void 0);
    PlayScene = __decorate([
        ccclass
    ], PlayScene);
    return PlayScene;
}(cc.Component));
exports.default = PlayScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwbGF5X3NjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG9EQUFrRDtBQUNsRCxrREFBZ0Q7QUFDaEQsaURBQTBEO0FBQzFELHlDQUF3QztBQUdsQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXFEQztRQW5EVyxZQUFNLEdBQVcsSUFBSSxDQUFDO1FBRXRCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG9CQUFjLEdBQVksSUFBSSxDQUFDOztJQStDM0MsQ0FBQztJQTdDRywwQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsV0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBSSxDQUFBO1FBQzFELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEdBQUMsRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCxvQ0FBZ0IsR0FBaEI7UUFBQSxpQkFPQztRQU5HLHNCQUFTLENBQUMsVUFBVSxDQUFDLHNCQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsc0JBQVMsQ0FBQyxJQUFJLENBQUM7WUFDWCxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFdBQVMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUksQ0FBQTtZQUMxRCxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxHQUFDLEVBQUUsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUVELGlDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEdBQUMsRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCxpQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxHQUFDLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsNkJBQVMsR0FBVDtJQUVBLENBQUM7SUFFRCxpQ0FBYSxHQUFiO1FBQ0ksd0JBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBbEREO1FBREMsUUFBUSxDQUFDLGVBQU0sQ0FBQzs2Q0FDYTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNnQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNvQjtJQU50QixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBcUQ3QjtJQUFELGdCQUFDO0NBckRELEFBcURDLENBckRzQyxFQUFFLENBQUMsU0FBUyxHQXFEbEQ7a0JBckRvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IERsZ1NldHRpbmcgfSBmcm9tIFwiLi9kaWFsb2cvZGxnX3NldHRpbmdcIjtcclxuaW1wb3J0IHsgRGxnWW91V2luIH0gZnJvbSBcIi4vZGlhbG9nL2RsZ195b3VXSW5cIjtcclxuaW1wb3J0IHsgQXVkaW9FbnVtLCBBdWRpb1V0aWwgfSBmcm9tIFwiLi91dGlscy9hdWRpb191dGlsXCI7XHJcbmltcG9ydCB7IEN1cE1nciB9IGZyb20gXCIuL3ZpZXdzL2N1cE1nclwiO1xyXG5cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheVNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShDdXBNZ3IpXHJcbiAgICBwcml2YXRlIGN1cE1ncjogQ3VwTWdyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgdGV4dF9sZXZlbDpjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHRleHRfYWN0aW9uTnVtOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLmN1cE1nci5ub2RlLm9uKFwibGV2ZWxfZmluaXNoXCIsdGhpcy5vbkZpbmlzaE9uZUxldmVsLHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY3VwTWdyLm5vZGUub24oXCJkb19wb3VyXCIsdGhpcy5vblBvdXJBY3Rpb24sdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgdGhpcy5jdXBNZ3Iubm9kZS5vZmYoXCJsZXZlbF9maW5pc2hcIix0aGlzLm9uRmluaXNoT25lTGV2ZWwsdGhpcyk7XHJcbiAgICAgICAgdGhpcy5jdXBNZ3Iubm9kZS5vZmYoXCJkb19wb3VyXCIsdGhpcy5vblBvdXJBY3Rpb24sdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLnRleHRfbGV2ZWwuc3RyaW5nID0gYGxldmVsXyR7dGhpcy5jdXBNZ3IuZ2V0TGV2ZWwoKX1gXHJcbiAgICAgICAgdGhpcy50ZXh0X2FjdGlvbk51bS5zdHJpbmcgPSB0aGlzLmN1cE1nci5nZXRBY3Rpb25OdW0oKSsnJztcclxuICAgIH1cclxuXHJcbiAgICBvbkZpbmlzaE9uZUxldmVsKCl7XHJcbiAgICAgICAgQXVkaW9VdGlsLnBsYXlFZmZlY3QoQXVkaW9FbnVtLnlvdVdpbik7XHJcbiAgICAgICAgRGxnWW91V2luLnNob3coKCk9PntcclxuICAgICAgICAgICAgdGhpcy5jdXBNZ3IubmV4dExldmVsKClcclxuICAgICAgICAgICAgdGhpcy50ZXh0X2xldmVsLnN0cmluZyA9IGBsZXZlbF8ke3RoaXMuY3VwTWdyLmdldExldmVsKCl9YFxyXG4gICAgICAgICAgICB0aGlzLnRleHRfYWN0aW9uTnVtLnN0cmluZyA9IHRoaXMuY3VwTWdyLmdldEFjdGlvbk51bSgpKycnO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25Qb3VyQWN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50ZXh0X2FjdGlvbk51bS5zdHJpbmcgPSB0aGlzLmN1cE1nci5nZXRBY3Rpb25OdW0oKSsnJztcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bl9yZXN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5jdXBNZ3IubmV4dExldmVsKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0X2FjdGlvbk51bS5zdHJpbmcgPSB0aGlzLmN1cE1nci5nZXRBY3Rpb25OdW0oKSsnJztcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bl9yZWNvdmVyKCl7XHJcbiAgICAgICAgdGhpcy5jdXBNZ3IudW5kb0FjdGlvbigpO1xyXG4gICAgICAgIHRoaXMudGV4dF9hY3Rpb25OdW0uc3RyaW5nID0gdGhpcy5jdXBNZ3IuZ2V0QWN0aW9uTnVtKCkrJyc7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5fdGlwKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuX3NldHRpbmcoKXtcclxuICAgICAgICBEbGdTZXR0aW5nLnNob3coKTtcclxuICAgIH1cclxufVxyXG4iXX0=