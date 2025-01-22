
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/launch_scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsYXVuY2hfc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLHFEQUFnRTtBQUUxRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDs7SUFrQkEsQ0FBQztJQWhCRyx3QkFBd0I7SUFFeEIsNEJBQU0sR0FBTjtRQUNJLDRCQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsd0JBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCw0QkFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSx3QkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRW5GLFdBQVcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsa0JBQVUsQ0FBQyxJQUFJLEVBQUMsSUFBSSxFQUFDO1lBQzFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGtCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBZmdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FrQi9CO0lBQUQsa0JBQUM7Q0FsQkQsQUFrQkMsQ0FsQndDLEVBQUUsQ0FBQyxTQUFTLEdBa0JwRDtrQkFsQm9CLFdBQVc7QUFxQmhDLFNBQVMsV0FBVztJQUNoQixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDNUMsSUFBSSxT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QUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7SUFDakQsT0FBTyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN6RixPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNuRCxPQUFPLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxXQUFXLElBQUUsR0FBRyxDQUFBO0lBQy9DLEVBQUUsQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQTtJQUNwRCxLQUFhLFVBQW9CLEVBQXBCLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBcEIsY0FBb0IsRUFBcEIsSUFBb0IsRUFBQztRQUE5QixJQUFJLENBQUMsU0FBQTtRQUNMLEVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXVCLENBQUMsV0FBTSxPQUFPLENBQUMsQ0FBQyxDQUFHLENBQUMsQ0FBQTtLQUNyRDtJQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQTtBQUN0RCxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NlbmVOYW1lcyB9IGZyb20gXCIuL2RhdGEvY29uc3RcIjtcclxuaW1wb3J0IHsgU2NyZWVuQWRhcHRlciwgU2NyZWVuRml0IH0gZnJvbSBcIi4vdXRpbHMvc2NyZWVuX2FkYXB0XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhdW5jaFNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIFNjcmVlbkFkYXB0ZXIuYWRhcHRTY3JlZW5TaXplKHRoaXMubm9kZSwgU2NyZWVuRml0LlNIT1dfQUxMKTtcclxuICAgICAgICBTY3JlZW5BZGFwdGVyLmFkYXB0U2NyZWVuU2l6ZSh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2JnJyksIFNjcmVlbkZpdC5OT19CT1JERVIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXlJbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShTY2VuZU5hbWVzLnBsYXksbnVsbCwoKT0+e1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoU2NlbmVOYW1lcy5wbGF5KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SW5pdCgpe1xyXG4gICAgbGV0IGdldEZyYW1lU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICBsZXQgZ2V0Q2FudmFzU2l6ZSA9IGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpO1xyXG4gICAgbGV0IGdldFNjYWxlWCA9IGNjLnZpZXcuZ2V0U2NhbGVYKCk7XHJcbiAgICBsZXQgZ2V0U2NhbGVZID0gY2Mudmlldy5nZXRTY2FsZVkoKTtcclxuICAgIGxldCBnZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSA9IGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKTtcclxuICAgIGxldCBnZXRWaXNpYmxlU2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgIGxldCBnZXREZXZpY2VQaXhlbFJhdGlvID0gY2Mudmlldy5nZXREZXZpY2VQaXhlbFJhdGlvKCk7XHJcbiAgICBjYy5sb2coXCItLS0tLS0tLWNjLnZpZXdcIixKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2V0RnJhbWVTaXplOmdldEZyYW1lU2l6ZSxcclxuICAgICAgICBnZXRDYW52YXNTaXplOmdldENhbnZhc1NpemUsXHJcbiAgICAgICAgZ2V0U2NhbGVYOmdldFNjYWxlWCxcclxuICAgICAgICBnZXRTY2FsZVk6Z2V0U2NhbGVZLFxyXG4gICAgICAgIGdldERlc2lnblJlc29sdXRpb25TaXplOmdldERlc2lnblJlc29sdXRpb25TaXplLFxyXG4gICAgICAgIGdldFZpc2libGVTaXplOmdldFZpc2libGVTaXplLFxyXG4gICAgICAgIGdldERldmljZVBpeGVsUmF0aW86Z2V0RGV2aWNlUGl4ZWxSYXRpbyxcclxuICAgIH0sbnVsbCxcIiAgXCIpKVxyXG5cclxuICAgIGRpc3BsYXkud2lkdGggPSBnZXRWaXNpYmxlU2l6ZS53aWR0aDtcclxuICAgIGRpc3BsYXkuaGVpZ2h0ID0gZ2V0VmlzaWJsZVNpemUuaGVpZ2h0O1xyXG4gICAgZGlzcGxheS5jeCA9IGRpc3BsYXkud2lkdGgqMC41O1xyXG4gICAgZGlzcGxheS5jeSA9IGRpc3BsYXkuaGVpZ2h0KjAuNTtcclxuICAgIGRpc3BsYXkuZ2FwSGVpZ2h0ID0gZ2V0VmlzaWJsZVNpemUuaGVpZ2h0IC0gZ2V0RGVzaWduUmVzb2x1dGlvblNpemUuaGVpZ2h0O1xyXG4gICAgXHJcbiAgICBsZXQgbGFuZ0NvZGUgPSBjYy5zeXMubGFuZ3VhZ2VDb2RlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBsYW5nQ29kZSA9IGxhbmdDb2RlLnJlcGxhY2UoXCItXCIsXCJfXCIpOy8v57uf5LiA55SoXCItXCLljLrliIZcclxuICAgIGxldCBhcnIgPSBsYW5nQ29kZS5zcGxpdChcIl9cIik7XHJcbiAgICBsZXQgbGFuZyA9IGFyclswXTtcclxuICAgIGxldCByZWdpb24gPSBsYW5nQ29kZS5zdWJzdHJpbmcobGFuZy5sZW5ndGgpO1xyXG4gICAgaWYocmVnaW9uLnN1YnN0cigwLDEpPT1cIl9cIil7XHJcbiAgICAgICAgcmVnaW9uID0gcmVnaW9uLnN1YnN0cmluZygxKVxyXG4gICAgfVxyXG4gICAgZGlzcGxheS5zeXNfbGFuZyA9IGxhbmc7XHJcbiAgICBpZihsYW5nPT1cInpoXCIpey8v5Lit5paH6L+Y54m55Zyw5Zyo5ZCO6Z2i5qCH5piO5LqG566A5L2T57mB5L2T77yM5Y675o6J77yM6Ziy5q2iUEhQ5LiN6K+G5YirXHJcbiAgICAgICAgLy/npLrkvovvvJp6aF9jbl8jaGFucyB6aF91c18jaGFucyB6aF90d18jaGFudCBqYV90dyBlbl90dyBlbl9nYiBlbl91c1xyXG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbi5yZXBsYWNlKFwiaGFuc1wiLFwiXCIpO1xyXG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbi5yZXBsYWNlKFwiaGFudFwiLFwiXCIpO1xyXG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbi5yZXBsYWNlKFwiI1wiLFwiXCIpO1xyXG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbi5yZXBsYWNlKFwiX1wiLFwiXCIpO1xyXG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbi5yZXBsYWNlKFwiLVwiLFwiXCIpO1xyXG4gICAgICAgIHJlZ2lvbiA9IHJlZ2lvbi5yZXBsYWNlKFwiPVwiLFwiXCIpO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheS5zeXNfcmVnaW9uID0gcmVnaW9uXHJcbiAgICBkaXNwbGF5LnN5c19sYW5nQ29kZSA9IGxhbmcrXCJfXCIrcmVnaW9uO1xyXG4gICAgXHJcbiAgICBsZXQgdmlzaWJsZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgIGxldCBkZXNpZ24gPSBjYy5DYW52YXMuaW5zdGFuY2UuZGVzaWduUmVzb2x1dGlvbjtcclxuICAgIGRpc3BsYXkuc2NyZWVuU2NhbGUgPSBjYy52Mih2aXNpYmxlLndpZHRoIC8gZGVzaWduLndpZHRoLCB2aXNpYmxlLmhlaWdodCAvIGRlc2lnbi5oZWlnaHQpXHJcbiAgICBkaXNwbGF5LmFzcGVjdFJhdGlvID0gdmlzaWJsZS5oZWlnaHQvdmlzaWJsZS53aWR0aDtcclxuICAgIGRpc3BsYXkuaXNMb25nU2NyZWVuID0gZGlzcGxheS5hc3BlY3RSYXRpbz49Mi4wXHJcbiAgICBjYy5sb2coXCI9PT09PT09PT09PT09PT09ZGlzcGxheSBzdGFydD09PT09PT09PT09PT1cIilcclxuICAgIGZvcihsZXQgayBvZiBPYmplY3Qua2V5cyhkaXNwbGF5KSl7XHJcbiAgICAgICAgY2MubG9nKGAtLS0tLS0tLS0tLS1kaXNwbGF5LiR7a30gPSAke2Rpc3BsYXlba119YClcclxuICAgIH1cclxuICAgIGNjLmxvZyhcIj09PT09PT09PT09PT09PT1kaXNwbGF5IGVuZD09PT09PT09PT09PT1cIilcclxufSJdfQ==