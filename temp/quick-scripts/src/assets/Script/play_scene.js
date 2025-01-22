"use strict";
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