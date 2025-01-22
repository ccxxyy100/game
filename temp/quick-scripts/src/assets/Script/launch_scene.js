"use strict";
cc._RF.push(module, 'c6226iI0/5LjohygAtLOyT3', 'launch_scene');
// Script/launch_scene.ts

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
var const_1 = require("./data/const");
var screen_adapt_1 = require("./utils/screen_adapt");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LaunchScene = /** @class */ (function (_super) {
    __extends(LaunchScene, _super);
    function LaunchScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    LaunchScene.prototype.onLoad = function () {
        screen_adapt_1.ScreenAdapter.adaptScreenSize(this.node, screen_adapt_1.ScreenFit.SHOW_ALL);
        screen_adapt_1.ScreenAdapter.adaptScreenSize(this.node.getChildByName('bg'), screen_adapt_1.ScreenFit.NO_BORDER);
        displayInit();
    };
    LaunchScene.prototype.start = function () {
        cc.director.preloadScene(const_1.SceneNames.play, null, function () {
            cc.director.loadScene(const_1.SceneNames.play);
        });
    };
    LaunchScene = __decorate([
        ccclass
    ], LaunchScene);
    return LaunchScene;
}(cc.Component));
exports.default = LaunchScene;
function displayInit() {
    var getFrameSize = cc.view.getFrameSize();
    var getCanvasSize = cc.view.getCanvasSize();
    var getScaleX = cc.view.getScaleX();
    var getScaleY = cc.view.getScaleY();
    var getDesignResolutionSize = cc.view.getDesignResolutionSize();
    var getVisibleSize = cc.view.getVisibleSize();
    var getDevicePixelRatio = cc.view.getDevicePixelRatio();
    cc.log("--------cc.view", JSON.stringify({
        getFrameSize: getFrameSize,
        getCanvasSize: getCanvasSize,
        getScaleX: getScaleX,
        getScaleY: getScaleY,
        getDesignResolutionSize: getDesignResolutionSize,
        getVisibleSize: getVisibleSize,
        getDevicePixelRatio: getDevicePixelRatio,
    }, null, "  "));
    display.width = getVisibleSize.width;
    display.height = getVisibleSize.height;
    display.cx = display.width * 0.5;
    display.cy = display.height * 0.5;
    display.gapHeight = getVisibleSize.height - getDesignResolutionSize.height;
    var langCode = cc.sys.languageCode.toLowerCase();
    langCode = langCode.replace("-", "_"); //统一用"-"区分
    var arr = langCode.split("_");
    var lang = arr[0];
    var region = langCode.substring(lang.length);
    if (region.substr(0, 1) == "_") {
        region = region.substring(1);
    }
    display.sys_lang = lang;
    if (lang == "zh") { //中文还特地在后面标明了简体繁体，去掉，防止PHP不识别
        //示例：zh_cn_#hans zh_us_#hans zh_tw_#hant ja_tw en_tw en_gb en_us
        region = region.replace("hans", "");
        region = region.replace("hant", "");
        region = region.replace("#", "");
        region = region.replace("_", "");
        region = region.replace("-", "");
        region = region.replace("=", "");
    }
    display.sys_region = region;
    display.sys_langCode = lang + "_" + region;
    var visible = cc.view.getVisibleSize();
    var design = cc.Canvas.instance.designResolution;
    display.screenScale = cc.v2(visible.width / design.width, visible.height / design.height);
    display.aspectRatio = visible.height / visible.width;
    display.isLongScreen = display.aspectRatio >= 2.0;
    cc.log("================display start=============");
    for (var _i = 0, _a = Object.keys(display); _i < _a.length; _i++) {
        var k = _a[_i];
        cc.log("------------display." + k + " = " + display[k]);
    }
    cc.log("================display end=============");
}

cc._RF.pop();