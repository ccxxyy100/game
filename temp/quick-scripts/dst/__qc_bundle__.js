
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/__appInit');
require('./assets/Script/data/const');
require('./assets/Script/dialog/base_dialog');
require('./assets/Script/dialog/dialog_mgr');
require('./assets/Script/dialog/dlg_setting');
require('./assets/Script/dialog/dlg_youWIn');
require('./assets/Script/global_node');
require('./assets/Script/launch_scene');
require('./assets/Script/play_scene');
require('./assets/Script/utils/audio_util');
require('./assets/Script/utils/click_button_effect');
require('./assets/Script/utils/function');
require('./assets/Script/utils/layer_color');
require('./assets/Script/utils/screen_adapt');
require('./assets/Script/views/cup');
require('./assets/Script/views/cupMgr');
require('./assets/Script/views/water');
require('./assets/Script/views/waterFlow');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/data/const.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0bc8jqpk1HfZntFWqAS+uu', 'const');
// Script/data/const.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneNames = void 0;
var SceneNames;
(function (SceneNames) {
    SceneNames["launch"] = "launch";
    SceneNames["play"] = "play";
})(SceneNames = exports.SceneNames || (exports.SceneNames = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkYXRhXFxjb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDbEIsK0JBQWlCLENBQUE7SUFDakIsMkJBQWEsQ0FBQTtBQUNqQixDQUFDLEVBSFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFHckIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBTY2VuZU5hbWVze1xyXG4gICAgbGF1bmNoID0gXCJsYXVuY2hcIixcclxuICAgIHBsYXkgPSBcInBsYXlcIixcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/utils/click_button_effect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2956fTad4NJOJUFwxoeISII', 'click_button_effect');
// Script/utils/click_button_effect.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var audio_util_1 = require("./audio_util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, menu = _a.menu;
var AudioButtonClick = /** @class */ (function (_super) {
    __extends(AudioButtonClick, _super);
    function AudioButtonClick() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioButtonClick.prototype.onLoad = function () {
        var btn = this.node.getComponent(cc.Button);
        var hd = new cc.Component.EventHandler(); //copy对象
        hd.component = "audio_button_click";
        hd.handler = "onClick";
        hd.target = this.node;
        btn.clickEvents.push(hd);
    };
    AudioButtonClick.prototype.onClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                audio_util_1.AudioUtil.playEffect(audio_util_1.AudioEnum.button);
                return [2 /*return*/];
            });
        });
    };
    AudioButtonClick = __decorate([
        ccclass,
        menu("audio/button_click"),
        requireComponent(cc.Button)
    ], AudioButtonClick);
    return AudioButtonClick;
}(cc.Component));
exports.default = AudioButtonClick;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx1dGlsc1xcY2xpY2tfYnV0dG9uX2VmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBb0Q7QUFFOUMsSUFBQSxLQUE4QyxFQUFFLENBQUMsVUFBVSxFQUExRCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxJQUFJLFVBQWlCLENBQUM7QUFLbEU7SUFBOEMsb0NBQVk7SUFBMUQ7O0lBZUEsQ0FBQztJQWJHLGlDQUFNLEdBQU47UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFBLENBQUMsUUFBUTtRQUNqRCxFQUFFLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFBO1FBQ25DLEVBQUUsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFBO1FBQ3RCLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUNyQixHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUU1QixDQUFDO0lBRUssa0NBQU8sR0FBYjs7O2dCQUNJLHNCQUFTLENBQUMsVUFBVSxDQUFDLHNCQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7Ozs7S0FDekM7SUFkZ0IsZ0JBQWdCO1FBSHBDLE9BQU87UUFDUCxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDMUIsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztPQUNQLGdCQUFnQixDQWVwQztJQUFELHVCQUFDO0NBZkQsQUFlQyxDQWY2QyxFQUFFLENBQUMsU0FBUyxHQWV6RDtrQkFmb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9FbnVtLCBBdWRpb1V0aWwgfSBmcm9tIFwiLi9hdWRpb191dGlsXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHksIHJlcXVpcmVDb21wb25lbnQsIG1lbnV9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwiYXVkaW8vYnV0dG9uX2NsaWNrXCIpXHJcbkByZXF1aXJlQ29tcG9uZW50KGNjLkJ1dHRvbilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9CdXR0b25DbGljayBleHRlbmRzIGNjLkNvbXBvbmVudCB7ICAgIFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgbGV0IGJ0biA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICBsZXQgaGQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpIC8vY29weeWvueixoVxyXG4gICAgICAgIGhkLmNvbXBvbmVudCA9IFwiYXVkaW9fYnV0dG9uX2NsaWNrXCJcclxuICAgICAgICBoZC5oYW5kbGVyID0gXCJvbkNsaWNrXCJcclxuICAgICAgICBoZC50YXJnZXQgPSB0aGlzLm5vZGVcclxuICAgICAgICBidG4uY2xpY2tFdmVudHMucHVzaChoZClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25DbGljaygpe1xyXG4gICAgICAgIEF1ZGlvVXRpbC5wbGF5RWZmZWN0KEF1ZGlvRW51bS5idXR0b24pXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/__appInit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d699MXEghGoJQkqoU9grFe', '__appInit');
// Script/__appInit.js

"use strict";

window.display = {};
display.width = 720;
display.height = 1280;
display.cx = 360;
display.cy = 640;
display.gapHeight = 0;
display.sys_lang = "";
display.sys_region = "";
display.sys_langCode = "";
display.screenScale = cc.v2(1, 1);
display.aspectRatio = 1280 / 720;
display.isLongScreen = false;
display.isInBackground = false; //是否在后台运行

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxfX2FwcEluaXQuanMiXSwibmFtZXMiOlsid2luZG93IiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwiY3giLCJjeSIsImdhcEhlaWdodCIsInN5c19sYW5nIiwic3lzX3JlZ2lvbiIsInN5c19sYW5nQ29kZSIsInNjcmVlblNjYWxlIiwiY2MiLCJ2MiIsImFzcGVjdFJhdGlvIiwiaXNMb25nU2NyZWVuIiwiaXNJbkJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixFQUFqQjtBQUNBQSxPQUFPLENBQUNDLEtBQVIsR0FBZ0IsR0FBaEI7QUFDQUQsT0FBTyxDQUFDRSxNQUFSLEdBQWlCLElBQWpCO0FBQ0FGLE9BQU8sQ0FBQ0csRUFBUixHQUFhLEdBQWI7QUFDQUgsT0FBTyxDQUFDSSxFQUFSLEdBQWEsR0FBYjtBQUNBSixPQUFPLENBQUNLLFNBQVIsR0FBb0IsQ0FBcEI7QUFFQUwsT0FBTyxDQUFDTSxRQUFSLEdBQW1CLEVBQW5CO0FBQ0FOLE9BQU8sQ0FBQ08sVUFBUixHQUFxQixFQUFyQjtBQUNBUCxPQUFPLENBQUNRLFlBQVIsR0FBdUIsRUFBdkI7QUFFQVIsT0FBTyxDQUFDUyxXQUFSLEdBQXNCQyxFQUFFLENBQUNDLEVBQUgsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUF0QjtBQUNBWCxPQUFPLENBQUNZLFdBQVIsR0FBc0IsT0FBSyxHQUEzQjtBQUNBWixPQUFPLENBQUNhLFlBQVIsR0FBdUIsS0FBdkI7QUFDQWIsT0FBTyxDQUFDYyxjQUFSLEdBQXlCLEtBQXpCLEVBQStCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxud2luZG93LmRpc3BsYXkgPSB7fTtcclxuZGlzcGxheS53aWR0aCA9IDcyMDtcclxuZGlzcGxheS5oZWlnaHQgPSAxMjgwO1xyXG5kaXNwbGF5LmN4ID0gMzYwO1xyXG5kaXNwbGF5LmN5ID0gNjQwO1xyXG5kaXNwbGF5LmdhcEhlaWdodCA9IDA7XHJcblxyXG5kaXNwbGF5LnN5c19sYW5nID0gXCJcIjtcclxuZGlzcGxheS5zeXNfcmVnaW9uID0gXCJcIjtcclxuZGlzcGxheS5zeXNfbGFuZ0NvZGUgPSBcIlwiO1xyXG5cclxuZGlzcGxheS5zY3JlZW5TY2FsZSA9IGNjLnYyKDEsMSlcclxuZGlzcGxheS5hc3BlY3RSYXRpbyA9IDEyODAvNzIwO1xyXG5kaXNwbGF5LmlzTG9uZ1NjcmVlbiA9IGZhbHNlO1xyXG5kaXNwbGF5LmlzSW5CYWNrZ3JvdW5kID0gZmFsc2U7Ly/mmK/lkKblnKjlkI7lj7Dov5DooYwiXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/views/cupMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '162caJdeQxMJoFwNDNLc63b', 'cupMgr');
// Script/views/cupMgr.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CupMgr = void 0;
var cup_1 = require("./cup");
var waterFlow_1 = require("./waterFlow");
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property, executeInEditMode = _b.executeInEditMode;
var COOKIE_LEVEL = "level";
var COOKIE_LAST_CFG = "last_cfg";
var COOKIE_ACTION_HISTORY = "action_history";
var spacesArr = (_a = {},
    _a[1] = [0, 1],
    _a[2] = [80, 1],
    _a[3] = [50, 1],
    _a[4] = [40, 0.9],
    _a[5] = [30, 0.8],
    _a[6] = [30, 0.65],
    _a[7] = [20, 0.6, 60],
    _a[8] = [10, 0.55, 80],
    _a);
var CupMgr = /** @class */ (function (_super) {
    __extends(CupMgr, _super);
    function CupMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelCfg = null;
        _this.pfb = null;
        /**当前等级 */
        _this._level = 1;
        _this.curCfg = [];
        _this._waterFlow = null;
        _this._debugLevel = 0;
        _this._cups = [];
        _this.layout_v = null;
        _this.selected = null;
        _this._actions = [];
        return _this;
    }
    CupMgr.prototype.onLoad = function () {
        if (CC_EDITOR) {
            return;
        }
        this._level = checkint(cc.sys.localStorage.getItem(COOKIE_LEVEL) || 1);
        var str = cc.sys.localStorage.getItem(COOKIE_LAST_CFG);
        if (str) {
            try {
                this.curCfg = JSON.parse(str);
            }
            catch (e) {
                this.initCfg();
            }
        }
        else {
            this.initCfg();
        }
        str = cc.sys.localStorage.getItem(COOKIE_ACTION_HISTORY);
        if (str) {
            try {
                this._actions = JSON.parse(str);
            }
            catch (e) {
            }
        }
        this.createCups();
        var _node = new cc.Node();
        _node.parent = this.node;
        this._waterFlow = _node.addComponent(waterFlow_1.WaterFlow);
    };
    CupMgr.prototype.initCfg = function () {
        this.curCfg = [];
        var cfgArr = this.levelCfg.json[this._level - 1]; //每一关的数据，都是数组，每四个数字代表一杯水
        var acc = 0;
        while (acc < cfgArr.length) {
            var info = {
                colorIds: [cfgArr[acc], cfgArr[acc + 1] || 0, cfgArr[acc + 2] || 0, cfgArr[acc + 3] || 0]
            };
            this.curCfg.push(info);
            acc += 4;
        }
    };
    Object.defineProperty(CupMgr.prototype, "debugLevel", {
        get: function () { return this._debugLevel; },
        set: function (value) {
            this._debugLevel = value;
            this._level = value;
            this.nextLevel();
        },
        enumerable: false,
        configurable: true
    });
    CupMgr.prototype.createCups = function () {
        return __awaiter(this, void 0, void 0, function () {
            function _createLayout(type, parent, name) {
                var node = new cc.Node(name);
                node.parent = parent;
                var layout = node.addComponent(cc.Layout);
                layout.type = type;
                layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
                return layout;
            }
            var arr, len, i, info, _node, _cup, cupSize, cupIdxGroups, idGroup, i, idGroup, i, middleId, layoutArr, maxNum, i, node_layout_h, idGroup, j, id, spaceX, _i, layoutArr_1, layout, _a, _b, cup;
            return __generator(this, function (_c) {
                if (this.layout_v) {
                    this.layout_v.node.destroyAllChildren();
                }
                this._cups = [];
                this.selected = null;
                this._actions = [];
                arr = this.curCfg;
                len = this.curCfg.length;
                if (len == 0) {
                    return [2 /*return*/];
                }
                for (i = 0; i < len; i++) {
                    info = arr[i];
                    _node = cc.instantiate(this.pfb);
                    _node.parent = this.node;
                    _cup = _node.getComponent(cup_1.default);
                    _cup.setCupInfo(info, this.onClickCup.bind(this));
                    this._cups.push(_cup);
                }
                if (this.layout_v == null) {
                    this.layout_v = _createLayout(cc.Layout.Type.VERTICAL, this.node, "layout_v");
                    this.layout_v.node.zIndex = 1;
                }
                cupSize = this._cups[0].node.getContentSize();
                cupIdxGroups = [];
                if (len <= 4) {
                    idGroup = [];
                    for (i = 0; i < this._cups.length; i++) {
                        idGroup.push(i);
                    }
                    cupIdxGroups.push(idGroup);
                }
                else if (len <= 15) {
                    idGroup = [];
                    i = 0;
                    middleId = (len) / 2;
                    for (; i < middleId; i++) {
                        idGroup.push(i);
                    }
                    cupIdxGroups.push(idGroup);
                    idGroup = [];
                    for (; i < len; i++) {
                        idGroup.push(i);
                    }
                    cupIdxGroups.push(idGroup);
                    idGroup = [];
                }
                layoutArr = [];
                maxNum = 1;
                for (i = 0; i < cupIdxGroups.length; i++) {
                    node_layout_h = _createLayout(cc.Layout.Type.HORIZONTAL, this.layout_v.node, "layout_h_" + i);
                    node_layout_h.node.height = cupSize.height;
                    idGroup = cupIdxGroups[i];
                    for (j = 0; j < idGroup.length; j++) {
                        id = idGroup[j];
                        this._cups[id].node.parent = node_layout_h.node;
                    }
                    maxNum = Math.max(maxNum, node_layout_h.node.childrenCount);
                    spaceX = spacesArr[maxNum][0];
                    if (spaceX != node_layout_h.spacingX) {
                        node_layout_h.spacingX = spaceX;
                    }
                    layoutArr.push(node_layout_h);
                }
                this.layout_v.enabled = true;
                this.layout_v.node.scale = spacesArr[maxNum][1];
                this.layout_v.spacingY = spacesArr[maxNum][2] || 40;
                for (_i = 0, layoutArr_1 = layoutArr; _i < layoutArr_1.length; _i++) {
                    layout = layoutArr_1[_i];
                    layout.updateLayout();
                    layout.enabled = false;
                }
                this.layout_v.updateLayout();
                this.layout_v.enabled = false;
                for (_a = 0, _b = this._cups; _a < _b.length; _a++) {
                    cup = _b[_a];
                    cup.orignPt = cup.node.position;
                }
                return [2 /*return*/];
            });
        });
    };
    CupMgr.prototype.onClickCup = function (cup) {
        if (this.selected) {
            if (this.selected == cup) {
                this.doSelect(cup, false);
                this.selected = null;
            }
            else if (this.checkPour(this.selected, cup)) {
                this.startPour(this.selected, cup);
            }
            else {
                this.doSelect(this.selected, false);
                this.selected = null;
            }
        }
        else {
            this.selected = cup;
            this.doSelect(cup, true);
        }
    };
    /**检查两个杯子是否能倒水 */
    CupMgr.prototype.checkPour = function (src, dst) {
        var srcTop = src.getTop();
        var dstTop = dst.getTop();
        if (srcTop.topColorId == 0) {
            return false;
        }
        if (dstTop.topColorId == 0) {
            return true;
        }
        return srcTop.topColorNum <= dstTop.emptyNum;
    };
    /**开始倒水 */
    CupMgr.prototype.startPour = function (src, dst) {
        var _this = this;
        dst.node.zIndex = 0;
        dst.node.parent.zIndex = 0;
        src.node.zIndex = 10;
        src.node.parent.zIndex = 10;
        var srcTop = src.getTop();
        var dstPt = cc.v2(dst.node.position);
        var dstGlobal = dst.node.parent.convertToWorldSpaceAR(dstPt);
        var viewSize = cc.view.getVisibleSize();
        var isRight = dstGlobal.x > viewSize.width * 0.5; //标记目标是否在屏幕右侧
        if (Math.abs(dstGlobal.x - viewSize.width * 0.5) < 2) { //目标在中间
            var srcPt = src.node.parent.convertToWorldSpaceAR(cc.v2(src.node.position));
            isRight = srcPt.x < viewSize.width * 0.5;
        }
        dstPt.y += 60 + dst.node.height * 0.5;
        var offsetX = 0; //dst.node.width*0.5-20;
        dstPt.x = dstPt.x + (isRight ? -offsetX : offsetX);
        dstPt = dst.node.parent.convertToWorldSpaceAR(dstPt);
        //将瓶口设置为锚点
        src.setPourAnchor(isRight);
        dstPt = src.node.parent.convertToNodeSpaceAR(dstPt);
        // cc.log("---------src.x",src.node.x,dstPt.x)
        var flow = this._waterFlow;
        flow.setLineScale(this.layout_v.node.scale);
        var onPourStart = function () {
            var startPt = src.node.convertToWorldSpaceAR(cc.v2());
            startPt = flow.node.parent.convertToNodeSpaceAR(startPt);
            var endPt = cc.v2(startPt.x, dst.getWaterSurfacePosY());
            endPt = flow.node.parent.convertToNodeSpaceAR(endPt);
            endPt.x = startPt.x;
            flow.strokeColor = new cc.Color().fromHEX(srcTop.colorHex);
            flow.playFlowAni(startPt, endPt, 0.2, false, function () {
                dst.startAddWater(srcTop.topColorId, srcTop.topColorNum, function (cup, isFinished) {
                    _this.onPourOneFinished(src, dst, srcTop.topColorId, srcTop.topColorNum);
                });
            });
        };
        //倒完水就收回去
        function onPourFinish() {
            var startPt = src.node.convertToWorldSpaceAR(cc.v2());
            startPt = flow.node.parent.convertToNodeSpaceAR(startPt);
            var endPt = cc.v2(startPt.x, dst.getWaterSurfacePosY(true));
            endPt = flow.node.parent.convertToNodeSpaceAR(endPt);
            endPt.x = startPt.x;
            flow.playFlowAni(startPt, endPt, 0.2, true, function () {
                flow.clear();
            });
            src.setNormalAnchor();
            var pt = src.orignPt;
            var moveBack = cc.tween(src.node)
                .delay(0.7)
                .to(0.5, { x: pt.x, y: pt.y, angle: 0 }, { easing: "sineOut" })
                .call(function () {
                src.node.zIndex = 0;
                src.node.parent.zIndex = 0;
            });
            moveBack.start();
        }
        this.selected = null;
        src.moveToPour(dstPt, isRight, onPourStart.bind(this), onPourFinish.bind(this));
    };
    CupMgr.prototype.doSelect = function (cup, bool) {
        var pt = cup.orignPt;
        var y = pt.y + (bool ? cup.node.height * 0.2 : 0);
        cc.tween(cup.node).stop();
        cc.tween(cup.node).to(0.2, { y: y }).start();
    };
    /**一次倒水完成（以加水那个杯子水面升到最高为界限） */
    CupMgr.prototype.onPourOneFinished = function (from, to, colorId, num) {
        var fromCupIdx = this._cups.indexOf(from);
        var toCupIdx = this._cups.indexOf(to);
        if (this._actions.length == 5) {
            this._actions.shift();
        }
        this._actions.push({
            from: fromCupIdx,
            to: toCupIdx,
            colorId: colorId,
            num: num
        });
        var isAllFinished = this.checkIsAllFinished();
        if (isAllFinished) {
            cc.log("---------完成了");
            this._level++;
            cc.sys.localStorage.setItem(COOKIE_LEVEL, this._level);
            this.node.emit("level_finish");
        }
        else {
            this.node.emit("do_pour");
        }
        cc.sys.localStorage.setItem(COOKIE_LAST_CFG, JSON.stringify(this.curCfg));
        cc.sys.localStorage.setItem(COOKIE_ACTION_HISTORY, JSON.stringify(this._actions));
    };
    CupMgr.prototype.getActionNum = function () {
        return this._actions.length;
    };
    /**恢复上一次的操作 */
    CupMgr.prototype.undoAction = function () {
        var action = this._actions.pop();
        if (action == null) {
            return false;
        }
        var from = action.from, to = action.to, num = action.num, colorId = action.colorId;
        var toCup = this._cups[to];
        var fromCup = this._cups[from];
        if (toCup.isPouring() || fromCup.isPouring()) {
            return false;
        }
        toCup.removeTopWaterImmediately(num);
        fromCup.addWaterImmediately(colorId, num);
        return true;
    };
    CupMgr.prototype.nextLevel = function () {
        this.initCfg();
        this.createCups();
    };
    CupMgr.prototype.getLevel = function () {
        return this._level;
    };
    CupMgr.prototype.checkIsAllFinished = function () {
        for (var _i = 0, _a = this._cups; _i < _a.length; _i++) {
            var cup = _a[_i];
            if (!cup.checkIsFinshed()) {
                return false;
            }
        }
        return true;
    };
    __decorate([
        property(cc.JsonAsset)
    ], CupMgr.prototype, "levelCfg", void 0);
    __decorate([
        property(cc.Prefab)
    ], CupMgr.prototype, "pfb", void 0);
    __decorate([
        property
    ], CupMgr.prototype, "_debugLevel", void 0);
    __decorate([
        property({ tooltip: CC_DEV && '调试关卡' })
    ], CupMgr.prototype, "debugLevel", null);
    CupMgr = __decorate([
        ccclass,
        executeInEditMode
    ], CupMgr);
    return CupMgr;
}(cc.Component));
exports.CupMgr = CupMgr;
function wait(sec) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve(null);
                    }, sec * 1000);
                })];
        });
    });
}
function checkint(val) {
    if (val == null) {
        return 0;
    }
    var ret = parseInt(val);
    if (ret == NaN) {
        ret = 0;
    }
    return ret;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx2aWV3c1xcY3VwTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNkJBQXNDO0FBQ3RDLHlDQUF3QztBQUVsQyxJQUFBLEtBQTBDLEVBQUUsQ0FBQyxVQUFVLEVBQXJELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFDLGlCQUFpQix1QkFBa0IsQ0FBQztBQUU5RCxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUE7QUFDNUIsSUFBTSxlQUFlLEdBQUcsVUFBVSxDQUFBO0FBQ2xDLElBQU0scUJBQXFCLEdBQUcsZ0JBQWdCLENBQUE7QUFFOUMsSUFBTSxTQUFTO0lBQ1gsR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ1gsR0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ1osR0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ1osR0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsR0FBRyxDQUFDO0lBQ2QsR0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsR0FBRyxDQUFDO0lBQ2QsR0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDO0lBQ2YsR0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQztJQUNqQixHQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDO09BQ3JCLENBQUE7QUFJRDtJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQXFWQztRQW5WVyxjQUFRLEdBQWdCLElBQUksQ0FBQztRQUU3QixTQUFHLEdBQWEsSUFBSSxDQUFDO1FBRTdCLFVBQVU7UUFDRixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FB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QUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUM1RCxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ3ZDLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUMsUUFBUSxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUMsQ0FBQSxhQUFhO1FBQzFELElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxFQUFDLEVBQUMsT0FBTztZQUNsRCxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM1RSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBQyxRQUFRLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQztTQUN4QztRQUNELEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJ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S0FDWjtJQUNELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixJQUFHLEdBQUcsSUFBRSxHQUFHLEVBQUM7UUFDUixHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQ1g7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3B1cE1nciB9IGZyb20gXCIuLi9kaWFsb2cvZGlhbG9nX21nclwiO1xyXG5pbXBvcnQgeyBEbGdZb3VXaW4gfSBmcm9tIFwiLi4vZGlhbG9nL2RsZ195b3VXSW5cIjtcclxuaW1wb3J0IEN1cCwgeyBfQ3VwSW5mbyB9IGZyb20gXCIuL2N1cFwiO1xyXG5pbXBvcnQgeyBXYXRlckZsb3cgfSBmcm9tIFwiLi93YXRlckZsb3dcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5jb25zdCBDT09LSUVfTEVWRUwgPSBcImxldmVsXCJcclxuY29uc3QgQ09PS0lFX0xBU1RfQ0ZHID0gXCJsYXN0X2NmZ1wiXHJcbmNvbnN0IENPT0tJRV9BQ1RJT05fSElTVE9SWSA9IFwiYWN0aW9uX2hpc3RvcnlcIlxyXG5cclxuY29uc3Qgc3BhY2VzQXJyID0ge1xyXG4gICAgWzFdIDogWzAsMV0sXHJcbiAgICBbMl0gOiBbODAsMV0sXHJcbiAgICBbM10gOiBbNTAsMV0sXHJcbiAgICBbNF0gOiBbNDAsMC45XSxcclxuICAgIFs1XSA6IFszMCwwLjhdLFxyXG4gICAgWzZdIDogWzMwLDAuNjVdLFxyXG4gICAgWzddIDogWzIwLDAuNiw2MF0sXHJcbiAgICBbOF0gOiBbMTAsMC41NSw4MF0sXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbkBleGVjdXRlSW5FZGl0TW9kZVxyXG5leHBvcnQgY2xhc3MgQ3VwTWdyIGV4dGVuZHMgY2MuQ29tcG9uZW50e1xyXG4gICAgQHByb3BlcnR5KGNjLkpzb25Bc3NldClcclxuICAgIHByaXZhdGUgbGV2ZWxDZmc6Y2MuSnNvbkFzc2V0ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIHBmYjpjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8qKuW9k+WJjeetiee6pyAqL1xyXG4gICAgcHJpdmF0ZSBfbGV2ZWwgPSAxO1xyXG4gICAgcHJpdmF0ZSBjdXJDZmc6QXJyYXk8X0N1cEluZm8+ID0gW107XHJcbiAgICBwcml2YXRlIF93YXRlckZsb3c6V2F0ZXJGbG93ID0gbnVsbDtcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIGlmKENDX0VESVRPUil7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9sZXZlbCA9IGNoZWNraW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShDT09LSUVfTEVWRUwpfHwxKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc3RyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKENPT0tJRV9MQVNUX0NGRyk7XHJcbiAgICAgICAgaWYoc3RyKXtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJDZmcgPSBKU09OLnBhcnNlKHN0cik7XHJcbiAgICAgICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdENmZygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5pbml0Q2ZnKClcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKENPT0tJRV9BQ1RJT05fSElTVE9SWSk7XHJcbiAgICAgICAgaWYoc3RyKXtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aW9ucyA9IEpTT04ucGFyc2Uoc3RyKTtcclxuICAgICAgICAgICAgfWNhdGNoKGUpe1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWF0ZUN1cHMoKTtcclxuXHJcbiAgICAgICAgbGV0IF9ub2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBfbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fd2F0ZXJGbG93ID0gX25vZGUuYWRkQ29tcG9uZW50KFdhdGVyRmxvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Q2ZnKCl7XHJcbiAgICAgICAgdGhpcy5jdXJDZmcgPSBbXTtcclxuICAgICAgICBsZXQgY2ZnQXJyOkFycmF5PG51bWJlcj4gPSB0aGlzLmxldmVsQ2ZnLmpzb25bdGhpcy5fbGV2ZWwtMV07Ly/mr4/kuIDlhbPnmoTmlbDmja7vvIzpg73mmK/mlbDnu4TvvIzmr4/lm5vkuKrmlbDlrZfku6PooajkuIDmna/msLRcclxuICAgICAgICBsZXQgYWNjID0gMDtcclxuICAgICAgICB3aGlsZShhY2M8Y2ZnQXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgY29sb3JJZHM6W2NmZ0FyclthY2NdLGNmZ0FyclthY2MrMV18fDAsY2ZnQXJyW2FjYysyXXx8MCxjZmdBcnJbYWNjKzNdfHwwXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY3VyQ2ZnLnB1c2goaW5mbyk7XHJcbiAgICAgICAgICAgIGFjYys9NDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5IHByaXZhdGUgX2RlYnVnTGV2ZWw6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBDQ19ERVYgJiYgJ+iwg+ivleWFs+WNoScgfSlcclxuICAgIHB1YmxpYyBnZXQgZGVidWdMZXZlbCgpIHsgcmV0dXJuIHRoaXMuX2RlYnVnTGV2ZWw7IH1cclxuICAgIHB1YmxpYyBzZXQgZGVidWdMZXZlbCh2YWx1ZTogbnVtYmVyKSB7IFxyXG4gICAgICAgIHRoaXMuX2RlYnVnTGV2ZWwgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9sZXZlbCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMubmV4dExldmVsKClcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfY3VwczpBcnJheTxDdXA+ID0gW107XHJcbiAgICBwcml2YXRlIGxheW91dF92OmNjLkxheW91dCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGFzeW5jIGNyZWF0ZUN1cHMoKXtcclxuICAgICAgICBpZih0aGlzLmxheW91dF92KXtcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXRfdi5ub2RlLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jdXBzID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9ucyA9IFtdO1xyXG4gICAgICAgIC8vIGF3YWl0IHdhaXQoMSk7XHJcblxyXG4gICAgICAgIGxldCBhcnIgPSB0aGlzLmN1ckNmZztcclxuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLmN1ckNmZy5sZW5ndGg7XHJcbiAgICAgICAgaWYobGVuPT0wKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk9MDtpPGxlbjtpKyspe1xyXG4gICAgICAgICAgICBsZXQgaW5mbyA9IGFycltpXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBfbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGZiKTtcclxuICAgICAgICAgICAgX25vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBsZXQgX2N1cCA9IF9ub2RlLmdldENvbXBvbmVudChDdXApXHJcbiAgICAgICAgICAgIF9jdXAuc2V0Q3VwSW5mbyhpbmZvLHRoaXMub25DbGlja0N1cC5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpcy5fY3Vwcy5wdXNoKF9jdXApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBfY3JlYXRlTGF5b3V0KHR5cGU6Y2MuTGF5b3V0LlR5cGUscGFyZW50OmNjLk5vZGUsbmFtZT86c3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUobmFtZSk7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgICAgICBsZXQgbGF5b3V0ID0gbm9kZS5hZGRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICAgICAgbGF5b3V0LnR5cGUgPSB0eXBlO1xyXG4gICAgICAgICAgICBsYXlvdXQucmVzaXplTW9kZSA9IGNjLkxheW91dC5SZXNpemVNb2RlLkNPTlRBSU5FUjtcclxuICAgICAgICAgICAgcmV0dXJuIGxheW91dFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmxheW91dF92PT1udWxsKXtcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXRfdiA9IF9jcmVhdGVMYXlvdXQoY2MuTGF5b3V0LlR5cGUuVkVSVElDQUwsdGhpcy5ub2RlLFwibGF5b3V0X3ZcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0X3Yubm9kZS56SW5kZXggPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGxldCBjdXBTaXplID0gdGhpcy5fY3Vwc1swXS5ub2RlLmdldENvbnRlbnRTaXplKCk7XHJcbiAgICAgICAgbGV0IGN1cElkeEdyb3VwczpBcnJheTxBcnJheTxudW1iZXI+PiA9IFtdO1xyXG4gICAgICAgIGlmKGxlbjw9NCl7XHJcbiAgICAgICAgICAgIGxldCBpZEdyb3VwOkFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLl9jdXBzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgaWRHcm91cC5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cElkeEdyb3Vwcy5wdXNoKGlkR3JvdXApO1xyXG4gICAgICAgIH1lbHNlIGlmKGxlbjw9MTUpe1xyXG4gICAgICAgICAgICBsZXQgaWRHcm91cDpBcnJheTxudW1iZXI+ID0gW107XHJcbiAgICAgICAgICAgIGxldCBpPTA7XHJcbiAgICAgICAgICAgIGxldCBtaWRkbGVJZCA9IChsZW4pLzI7XHJcbiAgICAgICAgICAgIGZvcig7aTxtaWRkbGVJZDtpKyspe1xyXG4gICAgICAgICAgICAgICAgaWRHcm91cC5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cElkeEdyb3Vwcy5wdXNoKGlkR3JvdXApO1xyXG4gICAgICAgICAgICBpZEdyb3VwID0gW107XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IoO2k8bGVuO2krKyl7XHJcbiAgICAgICAgICAgICAgICBpZEdyb3VwLnB1c2goaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VwSWR4R3JvdXBzLnB1c2goaWRHcm91cCk7XHJcbiAgICAgICAgICAgIGlkR3JvdXAgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsYXlvdXRBcnI6QXJyYXk8Y2MuTGF5b3V0PiA9IFtdO1xyXG4gICAgICAgIGxldCBtYXhOdW0gPSAxO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTxjdXBJZHhHcm91cHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBub2RlX2xheW91dF9oID0gX2NyZWF0ZUxheW91dChjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMLHRoaXMubGF5b3V0X3Yubm9kZSxgbGF5b3V0X2hfJHtpfWApO1xyXG4gICAgICAgICAgICBub2RlX2xheW91dF9oLm5vZGUuaGVpZ2h0ID0gY3VwU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBpZEdyb3VwID0gY3VwSWR4R3JvdXBzW2ldO1xyXG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPGlkR3JvdXAubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBpZEdyb3VwW2pdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3Vwc1tpZF0ubm9kZS5wYXJlbnQgPSBub2RlX2xheW91dF9oLm5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWF4TnVtID0gTWF0aC5tYXgobWF4TnVtLG5vZGVfbGF5b3V0X2gubm9kZS5jaGlsZHJlbkNvdW50KTtcclxuICAgICAgICAgICAgbGV0IHNwYWNlWCA9IHNwYWNlc0FyclttYXhOdW1dWzBdO1xyXG4gICAgICAgICAgICBpZihzcGFjZVghPW5vZGVfbGF5b3V0X2guc3BhY2luZ1gpe1xyXG4gICAgICAgICAgICAgICAgbm9kZV9sYXlvdXRfaC5zcGFjaW5nWCA9IHNwYWNlWDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXlvdXRBcnIucHVzaChub2RlX2xheW91dF9oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGF5b3V0X3YuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYXlvdXRfdi5ub2RlLnNjYWxlID0gc3BhY2VzQXJyW21heE51bV1bMV07XHJcbiAgICAgICAgdGhpcy5sYXlvdXRfdi5zcGFjaW5nWSA9IHNwYWNlc0FyclttYXhOdW1dWzJdfHw0MDtcclxuXHJcbiAgICAgICAgZm9yKGxldCBsYXlvdXQgb2YgbGF5b3V0QXJyKXtcclxuICAgICAgICAgICAgbGF5b3V0LnVwZGF0ZUxheW91dCgpO1xyXG4gICAgICAgICAgICBsYXlvdXQuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxheW91dF92LnVwZGF0ZUxheW91dCgpO1xyXG4gICAgICAgIHRoaXMubGF5b3V0X3YuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvcihsZXQgY3VwIG9mIHRoaXMuX2N1cHMpe1xyXG4gICAgICAgICAgICAoY3VwIGFzIGFueSkub3JpZ25QdCA9IGN1cC5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdGVkOkN1cCA9IG51bGw7XHJcbiAgICBwcml2YXRlIG9uQ2xpY2tDdXAoY3VwOkN1cCl7XHJcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQ9PWN1cCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvU2VsZWN0KGN1cCxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcclxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5jaGVja1BvdXIodGhpcy5zZWxlY3RlZCxjdXApKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRQb3VyKHRoaXMuc2VsZWN0ZWQsY3VwKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvU2VsZWN0KHRoaXMuc2VsZWN0ZWQsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGN1cDtcclxuICAgICAgICAgICAgdGhpcy5kb1NlbGVjdChjdXAsdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKirmo4Dmn6XkuKTkuKrmna/lrZDmmK/lkKbog73lgJLmsLQgKi9cclxuICAgIHByaXZhdGUgY2hlY2tQb3VyKHNyYzpDdXAsZHN0OkN1cCl7XHJcbiAgICAgICAgbGV0IHNyY1RvcCA9IHNyYy5nZXRUb3AoKTtcclxuICAgICAgICBsZXQgZHN0VG9wID0gZHN0LmdldFRvcCgpO1xyXG4gICAgICAgIGlmKHNyY1RvcC50b3BDb2xvcklkPT0wKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkc3RUb3AudG9wQ29sb3JJZD09MCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3JjVG9wLnRvcENvbG9yTnVtPD1kc3RUb3AuZW1wdHlOdW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5byA5aeL5YCS5rC0ICovXHJcbiAgICBwcml2YXRlIHN0YXJ0UG91cihzcmM6Q3VwLGRzdDpDdXApe1xyXG4gICAgICAgIGRzdC5ub2RlLnpJbmRleCA9IDA7XHJcbiAgICAgICAgZHN0Lm5vZGUucGFyZW50LnpJbmRleCA9IDA7XHJcbiAgICAgICAgc3JjLm5vZGUuekluZGV4ID0gMTA7XHJcbiAgICAgICAgc3JjLm5vZGUucGFyZW50LnpJbmRleCA9IDEwO1xyXG4gICAgICAgIGxldCBzcmNUb3AgPSBzcmMuZ2V0VG9wKCk7XHJcbiAgICAgICAgbGV0IGRzdFB0ID0gY2MudjIoZHN0Lm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIGxldCBkc3RHbG9iYWwgPSBkc3Qubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGRzdFB0KVxyXG4gICAgICAgIGxldCB2aWV3U2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKVxyXG4gICAgICAgIGxldCBpc1JpZ2h0ID0gZHN0R2xvYmFsLng+dmlld1NpemUud2lkdGgqMC41Oy8v5qCH6K6w55uu5qCH5piv5ZCm5Zyo5bGP5bmV5Y+z5L6nXHJcbiAgICAgICAgaWYoTWF0aC5hYnMoZHN0R2xvYmFsLngtdmlld1NpemUud2lkdGgqMC41KTwyKXsvL+ebruagh+WcqOS4remXtFxyXG4gICAgICAgICAgICBsZXQgc3JjUHQgPSBzcmMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKHNyYy5ub2RlLnBvc2l0aW9uKSk7XHJcbiAgICAgICAgICAgIGlzUmlnaHQgPSBzcmNQdC54PHZpZXdTaXplLndpZHRoKjAuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHN0UHQueSArPSA2MCArIGRzdC5ub2RlLmhlaWdodCowLjU7XHJcbiAgICAgICAgbGV0IG9mZnNldFggPSAwLy9kc3Qubm9kZS53aWR0aCowLjUtMjA7XHJcbiAgICAgICAgZHN0UHQueCA9IGRzdFB0LnggKyAoaXNSaWdodD8tb2Zmc2V0WDpvZmZzZXRYKTtcclxuXHJcbiAgICAgICAgZHN0UHQgPSBkc3Qubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGRzdFB0KTtcclxuICAgICAgICBcclxuICAgICAgICAvL+WwhueTtuWPo+iuvue9ruS4uumUmueCuVxyXG4gICAgICAgIHNyYy5zZXRQb3VyQW5jaG9yKGlzUmlnaHQpXHJcbiAgICAgICAgZHN0UHQgPSBzcmMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZHN0UHQpO1xyXG4gICAgICAgIC8vIGNjLmxvZyhcIi0tLS0tLS0tLXNyYy54XCIsc3JjLm5vZGUueCxkc3RQdC54KVxyXG5cclxuICAgICAgICBjb25zdCBmbG93ID0gdGhpcy5fd2F0ZXJGbG93O1xyXG4gICAgICAgIGZsb3cuc2V0TGluZVNjYWxlKHRoaXMubGF5b3V0X3Yubm9kZS5zY2FsZSlcclxuICAgICAgICBjb25zdCBvblBvdXJTdGFydCA9ICgpPT57XHJcbiAgICAgICAgICAgIGxldCBzdGFydFB0ID0gc3JjLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKCkpXHJcbiAgICAgICAgICAgIHN0YXJ0UHQgPSBmbG93Lm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHN0YXJ0UHQpO1xyXG4gICAgICAgICAgICBsZXQgZW5kUHQgPSBjYy52MihzdGFydFB0LngsZHN0LmdldFdhdGVyU3VyZmFjZVBvc1koKSk7XHJcbiAgICAgICAgICAgIGVuZFB0ID0gZmxvdy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlbmRQdCk7XHJcbiAgICAgICAgICAgIGVuZFB0LnggPSBzdGFydFB0LnhcclxuXHJcbiAgICAgICAgICAgIGZsb3cuc3Ryb2tlQ29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKHNyY1RvcC5jb2xvckhleCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmbG93LnBsYXlGbG93QW5pKHN0YXJ0UHQsZW5kUHQsMC4yLGZhbHNlLCgpPT57XHJcbiAgICAgICAgICAgICAgICBkc3Quc3RhcnRBZGRXYXRlcihzcmNUb3AudG9wQ29sb3JJZCxzcmNUb3AudG9wQ29sb3JOdW0sKGN1cDpDdXAsaXNGaW5pc2hlZDpib29sZWFuKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Qb3VyT25lRmluaXNoZWQoc3JjLGRzdCxzcmNUb3AudG9wQ29sb3JJZCxzcmNUb3AudG9wQ29sb3JOdW0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5YCS5a6M5rC05bCx5pS25Zue5Y67XHJcbiAgICAgICAgZnVuY3Rpb24gb25Qb3VyRmluaXNoKCkge1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRQdCA9IHNyYy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigpKVxyXG4gICAgICAgICAgICBzdGFydFB0ID0gZmxvdy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzdGFydFB0KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbmRQdCA9IGNjLnYyKHN0YXJ0UHQueCxkc3QuZ2V0V2F0ZXJTdXJmYWNlUG9zWSh0cnVlKSk7XHJcbiAgICAgICAgICAgIGVuZFB0ID0gZmxvdy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlbmRQdCk7XHJcbiAgICAgICAgICAgIGVuZFB0LnggPSBzdGFydFB0LnhcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZsb3cucGxheUZsb3dBbmkoc3RhcnRQdCxlbmRQdCwwLjIsdHJ1ZSwoKT0+e1xyXG4gICAgICAgICAgICAgICAgZmxvdy5jbGVhcigpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgc3JjLnNldE5vcm1hbEFuY2hvcigpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHB0ID0gKHNyYyBhcyBhbnkpLm9yaWduUHQ7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlQmFjayA9IGNjLnR3ZWVuKHNyYy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuNylcclxuICAgICAgICAgICAgICAgIC50bygwLjUse3g6cHQueCx5OnB0LnksYW5nbGU6MH0se2Vhc2luZzpcInNpbmVPdXRcIn0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYy5ub2RlLnpJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjLm5vZGUucGFyZW50LnpJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBtb3ZlQmFjay5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3JjLm1vdmVUb1BvdXIoZHN0UHQsaXNSaWdodCxvblBvdXJTdGFydC5iaW5kKHRoaXMpLG9uUG91ckZpbmlzaC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRvU2VsZWN0KGN1cDpDdXAsYm9vbDpib29sZWFuKXtcclxuICAgICAgICBsZXQgcHQgPSAoY3VwIGFzIGFueSkub3JpZ25QdDtcclxuICAgICAgICBsZXQgeSA9IHB0LnkrKGJvb2w/Y3VwLm5vZGUuaGVpZ2h0KjAuMjowKTtcclxuICAgICAgICBjYy50d2VlbihjdXAubm9kZSkuc3RvcCgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKGN1cC5ub2RlKS50bygwLjIse3k6eX0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYWN0aW9uczpBcnJheTxBY3Rpb24+ID0gW107XHJcbiAgICAvKirkuIDmrKHlgJLmsLTlrozmiJDvvIjku6XliqDmsLTpgqPkuKrmna/lrZDmsLTpnaLljYfliLDmnIDpq5jkuLrnlYzpmZDvvIkgKi9cclxuICAgIHByaXZhdGUgb25Qb3VyT25lRmluaXNoZWQoZnJvbTpDdXAsdG86Q3VwLGNvbG9ySWQ6bnVtYmVyLG51bTpudW1iZXIpe1xyXG4gICAgICAgIGxldCBmcm9tQ3VwSWR4ID0gdGhpcy5fY3Vwcy5pbmRleE9mKGZyb20pO1xyXG4gICAgICAgIGxldCB0b0N1cElkeCA9IHRoaXMuX2N1cHMuaW5kZXhPZih0byk7XHJcbiAgICAgICAgaWYodGhpcy5fYWN0aW9ucy5sZW5ndGg9PTUpe1xyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb25zLnNoaWZ0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYWN0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgZnJvbTpmcm9tQ3VwSWR4LFxyXG4gICAgICAgICAgICB0bzp0b0N1cElkeCxcclxuICAgICAgICAgICAgY29sb3JJZDpjb2xvcklkLFxyXG4gICAgICAgICAgICBudW06bnVtXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IGlzQWxsRmluaXNoZWQgPSB0aGlzLmNoZWNrSXNBbGxGaW5pc2hlZCgpO1xyXG4gICAgICAgIGlmKGlzQWxsRmluaXNoZWQpe1xyXG4gICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLS3lrozmiJDkuoZcIilcclxuICAgICAgICAgICAgdGhpcy5fbGV2ZWwrKztcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKENPT0tJRV9MRVZFTCx0aGlzLl9sZXZlbCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImxldmVsX2ZpbmlzaFwiKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImRvX3BvdXJcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKENPT0tJRV9MQVNUX0NGRyxKU09OLnN0cmluZ2lmeSh0aGlzLmN1ckNmZykpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShDT09LSUVfQUNUSU9OX0hJU1RPUlksSlNPTi5zdHJpbmdpZnkodGhpcy5fYWN0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBY3Rpb25OdW0oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aW9ucy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5oGi5aSN5LiK5LiA5qyh55qE5pON5L2cICovXHJcbiAgICBwdWJsaWMgdW5kb0FjdGlvbigpe1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSB0aGlzLl9hY3Rpb25zLnBvcCgpO1xyXG4gICAgICAgIGlmKGFjdGlvbj09bnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHtmcm9tLHRvLG51bSxjb2xvcklkfSA9IGFjdGlvbjtcclxuICAgICAgICBsZXQgdG9DdXAgPSB0aGlzLl9jdXBzW3RvXTtcclxuICAgICAgICBsZXQgZnJvbUN1cCA9IHRoaXMuX2N1cHNbZnJvbV07XHJcbiAgICAgICAgaWYodG9DdXAuaXNQb3VyaW5nKCl8fGZyb21DdXAuaXNQb3VyaW5nKCkpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvQ3VwLnJlbW92ZVRvcFdhdGVySW1tZWRpYXRlbHkobnVtKTtcclxuICAgICAgICBmcm9tQ3VwLmFkZFdhdGVySW1tZWRpYXRlbHkoY29sb3JJZCxudW0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIG5leHRMZXZlbCgpe1xyXG4gICAgICAgIHRoaXMuaW5pdENmZygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ3VwcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMZXZlbCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrSXNBbGxGaW5pc2hlZCgpe1xyXG4gICAgICAgIGZvcihsZXQgY3VwIG9mIHRoaXMuX2N1cHMpe1xyXG4gICAgICAgICAgICBpZighY3VwLmNoZWNrSXNGaW5zaGVkKCkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBBY3Rpb257XHJcbiAgICBmcm9tOm51bWJlcixcclxuICAgIHRvOm51bWJlcixcclxuICAgIG51bTpudW1iZXIsXHJcbiAgICBjb2xvcklkOm51bWJlcixcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gd2FpdChzZWM6bnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUscmVqZWN0KSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfSwgc2VjKjEwMDApO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tpbnQodmFsKXtcclxuICAgIGlmKHZhbD09bnVsbCl7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBsZXQgcmV0ID0gcGFyc2VJbnQodmFsKTtcclxuICAgIGlmKHJldD09TmFOKXtcclxuICAgICAgICByZXQgPSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/dialog/dialog_mgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f83d1Upa1H4bIdvTqefGKX', 'dialog_mgr');
// Script/dialog/dialog_mgr.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupMgr = void 0;
var global_node_1 = require("../global_node");
var layer_color_1 = require("../utils/layer_color");
var base_dialog_1 = require("./base_dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
function applyWidget(node) {
    var widget = node.getComponent(cc.Widget);
    if (widget == null) {
        widget = node.addComponent(cc.Widget);
    }
    widget.bottom = 0;
    widget.top = 0;
    widget.left = 0;
    widget.right = 0;
    widget.isAlignBottom = true;
    widget.isAlignTop = true;
    widget.isAlignLeft = true;
    widget.isAlignRight = true;
    widget.updateAlignment();
}
var PopupMgr = /** @class */ (function (_super) {
    __extends(PopupMgr, _super);
    function PopupMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m_popups = []; //存放弹窗
        _this.maskBg = null;
        _this._isMaskOn = false;
        return _this;
    }
    PopupMgr.getInstance = function () {
        var _node = global_node_1.getGlobalNode(global_node_1.GlobalNodeNames.PopuMgr); //挂在常驻节点上
        var ret = _node.getComponent(PopupMgr);
        if (ret == null) {
            applyWidget(_node);
            ret = _node.addComponent(PopupMgr);
            ret.createMaskNode();
        }
        return ret;
    };
    PopupMgr.prototype.onLoad = function () {
    };
    PopupMgr.prototype.onDestroy = function () {
    };
    ///创建蒙版
    PopupMgr.prototype.createMaskNode = function () {
        this.maskBg = new layer_color_1.LayerColor(cc.color(0, 0, 0));
        this.maskBg.opacity = 0;
        this.maskBg.parent = this.node;
        return this.maskBg;
    };
    //显示弹窗
    PopupMgr.prototype.showWindow = function (param, bundleData) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (param == null) {
                            reject();
                            return;
                        }
                        var _prefab;
                        if (param instanceof cc.Prefab) {
                            _prefab = param;
                        }
                        else if (typeof (param) == "string") {
                        }
                        if (_prefab != null) {
                            var popu = _this.createWindowByPrefab.apply(_this, __spreadArrays([_prefab, _prefab.name, false, bundleData], args));
                            resolve(popu);
                        }
                        else {
                            var path_1 = param;
                            if (!path_1) {
                                reject();
                                return;
                            }
                            var popu = PopupMgr.getInstance().getWindowByTag(path_1);
                            if (popu) {
                                popu.refreshView.apply(popu, __spreadArrays([bundleData], args));
                                popu.node.zIndex++;
                                cc.log("========弹窗", popu.node.name, popu.node.zIndex);
                                resolve(popu);
                                return;
                            }
                            var url = path_1;
                            _prefab = cc.resources.get(url, cc.Prefab);
                            if (_prefab) {
                                setTimeout(function () {
                                    var popu = _this.createWindowByPrefab.apply(_this, __spreadArrays([_prefab, path_1, true, bundleData], args));
                                    resolve(popu);
                                });
                            }
                            else {
                                cc.resources.load(url, cc.Prefab, function (error, _prefab) {
                                    if (error) {
                                        cc.error("---------弹窗加载错误", error);
                                        reject();
                                        return;
                                    }
                                    cc.log("---------------load prefab success", path_1);
                                    var popu = _this.createWindowByPrefab.apply(_this, __spreadArrays([_prefab, path_1, true, bundleData], args));
                                    resolve(popu);
                                });
                            }
                        }
                    })];
            });
        });
    };
    //从prefab文件实例化为弹窗节点
    //isPfbRaw,是动态加载的prefab,关闭后释放
    PopupMgr.prototype.createWindowByPrefab = function (_prefab, tag, isPfbRaw, bundleData) {
        var _this = this;
        var args = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            args[_i - 4] = arguments[_i];
        }
        if (!cc.isValid(this)) {
            return null;
        }
        var popu = PopupMgr.getInstance().getWindowByTag(tag);
        if (popu) {
            popu.refreshView.apply(popu, __spreadArrays([bundleData], args));
            return null;
        }
        var node = cc.instantiate(_prefab);
        if (node == null) {
            cc.log("弹窗预制文件不存在");
            return null;
        }
        node.setPosition(0, 0);
        var popup = node.getComponent(base_dialog_1.BaseDialog);
        if (!popup) {
            cc.log("--------error prefab弹窗异常", tag);
            return null;
        }
        popup.initWindow(this, tag, isPfbRaw, function () {
            _this.realShow.apply(_this, __spreadArrays([popup, bundleData], args));
        });
        return popup;
    };
    ///将实例化好的弹窗添加到节点树
    PopupMgr.prototype.realShow = function (popup, bundleData) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        // if(!this._isMaskOn){
        this.maskBg.off(cc.Node.EventType.TOUCH_START, this.onBgTouch, this);
        this.maskBg.on(cc.Node.EventType.TOUCH_START, this.onBgTouch, this);
        if (popup.maskOpacity) {
            var fadetime = popup.style == base_dialog_1.WindowStyle.POPUP ? 0.2 : 0;
            if (cc.director.isPaused()) {
                this.maskBg.opacity = popup.maskOpacity;
            }
            else {
                this.maskBg.fadeTo(fadetime, popup.maskOpacity, 0);
            }
        }
        this._isMaskOn = true;
        // }
        var zOrder = 0;
        if (this.m_popups.length == 0) {
            this.node.emit(PopupMgr.EVT_POPO_OPEN_FRIST);
        }
        else {
            zOrder = this.m_popups[this.m_popups.length - 1].node.zIndex;
        }
        this.maskBg.zIndex = (zOrder);
        this.maskBg.setSiblingIndex(zOrder + 1);
        popup.node.zIndex = zOrder + 1;
        this.node.addChild(popup.node);
        popup.showWindow.apply(popup, __spreadArrays([bundleData], args));
        this.m_popups.push(popup);
    };
    PopupMgr.prototype.onBgTouch = function (event) {
        for (var i = this.m_popups.length - 1; i >= 0; i--) {
            var popup = this.m_popups[i];
            if (cc.isValid(popup.node) && popup.node.active) {
                if (popup.closeByTouchBg && !popup.isPupuAni) {
                    popup.dismiss();
                }
                return;
            }
        }
    };
    /**
     * 返回true表示不往下传递
     */
    PopupMgr.prototype.onBack = function () {
        var ret = false;
        if (!cc.isValid(this) || !this.node.active)
            return ret;
        for (var i = this.m_popups.length - 1; i >= 0; i--) {
            do {
                var popup = this.m_popups[i];
                if (!cc.isValid(popup.node))
                    break;
                if (!popup.node.active) {
                    break;
                }
                else if (!popup.closeByTouchBack || popup.isPupuAni) { //有弹窗，但是这个弹窗不响应返回键
                    ret = true;
                }
                else {
                    ret = true;
                    popup.dismiss();
                }
            } while (false);
            if (ret)
                break;
        }
        return ret;
    };
    PopupMgr.prototype.onHideEnd = function (popup) {
        for (var i = 0; i < this.m_popups.length; i++) {
            if (this.m_popups[i] === popup) {
                this.m_popups.splice(i, 1);
                popup.onPreDestroy();
                popup.node.destroy();
                break;
            }
        }
        if (this.m_popups.length == 0) {
            this.maskBg.zIndex = (0);
        }
        else {
            var zOrder = this.m_popups[this.m_popups.length - 1].node.zIndex - 1;
            if (zOrder < 0) {
                zOrder = 0;
            }
            this.maskBg.zIndex = (zOrder);
            this.m_popups[this.m_popups.length - 1].node.zIndex = (zOrder + 1);
        }
        if (this.m_popups.length == 0) {
            if (cc.director.isPaused()) {
                this.maskBg.opacity = 0;
            }
            else {
                this.maskBg.fadeOut(popup.style == base_dialog_1.WindowStyle.POPUP ? 0.2 : 0.1);
            }
            this.maskBg.off(cc.Node.EventType.TOUCH_START, this.onBgTouch, this);
            this.node.emit(PopupMgr.EVT_POPO_CLOSE_LAST);
            this._isMaskOn = false;
        }
    };
    PopupMgr.prototype.getVisibleCount = function () {
        var num = 0;
        for (var _i = 0, _a = this.m_popups; _i < _a.length; _i++) {
            var _popup = _a[_i];
            var node = _popup.node;
            if (cc.isValid(node) && node.active) {
                ++num;
            }
        }
        return num;
    };
    PopupMgr.prototype.closeWindowByTag = function (tag, noAnim) {
        if (noAnim === void 0) { noAnim = true; }
        for (var _i = 0, _a = this.m_popups; _i < _a.length; _i++) {
            var popup = _a[_i];
            if (cc.isValid(popup.node) && popup.tag == tag) {
                popup.dismiss(noAnim);
                break;
            }
        }
    };
    PopupMgr.prototype.getWindowByTag = function (tag) {
        for (var _i = 0, _a = this.m_popups; _i < _a.length; _i++) {
            var popup = _a[_i];
            if (cc.isValid(popup.node) && popup.tag == tag) {
                return popup;
            }
        }
        return null;
    };
    /**移除所有弹窗 */
    PopupMgr.prototype.removeAllPopup = function () {
        while (this.m_popups.length > 0) {
            var popup = this.m_popups[0];
            popup.dismiss(true);
        }
    };
    PopupMgr.EVT_POPO_OPEN_FRIST = "EVT_POPO_OPEN_FRIST";
    PopupMgr.EVT_POPO_CLOSE_LAST = "EVT_POPO_CLOSE_LAST";
    __decorate([
        property
    ], PopupMgr.prototype, "m_popups", void 0);
    return PopupMgr;
}(cc.Component));
exports.PopupMgr = PopupMgr;
base_dialog_1.BaseDialog.create = function (pfb, param) {
    var _a;
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return (_a = PopupMgr.getInstance()).showWindow.apply(_a, __spreadArrays([pfb, param], args));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkaWFsb2dcXGRpYWxvZ19tZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBZ0U7QUFDaEUsb0RBQWtEO0FBQ2xELDZDQUF3RDtBQVdsRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQyxTQUFTLFdBQVcsQ0FBQyxJQUFZO0lBQzdCLElBQUksTUFBTSxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLElBQUcsTUFBTSxJQUFFLElBQUksRUFBQztRQUNaLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6QztJQUNELE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDaEIsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDakIsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDNUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFFM0IsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUFFRDtJQUE4Qiw0QkFBWTtJQUExQztRQUFBLHFFQXdQQztRQTFPRyxjQUFRLEdBQXFCLEVBQUUsQ0FBQSxDQUFBLE1BQU07UUFTN0IsWUFBTSxHQUFjLElBQUksQ0FBQztRQTBGekIsZUFBUyxHQUFHLEtBQUssQ0FBQzs7SUF1STlCLENBQUM7SUFyUFUsb0JBQVcsR0FBbEI7UUFDSSxJQUFJLEtBQUssR0FBRywyQkFBYSxDQUFDLDZCQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxTQUFTO1FBQzVELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdEMsSUFBRyxHQUFHLElBQUUsSUFBSSxFQUFDO1lBQ1QsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEdBQUcsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ2xDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUlELHlCQUFNLEdBQU47SUFFQSxDQUFDO0lBQ0QsNEJBQVMsR0FBVDtJQUVBLENBQUM7SUFHRCxPQUFPO0lBQ0MsaUNBQWMsR0FBdEI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksd0JBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU07SUFDQSw2QkFBVSxHQUFoQixVQUFvQixLQUFzQixFQUFDLFVBQWlCO1FBQUMsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7dUNBQUUsT0FBTzs7O2dCQUN6RSxzQkFBTyxJQUFJLE9BQU8sQ0FBYSxVQUFDLE9BQU8sRUFBQyxNQUFNO3dCQUMxQyxJQUFHLEtBQUssSUFBRSxJQUFJLEVBQUM7NEJBQ1gsTUFBTSxFQUFFLENBQUM7NEJBQ1QsT0FBTzt5QkFDVjt3QkFDRCxJQUFJLE9BQWlCLENBQUM7d0JBQ3RCLElBQUcsS0FBSyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUM7NEJBQzFCLE9BQU8sR0FBRyxLQUFLLENBQUM7eUJBQ25COzZCQUFLLElBQUcsT0FBTSxDQUFDLEtBQUssQ0FBQyxJQUFFLFFBQVEsRUFBRTt5QkFFakM7d0JBQ0QsSUFBRyxPQUFPLElBQUUsSUFBSSxFQUFDOzRCQUNiLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxvQkFBb0IsT0FBekIsS0FBSSxrQkFBc0IsT0FBTyxFQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLFVBQVUsR0FBSSxJQUFJLEVBQUMsQ0FBQzs0QkFDcEYsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNqQjs2QkFBSTs0QkFDRCxJQUFJLE1BQUksR0FBRyxLQUFlLENBQUM7NEJBQzNCLElBQUcsQ0FBQyxNQUFJLEVBQUM7Z0NBQ0wsTUFBTSxFQUFFLENBQUM7Z0NBQ1QsT0FBTzs2QkFDVjs0QkFDRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQUksQ0FBQyxDQUFDOzRCQUN2RCxJQUFHLElBQUksRUFBQztnQ0FDSixJQUFJLENBQUMsV0FBVyxPQUFoQixJQUFJLGtCQUFhLFVBQVUsR0FBSSxJQUFJLEdBQUU7Z0NBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0NBQ25CLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Z0NBQ3BELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDZCxPQUFPOzZCQUNWOzRCQUNELElBQUksR0FBRyxHQUFHLE1BQUksQ0FBQzs0QkFDZixPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxNQUFNLENBQWMsQ0FBQzs0QkFDdkQsSUFBRyxPQUFPLEVBQUM7Z0NBQ1AsVUFBVSxDQUFDO29DQUNQLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxvQkFBb0IsT0FBekIsS0FBSSxrQkFBc0IsT0FBTyxFQUFDLE1BQUksRUFBQyxJQUFJLEVBQUMsVUFBVSxHQUFJLElBQUksRUFBQyxDQUFDO29DQUMzRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ2xCLENBQUMsQ0FBQyxDQUFBOzZCQUNMO2lDQUFJO2dDQUNELEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsTUFBTSxFQUFDLFVBQUMsS0FBSyxFQUFDLE9BQWlCO29DQUNwRCxJQUFHLEtBQUssRUFBQzt3Q0FDTCxFQUFFLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFDLEtBQUssQ0FBQyxDQUFBO3dDQUNqQyxNQUFNLEVBQUUsQ0FBQzt3Q0FDVCxPQUFPO3FDQUNWO29DQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEVBQUMsTUFBSSxDQUFDLENBQUE7b0NBQ2pELElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxvQkFBb0IsT0FBekIsS0FBSSxrQkFBc0IsT0FBTyxFQUFDLE1BQUksRUFBQyxJQUFJLEVBQUMsVUFBVSxHQUFJLElBQUksRUFBQyxDQUFDO29DQUMzRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ2xCLENBQUMsQ0FBQyxDQUFDOzZCQUNOO3lCQUVKO29CQUNMLENBQUMsQ0FBQyxFQUFDOzs7S0FDTjtJQUNELG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDckIsdUNBQW9CLEdBQTVCLFVBQTZCLE9BQWlCLEVBQUMsR0FBVSxFQUFDLFFBQWdCLEVBQUMsVUFBYztRQUF6RixpQkF3QkM7UUF4QnlGLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQzdGLElBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELElBQUcsSUFBSSxFQUFDO1lBQ0osSUFBSSxDQUFDLFdBQVcsT0FBaEIsSUFBSSxrQkFBYSxVQUFVLEdBQUksSUFBSSxHQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUcsSUFBSSxJQUFFLElBQUksRUFBQztZQUNWLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQVUsQ0FBQyxDQUFDO1FBQzFDLElBQUcsQ0FBQyxLQUFLLEVBQUM7WUFDTixFQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDO1lBQy9CLEtBQUksQ0FBQyxRQUFRLE9BQWIsS0FBSSxrQkFBVSxLQUFLLEVBQUMsVUFBVSxHQUFJLElBQUksR0FBRTtRQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUM7SUFHRCxpQkFBaUI7SUFDVCwyQkFBUSxHQUFoQixVQUFpQixLQUFnQixFQUFDLFVBQWM7UUFBQyxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztRQUNwRCx1QkFBdUI7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBRyxLQUFLLENBQUMsV0FBVyxFQUFDO1lBQ2pCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLElBQUUseUJBQVcsQ0FBQyxLQUFLLENBQUEsQ0FBQyxDQUFBLEdBQUcsQ0FBQSxDQUFDLENBQUEsQ0FBQyxDQUFDO1lBQ3BELElBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBQztnQkFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzthQUMzQztpQkFBSTtnQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUMsS0FBSyxDQUFDLFdBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQzthQUNwRDtTQUVKO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSTtRQUNKLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUUsQ0FBQyxFQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2hEO2FBQUk7WUFDRCxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzlEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUE7UUFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsS0FBSyxDQUFDLFVBQVUsT0FBaEIsS0FBSyxrQkFBWSxVQUFVLEdBQUksSUFBSSxHQUFFO1FBRXJDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsS0FBeUI7UUFDL0IsS0FBSSxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQztZQUN0QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7Z0JBQ3pDLElBQUcsS0FBSyxDQUFDLGNBQWMsSUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUM7b0JBQ3RDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDbkI7Z0JBQ0QsT0FBTzthQUNWO1NBQ0o7SUFDTCxDQUFDO0lBQ0Q7O09BRUc7SUFDSCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFBO1FBQ2YsSUFBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDbkMsT0FBTyxHQUFHLENBQUM7UUFDZixLQUFJLElBQUksQ0FBQyxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxDQUFDLElBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQ3RDLEdBQUU7Z0JBQ0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDdEIsTUFBTTtnQkFDVixJQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7b0JBQ2xCLE1BQU07aUJBQ1Q7cUJBQUssSUFBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsSUFBRSxLQUFLLENBQUMsU0FBUyxFQUFDLEVBQUMsa0JBQWtCO29CQUNqRSxHQUFHLEdBQUcsSUFBSSxDQUFDO2lCQUNkO3FCQUFJO29CQUNELEdBQUcsR0FBRyxJQUFJLENBQUM7b0JBQ1gsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNuQjthQUNKLFFBQU0sS0FBSyxFQUFDO1lBQ2IsSUFBRyxHQUFHO2dCQUNGLE1BQU07U0FDYjtRQUNELE9BQU8sR0FBRyxDQUFBO0lBQ2QsQ0FBQztJQUNELDRCQUFTLEdBQVQsVUFBVSxLQUFnQjtRQUN0QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDckMsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFHLEtBQUssRUFBQztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3JCLE1BQUs7YUFDUjtTQUNKO1FBQ0QsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBRSxDQUFDLEVBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUMzQjthQUFJO1lBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztZQUNqRSxJQUFHLE1BQU0sR0FBQyxDQUFDLEVBQUM7Z0JBQ1IsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNkO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUE7U0FDakU7UUFHRCxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFFLENBQUMsRUFBQztZQUN2QixJQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUM7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzthQUMzQjtpQkFBSTtnQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFFLHlCQUFXLENBQUMsS0FBSyxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUEsQ0FBQyxDQUFBLEdBQUcsQ0FBQyxDQUFDO2FBQy9EO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBQ00sa0NBQWUsR0FBdEI7UUFDSSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixLQUFrQixVQUFhLEVBQWIsS0FBQSxJQUFJLENBQUMsUUFBUSxFQUFiLGNBQWEsRUFBYixJQUFhLEVBQUM7WUFBNUIsSUFBSSxNQUFNLFNBQUE7WUFDVixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUM3QixFQUFFLEdBQUcsQ0FBQzthQUNUO1NBQ0o7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsR0FBTyxFQUFDLE1BQXFCO1FBQXJCLHVCQUFBLEVBQUEsYUFBcUI7UUFDMUMsS0FBaUIsVUFBYSxFQUFiLEtBQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixjQUFhLEVBQWIsSUFBYSxFQUFDO1lBQTNCLElBQUksS0FBSyxTQUFBO1lBQ1QsSUFBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBRSxLQUFLLENBQUMsR0FBRyxJQUFFLEdBQUcsRUFBQztnQkFDdEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEIsTUFBTTthQUNUO1NBQ0o7SUFDTCxDQUFDO0lBQ0QsaUNBQWMsR0FBZCxVQUFlLEdBQU87UUFDbEIsS0FBaUIsVUFBYSxFQUFiLEtBQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixjQUFhLEVBQWIsSUFBYSxFQUFDO1lBQTNCLElBQUksS0FBSyxTQUFBO1lBQ1QsSUFBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBRSxLQUFLLENBQUMsR0FBRyxJQUFFLEdBQUcsRUFBQztnQkFDdEMsT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxZQUFZO0lBQ1osaUNBQWMsR0FBZDtRQUNJLE9BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDO1lBQ3pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUF0UE0sNEJBQW1CLEdBQUcscUJBQXFCLENBQUM7SUFDNUMsNEJBQW1CLEdBQUcscUJBQXFCLENBQUM7SUFZbkQ7UUFEQyxRQUFROzhDQUNzQjtJQTBPbkMsZUFBQztDQXhQRCxBQXdQQyxDQXhQNkIsRUFBRSxDQUFDLFNBQVMsR0F3UHpDO0FBeFBZLDRCQUFRO0FBMFByQix3QkFBVSxDQUFDLE1BQU0sR0FBRyxVQUFZLEdBQW9CLEVBQUMsS0FBVzs7SUFBQyxjQUFPO1NBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztRQUFQLDZCQUFPOztJQUNwRSxPQUFPLENBQUEsS0FBQSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUEsQ0FBQyxVQUFVLDJCQUFDLEdBQUcsRUFBQyxLQUFLLEdBQUksSUFBSSxHQUFDO0FBQy9ELENBQUMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEdsb2JhbE5vZGUsIEdsb2JhbE5vZGVOYW1lcyB9IGZyb20gXCIuLi9nbG9iYWxfbm9kZVwiO1xyXG5pbXBvcnQgeyBMYXllckNvbG9yIH0gZnJvbSBcIi4uL3V0aWxzL2xheWVyX2NvbG9yXCI7XHJcbmltcG9ydCB7IEJhc2VEaWFsb2csIFdpbmRvd1N0eWxlIH0gZnJvbSBcIi4vYmFzZV9kaWFsb2dcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNob3dXaW5kb3dBcmdze1xyXG4gICAgc3R5bGU/OldpbmRvd1N0eWxlLC8v5by556qX6aOO5qC8XHJcbiAgICBtYXNrT3BhY2l0eT86bnVtYmVyLC8v6buR6Imy5Y2K6YCP5piO6YGu572p55qE6YCP5piO5bqmXHJcbiAgICBcclxuICAgIGNsb3NlQnlUb3VjaEJnPzpib29sZWFuLC8v5piv5ZCm54K55Ye76IOM5ZCO6ZqQ6JePXHJcbiAgICBjbG9zZUJ5VG91Y2hCYWNrPzpib29sZWFuLC8v5piv5ZCm54K55Ye76L+U5Zue6ZSu6ZqQ6JePXHJcbn1cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFwcGx5V2lkZ2V0KG5vZGU6Y2MuTm9kZSl7XHJcbiAgICBsZXQgd2lkZ2V0ID0gIG5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICBpZih3aWRnZXQ9PW51bGwpe1xyXG4gICAgICAgIHdpZGdldCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICB9XHJcbiAgICB3aWRnZXQuYm90dG9tID0gMDtcclxuICAgIHdpZGdldC50b3AgPSAwO1xyXG4gICAgd2lkZ2V0LmxlZnQgPSAwO1xyXG4gICAgd2lkZ2V0LnJpZ2h0ID0gMDtcclxuICAgIHdpZGdldC5pc0FsaWduQm90dG9tID0gdHJ1ZTtcclxuICAgIHdpZGdldC5pc0FsaWduVG9wID0gdHJ1ZTtcclxuICAgIHdpZGdldC5pc0FsaWduTGVmdCA9IHRydWU7XHJcbiAgICB3aWRnZXQuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcclxuXHJcbiAgICB3aWRnZXQudXBkYXRlQWxpZ25tZW50KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cE1nciBleHRlbmRzIGNjLkNvbXBvbmVudHtcclxuICAgIHN0YXRpYyBFVlRfUE9QT19PUEVOX0ZSSVNUID0gXCJFVlRfUE9QT19PUEVOX0ZSSVNUXCI7XHJcbiAgICBzdGF0aWMgRVZUX1BPUE9fQ0xPU0VfTEFTVCA9IFwiRVZUX1BPUE9fQ0xPU0VfTEFTVFwiO1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6UG9wdXBNZ3J7XHJcbiAgICAgICAgbGV0IF9ub2RlID0gZ2V0R2xvYmFsTm9kZShHbG9iYWxOb2RlTmFtZXMuUG9wdU1ncik7Ly/mjILlnKjluLjpqbvoioLngrnkuIpcclxuICAgICAgICBsZXQgcmV0ID0gX25vZGUuZ2V0Q29tcG9uZW50KFBvcHVwTWdyKVxyXG4gICAgICAgIGlmKHJldD09bnVsbCl7XHJcbiAgICAgICAgICAgIGFwcGx5V2lkZ2V0KF9ub2RlKTtcclxuICAgICAgICAgICAgcmV0ID0gX25vZGUuYWRkQ29tcG9uZW50KFBvcHVwTWdyKVxyXG4gICAgICAgICAgICByZXQuY3JlYXRlTWFza05vZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbV9wb3B1cHM6QXJyYXk8QmFzZURpYWxvZz4gPSBbXS8v5a2Y5pS+5by556qXXHJcblxyXG4gICAgb25Mb2FkKCl7XHJcblxyXG4gICAgfVxyXG4gICAgb25EZXN0cm95KCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWFza0JnOkxheWVyQ29sb3IgPSBudWxsO1xyXG4gICAgLy8v5Yib5bu66JKZ54mIXHJcbiAgICBwcml2YXRlIGNyZWF0ZU1hc2tOb2RlKCk6TGF5ZXJDb2xvcntcclxuICAgICAgICB0aGlzLm1hc2tCZyA9IG5ldyBMYXllckNvbG9yKGNjLmNvbG9yKDAsMCwwKSk7XHJcbiAgICAgICAgdGhpcy5tYXNrQmcub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXNrQmcucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hc2tCZztcclxuICAgIH1cclxuXHJcbiAgICAvL+aYvuekuuW8ueeql1xyXG4gICAgYXN5bmMgc2hvd1dpbmRvdzxUPihwYXJhbTpzdHJpbmd8Y2MuUHJlZmFiLGJ1bmRsZURhdGE/OlR8YW55LC4uLmFyZ3MpOlByb21pc2U8QmFzZURpYWxvZz57XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEJhc2VEaWFsb2c+KChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgaWYocGFyYW09PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IF9wcmVmYWI6Y2MuUHJlZmFiO1xyXG4gICAgICAgICAgICBpZihwYXJhbSBpbnN0YW5jZW9mIGNjLlByZWZhYil7XHJcbiAgICAgICAgICAgICAgICBfcHJlZmFiID0gcGFyYW07XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHR5cGVvZihwYXJhbSk9PVwic3RyaW5nXCIgKXtcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKF9wcmVmYWIhPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvcHUgPSB0aGlzLmNyZWF0ZVdpbmRvd0J5UHJlZmFiKF9wcmVmYWIsX3ByZWZhYi5uYW1lLGZhbHNlLGJ1bmRsZURhdGEsLi4uYXJncyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHBvcHUpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxldCBwYXRoID0gcGFyYW0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgaWYoIXBhdGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBwb3B1ID0gUG9wdXBNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRXaW5kb3dCeVRhZyhwYXRoKTtcclxuICAgICAgICAgICAgICAgIGlmKHBvcHUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHUucmVmcmVzaFZpZXcoYnVuZGxlRGF0YSwuLi5hcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1Lm5vZGUuekluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiPT09PT09PT3lvLnnqpdcIixwb3B1Lm5vZGUubmFtZSxwb3B1Lm5vZGUuekluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocG9wdSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHBhdGg7XHJcbiAgICAgICAgICAgICAgICBfcHJlZmFiID0gY2MucmVzb3VyY2VzLmdldCh1cmwsY2MuUHJlZmFiKSBhcyBjYy5QcmVmYWI7XHJcbiAgICAgICAgICAgICAgICBpZihfcHJlZmFiKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3B1ID0gdGhpcy5jcmVhdGVXaW5kb3dCeVByZWZhYihfcHJlZmFiLHBhdGgsdHJ1ZSxidW5kbGVEYXRhLC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBvcHUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsY2MuUHJlZmFiLChlcnJvcixfcHJlZmFiOmNjLlByZWZhYik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCItLS0tLS0tLS3lvLnnqpfliqDovb3plJnor69cIixlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLWxvYWQgcHJlZmFiIHN1Y2Nlc3NcIixwYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9wdSA9IHRoaXMuY3JlYXRlV2luZG93QnlQcmVmYWIoX3ByZWZhYixwYXRoLHRydWUsYnVuZGxlRGF0YSwuLi5hcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwb3B1KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxuICAgIC8v5LuOcHJlZmFi5paH5Lu25a6e5L6L5YyW5Li65by556qX6IqC54K5XHJcbiAgICAvL2lzUGZiUmF3LOaYr+WKqOaAgeWKoOi9veeahHByZWZhYizlhbPpl63lkI7ph4rmlL5cclxuICAgIHByaXZhdGUgY3JlYXRlV2luZG93QnlQcmVmYWIoX3ByZWZhYjpjYy5QcmVmYWIsdGFnOnN0cmluZyxpc1BmYlJhdzpib29sZWFuLGJ1bmRsZURhdGE6YW55LC4uLmFyZ3MpOkJhc2VEaWFsb2d7XHJcbiAgICAgICAgaWYoIWNjLmlzVmFsaWQodGhpcykpe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBvcHUgPSBQb3B1cE1nci5nZXRJbnN0YW5jZSgpLmdldFdpbmRvd0J5VGFnKHRhZyk7XHJcbiAgICAgICAgaWYocG9wdSl7XHJcbiAgICAgICAgICAgIHBvcHUucmVmcmVzaFZpZXcoYnVuZGxlRGF0YSwuLi5hcmdzKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUoX3ByZWZhYik7XHJcbiAgICAgICAgaWYobm9kZT09bnVsbCl7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuW8ueeql+mihOWItuaWh+S7tuS4jeWtmOWcqFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwwKTtcclxuICAgICAgICBsZXQgcG9wdXAgPSBub2RlLmdldENvbXBvbmVudChCYXNlRGlhbG9nKTtcclxuICAgICAgICBpZighcG9wdXApe1xyXG4gICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLWVycm9yIHByZWZhYuW8ueeql+W8guW4uFwiLHRhZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwb3B1cC5pbml0V2luZG93KHRoaXMsdGFnLGlzUGZiUmF3LCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucmVhbFNob3cocG9wdXAsYnVuZGxlRGF0YSwuLi5hcmdzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcG9wdXBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc01hc2tPbiA9IGZhbHNlO1xyXG4gICAgLy8v5bCG5a6e5L6L5YyW5aW955qE5by556qX5re75Yqg5Yiw6IqC54K55qCRXHJcbiAgICBwcml2YXRlIHJlYWxTaG93KHBvcHVwOkJhc2VEaWFsb2csYnVuZGxlRGF0YTphbnksLi4uYXJncyl7XHJcbiAgICAgICAgLy8gaWYoIXRoaXMuX2lzTWFza09uKXtcclxuICAgICAgICAgICAgdGhpcy5tYXNrQmcub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMub25CZ1RvdWNoLHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tCZy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLm9uQmdUb3VjaCx0aGlzKTtcclxuICAgICAgICAgICAgaWYocG9wdXAubWFza09wYWNpdHkpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGZhZGV0aW1lID0gcG9wdXAuc3R5bGU9PVdpbmRvd1N0eWxlLlBPUFVQPzAuMjowO1xyXG4gICAgICAgICAgICAgICAgaWYoY2MuZGlyZWN0b3IuaXNQYXVzZWQoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrQmcub3BhY2l0eSA9IHBvcHVwLm1hc2tPcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrQmcuZmFkZVRvKGZhZGV0aW1lLHBvcHVwLm1hc2tPcGFjaXR5LDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX2lzTWFza09uID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IHpPcmRlciA9IDA7XHJcbiAgICAgICAgaWYodGhpcy5tX3BvcHVwcy5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChQb3B1cE1nci5FVlRfUE9QT19PUEVOX0ZSSVNUKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgek9yZGVyID0gdGhpcy5tX3BvcHVwc1t0aGlzLm1fcG9wdXBzLmxlbmd0aC0xXS5ub2RlLnpJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXNrQmcuekluZGV4ID0gKHpPcmRlcilcclxuICAgICAgICB0aGlzLm1hc2tCZy5zZXRTaWJsaW5nSW5kZXgoek9yZGVyKzEpXHJcbiAgICAgICAgcG9wdXAubm9kZS56SW5kZXggPSB6T3JkZXIrMTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocG9wdXAubm9kZSk7XHJcbiAgICAgICAgcG9wdXAuc2hvd1dpbmRvdyhidW5kbGVEYXRhLC4uLmFyZ3MpO1xyXG5cclxuICAgICAgICB0aGlzLm1fcG9wdXBzLnB1c2gocG9wdXApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmdUb3VjaChldmVudDpjYy5FdmVudC5FdmVudFRvdWNoKXtcclxuICAgICAgICBmb3IobGV0IGk9dGhpcy5tX3BvcHVwcy5sZW5ndGgtMTtpPj0wO2ktLSl7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cCA9IHRoaXMubV9wb3B1cHNbaV07XHJcbiAgICAgICAgICAgIGlmKGNjLmlzVmFsaWQocG9wdXAubm9kZSkmJnBvcHVwLm5vZGUuYWN0aXZlKXtcclxuICAgICAgICAgICAgICAgIGlmKHBvcHVwLmNsb3NlQnlUb3VjaEJnJiYhcG9wdXAuaXNQdXB1QW5pKXtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cC5kaXNtaXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnnRydWXooajnpLrkuI3lvoDkuIvkvKDpgJJcclxuICAgICAqL1xyXG4gICAgb25CYWNrKCl7XHJcbiAgICAgICAgbGV0IHJldCA9IGZhbHNlXHJcbiAgICAgICAgaWYoIWNjLmlzVmFsaWQodGhpcyl8fCF0aGlzLm5vZGUuYWN0aXZlKVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIGZvcihsZXQgaT10aGlzLm1fcG9wdXBzLmxlbmd0aC0xO2k+PTA7aS0tKXtcclxuICAgICAgICAgICAgZG97XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9wdXAgPSB0aGlzLm1fcG9wdXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYoIWNjLmlzVmFsaWQocG9wdXAubm9kZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZighcG9wdXAubm9kZS5hY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoIXBvcHVwLmNsb3NlQnlUb3VjaEJhY2t8fHBvcHVwLmlzUHVwdUFuaSl7Ly/mnInlvLnnqpfvvIzkvYbmmK/ov5nkuKrlvLnnqpfkuI3lk43lupTov5Tlm57plK5cclxuICAgICAgICAgICAgICAgICAgICByZXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cC5kaXNtaXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH13aGlsZShmYWxzZSlcclxuICAgICAgICAgICAgaWYocmV0KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXRcclxuICAgIH1cclxuICAgIG9uSGlkZUVuZChwb3B1cDpCYXNlRGlhbG9nKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwO2k8dGhpcy5tX3BvcHVwcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5tX3BvcHVwc1tpXT09PXBvcHVwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9wb3B1cHMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBwb3B1cC5vblByZURlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHBvcHVwLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLm1fcG9wdXBzLmxlbmd0aD09MCl7XHJcbiAgICAgICAgICAgIHRoaXMubWFza0JnLnpJbmRleCA9ICgwKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgek9yZGVyID0gdGhpcy5tX3BvcHVwc1t0aGlzLm1fcG9wdXBzLmxlbmd0aC0xXS5ub2RlLnpJbmRleC0xO1xyXG4gICAgICAgICAgICBpZih6T3JkZXI8MCl7XHJcbiAgICAgICAgICAgICAgICB6T3JkZXIgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWFza0JnLnpJbmRleCA9ICh6T3JkZXIpO1xyXG4gICAgICAgICAgICB0aGlzLm1fcG9wdXBzW3RoaXMubV9wb3B1cHMubGVuZ3RoLTFdLm5vZGUuekluZGV4ID0gKHpPcmRlcisxKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaWYodGhpcy5tX3BvcHVwcy5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgICBpZihjYy5kaXJlY3Rvci5pc1BhdXNlZCgpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFza0JnLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFza0JnLmZhZGVPdXQocG9wdXAuc3R5bGU9PVdpbmRvd1N0eWxlLlBPUFVQPzAuMjowLjEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWFza0JnLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLm9uQmdUb3VjaCx0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoUG9wdXBNZ3IuRVZUX1BPUE9fQ0xPU0VfTEFTVCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzTWFza09uID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFZpc2libGVDb3VudCgpOm51bWJlcntcclxuICAgICAgICBsZXQgbnVtID0gMDtcclxuICAgICAgICBmb3IobGV0IF9wb3B1cCBvZiB0aGlzLm1fcG9wdXBzKXtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBfcG9wdXAubm9kZTtcclxuICAgICAgICAgICAgaWYoY2MuaXNWYWxpZChub2RlKSYmbm9kZS5hY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgKytudW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH1cclxuICAgIGNsb3NlV2luZG93QnlUYWcodGFnOmFueSxub0FuaW06Ym9vbGVhbiA9IHRydWUpe1xyXG4gICAgICAgIGZvcihsZXQgcG9wdXAgb2YgdGhpcy5tX3BvcHVwcyl7XHJcbiAgICAgICAgICAgIGlmKGNjLmlzVmFsaWQocG9wdXAubm9kZSkmJnBvcHVwLnRhZz09dGFnKXtcclxuICAgICAgICAgICAgICAgIHBvcHVwLmRpc21pc3Mobm9BbmltKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0V2luZG93QnlUYWcodGFnOmFueSk6QmFzZURpYWxvZ3tcclxuICAgICAgICBmb3IobGV0IHBvcHVwIG9mIHRoaXMubV9wb3B1cHMpe1xyXG4gICAgICAgICAgICBpZihjYy5pc1ZhbGlkKHBvcHVwLm5vZGUpJiZwb3B1cC50YWc9PXRhZyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9wdXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICAvKirnp7vpmaTmiYDmnInlvLnnqpcgKi9cclxuICAgIHJlbW92ZUFsbFBvcHVwKCl7XHJcbiAgICAgICAgd2hpbGUodGhpcy5tX3BvcHVwcy5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cCA9IHRoaXMubV9wb3B1cHNbMF07XHJcbiAgICAgICAgICAgIHBvcHVwLmRpc21pc3ModHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5CYXNlRGlhbG9nLmNyZWF0ZSA9IGZ1bmN0aW9uPFQ+KHBmYjpzdHJpbmd8Y2MuUHJlZmFiLHBhcmFtOlR8YW55LC4uLmFyZ3MpOlByb21pc2U8QmFzZURpYWxvZz4ge1xyXG4gICAgcmV0dXJuIFBvcHVwTWdyLmdldEluc3RhbmNlKCkuc2hvd1dpbmRvdyhwZmIscGFyYW0sLi4uYXJncylcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/utils/function.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e44fb/QXXZDuo/DYQQGIFkr', 'function');
// Script/utils/function.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createColorSpriteFrame = exports.createTexture = void 0;
function createTexture(color, size) {
    if (color === void 0) { color = cc.color(255, 255, 255, 255); }
    if (size === void 0) { size = cc.size(6, 6); }
    var width = size.width;
    var height = size.height;
    var tex = new cc.Texture2D();
    var buf = new ArrayBuffer(width * height * 4);
    var arr = new Uint8Array(buf);
    arr.fill(0);
    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            var idx = (i * height + j) * 4;
            arr[idx] = color.r;
            arr[idx + 1] = color.g;
            arr[idx + 2] = color.b;
            arr[idx + 3] = color.a;
            var k = 0;
        }
    }
    tex.initWithData(arr, cc.Texture2D.PixelFormat.RGBA8888, width, height);
    return tex;
}
exports.createTexture = createTexture;
var _texture = null;
function createColorSpriteFrame(rect) {
    if (rect === void 0) { rect = null; }
    if (_texture == null) {
        _texture = createTexture();
    }
    rect = rect || cc.rect(0, 0, cc.view.getVisibleSize().width, cc.view.getVisibleSize().height);
    var spriteFrame = new cc.SpriteFrame(_texture, rect);
    return spriteFrame;
}
exports.createColorSpriteFrame = createColorSpriteFrame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx1dGlsc1xcZnVuY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBZ0IsYUFBYSxDQUFDLEtBQXdDLEVBQUMsSUFBeUI7SUFBbEUsc0JBQUEsRUFBQSxRQUFlLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO0lBQUMscUJBQUEsRUFBQSxPQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3ZCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDekIsSUFBSSxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDN0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxHQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxJQUFJLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU5QixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ1gsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLEtBQUssRUFBQyxDQUFDLEVBQUUsRUFBQztRQUNwQixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQ3JCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkIsR0FBRyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNyQixHQUFHLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7S0FDSjtJQUNELEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFdkUsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBckJELHNDQXFCQztBQUdELElBQUksUUFBUSxHQUFnQixJQUFJLENBQUM7QUFDakMsU0FBZ0Isc0JBQXNCLENBQUMsSUFBaUI7SUFBakIscUJBQUEsRUFBQSxXQUFpQjtJQUNwRCxJQUFHLFFBQVEsSUFBRSxJQUFJLEVBQUM7UUFDZCxRQUFRLEdBQUcsYUFBYSxFQUFFLENBQUE7S0FDN0I7SUFDRCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNGLElBQUksV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkQsT0FBTyxXQUFXLENBQUM7QUFDdkIsQ0FBQztBQVBELHdEQU9DIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXh0dXJlKGNvbG9yOmNjLkNvbG9yPWNjLmNvbG9yKDI1NSwyNTUsMjU1LDI1NSksc2l6ZTpjYy5TaXplPWNjLnNpemUoNiw2KSkge1xyXG4gICAgbGV0IHdpZHRoID0gc2l6ZS53aWR0aDtcclxuICAgIGxldCBoZWlnaHQgPSBzaXplLmhlaWdodDtcclxuICAgIGxldCB0ZXggPSBuZXcgY2MuVGV4dHVyZTJEKCk7XHJcbiAgICBsZXQgYnVmID0gbmV3IEFycmF5QnVmZmVyKHdpZHRoKmhlaWdodCo0KTtcclxuICAgIGxldCBhcnIgPSBuZXcgVWludDhBcnJheShidWYpO1xyXG5cclxuICAgIGFyci5maWxsKDApXHJcbiAgICBmb3IobGV0IGk9MDtpPHdpZHRoO2krKyl7XHJcbiAgICAgICAgZm9yKGxldCBqPTA7ajxoZWlnaHQ7aisrKXtcclxuICAgICAgICAgICAgbGV0IGlkeCA9IChpKmhlaWdodCtqKSo0O1xyXG4gICAgICAgICAgICBhcnJbaWR4XSA9IGNvbG9yLnI7XHJcbiAgICAgICAgICAgIGFycltpZHgrMV0gPSBjb2xvci5nO1xyXG4gICAgICAgICAgICBhcnJbaWR4KzJdID0gY29sb3IuYjtcclxuICAgICAgICAgICAgYXJyW2lkeCszXSA9IGNvbG9yLmE7XHJcbiAgICAgICAgICAgIGxldCBrID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0ZXguaW5pdFdpdGhEYXRhKGFycixjYy5UZXh0dXJlMkQuUGl4ZWxGb3JtYXQuUkdCQTg4ODgsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIHJldHVybiB0ZXg7XHJcbn1cclxuXHJcblxyXG5sZXQgX3RleHR1cmU6Y2MuVGV4dHVyZTJEID0gbnVsbDtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbG9yU3ByaXRlRnJhbWUocmVjdDpjYy5SZWN0PW51bGwpe1xyXG4gICAgaWYoX3RleHR1cmU9PW51bGwpe1xyXG4gICAgICAgIF90ZXh0dXJlID0gY3JlYXRlVGV4dHVyZSgpXHJcbiAgICB9IFxyXG4gICAgcmVjdCA9IHJlY3QgfHwgY2MucmVjdCgwLDAsY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoLGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQpO1xyXG4gICAgbGV0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKF90ZXh0dXJlLHJlY3QpXHJcbiAgICByZXR1cm4gc3ByaXRlRnJhbWU7XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/global_node.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c618eQFKhORb54gy8ibA9o', 'global_node');
// Script/global_node.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalNode = exports.GlobalNodeNames = void 0;
///全局常驻节点的枚举
var GlobalNodeNames;
(function (GlobalNodeNames) {
    GlobalNodeNames["PopuMgr"] = "PopuMgr";
    GlobalNodeNames["SoundMgr"] = "SoundMgr";
    GlobalNodeNames["GlobalScheduler"] = "GlobalScheduler";
})(GlobalNodeNames = exports.GlobalNodeNames || (exports.GlobalNodeNames = {}));
var zOrder = (_a = {},
    _a[GlobalNodeNames.PopuMgr] = 1,
    _a[GlobalNodeNames.SoundMgr] = 2,
    _a[GlobalNodeNames.GlobalScheduler] = 3,
    _a);
var _globalNode = null;
/**
 * 获得或者生成常驻节点
 */
function getGlobalNode(type, offset) {
    if (offset === void 0) { offset = cc.v2(0, 0); }
    if (_globalNode == null) {
        _globalNode = new cc.Node("_globalNode");
        _globalNode.zIndex = 100;
        if (!CC_EDITOR) {
            cc.game.addPersistRootNode(_globalNode);
        }
    }
    var size = cc.view.getVisibleSize();
    _globalNode.setContentSize(size);
    _globalNode.setPosition(size.width / 2, size.height / 2);
    var ret = _globalNode.getChildByName(type);
    if (!ret) {
        ret = new cc.Node(type);
        ret.zIndex = zOrder[type] || 0;
        _globalNode.addChild(ret);
    }
    ret.position = cc.v3(offset);
    return ret;
}
exports.getGlobalNode = getGlobalNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnbG9iYWxfbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsWUFBWTtBQUNaLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN2QixzQ0FBbUIsQ0FBQTtJQUNuQix3Q0FBcUIsQ0FBQTtJQUNyQixzREFBbUMsQ0FBQTtBQUN2QyxDQUFDLEVBSlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFJMUI7QUFFRCxJQUFJLE1BQU07SUFDTixHQUFDLGVBQWUsQ0FBQyxPQUFPLElBQUksQ0FBQztJQUM3QixHQUFDLGVBQWUsQ0FBQyxRQUFRLElBQUksQ0FBQztJQUM5QixHQUFDLGVBQWUsQ0FBQyxlQUFlLElBQUksQ0FBQztPQUV4QyxDQUFBO0FBR0QsSUFBSSxXQUFXLEdBQVcsSUFBSSxDQUFDO0FBQy9COztHQUVHO0FBQ0gsU0FBZ0IsYUFBYSxDQUFDLElBQW9CLEVBQUMsTUFBMkI7SUFBM0IsdUJBQUEsRUFBQSxTQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDMUUsSUFBRyxXQUFXLElBQUUsSUFBSSxFQUFDO1FBQ2pCLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDekIsSUFBRyxDQUFDLFNBQVMsRUFBQztZQUNWLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0M7S0FDSjtJQUNELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFcEMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEQsSUFBSSxHQUFHLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxJQUFHLENBQUMsR0FBRyxFQUFDO1FBQ0osR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBRSxDQUFDLENBQUM7UUFDN0IsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM3QjtJQUNELEdBQUcsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFyQkQsc0NBcUJDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vL+WFqOWxgOW4uOmpu+iKgueCueeahOaemuS4vlxyXG5leHBvcnQgZW51bSBHbG9iYWxOb2RlTmFtZXN7XHJcbiAgICBQb3B1TWdyID0gXCJQb3B1TWdyXCIsXHJcbiAgICBTb3VuZE1nciA9IFwiU291bmRNZ3JcIixcclxuICAgIEdsb2JhbFNjaGVkdWxlciA9IFwiR2xvYmFsU2NoZWR1bGVyXCIsLy/lhajlsYDlrprml7blmahcclxufVxyXG5cclxubGV0IHpPcmRlciA9IHtcclxuICAgIFtHbG9iYWxOb2RlTmFtZXMuUG9wdU1ncl0gOiAxLFxyXG4gICAgW0dsb2JhbE5vZGVOYW1lcy5Tb3VuZE1ncl0gOiAyLFxyXG4gICAgW0dsb2JhbE5vZGVOYW1lcy5HbG9iYWxTY2hlZHVsZXJdIDogMyxcclxuICAgIFxyXG59XHJcblxyXG5cclxubGV0IF9nbG9iYWxOb2RlOmNjLk5vZGUgPSBudWxsO1xyXG4vKipcclxuICog6I635b6X5oiW6ICF55Sf5oiQ5bi46am76IqC54K5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsTm9kZSh0eXBlOkdsb2JhbE5vZGVOYW1lcyxvZmZzZXQ6Y2MuVmVjMiA9IGNjLnYyKDAsMCkpe1xyXG4gICAgaWYoX2dsb2JhbE5vZGU9PW51bGwpe1xyXG4gICAgICAgIF9nbG9iYWxOb2RlID0gbmV3IGNjLk5vZGUoXCJfZ2xvYmFsTm9kZVwiKTtcclxuICAgICAgICBfZ2xvYmFsTm9kZS56SW5kZXggPSAxMDA7XHJcbiAgICAgICAgaWYoIUNDX0VESVRPUil7XHJcbiAgICAgICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKF9nbG9iYWxOb2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuXHJcbiAgICBfZ2xvYmFsTm9kZS5zZXRDb250ZW50U2l6ZShzaXplKTtcclxuICAgIF9nbG9iYWxOb2RlLnNldFBvc2l0aW9uKHNpemUud2lkdGgvMixzaXplLmhlaWdodC8yKTtcclxuICAgIFxyXG4gICAgbGV0IHJldCA9IF9nbG9iYWxOb2RlLmdldENoaWxkQnlOYW1lKHR5cGUpO1xyXG4gICAgaWYoIXJldCl7XHJcbiAgICAgICAgcmV0ID0gbmV3IGNjLk5vZGUodHlwZSk7XHJcbiAgICAgICAgcmV0LnpJbmRleCA9IHpPcmRlclt0eXBlXXx8MDtcclxuICAgICAgICBfZ2xvYmFsTm9kZS5hZGRDaGlsZChyZXQpO1xyXG4gICAgfVxyXG4gICAgcmV0LnBvc2l0aW9uID0gY2MudjMob2Zmc2V0KTtcclxuICAgIHJldHVybiByZXQ7XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/dialog/base_dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9b93LEOS5EU6Zzy8FfSq09', 'base_dialog');
// Script/dialog/base_dialog.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDialog = exports.WindowStyle = void 0;
var ANIM_TAG = 10087;
var ScaleSize = 0.5;
var WindowStyle;
(function (WindowStyle) {
    WindowStyle[WindowStyle["POPUP"] = 0] = "POPUP";
    WindowStyle[WindowStyle["NORMAL"] = 1] = "NORMAL";
})(WindowStyle = exports.WindowStyle || (exports.WindowStyle = {}));
;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseDialog = /** @class */ (function (_super) {
    __extends(BaseDialog, _super);
    function BaseDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m_manager = null;
        _this.m_isInAnim = false;
        _this._tag = "";
        _this.isPfbRaw = false; //为true时,tag表示路径
        _this.style = WindowStyle.POPUP;
        _this.closeByTouchBg = true;
        _this.closeByTouchBack = true;
        _this.offset = cc.v2(0, 0);
        _this.maskOpacity = 128;
        _this.isFullScreen = false;
        _this._onClosed = null;
        return _this;
    }
    Object.defineProperty(BaseDialog.prototype, "tag", {
        get: function () { return this._tag; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseDialog.prototype, "isPupuAni", {
        /**是否正在做弹窗动画，此时点击关闭背景无效 */
        get: function () {
            return this.m_isInAnim;
        },
        enumerable: false,
        configurable: true
    });
    /**显示弹窗，为避免死锁，在popuManager里实现 */
    BaseDialog.create = function (pfb, param) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                // PopupMgr.getInstance().showWindow(pfb,param)
                return [2 /*return*/, null];
            });
        });
    };
    ///屏蔽父类的onLoad，事件注册在PopupMgr里处理了
    BaseDialog.prototype.onLoad = function () {
        if (this.isFullScreen) {
            this.node.width = display.width;
            this.node.height = display.height;
        }
        else {
            this.node.position = new cc.Vec3(this.offset.x, this.offset.y);
        }
    };
    ///屏蔽父类的onDestroy，事件注销在PopupMgr里处理了
    BaseDialog.prototype.onDestroy = function () {
        this.exitView();
        // let config = this.getRawAssetsConfig();
        // if(this.isPfbRaw){
        //     config.prefab = this.tag;
        // }
        // super.onDestroy();
    };
    /**销毁前调用，有需要在销毁时刻运用节点树的资源时重写这个*/
    BaseDialog.prototype.onPreDestroy = function () {
    };
    /**获取弹窗出现时的动画 */
    BaseDialog.prototype.getShowAnim = function () {
        return null;
    };
    /**获取弹窗关闭时的动画 */
    BaseDialog.prototype.getHideAnim = function () {
        return null;
    };
    BaseDialog.prototype.getDftHideAni = function () {
        var _duartion = 0.3;
        var ani = cc.scaleTo(_duartion, ScaleSize);
        ani = ani.easing(cc.easeBackIn());
        return ani;
    };
    BaseDialog.prototype.getDftShowAni = function () {
        var _duartion = 0.3;
        this.node.setScale(ScaleSize);
        var ani = cc.sequence(cc.scaleTo(0, ScaleSize), cc.scaleTo(_duartion, 1.0).easing(cc.easeBackOut()));
        return ani;
    };
    // /**初始化资源，用于加载和释放 */
    // protected getRawAssetsConfig():_RawAssetsConfig{
    //     return {}
    // }
    BaseDialog.prototype.initWindow = function (manager, tag, isPfbRaw, onLoadComplete) {
        this.m_manager = manager;
        this.m_isInAnim = false; //是否正在做动画
        this._tag = tag;
        this.isPfbRaw = isPfbRaw;
        // _loadRawAssets(this.getRawAssetsConfig(),(result)=>{
        //     if(result=="complete"){
        onLoadComplete();
        //     }
        // })
    };
    BaseDialog.prototype.refreshView = function (bundleData, arg1, arg2, arg3) { };
    BaseDialog.prototype.showWindow = function (bundleData, arg1, arg2, arg3) {
        this.initView(bundleData, arg1, arg2, arg3);
        //播放动画
        if (this.m_isInAnim || !this.node.active)
            return;
        this.node.setScale(1);
        this.node.stopActionByTag(ANIM_TAG);
        var _action = this.getShowAnim();
        if (_action == null && this.style == WindowStyle.POPUP) {
            _action = this.getDftShowAni();
        }
        if (_action) {
            _action.setTag(ANIM_TAG);
            this.m_isInAnim = true;
            var finish = cc.callFunc(function () {
                this.onShowEnd();
            }, this);
            this.node.runAction(cc.sequence(_action, finish));
        }
        else {
            this.onShowEnd();
        }
    };
    BaseDialog.prototype.onShowEnd = function () {
        this.m_isInAnim = false;
    };
    BaseDialog.prototype.dismiss = function (noAnim, data) {
        if (noAnim === void 0) { noAnim = false; }
        if (noAnim) {
            this.onHideEnd(data);
            return;
        }
        if (this.m_isInAnim)
            return;
        this.node.setScale(1);
        this.node.stopActionByTag(ANIM_TAG);
        var _action = this.getHideAnim();
        if (_action == null && this.style == WindowStyle.POPUP) {
            _action = this.getDftHideAni();
        }
        if (_action) {
            _action.setTag(ANIM_TAG);
            this.m_isInAnim = true;
            var finish = cc.callFunc(function () {
                this.onHideEnd(data);
            }, this);
            this.node.runAction(cc.sequence(_action, finish));
        }
        else {
            this.onHideEnd(data);
        }
    };
    BaseDialog.prototype.setOnClosed = function (func) {
        this._onClosed = func;
    };
    BaseDialog.prototype.onHideEnd = function (data) {
        this.m_isInAnim = false;
        this.node.active = false;
        if (this._onClosed) {
            this._onClosed(this);
            this._onClosed = null;
        }
        if (this.m_manager && this.m_manager.node.active) {
            this.m_manager.onHideEnd(this);
        }
    };
    BaseDialog.prototype.onBtnClose = function () {
        this.dismiss();
    };
    __decorate([
        property({
            type: cc.Enum(WindowStyle),
            tooltip: "弹窗样式,POPUP有弹窗动画，NORMAL直接显示"
        })
    ], BaseDialog.prototype, "style", void 0);
    __decorate([
        property({
            tooltip: "是否点击背后隐藏"
        })
    ], BaseDialog.prototype, "closeByTouchBg", void 0);
    __decorate([
        property({
            tooltip: "是否点击返回键隐藏"
        })
    ], BaseDialog.prototype, "closeByTouchBack", void 0);
    __decorate([
        property(cc.Vec2)
    ], BaseDialog.prototype, "offset", void 0);
    __decorate([
        property({
            tooltip: "黑色半透明遮罩的透明度"
        })
    ], BaseDialog.prototype, "maskOpacity", void 0);
    __decorate([
        property({
            tooltip: "是否全屏"
        })
    ], BaseDialog.prototype, "isFullScreen", void 0);
    BaseDialog = __decorate([
        ccclass
    ], BaseDialog);
    return BaseDialog;
}(cc.Component));
exports.BaseDialog = BaseDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkaWFsb2dcXGJhc2VfZGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFFckIsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBRXBCLElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNuQiwrQ0FBSyxDQUFBO0lBQ0wsaURBQU0sQ0FBQTtBQUNWLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0QjtBQUFBLENBQUM7QUFDSSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF5Qyw4QkFBWTtJQUFyRDtRQUFBLHFFQTBMQztRQXpMVyxlQUFTLEdBQU8sSUFBSSxDQUFDO1FBQ3JCLGdCQUFVLEdBQVcsS0FBSyxDQUFDO1FBQzNCLFVBQUksR0FBTyxFQUFFLENBQUM7UUFFWixjQUFRLEdBQVcsS0FBSyxDQUFDLENBQUMsZ0JBQWdCO1FBTTdDLFdBQUssR0FBZSxXQUFXLENBQUMsS0FBSyxDQUFDO1FBSXRDLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBSXRCLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFJckIsaUJBQVcsR0FBRyxHQUFHLENBQUM7UUFJbEIsa0JBQVksR0FBRyxLQUFLLENBQUM7UUF5SXBCLGVBQVMsR0FBWSxJQUFJLENBQUM7O0lBb0J0QyxDQUFDO0lBdExHLHNCQUFXLDJCQUFHO2FBQWQsY0FBaUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQzs7O09BQUE7SUE0Qm5DLHNCQUFXLGlDQUFT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QUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBQztZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDekI7UUFDRCxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUVTLCtCQUFVLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUE5S0Q7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDekIsT0FBTyxFQUFDLDRCQUE0QjtTQUN2QyxDQUFDOzZDQUMyQztJQUk3QztRQUhDLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBQyxVQUFVO1NBQ3JCLENBQUM7c0RBQzJCO0lBSTdCO1FBSEMsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFDLFdBQVc7U0FDdEIsQ0FBQzt3REFDNkI7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDVTtJQUk1QjtRQUhDLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBQyxhQUFhO1NBQ3hCLENBQUM7bURBQ3VCO0lBSXpCO1FBSEMsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFDLE1BQU07U0FDakIsQ0FBQztvREFDMEI7SUE3QlYsVUFBVTtRQUQvQixPQUFPO09BQ2MsVUFBVSxDQTBML0I7SUFBRCxpQkFBQztDQTFMRCxBQTBMQyxDQTFMd0MsRUFBRSxDQUFDLFNBQVMsR0EwTHBEO0FBMUxxQixnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdsb2JhbE5vZGVOYW1lcyB9IGZyb20gXCIuLi9nbG9iYWxfbm9kZVwiO1xyXG5cclxuXHJcbmxldCBBTklNX1RBRyA9IDEwMDg3O1xyXG5cclxubGV0IFNjYWxlU2l6ZSA9IDAuNTtcclxuXHJcbmV4cG9ydCBlbnVtIFdpbmRvd1N0eWxlIHtcclxuICAgIFBPUFVQLFxyXG4gICAgTk9STUFMLFxyXG59O1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VEaWFsb2cgZXh0ZW5kcyBjYy5Db21wb25lbnR7XHJcbiAgICBwcml2YXRlIG1fbWFuYWdlcjphbnkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtX2lzSW5BbmltOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3RhZzphbnkgPSBcIlwiO1xyXG4gICAgcHVibGljIGdldCB0YWcoKXtyZXR1cm4gdGhpcy5fdGFnO31cclxuICAgIHByb3RlY3RlZCBpc1BmYlJhdzpib29sZWFuID0gZmFsc2U7IC8v5Li6dHJ1ZeaXtix0YWfooajnpLrot6/lvoRcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6Y2MuRW51bShXaW5kb3dTdHlsZSksXHJcbiAgICAgICAgdG9vbHRpcDpcIuW8ueeql+agt+W8jyxQT1BVUOacieW8ueeql+WKqOeUu++8jE5PUk1BTOebtOaOpeaYvuekulwiXHJcbiAgICB9KVxyXG4gICAgcHVibGljIHN0eWxlOldpbmRvd1N0eWxlID0gV2luZG93U3R5bGUuUE9QVVA7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6XCLmmK/lkKbngrnlh7vog4zlkI7pmpDol49cIlxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBjbG9zZUJ5VG91Y2hCZyA9IHRydWU7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6XCLmmK/lkKbngrnlh7vov5Tlm57plK7pmpDol49cIlxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBjbG9zZUJ5VG91Y2hCYWNrID0gdHJ1ZTtcclxuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxyXG4gICAgcHJpdmF0ZSBvZmZzZXQgPSBjYy52MigwLDApO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOlwi6buR6Imy5Y2K6YCP5piO6YGu572p55qE6YCP5piO5bqmXCJcclxuICAgIH0pXHJcbiAgICBwdWJsaWMgbWFza09wYWNpdHkgPSAxMjg7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6XCLmmK/lkKblhajlsY9cIlxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBpc0Z1bGxTY3JlZW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKirmmK/lkKbmraPlnKjlgZrlvLnnqpfliqjnlLvvvIzmraTml7bngrnlh7vlhbPpl63og4zmma/ml6DmlYggKi9cclxuICAgIHB1YmxpYyBnZXQgaXNQdXB1QW5pKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9pc0luQW5pbTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmmL7npLrlvLnnqpfvvIzkuLrpgb/lhY3mrbvplIHvvIzlnKhwb3B1TWFuYWdlcumHjOWunueOsCAqL1xyXG4gICAgc3RhdGljIGFzeW5jIGNyZWF0ZTxUPihwZmI6c3RyaW5nfGNjLlByZWZhYixwYXJhbT86VHxhbnksLi4uYXJncyk6UHJvbWlzZTxCYXNlRGlhbG9nPntcclxuICAgICAgICAvLyBQb3B1cE1nci5nZXRJbnN0YW5jZSgpLnNob3dXaW5kb3cocGZiLHBhcmFtKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vL+Wxj+iUveeItuexu+eahG9uTG9hZO+8jOS6i+S7tuazqOWGjOWcqFBvcHVwTWdy6YeM5aSE55CG5LqGXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBpZih0aGlzLmlzRnVsbFNjcmVlbil7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS53aWR0aCA9IGRpc3BsYXkud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSBkaXNwbGF5LmhlaWdodDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gbmV3IGNjLlZlYzModGhpcy5vZmZzZXQueCx0aGlzLm9mZnNldC55KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLy/lsY/olL3niLbnsbvnmoRvbkRlc3Ryb3nvvIzkuovku7bms6jplIDlnKhQb3B1cE1ncumHjOWkhOeQhuS6hlxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgdGhpcy5leGl0VmlldygpO1xyXG4gICAgICAgIC8vIGxldCBjb25maWcgPSB0aGlzLmdldFJhd0Fzc2V0c0NvbmZpZygpO1xyXG4gICAgICAgIC8vIGlmKHRoaXMuaXNQZmJSYXcpe1xyXG4gICAgICAgIC8vICAgICBjb25maWcucHJlZmFiID0gdGhpcy50YWc7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHN1cGVyLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumUgOavgeWJjeiwg+eUqO+8jOaciemcgOimgeWcqOmUgOavgeaXtuWIu+i/kOeUqOiKgueCueagkeeahOi1hOa6kOaXtumHjeWGmei/meS4qiovXHJcbiAgICBvblByZURlc3Ryb3koKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+W5by556qX5Ye6546w5pe255qE5Yqo55S7ICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0U2hvd0FuaW0oKTpjYy5BY3Rpb25JbnRlcnZhbHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKirojrflj5blvLnnqpflhbPpl63ml7bnmoTliqjnlLsgKi9cclxuICAgIHByb3RlY3RlZCBnZXRIaWRlQW5pbSgpOmNjLkFjdGlvbkludGVydmFse1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXREZnRIaWRlQW5pKCl7XHJcbiAgICAgICAgbGV0IF9kdWFydGlvbiA9IDAuMztcclxuICAgICAgICBsZXQgYW5pID0gY2Muc2NhbGVUbyhfZHVhcnRpb24sU2NhbGVTaXplKTtcclxuICAgICAgICBhbmkgPSBhbmkuZWFzaW5nKGNjLmVhc2VCYWNrSW4oKSk7XHJcbiAgICAgICAgcmV0dXJuIGFuaTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXREZnRTaG93QW5pKCl7XHJcbiAgICAgICAgbGV0IF9kdWFydGlvbiA9IDAuMztcclxuICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoU2NhbGVTaXplKTtcclxuICAgICAgICBsZXQgYW5pID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oMCxTY2FsZVNpemUpLFxyXG4gICAgICAgICAgICBjYy5zY2FsZVRvKF9kdWFydGlvbiwxLjApLmVhc2luZyhjYy5lYXNlQmFja091dCgpKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBhbmk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLyoq5Yid5aeL5YyW6LWE5rqQ77yM55So5LqO5Yqg6L295ZKM6YeK5pS+ICovXHJcbiAgICAvLyBwcm90ZWN0ZWQgZ2V0UmF3QXNzZXRzQ29uZmlnKCk6X1Jhd0Fzc2V0c0NvbmZpZ3tcclxuICAgIC8vICAgICByZXR1cm4ge31cclxuICAgIC8vIH1cclxuXHJcbiAgICBpbml0V2luZG93KG1hbmFnZXI6YW55LHRhZyxpc1BmYlJhdzpib29sZWFuLG9uTG9hZENvbXBsZXRlOkZ1bmN0aW9uKXtcclxuICAgICAgICB0aGlzLm1fbWFuYWdlciA9IG1hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5tX2lzSW5BbmltID0gZmFsc2U7Ly/mmK/lkKbmraPlnKjlgZrliqjnlLtcclxuICAgICAgICB0aGlzLl90YWcgPSB0YWc7XHJcbiAgICAgICAgdGhpcy5pc1BmYlJhdyA9IGlzUGZiUmF3O1xyXG5cclxuICAgICAgICAvLyBfbG9hZFJhd0Fzc2V0cyh0aGlzLmdldFJhd0Fzc2V0c0NvbmZpZygpLChyZXN1bHQpPT57XHJcbiAgICAgICAgLy8gICAgIGlmKHJlc3VsdD09XCJjb21wbGV0ZVwiKXtcclxuICAgICAgICAgICAgICAgIG9uTG9hZENvbXBsZXRlKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGluaXRWaWV3KGJ1bmRsZURhdGE/OmFueSxhcmcxPzphbnksYXJnMj86YW55LGFyZzM/OmFueSk7XHJcbiAgICBhYnN0cmFjdCBleGl0VmlldyhidW5kbGVEYXRhPzphbnkpO1xyXG4gICAgcmVmcmVzaFZpZXcoYnVuZGxlRGF0YT86YW55LGFyZzE/OmFueSxhcmcyPzphbnksYXJnMz86YW55KXt9XHJcbiAgICBcclxuICAgIHNob3dXaW5kb3coYnVuZGxlRGF0YTphbnksYXJnMT86YW55LGFyZzI/OmFueSxhcmczPzphbnkpeyBcclxuICAgICAgICB0aGlzLmluaXRWaWV3KGJ1bmRsZURhdGEsYXJnMSxhcmcyLGFyZzMpO1xyXG5cclxuICAgICAgICAvL+aSreaUvuWKqOeUu1xyXG4gICAgICAgIGlmKHRoaXMubV9pc0luQW5pbSB8fCAhdGhpcy5ub2RlLmFjdGl2ZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgxKTtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFjdGlvbkJ5VGFnKEFOSU1fVEFHKTtcclxuICAgICAgICBsZXQgX2FjdGlvbiA9IHRoaXMuZ2V0U2hvd0FuaW0oKTtcclxuICAgICAgICBpZihfYWN0aW9uPT1udWxsJiZ0aGlzLnN0eWxlPT1XaW5kb3dTdHlsZS5QT1BVUCl7XHJcbiAgICAgICAgICAgIF9hY3Rpb24gPSB0aGlzLmdldERmdFNob3dBbmkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoX2FjdGlvbil7XHJcbiAgICAgICAgICAgIF9hY3Rpb24uc2V0VGFnKEFOSU1fVEFHKTtcclxuICAgICAgICAgICAgdGhpcy5tX2lzSW5BbmltID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGZpbmlzaCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2hvd0VuZCgpO1xyXG4gICAgICAgICAgICB9LHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKF9hY3Rpb24sZmluaXNoKSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMub25TaG93RW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25TaG93RW5kKCl7XHJcbiAgICAgICAgdGhpcy5tX2lzSW5BbmltID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBkaXNtaXNzKG5vQW5pbTpib29sZWFuID0gZmFsc2UsZGF0YT86YW55KXtcclxuICAgICAgICBpZihub0FuaW0pe1xyXG4gICAgICAgICAgICB0aGlzLm9uSGlkZUVuZChkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLm1faXNJbkFuaW0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBY3Rpb25CeVRhZyhBTklNX1RBRyk7XHJcblxyXG4gICAgICAgIGxldCBfYWN0aW9uID0gdGhpcy5nZXRIaWRlQW5pbSgpO1xyXG4gICAgICAgIGlmKF9hY3Rpb249PW51bGwmJnRoaXMuc3R5bGU9PVdpbmRvd1N0eWxlLlBPUFVQKXtcclxuICAgICAgICAgICAgX2FjdGlvbiA9IHRoaXMuZ2V0RGZ0SGlkZUFuaSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihfYWN0aW9uKXtcclxuICAgICAgICAgICAgX2FjdGlvbi5zZXRUYWcoQU5JTV9UQUcpO1xyXG4gICAgICAgICAgICB0aGlzLm1faXNJbkFuaW0gPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgZmluaXNoID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub25IaWRlRW5kKGRhdGEpO1xyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoX2FjdGlvbixmaW5pc2gpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5vbkhpZGVFbmQoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uQ2xvc2VkOkZ1bmN0aW9uID0gbnVsbDtcclxuICAgIHB1YmxpYyBzZXRPbkNsb3NlZChmdW5jOkZ1bmN0aW9uKXtcclxuICAgICAgICB0aGlzLl9vbkNsb3NlZCA9IGZ1bmM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uSGlkZUVuZChkYXRhPzphbnkpe1xyXG4gICAgICAgIHRoaXMubV9pc0luQW5pbSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLl9vbkNsb3NlZCl7XHJcbiAgICAgICAgICAgIHRoaXMuX29uQ2xvc2VkKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9vbkNsb3NlZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMubV9tYW5hZ2VyJiZ0aGlzLm1fbWFuYWdlci5ub2RlLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIHRoaXMubV9tYW5hZ2VyLm9uSGlkZUVuZCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQnRuQ2xvc2UoKXtcclxuICAgICAgICB0aGlzLmRpc21pc3MoKTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/views/water.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90a717vpVpNGLEwTpgmjLG+', 'water');
// Script/views/water.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, executeInEditMode = _a.executeInEditMode, disallowMultiple = _a.disallowMultiple, executionOrder = _a.executionOrder;
var MAX_ARR_LEN = 6;
var PourAction;
(function (PourAction) {
    PourAction[PourAction["none"] = 0] = "none";
    /**往里加水 */
    PourAction[PourAction["in"] = 1] = "in";
    /**向外倒水 */
    PourAction[PourAction["out"] = 2] = "out";
})(PourAction || (PourAction = {}));
var Water = /** @class */ (function (_super) {
    __extends(Water, _super);
    function Water() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._action = PourAction.none;
        _this.infos = [];
        /**到这里停止倒水 */
        _this.stopIdx = -1;
        /**当前是有几层水 */
        _this.curIdx = 0;
        /**节点高宽比 */
        _this._ratio = 1;
        _this.effect = null;
        _this._skewAngle = 0;
        _this.material = null;
        _this.addHeight = 0;
        _this.onOutStart = null;
        _this.onOutFinish = null;
        _this.onInFInish = null;
        _this.dot = null;
        return _this;
    }
    Object.defineProperty(Water.prototype, "skewAngle", {
        get: function () { return this._skewAngle; },
        set: function (value) {
            value = Math.round(value * 100) / 100;
            // cc.log("angle",value)
            this._skewAngle = value;
            this.updateAngleHeight();
        },
        enumerable: false,
        configurable: true
    });
    Water.prototype.onLoad = function () {
        var sp = this.node.getComponent(cc.Sprite);
        if (sp.spriteFrame)
            sp.spriteFrame.getTexture().packable = false;
        // 生成并应用材质
        if (this.effect) {
            this.material = cc.Material.create(this.effect);
            sp.setMaterial(0, this.material);
        }
        this.material = sp.getMaterial(0);
        this._ratio = this.node.height / this.node.width;
    };
    Water.prototype.initInfos = function (infos) {
        this.infos = infos;
        this.curIdx = this.infos.length - 1;
        this.initSizeColor();
        this.updateAngleHeight();
    };
    Water.prototype.addInfo = function (info) {
        this.addHeight = info.height;
        info.height = 0;
        this.infos.push(info);
        this._action = PourAction.in;
        this.curIdx = this.infos.length - 1;
        this.initSizeColor();
    };
    Water.prototype.setPourOutCallback = function (onOutStart, onOutFinish) {
        this.onOutStart = onOutStart;
        this.onOutFinish = onOutFinish;
    };
    Water.prototype.setPourInCallback = function (onInFInish) {
        this.onInFInish = onInFInish;
    };
    /**
     * 倾斜到哪个角度开始往外边倒水
     */
    Water.prototype.getPourStartAngle = function () {
        var _height = 0;
        for (var i = 0; i <= this.curIdx; i++) {
            _height += this.infos[i].height;
        }
        return this.getCriticalAngleWithHeight(_height);
    };
    /**
     * 倾斜到哪个角度开始停止倒水（当前颜色的水倒完了）
     */
    Water.prototype.getPourEndAngle = function () {
        this.stopIdx = this.curIdx - this.getTopSameColorNum();
        var _height = 0;
        for (var i = 0; i <= this.stopIdx; i++) {
            _height += this.infos[i].height;
        }
        return this.getCriticalAngleWithHeight(_height);
    };
    /**获取某一高度的水刚好碰到瓶口的临界倾斜角度 */
    Water.prototype.getCriticalAngleWithHeight = function (_height) {
        var ret = 0;
        if (_height == 0) {
            ret = 90;
            return ret;
        }
        if (_height < 0.5) { //水的体积小于杯子的一半,先碰到下瓶底
            var tanVal = this._ratio / (_height * 2.0);
            ret = Math.atan(tanVal);
        }
        else {
            var tanVal = 2.0 * this._ratio * (1.0 - _height);
            ret = Math.atan(tanVal);
        }
        ret = radian2angle(ret);
        return ret;
    };
    Water.prototype.getTopSameColorNum = function () {
        var sameColorNum = 0;
        var colorId = null;
        for (var i = this.curIdx; i >= 0; i--) {
            if (colorId == null) {
                sameColorNum++;
                colorId = this.infos[i].colorId;
            }
            else if (this.infos[i].colorId == colorId) {
                sameColorNum++;
            }
            else {
                break;
            }
        }
        return sameColorNum;
    };
    /**
     * 开始倒水
     * 一直倒水直到不同颜色的水到达瓶口，为当前最大能倾斜的角度
     * @returns 返回值为倾斜角度的绝对值
     */
    Water.prototype.onStartPour = function () {
        this._action = PourAction.out;
        this.stopIdx = this.curIdx - this.getTopSameColorNum();
    };
    Water.prototype.update = function () {
        if (this._action == PourAction.out) {
            this.pourStep();
        }
        else if (this._action == PourAction.in) {
            this.addStep();
        }
    };
    /**
     * 每帧调用，升高水面高度
     */
    Water.prototype.addStep = function () {
        if (this.curIdx < 0) {
            return;
        }
        var info = this.infos[this.curIdx];
        info.height = Math.round((info.height + 0.005) * 1000) / 1000;
        // cc.log("--------info.height",info.height)
        if (info.height >= this.addHeight) {
            info.height = this.addHeight;
            this._action = PourAction.none;
            if (this.onInFInish) {
                this.onInFInish();
                this.onInFInish = null;
            }
        }
        this.updateAngleHeight();
    };
    /**
     * * 每帧调用
     * * 降低水面高度
     */
    Water.prototype.pourStep = function () {
        if (this.curIdx < 0) {
            this._action = PourAction.none;
            return;
        }
        var _height = 0;
        for (var i = 0; i <= this.curIdx; i++) {
            _height += this.infos[i].height;
        }
        var is_top = false;
        var angle = (this.skewAngle % 360) * Math.PI / 180.0;
        var _t = Math.abs(Math.tan(angle));
        if (_height < 0.5) { //水的体积小于杯子的一半,先碰到下瓶底
            is_top = _t > (this._ratio) / (_height * 2.0);
        }
        else {
            is_top = _t > 2.0 * this._ratio * (1.0 - _height);
        }
        var info = this.infos[this.curIdx];
        if (!is_top) { //没到瓶口，不往下倒
            if (info.height < 0.05) { //可能还留了一点点水,要继续倒出去
            }
            else {
                return;
            }
        }
        if (this.onOutStart) {
            this.onOutStart();
            this.onOutStart = null;
        }
        info.height = Math.round((info.height - 0.005) * 1000) / 1000;
        if (info.height < 0.01) {
            info.height = 0;
            this.infos.pop();
            this.curIdx--;
            // cc.log("------this.curIdx",this.curIdx,this.stopIdx)
            if (this.curIdx == this.stopIdx) {
                if (this.onOutFinish) {
                    this.onOutFinish();
                    this.onOutFinish = null;
                }
                this._action = PourAction.none;
            }
        }
        // cc.log("this.curIdx",this.curIdx,"info.height",info.height.toFixed(2),"angle",this.skewAngle.toFixed(2))
        this.updateAngleHeight();
    };
    Water.prototype.initSizeColor = function () {
        var _colors = new Float32Array(MAX_ARR_LEN * 4); //数组只支持一维数组
        for (var i = 0; i < this.infos.length; i++) {
            var color = this.infos[i].color;
            _colors[i * 4] = color.r / 255;
            _colors[i * 4 + 1] = color.g / 255;
            _colors[i * 4 + 2] = color.b / 255;
            _colors[i * 4 + 3] = 1.0;
        }
        this.material.setProperty('colors', _colors); //数组只支持一维数组
        this.material.setProperty('iResolution', cc.v2(this.node.width, this.node.height));
        this.material.setProperty('waveType', 0);
    };
    Water.prototype.updateAngleHeight = function () {
        var _heights = new Float32Array(MAX_ARR_LEN * 4);
        for (var i = 0; i < this.infos.length; i++) {
            _heights[i * 4] = this.infos[i].height;
            _heights[i * 4 + 1] = 0;
            _heights[i * 4 + 2] = 0;
            _heights[i * 4 + 3] = 0;
        }
        this.material.setProperty('heights', _heights);
        this.material.setProperty('skewAngle', this._skewAngle);
        var waveType = 0.0;
        if (this._action == PourAction.in) {
            waveType = 1.0;
        }
        else if (this._action == PourAction.out) {
            waveType = 2.0;
        }
        this.material.setProperty('waveType', waveType);
        // this.showDebugCenter();
    };
    /**显示水面的中心点，调试shader脚本用 */
    Water.prototype.showDebugCenter = function () {
        if (CC_EDITOR) {
            return;
        }
        if (this.dot == null) {
            this.dot = new cc.Node();
            this.dot.parent = this.node;
            var label = this.dot.addComponent(cc.Label);
            label.string = "·";
            label.fontSize = 60;
            this.dot.color = cc.Color.RED;
        }
        var ratio = this.node.height / this.node.width;
        var angle = angle2radian(this.skewAngle);
        var _height = 0;
        for (var i = 0; i <= this.curIdx; i++) {
            _height += this.infos[i].height;
        }
        var toLeft = Math.sin(angle) >= 0.0;
        var center = cc.v2(0.5, 1.0 - _height); //水面倾斜时，以哪个店为中心店
        var _t = Math.abs(Math.tan(angle));
        if (_height <= 0.5) { //水的体积小于杯子的一半,先碰到下瓶底
            var is_bottom = _t > ratio * 2.0 * _height; //倾斜角度达到瓶底
            if (is_bottom) {
                center.x = Math.sqrt((2.0 * _height / _t) * ratio) / 2.0;
                center.y = 1.0 - Math.sqrt((2.0 * _height * _t) / ratio) / 2.0;
                var is_top = _t > (ratio) / (_height * 2.0); //倾斜角度达到瓶口
                if (is_top) {
                    center.y = 0.5;
                    center.x = _height;
                }
            }
            if (!toLeft) {
                center.x = 1.0 - center.x;
            }
            if (Math.abs(center.x - 0.25) < 0.01) {
                var i = 0;
            }
            // cc.log("aa-------center",center.x.toFixed(2),center.y.toFixed(2));
        }
        else { //水比较多，先碰到上瓶底
            var is_top = _t > 2.0 * ratio * (1.0 - _height);
            if (is_top) {
                center.x = Math.sqrt(2.0 * ratio * (1.0 - _height) / _t) / 2.0;
                center.y = Math.sqrt(2.0 * ratio * (1.0 - _height) * _t) / 2.0 / ratio;
                var is_bottom = _t > ratio / (2.0 * (1.0 - _height));
                if (is_bottom) {
                    center.y = 0.5;
                    center.x = 1.0 - _height;
                }
            }
            else {
            }
            if (toLeft) {
                center.x = 1.0 - center.x;
            }
            // cc.log("bb-------center",center.x.toFixed(2),center.y.toFixed(2));
        }
        center.x = center.x - 0.5;
        center.y = -center.y + 0.5;
        var pt = cc.v3(center.x * this.node.width, center.y * this.node.height);
        this.dot.position = pt;
    };
    __decorate([
        property(cc.EffectAsset)
    ], Water.prototype, "effect", void 0);
    __decorate([
        property
    ], Water.prototype, "_skewAngle", void 0);
    __decorate([
        property({ tooltip: CC_DEV && '旋转角度' })
    ], Water.prototype, "skewAngle", null);
    Water = __decorate([
        ccclass,
        requireComponent(cc.Sprite),
        executeInEditMode,
        disallowMultiple,
        executionOrder(-100)
    ], Water);
    return Water;
}(cc.Component));
exports.default = Water;
function angle2radian(angle) {
    while (angle > 360) {
        angle -= 360;
    }
    while (angle < -360) {
        angle += 360;
    }
    return (angle % 360) * Math.PI / 180.0;
}
function radian2angle(radian) {
    return radian / Math.PI * 180;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx2aWV3c1xcd2F0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUErRixFQUFFLENBQUMsVUFBVSxFQUExRyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxpQkFBaUIsdUJBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxjQUFjLG9CQUFrQixDQUFDO0FBUW5ILElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQztBQUV0QixJQUFLLFVBTUo7QUFORCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osVUFBVTtJQUNWLHVDQUFFLENBQUE7SUFDRixVQUFVO0lBQ1YseUNBQUcsQ0FBQTtBQUNQLENBQUMsRUFOSSxVQUFVLEtBQVYsVUFBVSxRQU1kO0FBT0Q7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUF3VUM7UUF2VVcsYUFBTyxHQUFjLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDckMsV0FBSyxHQUFlLEVBQUUsQ0FBQztRQUMvQixhQUFhO1FBQ0wsYUFBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLGFBQWE7UUFDTCxZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLFdBQVc7UUFDSCxZQUFNLEdBQVUsQ0FBQyxDQUFDO1FBRWxCLFlBQU0sR0FBa0IsSUFBSSxDQUFDO1FBQ25CLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBVWpDLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBc0I3QixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBV2QsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFNNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFzTTNCLFNBQUcsR0FBVyxJQUFJLENBQUM7O0lBb0UvQixDQUFDO0lBMVRHLHNCQUFXLDRCQUFTO2FBQXBCLGNBQXlCLE9BQU8sSUFBSSxD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QUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBNVREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7eUNBQ1k7SUFDM0I7UUFBVCxRQUFROzZDQUFnQztJQUV6QztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksTUFBTSxFQUFFLENBQUM7MENBQ1U7SUFkakMsS0FBSztRQUx6QixPQUFPO1FBQ1AsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUMzQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztPQUNBLEtBQUssQ0F3VXpCO0lBQUQsWUFBQztDQXhVRCxBQXdVQyxDQXhVa0MsRUFBRSxDQUFDLFNBQVMsR0F3VTlDO2tCQXhVb0IsS0FBSztBQTBVMUIsU0FBUyxZQUFZLENBQUMsS0FBWTtJQUM5QixPQUFNLEtBQUssR0FBQyxHQUFHLEVBQUM7UUFDWixLQUFLLElBQUUsR0FBRyxDQUFDO0tBQ2Q7SUFDRCxPQUFNLEtBQUssR0FBQyxDQUFDLEdBQUcsRUFBQztRQUNiLEtBQUssSUFBRSxHQUFHLENBQUM7S0FDZDtJQUNELE9BQU8sQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7QUFDekMsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLE1BQWE7SUFDL0IsT0FBTyxNQUFNLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUM7QUFDOUIsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCByZXF1aXJlQ29tcG9uZW50LCBleGVjdXRlSW5FZGl0TW9kZSwgZGlzYWxsb3dNdWx0aXBsZSwgZXhlY3V0aW9uT3JkZXIgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdhdGVySW5mb3tcclxuICAgIGNvbG9ySWQ6bnVtYmVyLFxyXG4gICAgY29sb3I6Y2MuQ29sb3IsLy/popzoibJcclxuICAgIGhlaWdodDpudW1iZXIsLy/pu5jorqTmg4XlhrXkuIvvvIzljaDmna/lrZDnmoTpq5jluqZcclxufVxyXG5cclxuY29uc3QgTUFYX0FSUl9MRU4gPSA2O1xyXG5cclxuZW51bSBQb3VyQWN0aW9ue1xyXG4gICAgbm9uZSxcclxuICAgIC8qKuW+gOmHjOWKoOawtCAqL1xyXG4gICAgaW4sXHJcbiAgICAvKirlkJHlpJblgJLmsLQgKi9cclxuICAgIG91dCxcclxufVxyXG5cclxuQGNjY2xhc3NcclxuQHJlcXVpcmVDb21wb25lbnQoY2MuU3ByaXRlKVxyXG5AZXhlY3V0ZUluRWRpdE1vZGVcclxuQGRpc2FsbG93TXVsdGlwbGVcclxuQGV4ZWN1dGlvbk9yZGVyKC0xMDApXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhdGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX2FjdGlvbjpQb3VyQWN0aW9uID0gUG91ckFjdGlvbi5ub25lO1xyXG4gICAgcHJpdmF0ZSBpbmZvczpXYXRlckluZm9bXSA9IFtdO1xyXG4gICAgLyoq5Yiw6L+Z6YeM5YGc5q2i5YCS5rC0ICovXHJcbiAgICBwcml2YXRlIHN0b3BJZHggPSAtMTtcclxuICAgIC8qKuW9k+WJjeaYr+acieWHoOWxguawtCAqL1xyXG4gICAgcHJpdmF0ZSBjdXJJZHggPSAwO1xyXG5cclxuICAgIC8qKuiKgueCuemrmOWuveavlCAqL1xyXG4gICAgcHJpdmF0ZSBfcmF0aW86bnVtYmVyID0gMTtcclxuICAgIEBwcm9wZXJ0eShjYy5FZmZlY3RBc3NldClcclxuICAgIHByaXZhdGUgZWZmZWN0OmNjLkVmZmVjdEFzc2V0ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSBwcml2YXRlIF9za2V3QW5nbGU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBDQ19ERVYgJiYgJ+aXi+i9rOinkuW6picgfSlcclxuICAgIHB1YmxpYyBnZXQgc2tld0FuZ2xlKCkgeyByZXR1cm4gdGhpcy5fc2tld0FuZ2xlOyB9XHJcbiAgICBwdWJsaWMgc2V0IHNrZXdBbmdsZSh2YWx1ZTogbnVtYmVyKSB7IFxyXG4gICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSoxMDApLzEwMDtcclxuICAgICAgICAvLyBjYy5sb2coXCJhbmdsZVwiLHZhbHVlKVxyXG4gICAgICAgIHRoaXMuX3NrZXdBbmdsZSA9IHZhbHVlOyBcclxuICAgICAgICB0aGlzLnVwZGF0ZUFuZ2xlSGVpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYXRlcmlhbDogY2MuTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgbGV0IHNwID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIGlmIChzcC5zcHJpdGVGcmFtZSkgc3Auc3ByaXRlRnJhbWUuZ2V0VGV4dHVyZSgpLnBhY2thYmxlID0gZmFsc2U7XHJcbiAgICAgICAgLy8g55Sf5oiQ5bm25bqU55So5p2Q6LSoXHJcbiAgICAgICAgaWYodGhpcy5lZmZlY3Qpe1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gY2MuTWF0ZXJpYWwuY3JlYXRlKHRoaXMuZWZmZWN0KTtcclxuICAgICAgICAgICAgc3Auc2V0TWF0ZXJpYWwoMCwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSBzcC5nZXRNYXRlcmlhbCgwKVxyXG4gICAgICAgIHRoaXMuX3JhdGlvID0gdGhpcy5ub2RlLmhlaWdodC90aGlzLm5vZGUud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRJbmZvcyhpbmZvczpBcnJheTxXYXRlckluZm8+KXtcclxuICAgICAgICB0aGlzLmluZm9zID0gaW5mb3M7XHJcbiAgICAgICAgdGhpcy5jdXJJZHggPSB0aGlzLmluZm9zLmxlbmd0aC0xO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRTaXplQ29sb3IoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFuZ2xlSGVpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRIZWlnaHQgPSAwO1xyXG4gICAgcHVibGljIGFkZEluZm8oaW5mbzpXYXRlckluZm8pe1xyXG4gICAgICAgIHRoaXMuYWRkSGVpZ2h0ID0gaW5mby5oZWlnaHQ7XHJcbiAgICAgICAgaW5mby5oZWlnaHQgPSAwO1xyXG4gICAgICAgIHRoaXMuaW5mb3MucHVzaChpbmZvKTtcclxuICAgICAgICB0aGlzLl9hY3Rpb24gPSBQb3VyQWN0aW9uLmluO1xyXG4gICAgICAgIHRoaXMuY3VySWR4ID0gdGhpcy5pbmZvcy5sZW5ndGgtMTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0U2l6ZUNvbG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk91dFN0YXJ0OkZ1bmN0aW9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgb25PdXRGaW5pc2g6RnVuY3Rpb24gPSBudWxsO1xyXG4gICAgcHVibGljIHNldFBvdXJPdXRDYWxsYmFjayhvbk91dFN0YXJ0OkZ1bmN0aW9uLG9uT3V0RmluaXNoOkZ1bmN0aW9uKXtcclxuICAgICAgICB0aGlzLm9uT3V0U3RhcnQgPSBvbk91dFN0YXJ0O1xyXG4gICAgICAgIHRoaXMub25PdXRGaW5pc2ggPSBvbk91dEZpbmlzaDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uSW5GSW5pc2g6RnVuY3Rpb24gPSBudWxsO1xyXG4gICAgcHVibGljIHNldFBvdXJJbkNhbGxiYWNrKG9uSW5GSW5pc2g6RnVuY3Rpb24pe1xyXG4gICAgICAgIHRoaXMub25JbkZJbmlzaCA9IG9uSW5GSW5pc2g7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgL7mlpzliLDlk6rkuKrop5LluqblvIDlp4vlvoDlpJbovrnlgJLmsLRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFBvdXJTdGFydEFuZ2xlKCl7XHJcbiAgICAgICAgbGV0IF9oZWlnaHQgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8PXRoaXMuY3VySWR4O2krKyl7XHJcbiAgICAgICAgICAgIF9oZWlnaHQrPXRoaXMuaW5mb3NbaV0uaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDcml0aWNhbEFuZ2xlV2l0aEhlaWdodChfaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWAvuaWnOWIsOWTquS4quinkuW6puW8gOWni+WBnOatouWAkuawtO+8iOW9k+WJjeminOiJsueahOawtOWAkuWujOS6hu+8iVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UG91ckVuZEFuZ2xlKCl7XHJcbiAgICAgICAgdGhpcy5zdG9wSWR4ID0gdGhpcy5jdXJJZHgtdGhpcy5nZXRUb3BTYW1lQ29sb3JOdW0oKTtcclxuXHJcbiAgICAgICAgbGV0IF9oZWlnaHQgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8PXRoaXMuc3RvcElkeDtpKyspe1xyXG4gICAgICAgICAgICBfaGVpZ2h0Kz10aGlzLmluZm9zW2ldLmhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q3JpdGljYWxBbmdsZVdpdGhIZWlnaHQoX2hlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+W5p+Q5LiA6auY5bqm55qE5rC05Yia5aW956Kw5Yiw55O25Y+j55qE5Li055WM5YC+5pac6KeS5bqmICovXHJcbiAgICBwcml2YXRlIGdldENyaXRpY2FsQW5nbGVXaXRoSGVpZ2h0KF9oZWlnaHQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCByZXQgPSAwO1xyXG4gICAgICAgIGlmKF9oZWlnaHQ9PTApe1xyXG4gICAgICAgICAgICByZXQgPSA5MDtcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKF9oZWlnaHQ8MC41KXsvL+awtOeahOS9k+enr+Wwj+S6juadr+WtkOeahOS4gOWNiizlhYjnorDliLDkuIvnk7blupVcclxuICAgICAgICAgICAgbGV0IHRhblZhbCA9IHRoaXMuX3JhdGlvLyhfaGVpZ2h0KjIuMCk7XHJcbiAgICAgICAgICAgIHJldCA9IE1hdGguYXRhbih0YW5WYWwpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgdGFuVmFsID0gMi4wKnRoaXMuX3JhdGlvKigxLjAtX2hlaWdodCk7IFxyXG4gICAgICAgICAgICByZXQgPSBNYXRoLmF0YW4odGFuVmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0ID0gcmFkaWFuMmFuZ2xlKHJldCk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRvcFNhbWVDb2xvck51bSgpe1xyXG4gICAgICAgIGxldCBzYW1lQ29sb3JOdW0gPSAwO1xyXG4gICAgICAgIGxldCBjb2xvcklkPW51bGw7XHJcbiAgICAgICAgZm9yKGxldCBpPXRoaXMuY3VySWR4O2k+PTA7aS0tKXtcclxuICAgICAgICAgICAgaWYoY29sb3JJZD09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzYW1lQ29sb3JOdW0rKztcclxuICAgICAgICAgICAgICAgIGNvbG9ySWQgPSB0aGlzLmluZm9zW2ldLmNvbG9ySWQ7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuaW5mb3NbaV0uY29sb3JJZD09Y29sb3JJZCl7XHJcbiAgICAgICAgICAgICAgICBzYW1lQ29sb3JOdW0rKztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2FtZUNvbG9yTnVtXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4vlgJLmsLRcclxuICAgICAqIOS4gOebtOWAkuawtOebtOWIsOS4jeWQjOminOiJsueahOawtOWIsOi+vueTtuWPo++8jOS4uuW9k+WJjeacgOWkp+iDveWAvuaWnOeahOinkuW6plxyXG4gICAgICogQHJldHVybnMg6L+U5Zue5YC85Li65YC+5pac6KeS5bqm55qE57ud5a+55YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvblN0YXJ0UG91cigpe1xyXG4gICAgICAgIHRoaXMuX2FjdGlvbiA9IFBvdXJBY3Rpb24ub3V0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RvcElkeCA9IHRoaXMuY3VySWR4LXRoaXMuZ2V0VG9wU2FtZUNvbG9yTnVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgaWYodGhpcy5fYWN0aW9uPT1Qb3VyQWN0aW9uLm91dCl7XHJcbiAgICAgICAgICAgIHRoaXMucG91clN0ZXAoKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLl9hY3Rpb249PVBvdXJBY3Rpb24uaW4pe1xyXG4gICAgICAgICAgICB0aGlzLmFkZFN0ZXAoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOavj+W4p+iwg+eUqO+8jOWNh+mrmOawtOmdoumrmOW6plxyXG4gICAgICovXHJcbiAgICBhZGRTdGVwKCl7XHJcbiAgICAgICAgaWYodGhpcy5jdXJJZHg8MCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGluZm8gPSB0aGlzLmluZm9zW3RoaXMuY3VySWR4XTtcclxuICAgICAgICBpbmZvLmhlaWdodCA9IE1hdGgucm91bmQoKGluZm8uaGVpZ2h0ICsgMC4wMDUpKjEwMDApLzEwMDA7XHJcbiAgICAgICAgLy8gY2MubG9nKFwiLS0tLS0tLS1pbmZvLmhlaWdodFwiLGluZm8uaGVpZ2h0KVxyXG4gICAgICAgIGlmKGluZm8uaGVpZ2h0Pj10aGlzLmFkZEhlaWdodCl7XHJcbiAgICAgICAgICAgIGluZm8uaGVpZ2h0ID0gdGhpcy5hZGRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbiA9IFBvdXJBY3Rpb24ubm9uZTtcclxuICAgICAgICAgICAgaWYodGhpcy5vbkluRkluaXNoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub25JbkZJbmlzaCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkluRkluaXNoID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVBbmdsZUhlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKiDmr4/luKfosIPnlKhcclxuICAgICAqICog6ZmN5L2O5rC06Z2i6auY5bqmIFxyXG4gICAgICovXHJcbiAgICBwb3VyU3RlcCgpe1xyXG4gICAgICAgIGlmKHRoaXMuY3VySWR4PDApe1xyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb24gPSBQb3VyQWN0aW9uLm5vbmU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IF9oZWlnaHQgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8PXRoaXMuY3VySWR4O2krKyl7XHJcbiAgICAgICAgICAgIF9oZWlnaHQrPXRoaXMuaW5mb3NbaV0uaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaXNfdG9wID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gKHRoaXMuc2tld0FuZ2xlJTM2MCkgKiBNYXRoLlBJIC8gMTgwLjBcclxuICAgICAgICBsZXQgX3QgPSBNYXRoLmFicyhNYXRoLnRhbihhbmdsZSkpO1xyXG4gICAgICAgIGlmKF9oZWlnaHQ8MC41KXsvL+awtOeahOS9k+enr+Wwj+S6juadr+WtkOeahOS4gOWNiizlhYjnorDliLDkuIvnk7blupVcclxuICAgICAgICAgICAgaXNfdG9wID0gX3Q+KHRoaXMuX3JhdGlvKS8oX2hlaWdodCoyLjApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpc190b3AgPSBfdD4yLjAqdGhpcy5fcmF0aW8qKDEuMC1faGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5pbmZvc1t0aGlzLmN1cklkeF07XHJcbiAgICAgICAgaWYoIWlzX3RvcCl7Ly/msqHliLDnk7blj6PvvIzkuI3lvoDkuIvlgJJcclxuICAgICAgICAgICAgaWYoaW5mby5oZWlnaHQ8MC4wNSl7Ly/lj6/og73ov5jnlZnkuobkuIDngrnngrnmsLQs6KaB57un57ut5YCS5Ye65Y67XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5vbk91dFN0YXJ0KXtcclxuICAgICAgICAgICAgdGhpcy5vbk91dFN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMub25PdXRTdGFydCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGluZm8uaGVpZ2h0ID0gTWF0aC5yb3VuZCgoaW5mby5oZWlnaHQgLSAwLjAwNSkqMTAwMCkvMTAwMDtcclxuICAgICAgICBpZihpbmZvLmhlaWdodDwwLjAxKXtcclxuICAgICAgICAgICAgaW5mby5oZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pbmZvcy5wb3AoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJJZHgtLTtcclxuICAgICAgICAgICAgLy8gY2MubG9nKFwiLS0tLS0tdGhpcy5jdXJJZHhcIix0aGlzLmN1cklkeCx0aGlzLnN0b3BJZHgpXHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VySWR4PT10aGlzLnN0b3BJZHgpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5vbk91dEZpbmlzaCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk91dEZpbmlzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25PdXRGaW5pc2ggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aW9uID0gUG91ckFjdGlvbi5ub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNjLmxvZyhcInRoaXMuY3VySWR4XCIsdGhpcy5jdXJJZHgsXCJpbmZvLmhlaWdodFwiLGluZm8uaGVpZ2h0LnRvRml4ZWQoMiksXCJhbmdsZVwiLHRoaXMuc2tld0FuZ2xlLnRvRml4ZWQoMikpXHJcbiAgICAgICAgdGhpcy51cGRhdGVBbmdsZUhlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFNpemVDb2xvcigpe1xyXG4gICAgICAgIGxldCBfY29sb3JzID0gbmV3IEZsb2F0MzJBcnJheShNQVhfQVJSX0xFTio0KTsvL+aVsOe7hOWPquaUr+aMgeS4gOe7tOaVsOe7hFxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5pbmZvcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmluZm9zW2ldLmNvbG9yO1xyXG4gICAgICAgICAgICBfY29sb3JzW2kqNF0gPSBjb2xvci5yLzI1NTtcclxuICAgICAgICAgICAgX2NvbG9yc1tpKjQrMV0gPSBjb2xvci5nLzI1NTtcclxuICAgICAgICAgICAgX2NvbG9yc1tpKjQrMl0gPSBjb2xvci5iLzI1NTtcclxuICAgICAgICAgICAgX2NvbG9yc1tpKjQrM10gPSAxLjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwuc2V0UHJvcGVydHkoJ2NvbG9ycycsIF9jb2xvcnMpOy8v5pWw57uE5Y+q5pSv5oyB5LiA57u05pWw57uEXHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbC5zZXRQcm9wZXJ0eSgnaVJlc29sdXRpb24nLCBjYy52Mih0aGlzLm5vZGUud2lkdGgsdGhpcy5ub2RlLmhlaWdodCkpO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3dhdmVUeXBlJywgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVBbmdsZUhlaWdodCgpIHtcclxuICAgICAgICBsZXQgX2hlaWdodHMgPSBuZXcgRmxvYXQzMkFycmF5KE1BWF9BUlJfTEVOKjQpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5pbmZvcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgX2hlaWdodHNbaSo0XSA9IHRoaXMuaW5mb3NbaV0uaGVpZ2h0O1xyXG4gICAgICAgICAgICBfaGVpZ2h0c1tpKjQrMV0gPSAwO1xyXG4gICAgICAgICAgICBfaGVpZ2h0c1tpKjQrMl0gPSAwO1xyXG4gICAgICAgICAgICBfaGVpZ2h0c1tpKjQrM10gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1hdGVyaWFsLnNldFByb3BlcnR5KCdoZWlnaHRzJywgX2hlaWdodHMpO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3NrZXdBbmdsZScsIHRoaXMuX3NrZXdBbmdsZSk7XHJcblxyXG4gICAgICAgIGxldCB3YXZlVHlwZSA9IDAuMDtcclxuICAgICAgICBpZih0aGlzLl9hY3Rpb249PVBvdXJBY3Rpb24uaW4pe1xyXG4gICAgICAgICAgICB3YXZlVHlwZSA9IDEuMDtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLl9hY3Rpb249PVBvdXJBY3Rpb24ub3V0KXtcclxuICAgICAgICAgICAgd2F2ZVR5cGUgPSAyLjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3dhdmVUeXBlJywgd2F2ZVR5cGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMuc2hvd0RlYnVnQ2VudGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkb3Q6Y2MuTm9kZSA9IG51bGw7XHJcbiAgICAvKirmmL7npLrmsLTpnaLnmoTkuK3lv4PngrnvvIzosIPor5VzaGFkZXLohJrmnKznlKggKi9cclxuICAgIHByaXZhdGUgc2hvd0RlYnVnQ2VudGVyKCl7XHJcbiAgICAgICAgaWYoQ0NfRURJVE9SKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmRvdD09bnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuZG90ID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5kb3QucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLmRvdC5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIsK3XCI7XHJcbiAgICAgICAgICAgIGxhYmVsLmZvbnRTaXplID0gNjA7XHJcbiAgICAgICAgICAgIHRoaXMuZG90LmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJhdGlvID0gdGhpcy5ub2RlLmhlaWdodC90aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gYW5nbGUycmFkaWFuKHRoaXMuc2tld0FuZ2xlKTtcclxuICAgICAgICBsZXQgX2hlaWdodCA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTw9dGhpcy5jdXJJZHg7aSsrKXtcclxuICAgICAgICAgICAgX2hlaWdodCs9dGhpcy5pbmZvc1tpXS5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB0b0xlZnQgPSBNYXRoLnNpbihhbmdsZSk+PTAuMDtcclxuICAgICAgICBsZXQgY2VudGVyID0gY2MudjIoMC41LDEuMC1faGVpZ2h0KTsvL+awtOmdouWAvuaWnOaXtu+8jOS7peWTquS4quW6l+S4uuS4reW/g+W6l1xyXG5cclxuICAgICAgICBsZXQgX3QgPSBNYXRoLmFicyhNYXRoLnRhbihhbmdsZSkpO1xyXG4gICAgICAgIGlmKF9oZWlnaHQ8PTAuNSl7Ly/msLTnmoTkvZPnp6/lsI/kuo7mna/lrZDnmoTkuIDljYos5YWI56Kw5Yiw5LiL55O25bqVXHJcbiAgICAgICAgICAgIGxldCBpc19ib3R0b20gPSBfdD5yYXRpbyoyLjAqX2hlaWdodDsvL+WAvuaWnOinkuW6pui+vuWIsOeTtuW6lVxyXG4gICAgICAgICAgICBpZihpc19ib3R0b20pe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyLnggPSBNYXRoLnNxcnQoKDIuMCpfaGVpZ2h0L190KSpyYXRpbykvMi4wO1xyXG4gICAgICAgICAgICAgICAgY2VudGVyLnkgPSAxLjAgLSBNYXRoLnNxcnQoKDIuMCpfaGVpZ2h0Kl90KS9yYXRpbykvMi4wO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpc190b3AgPSBfdD4ocmF0aW8pLyhfaGVpZ2h0KjIuMCk7Ly/lgL7mlpzop5Lluqbovr7liLDnk7blj6NcclxuICAgICAgICAgICAgICAgIGlmKGlzX3RvcCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyLnkgPSAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyLnggPSBfaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCF0b0xlZnQpe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyLnggPSAxLjAtY2VudGVyLng7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoTWF0aC5hYnMoY2VudGVyLngtMC4yNSk8MC4wMSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2MubG9nKFwiYWEtLS0tLS0tY2VudGVyXCIsY2VudGVyLngudG9GaXhlZCgyKSxjZW50ZXIueS50b0ZpeGVkKDIpKTtcclxuICAgICAgICB9ZWxzZXsvL+awtOavlOi+g+Wkmu+8jOWFiOeisOWIsOS4iueTtuW6lVxyXG4gICAgICAgICAgICBsZXQgaXNfdG9wID0gX3Q+Mi4wKnJhdGlvKigxLjAtX2hlaWdodCk7XHJcbiAgICAgICAgICAgIGlmKGlzX3RvcCl7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXIueCA9IE1hdGguc3FydCgyLjAqcmF0aW8qKDEuMC1faGVpZ2h0KS9fdCkvMi4wO1xyXG4gICAgICAgICAgICAgICAgY2VudGVyLnkgPSBNYXRoLnNxcnQoMi4wKnJhdGlvKigxLjAtX2hlaWdodCkqX3QpLzIuMC9yYXRpbztcclxuICAgICAgICAgICAgICAgIGxldCBpc19ib3R0b20gPSBfdD5yYXRpby8oMi4wKigxLjAtX2hlaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgaWYoaXNfYm90dG9tKXtcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXIueSA9IDAuNTtcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXIueCA9IDEuMC1faGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodG9MZWZ0KXtcclxuICAgICAgICAgICAgICAgIGNlbnRlci54ID0gMS4wLWNlbnRlci54O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcImJiLS0tLS0tLWNlbnRlclwiLGNlbnRlci54LnRvRml4ZWQoMiksY2VudGVyLnkudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNlbnRlci54ID0gY2VudGVyLnggLSAwLjU7XHJcbiAgICAgICAgY2VudGVyLnkgPSAtY2VudGVyLnkgKyAwLjU7XHJcbiAgICAgICAgbGV0IHB0ID0gY2MudjMoY2VudGVyLngqdGhpcy5ub2RlLndpZHRoLGNlbnRlci55KnRoaXMubm9kZS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuZG90LnBvc2l0aW9uID0gcHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuZ2xlMnJhZGlhbihhbmdsZTpudW1iZXIpe1xyXG4gICAgd2hpbGUoYW5nbGU+MzYwKXtcclxuICAgICAgICBhbmdsZS09MzYwO1xyXG4gICAgfVxyXG4gICAgd2hpbGUoYW5nbGU8LTM2MCl7XHJcbiAgICAgICAgYW5nbGUrPTM2MDtcclxuICAgIH1cclxuICAgIHJldHVybiAoYW5nbGUlMzYwKSAqIE1hdGguUEkgLyAxODAuMDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFkaWFuMmFuZ2xlKHJhZGlhbjpudW1iZXIpIHtcclxuICAgIHJldHVybiByYWRpYW4vTWF0aC5QSSoxODA7XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/views/waterFlow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b17dkk8S9FGZn1m7BYZtqR', 'waterFlow');
// Script/views/waterFlow.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterFlow = void 0;
var dft_lingWidth = 6;
/**
 * 倾倒的水流
 */
var WaterFlow = /** @class */ (function (_super) {
    __extends(WaterFlow, _super);
    function WaterFlow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._toPt = cc.v2();
        _this.from = cc.v2();
        return _this;
    }
    WaterFlow.prototype.onLoad = function () {
        this.lineWidth = dft_lingWidth;
        this.lineCap = cc.Graphics.LineCap.ROUND;
    };
    Object.defineProperty(WaterFlow.prototype, "toPt", {
        get: function () {
            return this._toPt;
        },
        set: function (val) {
            this._toPt = val;
            this.clear();
            this.moveTo(this.from.x, this.from.y);
            this.lineTo(this._toPt.x, this._toPt.y);
            this.stroke();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 倒水水流动画
     * @param from
     * @param to
     * @param dur
     * @param isTail 开始出水false，最后一束水true
     */
    WaterFlow.prototype.playFlowAni = function (from, to, dur, isTail, onComplete) {
        this.clear();
        var flow = this;
        if (isTail) {
            this.from = to;
        }
        else {
            this.from = from;
        }
        this.moveTo(this.from.x, this.from.y);
        var tw = cc.tween(flow)
            .set({ toPt: from })
            .to(dur, { toPt: to })
            .call(onComplete)
            .start();
    };
    WaterFlow.prototype.setLineScale = function (scale) {
        this.lineWidth = dft_lingWidth * scale;
    };
    return WaterFlow;
}(cc.Graphics));
exports.WaterFlow = WaterFlow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx2aWV3c1xcd2F0ZXJGbG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFFeEI7O0dBRUc7QUFDSDtJQUErQiw2QkFBVztJQUExQztRQUFBLHFFQThDQztRQXpDVyxXQUFLLEdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFBO1FBWXZCLFVBQUksR0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7O0lBNkJuQyxDQUFDO0lBN0NHLDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUM3QyxDQUFDO0lBRUQsc0JBQVcsMkJBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNyQixDQUFDO2FBQ0QsVUFBZ0IsR0FBRztZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUM7OztPQVBBO0lBVUQ7Ozs7OztPQU1HO0lBQ0ksK0JBQVcsR0FBbEIsVUFBbUIsSUFBWSxFQUFDLEVBQVUsRUFBQyxHQUFVLEVBQUMsTUFBYyxFQUFDLFVBQW1CO1FBRXBGLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksSUFBSSxHQUFhLElBQUksQ0FBQTtRQUN6QixJQUFHLE1BQU0sRUFBQztZQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO2FBQUk7WUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNsQixHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUM7YUFDaEIsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsQ0FBQzthQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ2hCLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSxnQ0FBWSxHQUFuQixVQUFvQixLQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxHQUFDLEtBQUssQ0FBQztJQUN6QyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQTlDQSxBQThDQyxDQTlDOEIsRUFBRSxDQUFDLFFBQVEsR0E4Q3pDO0FBOUNZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IGRmdF9saW5nV2lkdGggPSA2O1xyXG5cclxuLyoqXHJcbiAqIOWAvuWAkueahOawtOa1gVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFdhdGVyRmxvdyBleHRlbmRzIGNjLkdyYXBoaWNze1xyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSBkZnRfbGluZ1dpZHRoO1xyXG4gICAgICAgIHRoaXMubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF90b1B0OmNjLlZlYzIgPSBjYy52MigpXHJcbiAgICBwdWJsaWMgZ2V0IHRvUHQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9QdFxyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCB0b1B0KHZhbCl7XHJcbiAgICAgICAgdGhpcy5fdG9QdCA9IHZhbDtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlVG8odGhpcy5mcm9tLngsdGhpcy5mcm9tLnkpXHJcbiAgICAgICAgdGhpcy5saW5lVG8odGhpcy5fdG9QdC54LHRoaXMuX3RvUHQueSk7XHJcbiAgICAgICAgdGhpcy5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZyb206Y2MuVmVjMiA9IGNjLnYyKCk7XHJcbiAgICAvKipcclxuICAgICAqIOWAkuawtOawtOa1geWKqOeUu1xyXG4gICAgICogQHBhcmFtIGZyb20gXHJcbiAgICAgKiBAcGFyYW0gdG8gXHJcbiAgICAgKiBAcGFyYW0gZHVyIFxyXG4gICAgICogQHBhcmFtIGlzVGFpbCDlvIDlp4vlh7rmsLRmYWxzZe+8jOacgOWQjuS4gOadn+awtHRydWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBsYXlGbG93QW5pKGZyb206Y2MuVmVjMix0bzpjYy5WZWMyLGR1cjpudW1iZXIsaXNUYWlsOmJvb2xlYW4sb25Db21wbGV0ZTpGdW5jdGlvbil7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBmbG93OldhdGVyRmxvdyA9IHRoaXNcclxuICAgICAgICBpZihpc1RhaWwpe1xyXG4gICAgICAgICAgICB0aGlzLmZyb20gPSB0bztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb3ZlVG8odGhpcy5mcm9tLngsdGhpcy5mcm9tLnkpXHJcbiAgICAgICAgbGV0IHR3ID0gY2MudHdlZW4oZmxvdylcclxuICAgICAgICAgICAgLnNldCh7dG9QdDpmcm9tfSlcclxuICAgICAgICAgICAgLnRvKGR1cix7dG9QdDp0b30pXHJcbiAgICAgICAgICAgIC5jYWxsKG9uQ29tcGxldGUpXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRMaW5lU2NhbGUoc2NhbGU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IGRmdF9saW5nV2lkdGgqc2NhbGU7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/views/cup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74668nsikNO2o1a3I9mV4Xi', 'cup');
// Script/views/cup.ts

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
exports.WaterColors = void 0;
var audio_util_1 = require("../utils/audio_util");
var water_1 = require("./water");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.WaterColors = [
    "#155DEF",
    "#F2C90F",
    "#BD2656",
    "#F0791F",
    "#454574",
    "#FE2D26",
    "#BCA6E3",
    "#E4584F",
    "#00B38A",
    "#DD2E44",
    "#E5C69A",
    "#65DC8E",
    "#B068F0",
    "#F010BF",
    "#538849",
];
/**高度乘数因子，满杯水只显示80% */
var HEIGHT_FACTOR = 0.8;
var SPLIT_COUNT = 4;
var Cup = /** @class */ (function (_super) {
    __extends(Cup, _super);
    function Cup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.water = null;
        _this.onClick = null;
        _this.info = null;
        _this.tween = null;
        _this.dot = null;
        return _this;
    }
    Cup.prototype.onBtn_click = function () {
        if (this.isPouring()) {
            return;
        }
        if (this.onClick) {
            this.onClick(this);
        }
    };
    Cup.prototype.isPouring = function () {
        return Math.abs(this.node.angle) > 1.0;
    };
    Cup.prototype.initWater = function () {
        var info = this.info;
        var arr = [];
        for (var i = SPLIT_COUNT - 1; i >= 0; i--) {
            var colorId = info.colorIds[i];
            if (colorId == 0) {
                continue;
            }
            var lastObj = arr[arr.length - 1];
            if (!lastObj || lastObj != colorId) {
                arr.push({
                    height: 1 / SPLIT_COUNT,
                    colorId: colorId
                });
            }
            else {
                lastObj.height += 1 / SPLIT_COUNT;
            }
        }
        arr.forEach(function (obj) {
            var hex = exports.WaterColors[obj.colorId] || "#538849";
            // cc.log("obj.colorId",obj.colorId,"color",hex)
            obj.color = new cc.Color().fromHEX(hex);
            obj.height *= HEIGHT_FACTOR;
        });
        this.water.initInfos(arr);
    };
    Cup.prototype.setCupInfo = function (info, onClick) {
        this.info = info;
        this.onClick = onClick;
        this.initWater();
        this.reset();
    };
    Cup.prototype.update = function () {
        if (CC_EDITOR) {
            return;
        }
        if (this.water.skewAngle == this.node.angle) {
            return;
        }
        this.water.skewAngle = this.node.angle;
    };
    Cup.prototype.setPourOutCallback = function (pourStart, pourEnd) {
        //水开始从瓶口流出来
        var _onStart = function () {
            if (pourStart) {
                pourStart(this);
            }
        };
        //水倒完了
        var _onFinish = function () {
            if (this.tween) {
                this.tween.stop();
                this.tween = null;
            }
            if (pourEnd) {
                pourEnd(this);
            }
        };
        this.water.setPourOutCallback(_onStart.bind(this), _onFinish.bind(this));
    };
    Cup.prototype.setPourInCallback = function (onFinish) {
        //水倒完了
        var _onFinish = function () {
            var isFinished = this.checkIsFinshed();
            // cc.log("-----------isFinished",isFinished)
            if (onFinish) {
                onFinish(this, isFinished);
            }
            if (isFinished) {
                audio_util_1.AudioUtil.playEffect(audio_util_1.AudioEnum.finishOne, 0.4);
            }
        };
        this.water.setPourInCallback(_onFinish.bind(this));
    };
    /**是否完成了（同颜色填满整个杯子） */
    Cup.prototype.checkIsFinshed = function () {
        var isFinished = true;
        var colorIds = this.info.colorIds;
        var tmpId = null;
        var empTyNum = 0;
        for (var i = 0; i < SPLIT_COUNT; i++) {
            if (tmpId == null) {
                tmpId = colorIds[i];
            }
            if (tmpId != colorIds[i]) {
                isFinished = false;
                break;
            }
            else if (colorIds[i] == 0) {
                empTyNum++;
            }
        }
        if (empTyNum == SPLIT_COUNT) {
            isFinished = true;
        }
        return isFinished;
    };
    /**
     * 移动到目标点、旋转瓶子并倒水
     * @param isRight 倾斜角度，向左为正，右为负
     * @param onPourStart 水开始从瓶口流出来
     * @param onPourEnd 本次水倒完了
     */
    Cup.prototype.moveToPour = function (dstPt, isRight, onPourStart, onPourEnd) {
        var _this = this;
        this.setPourOutCallback(onPourStart, onPourEnd);
        var startAngle = this.water.getPourStartAngle();
        var endAngle = this.water.getPourEndAngle();
        this.water.onStartPour();
        if (isRight) {
            startAngle *= -1;
            endAngle *= -1;
        }
        var moveDur = 0.5;
        var pourDur = 0.8;
        this.tween = cc.tween(this.node)
            .set({ angle: 0 })
            .to(moveDur, { x: dstPt.x, y: dstPt.y, angle: startAngle })
            .to(pourDur, { angle: endAngle })
            .call(function () {
            _this.tween = null;
        }).start();
        var top = this.getTop();
        var colorIds = this.info.colorIds;
        for (var i = 0; i < SPLIT_COUNT; i++) {
            var _id = colorIds[i];
            if (_id == 0) {
                continue;
            }
            else if (top.topColorId == _id) { //顶部相同颜色的水都倒掉了
                colorIds[i] = 0;
            }
            else {
                break;
            }
        }
    };
    Cup.prototype.startAddWater = function (colorId, num, onComplete) {
        this.setPourInCallback(onComplete);
        var acc = 0;
        for (var i = SPLIT_COUNT - 1; i >= 0; i--) {
            if (this.info.colorIds[i] != 0) {
                continue;
            }
            this.info.colorIds[i] = colorId;
            if (++acc == num) {
                break;
            }
        }
        var hex = exports.WaterColors[colorId] || "#538849";
        this.water.addInfo({
            colorId: colorId,
            height: num / SPLIT_COUNT * HEIGHT_FACTOR,
            color: new cc.Color().fromHEX(hex)
        });
        audio_util_1.AudioUtil.playPourWaterEffect(num / SPLIT_COUNT);
    };
    /**加水立刻 */
    Cup.prototype.addWaterImmediately = function (colorId, num) {
        var acc = 0;
        for (var i = SPLIT_COUNT - 1; i >= 0; i--) {
            if (this.info.colorIds[i] != 0) {
                continue;
            }
            this.info.colorIds[i] = colorId;
            if (++acc == num) {
                break;
            }
        }
        this.initWater();
    };
    /**将顶部的颜色删除num个 */
    Cup.prototype.removeTopWaterImmediately = function (num) {
        var acc = 0;
        var top = this.getTop();
        var colorIds = this.info.colorIds;
        for (var i = 0; i < SPLIT_COUNT; i++) {
            var _id = colorIds[i];
            if (_id == 0) {
                continue;
            }
            else if (top.topColorId == _id) { //顶部相同颜色的水都倒掉了
                colorIds[i] = 0;
                if (++acc >= num) {
                    break;
                }
            }
            else {
                break;
            }
        }
        this.initWater();
        return top;
    };
    Cup.prototype.getTop = function () {
        var colorIds = this.info.colorIds;
        var emptyNum = 0; //杯顶的空位有几格
        var topColorId = 0; //杯顶颜色id
        var topColorNum = 0; //杯顶的颜色共有几格
        for (var i = 0; i < SPLIT_COUNT; i++) {
            if (colorIds[i] == 0) {
                emptyNum++;
                continue;
            }
            if (topColorId == 0 || topColorId == colorIds[i]) {
                topColorId = colorIds[i];
                topColorNum++;
            }
            else {
                break;
            }
        }
        return {
            emptyNum: emptyNum,
            topColorId: topColorId,
            topColorNum: topColorNum,
            colorHex: exports.WaterColors[topColorId] || "#538849"
        };
    };
    Cup.prototype.reset = function () {
        this.node.angle = 0;
        this.water.skewAngle = 0;
    };
    Cup.prototype.setPourAnchor = function (isRight) {
        var pt = cc.v2(3, 2);
        pt.x = isRight ? (this.node.width - pt.x) : pt.x;
        pt.y = this.node.height - pt.y;
        pt.x = pt.x / this.node.width;
        pt.y = pt.y / this.node.height;
        this.setAnchor(pt);
    };
    Cup.prototype.setNormalAnchor = function () {
        this.setAnchor(cc.v2(0.5, 0.5));
    };
    Cup.prototype.setAnchor = function (anchor) {
        // if(this.dot==null){
        //     this.dot = new cc.Node();
        //     this.dot.parent = this.node;
        //     let label = this.dot.addComponent(cc.Sprite);
        //     label.spriteFrame = new cc.SpriteFrame(createTexture())
        //     this.dot.color = cc.Color.RED;
        // }
        // this.dot.setPosition(0,0)
        var oldAnchor = this.node.getAnchorPoint();
        var selfPt = this.node.getPosition(); //当前锚点世界坐标
        var waterPt = this.water.node.getPosition();
        this.node.setAnchorPoint(anchor);
        var offsetAnchor = cc.v2(anchor.x - oldAnchor.x, anchor.y - oldAnchor.y);
        var offsetPt = cc.v2(offsetAnchor.x * this.node.width, offsetAnchor.y * this.node.height);
        offsetPt = rotatePt(offsetPt, this.node.angle);
        selfPt.x += offsetPt.x;
        selfPt.y += offsetPt.y;
        this.node.setPosition(selfPt);
        waterPt.x -= offsetAnchor.x * this.node.width;
        waterPt.y -= offsetAnchor.y * this.node.height;
        this.water.node.setPosition(waterPt);
    };
    /**获取当前水面的global y坐标 */
    Cup.prototype.getWaterSurfacePosY = function (needAdjust) {
        if (needAdjust === void 0) { needAdjust = false; }
        var top = this.getTop();
        var y = (SPLIT_COUNT - top.emptyNum) / SPLIT_COUNT;
        if (y < 0.02) {
            y = 0.02;
        }
        else if (needAdjust) {
            y -= 1.0 / SPLIT_COUNT * HEIGHT_FACTOR;
        }
        y *= HEIGHT_FACTOR;
        y -= 0.5;
        var pt = cc.v2(0, this.water.node.height * y);
        pt = this.water.node.convertToWorldSpaceAR(pt);
        return pt.y;
    };
    __decorate([
        property(water_1.default)
    ], Cup.prototype, "water", void 0);
    Cup = __decorate([
        ccclass
    ], Cup);
    return Cup;
}(cc.Component));
exports.default = Cup;
function rotatePt(pt, angle) {
    var radian = angle2radian(angle);
    var ret = cc.v2();
    ret.x = pt.x * Math.cos(radian) - pt.y * Math.sin(radian);
    ret.y = pt.x * Math.sin(radian) + pt.y * Math.cos(radian);
    return ret;
}
function angle2radian(angle) {
    while (angle > 360) {
        angle -= 360;
    }
    while (angle < -360) {
        angle += 360;
    }
    return (angle % 360) * Math.PI / 180.0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx2aWV3c1xcY3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBMkQ7QUFFM0QsaUNBQTJDO0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRWpDLFFBQUEsV0FBVyxHQUFHO0lBQ3JCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztDQUNaLENBQUE7QUFFRCxzQkFBc0I7QUFDdEIsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBTzFCLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQztBQUd0QjtJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQTZUQztRQTNUVyxXQUFLLEdBQVMsSUFBSSxDQUFDO1FBRW5CLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBMkM3QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBK0VyQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBb0p0QixTQUFHLEdBQVcsSUFBSSxDQUFDOztJQTJDL0IsQ0FBQztJQXZURyx5QkFBVyxHQUFYO1FBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUM7WUFDaEIsT0FBTztTQUNWO1FBQ0QsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFTSx1QkFBUyxHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFDLEdBQUcsQ0FBQztJQUN6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QyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEQsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXBELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLEtBQVk7SUFDOUIsT0FBTSxLQUFLLEdBQUMsR0FBRyxFQUFDO1FBQ1osS0FBSyxJQUFFLEdBQUcsQ0FBQztLQUNkO0lBQ0QsT0FBTSxLQUFLLEdBQUMsQ0FBQyxHQUFHLEVBQUM7UUFDYixLQUFLLElBQUUsR0FBRyxDQUFDO0tBQ2Q7SUFDRCxPQUFPLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0FBQ3pDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb0VudW0sIEF1ZGlvVXRpbCB9IGZyb20gXCIuLi91dGlscy9hdWRpb191dGlsXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRleHR1cmUgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25cIjtcclxuaW1wb3J0IFdhdGVyLCB7IFdhdGVySW5mbyB9IGZyb20gXCIuL3dhdGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGxldCBXYXRlckNvbG9ycyA9IFtcclxuICAgIFwiIzE1NURFRlwiLFxyXG4gICAgXCIjRjJDOTBGXCIsXHJcbiAgICBcIiNCRDI2NTZcIixcclxuICAgIFwiI0YwNzkxRlwiLFxyXG4gICAgXCIjNDU0NTc0XCIsXHJcbiAgICBcIiNGRTJEMjZcIixcclxuICAgIFwiI0JDQTZFM1wiLFxyXG4gICAgXCIjRTQ1ODRGXCIsXHJcbiAgICBcIiMwMEIzOEFcIixcclxuICAgIFwiI0REMkU0NFwiLFxyXG4gICAgXCIjRTVDNjlBXCIsXHJcbiAgICBcIiM2NURDOEVcIixcclxuICAgIFwiI0IwNjhGMFwiLFxyXG4gICAgXCIjRjAxMEJGXCIsXHJcbiAgICBcIiM1Mzg4NDlcIixcclxuXVxyXG5cclxuLyoq6auY5bqm5LmY5pWw5Zug5a2Q77yM5ruh5p2v5rC05Y+q5pi+56S6ODAlICovXHJcbmNvbnN0IEhFSUdIVF9GQUNUT1IgPSAwLjg7XHJcblxyXG4vKirkuIDmna/msLTvvIzliIbmiJDlm5vnu4Tlm5vkuKrpopzoibLvvIww6KGo56S65rKh5pyJ5rC0ICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgX0N1cEluZm97XHJcbiAgICBjb2xvcklkczpBcnJheTxudW1iZXI+Oy8v6ZW/5bqm5Li6NFxyXG59XHJcblxyXG5jb25zdCBTUExJVF9DT1VOVCA9IDQ7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KFdhdGVyKVxyXG4gICAgcHJpdmF0ZSB3YXRlcjpXYXRlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrOihjOkN1cCk9PnZvaWQgPSBudWxsO1xyXG5cclxuICAgIG9uQnRuX2NsaWNrKCl7XHJcbiAgICAgICAgaWYodGhpcy5pc1BvdXJpbmcoKSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5vbkNsaWNrKXtcclxuICAgICAgICAgICAgdGhpcy5vbkNsaWNrKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNQb3VyaW5nKCl7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMubm9kZS5hbmdsZSk+MS4wO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRXYXRlcigpe1xyXG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLmluZm87XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaT1TUExJVF9DT1VOVC0xO2k+PTA7aS0tKXtcclxuICAgICAgICAgICAgbGV0IGNvbG9ySWQgPSBpbmZvLmNvbG9ySWRzW2ldO1xyXG4gICAgICAgICAgICBpZihjb2xvcklkPT0wKXtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBsYXN0T2JqID0gYXJyW2Fyci5sZW5ndGgtMV07XHJcbiAgICAgICAgICAgIGlmKCFsYXN0T2JqfHxsYXN0T2JqIT1jb2xvcklkKXtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MS9TUExJVF9DT1VOVCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcklkOmNvbG9ySWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxhc3RPYmouaGVpZ2h0ICs9IDEvU1BMSVRfQ09VTlQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICBsZXQgaGV4ID0gV2F0ZXJDb2xvcnNbb2JqLmNvbG9ySWRdfHxcIiM1Mzg4NDlcIlxyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCJvYmouY29sb3JJZFwiLG9iai5jb2xvcklkLFwiY29sb3JcIixoZXgpXHJcbiAgICAgICAgICAgIG9iai5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoaGV4KTtcclxuICAgICAgICAgICAgb2JqLmhlaWdodCo9SEVJR0hUX0ZBQ1RPUjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMud2F0ZXIuaW5pdEluZm9zKGFycik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmZvOl9DdXBJbmZvID0gbnVsbDtcclxuICAgIHNldEN1cEluZm8oaW5mbzpfQ3VwSW5mbyxvbkNsaWNrOihjOkN1cCk9PnZvaWQpe1xyXG4gICAgICAgIHRoaXMuaW5mbyA9IGluZm87XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gb25DbGljaztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmluaXRXYXRlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICBpZihDQ19FRElUT1Ipe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMud2F0ZXIuc2tld0FuZ2xlPT10aGlzLm5vZGUuYW5nbGUpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2F0ZXIuc2tld0FuZ2xlID0gdGhpcy5ub2RlLmFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0UG91ck91dENhbGxiYWNrKHBvdXJTdGFydCxwb3VyRW5kKXtcclxuICAgICAgICAvL+awtOW8gOWni+S7jueTtuWPo+a1geWHuuadpVxyXG4gICAgICAgIGNvbnN0IF9vblN0YXJ0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYocG91clN0YXJ0KXtcclxuICAgICAgICAgICAgICAgIHBvdXJTdGFydCh0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+awtOWAkuWujOS6hlxyXG4gICAgICAgIGNvbnN0IF9vbkZpbmlzaCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudHdlZW4pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50d2Vlbi5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwb3VyRW5kKXtcclxuICAgICAgICAgICAgICAgIHBvdXJFbmQodGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndhdGVyLnNldFBvdXJPdXRDYWxsYmFjayhfb25TdGFydC5iaW5kKHRoaXMpLF9vbkZpbmlzaC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFBvdXJJbkNhbGxiYWNrKG9uRmluaXNoKXtcclxuICAgICAgICAvL+awtOWAkuWujOS6hlxyXG4gICAgICAgIGNvbnN0IF9vbkZpbmlzaCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxldCBpc0ZpbmlzaGVkID0gdGhpcy5jaGVja0lzRmluc2hlZCgpO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCItLS0tLS0tLS0tLWlzRmluaXNoZWRcIixpc0ZpbmlzaGVkKVxyXG4gICAgICAgICAgICBpZihvbkZpbmlzaCl7XHJcbiAgICAgICAgICAgICAgICBvbkZpbmlzaCh0aGlzLGlzRmluaXNoZWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaXNGaW5pc2hlZCl7XHJcbiAgICAgICAgICAgICAgICBBdWRpb1V0aWwucGxheUVmZmVjdChBdWRpb0VudW0uZmluaXNoT25lLDAuNClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndhdGVyLnNldFBvdXJJbkNhbGxiYWNrKF9vbkZpbmlzaC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmmK/lkKblrozmiJDkuobvvIjlkIzpopzoibLloavmu6HmlbTkuKrmna/lrZDvvIkgKi9cclxuICAgIGNoZWNrSXNGaW5zaGVkKCl7XHJcbiAgICAgICAgbGV0IGlzRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBjb2xvcklkcyA9IHRoaXMuaW5mby5jb2xvcklkcztcclxuICAgICAgICBsZXQgdG1wSWQgPSBudWxsO1xyXG4gICAgICAgIGxldCBlbXBUeU51bSA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxTUExJVF9DT1VOVDtpKyspe1xyXG4gICAgICAgICAgICBpZih0bXBJZD09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0bXBJZCA9IGNvbG9ySWRzW2ldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodG1wSWQhPWNvbG9ySWRzW2ldKXtcclxuICAgICAgICAgICAgICAgIGlzRmluaXNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihjb2xvcklkc1tpXT09MCl7XHJcbiAgICAgICAgICAgICAgICBlbXBUeU51bSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVtcFR5TnVtPT1TUExJVF9DT1VOVCl7XHJcbiAgICAgICAgICAgIGlzRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNGaW5pc2hlZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHR3ZWVuOmNjLlR3ZWVuID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog56e75Yqo5Yiw55uu5qCH54K544CB5peL6L2s55O25a2Q5bm25YCS5rC0XHJcbiAgICAgKiBAcGFyYW0gaXNSaWdodCDlgL7mlpzop5LluqbvvIzlkJHlt6bkuLrmraPvvIzlj7PkuLrotJ9cclxuICAgICAqIEBwYXJhbSBvblBvdXJTdGFydCDmsLTlvIDlp4vku47nk7blj6PmtYHlh7rmnaVcclxuICAgICAqIEBwYXJhbSBvblBvdXJFbmQg5pys5qyh5rC05YCS5a6M5LqGXHJcbiAgICAgKi9cclxuICAgIG1vdmVUb1BvdXIoZHN0UHQ6Y2MuVmVjMixpc1JpZ2h0OmJvb2xlYW4sb25Qb3VyU3RhcnQ6KGM6Q3VwKT0+dm9pZCxvblBvdXJFbmQ6KGM6Q3VwKT0+dm9pZCl7XHJcbiAgICAgICAgdGhpcy5zZXRQb3VyT3V0Q2FsbGJhY2sob25Qb3VyU3RhcnQsb25Qb3VyRW5kKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSB0aGlzLndhdGVyLmdldFBvdXJTdGFydEFuZ2xlKClcclxuICAgICAgICBsZXQgZW5kQW5nbGUgPSB0aGlzLndhdGVyLmdldFBvdXJFbmRBbmdsZSgpXHJcblxyXG4gICAgICAgIHRoaXMud2F0ZXIub25TdGFydFBvdXIoKTtcclxuICAgICAgICBpZihpc1JpZ2h0KXtcclxuICAgICAgICAgICAgc3RhcnRBbmdsZSo9LTE7XHJcbiAgICAgICAgICAgIGVuZEFuZ2xlKj0tMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtb3ZlRHVyID0gMC41O1xyXG4gICAgICAgIGxldCBwb3VyRHVyID0gMC44O1xyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuID0gY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAuc2V0KHthbmdsZTowfSlcclxuICAgICAgICAgICAgLnRvKG1vdmVEdXIse3g6ZHN0UHQueCx5OmRzdFB0LnksYW5nbGU6c3RhcnRBbmdsZX0pXHJcbiAgICAgICAgICAgIC50byhwb3VyRHVyLHthbmdsZTplbmRBbmdsZX0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuID0gbnVsbDtcclxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbGV0IHRvcCA9IHRoaXMuZ2V0VG9wKCk7XHJcbiAgICAgICAgbGV0IGNvbG9ySWRzID0gdGhpcy5pbmZvLmNvbG9ySWRzO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8U1BMSVRfQ09VTlQ7aSsrKXtcclxuICAgICAgICAgICAgbGV0IF9pZCA9IGNvbG9ySWRzW2ldXHJcbiAgICAgICAgICAgIGlmKF9pZD09MCl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfWVsc2UgaWYodG9wLnRvcENvbG9ySWQ9PV9pZCl7Ly/pobbpg6jnm7jlkIzpopzoibLnmoTmsLTpg73lgJLmjonkuoZcclxuICAgICAgICAgICAgICAgIGNvbG9ySWRzW2ldID0gMDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydEFkZFdhdGVyKGNvbG9ySWQ6bnVtYmVyLG51bTpudW1iZXIsb25Db21wbGV0ZTooY3VwOkN1cCxpc0ZJbmlzaDpib29sZWFuKT0+dm9pZCl7XHJcbiAgICAgICAgdGhpcy5zZXRQb3VySW5DYWxsYmFjayhvbkNvbXBsZXRlKTtcclxuICAgICAgICBsZXQgYWNjID0gMDtcclxuICAgICAgICBmb3IobGV0IGk9U1BMSVRfQ09VTlQtMTtpPj0wO2ktLSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5mby5jb2xvcklkc1tpXSE9MCl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluZm8uY29sb3JJZHNbaV0gPSBjb2xvcklkO1xyXG4gICAgICAgICAgICBpZigrK2FjYz09bnVtKXtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoZXggPSBXYXRlckNvbG9yc1tjb2xvcklkXXx8XCIjNTM4ODQ5XCJcclxuICAgICAgICB0aGlzLndhdGVyLmFkZEluZm8oe1xyXG4gICAgICAgICAgICBjb2xvcklkOmNvbG9ySWQsXHJcbiAgICAgICAgICAgIGhlaWdodDpudW0vU1BMSVRfQ09VTlQgKkhFSUdIVF9GQUNUT1IsXHJcbiAgICAgICAgICAgIGNvbG9yOm5ldyBjYy5Db2xvcigpLmZyb21IRVgoaGV4KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBBdWRpb1V0aWwucGxheVBvdXJXYXRlckVmZmVjdChudW0vU1BMSVRfQ09VTlQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWKoOawtOeri+WIuyAqL1xyXG4gICAgYWRkV2F0ZXJJbW1lZGlhdGVseShjb2xvcklkOm51bWJlcixudW06bnVtYmVyKXtcclxuICAgICAgICBsZXQgYWNjID0gMDtcclxuICAgICAgICBmb3IobGV0IGk9U1BMSVRfQ09VTlQtMTtpPj0wO2ktLSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5mby5jb2xvcklkc1tpXSE9MCl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluZm8uY29sb3JJZHNbaV0gPSBjb2xvcklkO1xyXG4gICAgICAgICAgICBpZigrK2FjYz09bnVtKXtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdFdhdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5bCG6aG26YOo55qE6aKc6Imy5Yig6ZmkbnVt5LiqICovXHJcbiAgICByZW1vdmVUb3BXYXRlckltbWVkaWF0ZWx5KG51bTpudW1iZXIpe1xyXG4gICAgICAgIGxldCBhY2MgPSAwO1xyXG4gICAgICAgIGxldCB0b3AgPSB0aGlzLmdldFRvcCgpO1xyXG4gICAgICAgIGxldCBjb2xvcklkcyA9IHRoaXMuaW5mby5jb2xvcklkcztcclxuICAgICAgICBmb3IobGV0IGk9MDtpPFNQTElUX0NPVU5UO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBfaWQgPSBjb2xvcklkc1tpXVxyXG4gICAgICAgICAgICBpZihfaWQ9PTApe1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRvcC50b3BDb2xvcklkPT1faWQpey8v6aG26YOo55u45ZCM6aKc6Imy55qE5rC06YO95YCS5o6J5LqGXHJcbiAgICAgICAgICAgICAgICBjb2xvcklkc1tpXSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZigrK2FjYz49bnVtKXtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdFdhdGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRvcDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb3AoKXtcclxuICAgICAgICBsZXQgY29sb3JJZHMgPSB0aGlzLmluZm8uY29sb3JJZHM7XHJcbiAgICAgICAgbGV0IGVtcHR5TnVtID0gMDsvL+adr+mhtueahOepuuS9jeacieWHoOagvFxyXG4gICAgICAgIGxldCB0b3BDb2xvcklkID0gMDsvL+adr+mhtuminOiJsmlkXHJcbiAgICAgICAgbGV0IHRvcENvbG9yTnVtID0gMDsvL+adr+mhtueahOminOiJsuWFseacieWHoOagvFxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8U1BMSVRfQ09VTlQ7aSsrKXtcclxuICAgICAgICAgICAgaWYoY29sb3JJZHNbaV09PTApe1xyXG4gICAgICAgICAgICAgICAgZW1wdHlOdW0rKztcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRvcENvbG9ySWQ9PTB8fHRvcENvbG9ySWQ9PWNvbG9ySWRzW2ldKXtcclxuICAgICAgICAgICAgICAgIHRvcENvbG9ySWQgPSBjb2xvcklkc1tpXTtcclxuICAgICAgICAgICAgICAgIHRvcENvbG9yTnVtKys7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZW1wdHlOdW06ZW1wdHlOdW0sXHJcbiAgICAgICAgICAgIHRvcENvbG9ySWQ6dG9wQ29sb3JJZCxcclxuICAgICAgICAgICAgdG9wQ29sb3JOdW06dG9wQ29sb3JOdW0sXHJcbiAgICAgICAgICAgIGNvbG9ySGV4OldhdGVyQ29sb3JzW3RvcENvbG9ySWRdfHxcIiM1Mzg4NDlcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy53YXRlci5za2V3QW5nbGUgPSAwXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFBvdXJBbmNob3IoaXNSaWdodDpib29sZWFuKXtcclxuICAgICAgICBsZXQgcHQgPSBjYy52MigzLDIpO1xyXG4gICAgICAgIHB0LnggPSBpc1JpZ2h0Pyh0aGlzLm5vZGUud2lkdGgtcHQueCk6cHQueDtcclxuICAgICAgICBwdC55ID0gdGhpcy5ub2RlLmhlaWdodC1wdC55O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB0LnggPSBwdC54L3RoaXMubm9kZS53aWR0aDtcclxuICAgICAgICBwdC55ID0gcHQueS90aGlzLm5vZGUuaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLnNldEFuY2hvcihwdCkgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE5vcm1hbEFuY2hvcigpe1xyXG4gICAgICAgIHRoaXMuc2V0QW5jaG9yKGNjLnYyKDAuNSwwLjUpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZG90OmNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzZXRBbmNob3IoYW5jaG9yOmNjLlZlYzIpe1xyXG4gICAgICAgIC8vIGlmKHRoaXMuZG90PT1udWxsKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5kb3QgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmRvdC5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgLy8gICAgIGxldCBsYWJlbCA9IHRoaXMuZG90LmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIC8vICAgICBsYWJlbC5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShjcmVhdGVUZXh0dXJlKCkpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZG90LmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLmRvdC5zZXRQb3NpdGlvbigwLDApXHJcblxyXG4gICAgICAgIGxldCBvbGRBbmNob3IgPSB0aGlzLm5vZGUuZ2V0QW5jaG9yUG9pbnQoKTtcclxuICAgICAgICBsZXQgc2VsZlB0ID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7Ly/lvZPliY3plJrngrnkuJbnlYzlnZDmoIdcclxuICAgICAgICBcclxuICAgICAgICBsZXQgd2F0ZXJQdCA9IHRoaXMud2F0ZXIubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRBbmNob3JQb2ludChhbmNob3IpO1xyXG4gICAgICAgIGxldCBvZmZzZXRBbmNob3IgPSBjYy52MihhbmNob3IueC1vbGRBbmNob3IueCxhbmNob3IueS1vbGRBbmNob3IueSlcclxuICAgICAgICBsZXQgb2Zmc2V0UHQgPSBjYy52MihvZmZzZXRBbmNob3IueCp0aGlzLm5vZGUud2lkdGgsb2Zmc2V0QW5jaG9yLnkqdGhpcy5ub2RlLmhlaWdodClcclxuICAgICAgICBvZmZzZXRQdCA9IHJvdGF0ZVB0KG9mZnNldFB0LHRoaXMubm9kZS5hbmdsZSlcclxuICAgICAgICBzZWxmUHQueCArPSBvZmZzZXRQdC54O1xyXG4gICAgICAgIHNlbGZQdC55ICs9IG9mZnNldFB0Lnk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHNlbGZQdCk7XHJcbiAgICAgICAgd2F0ZXJQdC54IC09IG9mZnNldEFuY2hvci54KnRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICB3YXRlclB0LnkgLT0gb2Zmc2V0QW5jaG9yLnkqdGhpcy5ub2RlLmhlaWdodDtcclxuICAgICAgICB0aGlzLndhdGVyLm5vZGUuc2V0UG9zaXRpb24od2F0ZXJQdCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluW9k+WJjeawtOmdoueahGdsb2JhbCB55Z2Q5qCHICovXHJcbiAgICBnZXRXYXRlclN1cmZhY2VQb3NZKG5lZWRBZGp1c3Q9ZmFsc2Upe1xyXG4gICAgICAgIGxldCB0b3AgPSB0aGlzLmdldFRvcCgpO1xyXG4gICAgICAgIGxldCB5ID0gKFNQTElUX0NPVU5ULXRvcC5lbXB0eU51bSkvU1BMSVRfQ09VTlQ7XHJcbiAgICAgICAgaWYoeTwwLjAyKXtcclxuICAgICAgICAgICAgeSA9IDAuMDJcclxuICAgICAgICB9ZWxzZSBpZihuZWVkQWRqdXN0KXtcclxuICAgICAgICAgICAgeS09MS4wL1NQTElUX0NPVU5UKkhFSUdIVF9GQUNUT1I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHkqPUhFSUdIVF9GQUNUT1I7XHJcbiAgICAgICAgeS09MC41O1xyXG4gICAgICAgIGxldCBwdCA9IGNjLnYyKDAsdGhpcy53YXRlci5ub2RlLmhlaWdodCp5KTtcclxuICAgICAgICBwdCA9IHRoaXMud2F0ZXIubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocHQpXHJcbiAgICAgICAgcmV0dXJuIHB0LnlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcm90YXRlUHQocHQ6Y2MuVmVjMixhbmdsZTpudW1iZXIpe1xyXG4gICAgbGV0IHJhZGlhbiA9IGFuZ2xlMnJhZGlhbihhbmdsZSk7XHJcbiAgICBsZXQgcmV0ID0gY2MudjIoKTtcclxuICAgIHJldC54ID0gcHQueCpNYXRoLmNvcyhyYWRpYW4pLXB0LnkqTWF0aC5zaW4ocmFkaWFuKTtcclxuICAgIHJldC55ID0gcHQueCpNYXRoLnNpbihyYWRpYW4pK3B0LnkqTWF0aC5jb3MocmFkaWFuKTtcclxuXHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmdsZTJyYWRpYW4oYW5nbGU6bnVtYmVyKXtcclxuICAgIHdoaWxlKGFuZ2xlPjM2MCl7XHJcbiAgICAgICAgYW5nbGUtPTM2MDtcclxuICAgIH1cclxuICAgIHdoaWxlKGFuZ2xlPC0zNjApe1xyXG4gICAgICAgIGFuZ2xlKz0zNjA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGFuZ2xlJTM2MCkgKiBNYXRoLlBJIC8gMTgwLjA7XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/utils/screen_adapt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '989386J09lA6rleZStEOfsK', 'screen_adapt');
// Script/utils/screen_adapt.ts

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
exports.ScreenAdapter = exports.ScreenFit = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, executeInEditMode = _a.executeInEditMode;
var ScreenFit;
(function (ScreenFit) {
    ScreenFit[ScreenFit["NO_BORDER"] = 0] = "NO_BORDER";
    ScreenFit[ScreenFit["SHOW_ALL"] = 1] = "SHOW_ALL";
    ScreenFit[ScreenFit["EXACT_FIT"] = 2] = "EXACT_FIT";
})(ScreenFit = exports.ScreenFit || (exports.ScreenFit = {}));
var ScreenAdapter = /** @class */ (function () {
    function ScreenAdapter() {
    }
    Object.defineProperty(ScreenAdapter, "canvasSize", {
        get: function () {
            var ret = cc.view.getCanvasSize();
            do {
                var canvas_node = cc.Canvas.instance.node;
                if (!canvas_node) {
                    break;
                }
                ret = canvas_node.getContentSize();
            } while (false);
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScreenAdapter, "leftTop", {
        get: function () {
            var size = this.canvasSize;
            return cc.v2(-size.width * 0.5, size.height * 0.5);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScreenAdapter, "middleBottom", {
        get: function () {
            var size = this.canvasSize;
            var pos = cc.v2(0, -size.height * 0.5);
            return pos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScreenAdapter, "screenScale", {
        /**实际分辨率和设计分辨率的比例 */
        get: function () {
            var visible = this.canvasSize;
            var design = cc.Canvas.instance.designResolution;
            cc.log("visibleSize : " + visible.toString() + " designSize:" + design.toString());
            return cc.v2(visible.width / design.width, visible.height / design.height);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScreenAdapter, "aspectRatio", {
        get: function () {
            var visible = this.canvasSize;
            var ratio = visible.height / visible.width;
            cc.log("aspectRatio : " + ratio.toFixed(2));
            return ratio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScreenAdapter, "isHigherScreen", {
        get: function () {
            return this.aspectRatio >= 2.0;
        },
        enumerable: false,
        configurable: true
    });
    ///画布和背景图片，自动适应屏幕尺寸
    ScreenAdapter.adaptScreenSize = function (cvs_node, screenFit) {
        if (screenFit === void 0) { screenFit = ScreenFit.NO_BORDER; }
        if (cvs_node) {
            var canvas = cvs_node.getComponent(cc.Canvas);
            if (canvas != null) {
                var _screenScale = this.screenScale;
                cc.log("screenScale : ", _screenScale.x.toFixed(2), _screenScale.y.toFixed(2));
                if (screenFit == ScreenFit.NO_BORDER) {
                    ///比设计分辨率细长(宽高比较小)，则宽度固定，否则高度固定
                    var _fitHeight = false;
                    var _fitWidth = false;
                    if (_screenScale.x < _screenScale.y) {
                        _fitHeight = true;
                    }
                    else if (_screenScale.x > _screenScale.y) {
                        _fitWidth = true;
                    }
                    canvas.fitWidth = _fitWidth;
                    canvas.fitHeight = _fitHeight;
                }
                else if (screenFit == ScreenFit.SHOW_ALL) {
                    //铺满短的一边
                    canvas.fitWidth = _screenScale.x < _screenScale.y;
                    canvas.fitHeight = !canvas.fitWidth;
                }
                else {
                    canvas.fitWidth = true;
                    canvas.fitHeight = true;
                }
            }
            else {
                var _nodeScale = cc.v2(this.canvasSize.width / cvs_node.width, this.canvasSize.height / cvs_node.height);
                cc.log("_nodeScale : ", _nodeScale.x.toFixed(2), _nodeScale.y.toFixed(2));
                if (screenFit == ScreenFit.NO_BORDER) {
                    var scale = Math.max(_nodeScale.x, _nodeScale.y);
                    cvs_node.setScale(scale);
                }
                else if (screenFit == ScreenFit.SHOW_ALL) {
                    var scale = Math.min(_nodeScale.x, _nodeScale.y);
                    cvs_node.setScale(scale);
                }
                else {
                    cvs_node.setScale(_nodeScale);
                }
            }
        }
        else {
            cc.error('adapt screen node is null');
        }
    };
    return ScreenAdapter;
}());
exports.ScreenAdapter = ScreenAdapter;
var M = /** @class */ (function (_super) {
    __extends(M, _super);
    function M() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._screenFit = ScreenFit.NO_BORDER;
        return _this;
    }
    M_1 = M;
    Object.defineProperty(M.prototype, "screenFit", {
        get: function () {
            return this._screenFit;
        },
        set: function (val) {
            this._screenFit = val;
            ScreenAdapter.adaptScreenSize(this.node, this.screenFit);
        },
        enumerable: false,
        configurable: true
    });
    M.prototype.onLoad = function () {
        if (!CC_EDITOR) {
            ScreenAdapter.adaptScreenSize(this.node, this.screenFit);
        }
    };
    var M_1;
    M.instance = new M_1();
    __decorate([
        property({
            type: cc.Enum(ScreenFit),
            tooltip: "NO_BORDER,//\u4FDD\u8BC1\u77ED\u8FB9\u80FD\u94FA\u6EE1\u5C4F\u5E55\uFF0C\u957F\u8FB9\u53EF\u80FD\u4F1A\u8D85\u51FA\u5C4F\u5E55\u533A\u57DF\n        SHOW_ALL,//\u4FDD\u8BC1\u957F\u8FB9\u94FA\u6EE1\u5C4F\u5E55\uFF0C\u80FD\u663E\u793A\u6240\u6709\u5185\u5BB9\uFF0C\u53EF\u80FD\u4F1A\u6709\u9ED1\u8FB9\n        EXACT_FIT,//\u957F\u77ED\u8FB9\u5747\u62C9\u4F38\u94FA\u6EE1\u5C4F\u5E55\uFF0C\u53EF\u80FD\u4F1A\u53D8\u5F62\n        ",
        })
    ], M.prototype, "screenFit", null);
    M = M_1 = __decorate([
        ccclass,
        menu("adapt/screen_adapt"),
        executeInEditMode
    ], M);
    return M;
}(cc.Component));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx1dGlsc1xcc2NyZWVuX2FkYXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQTZDLEVBQUUsQ0FBQyxVQUFVLEVBQXpELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFDLElBQUksVUFBQSxFQUFDLGlCQUFpQix1QkFBaUIsQ0FBQztBQUVqRSxJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDakIsbURBQVMsQ0FBQTtJQUNULGlEQUFRLENBQUE7SUFDUixtREFBUyxDQUFBO0FBQ2IsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBRUQ7SUFBQTtJQW9GQSxDQUFDO0lBbkZHLHNCQUFrQiwyQkFBVTthQUE1QjtZQUNJLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbEMsR0FBRTtnQkFDRSxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQzFDLElBQUcsQ0FBQyxXQUFXLEVBQUM7b0JBQUMsTUFBTTtpQkFBQztnQkFDeEIsR0FBRyxHQUFHLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN0QyxRQUFNLEtBQUssRUFBQztZQUNiLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0Isd0JBQU87YUFBekI7WUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzNCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDdkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0IsNkJBQVk7YUFBOUI7WUFDSSxJQUFJLElBQUksR0FBRyxJ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O1FBckJHLGdCQUFVLEdBQWMsU0FBUyxDQUFDLFNBQVMsQ0FBQzs7SUFxQmhELENBQUM7VUF4QkssQ0FBQztJQVdILHNCQUFJLHdCQUFTO2FBSWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQU5ELFVBQWMsR0FBRztZQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUQsQ0FBQzs7O09BQUE7SUFLRCxrQkFBTSxHQUFOO1FBQ0ksSUFBRyxDQUFDLFNBQVMsRUFBQztZQUNWLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDOztJQXRCc0IsVUFBUSxHQUFNLElBQUksR0FBQyxFQUFFLENBQUM7SUFVN0M7UUFQQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdkIsT0FBTyxFQUFDLDJhQUdQO1NBQ0osQ0FBQztzQ0FJRDtJQWRDLENBQUM7UUFITixPQUFPO1FBQ1AsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQzFCLGlCQUFpQjtPQUNaLENBQUMsQ0F3Qk47SUFBRCxRQUFDO0NBeEJELEFBd0JDLENBeEJlLEVBQUUsQ0FBQyxTQUFTLEdBd0IzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHksbWVudSxleGVjdXRlSW5FZGl0TW9kZX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGVudW0gU2NyZWVuRml0e1xyXG4gICAgTk9fQk9SREVSLC8v5L+d6K+B55+t6L656IO96ZO65ruh5bGP5bmV77yM6ZW/6L655Y+v6IO95Lya6LaF5Ye65bGP5bmV5Yy65Z+fXHJcbiAgICBTSE9XX0FMTCwvL+S/neivgemVv+i+uemTuua7oeWxj+W5le+8jOiDveaYvuekuuaJgOacieWGheWuue+8jOWPr+iDveS8muaciem7kei+uVxyXG4gICAgRVhBQ1RfRklULC8v6ZW/55+t6L655Z2H5ouJ5Ly46ZO65ruh5bGP5bmV77yM5Y+v6IO95Lya5Y+Y5b2iXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW5BZGFwdGVye1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgY2FudmFzU2l6ZSgpOmNjLlNpemV7XHJcbiAgICAgICAgbGV0IHJldCA9IGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpO1xyXG4gICAgICAgIGRve1xyXG4gICAgICAgICAgICBsZXQgY2FudmFzX25vZGUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcclxuICAgICAgICAgICAgaWYoIWNhbnZhc19ub2RlKXticmVhazt9XHJcbiAgICAgICAgICAgIHJldCA9IGNhbnZhc19ub2RlLmdldENvbnRlbnRTaXplKCk7XHJcbiAgICAgICAgfXdoaWxlKGZhbHNlKVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbGVmdFRvcCgpOiBjYy5WZWMyIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuY2FudmFzU2l6ZTtcclxuICAgICAgICByZXR1cm4gY2MudjIoLXNpemUud2lkdGggKiAwLjUsIHNpemUuaGVpZ2h0ICogMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBtaWRkbGVCb3R0b20oKTogY2MuVmVjMiB7XHJcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLmNhbnZhc1NpemU7XHJcbiAgICAgICAgbGV0IHBvcyA9ICBjYy52MigwLCAtc2l6ZS5oZWlnaHQgKiAwLjUpO1xyXG4gICAgICAgIHJldHVybiBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5a6e6ZmF5YiG6L6o546H5ZKM6K6+6K6h5YiG6L6o546H55qE5q+U5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzY3JlZW5TY2FsZSgpe1xyXG4gICAgICAgIGxldCB2aXNpYmxlID0gdGhpcy5jYW52YXNTaXplO1xyXG4gICAgICAgIGxldCBkZXNpZ24gPSBjYy5DYW52YXMuaW5zdGFuY2UuZGVzaWduUmVzb2x1dGlvbjtcclxuICAgICAgICBjYy5sb2coYHZpc2libGVTaXplIDogJHt2aXNpYmxlLnRvU3RyaW5nKCl9IGRlc2lnblNpemU6JHtkZXNpZ24udG9TdHJpbmcoKX1gKTtcclxuICAgICAgICByZXR1cm4gY2MudjIodmlzaWJsZS53aWR0aCAvIGRlc2lnbi53aWR0aCwgdmlzaWJsZS5oZWlnaHQgLyBkZXNpZ24uaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBhc3BlY3RSYXRpbygpOm51bWJlcntcclxuICAgICAgICBsZXQgdmlzaWJsZSA9IHRoaXMuY2FudmFzU2l6ZTtcclxuICAgICAgICBsZXQgcmF0aW8gPSB2aXNpYmxlLmhlaWdodC92aXNpYmxlLndpZHRoO1xyXG4gICAgICAgIGNjLmxvZyhgYXNwZWN0UmF0aW8gOiAke3JhdGlvLnRvRml4ZWQoMil9YCk7XHJcbiAgICAgICAgcmV0dXJuIHJhdGlvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlzSGlnaGVyU2NyZWVuKCk6IGJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNwZWN0UmF0aW8gPj0gMi4wO1xyXG4gICAgfVxyXG5cclxuICAgIC8vL+eUu+W4g+WSjOiDjOaZr+WbvueJh++8jOiHquWKqOmAguW6lOWxj+W5leWwuuWvuFxyXG4gICAgcHVibGljIHN0YXRpYyBhZGFwdFNjcmVlblNpemUoY3ZzX25vZGU6IGNjLk5vZGUsIHNjcmVlbkZpdDogU2NyZWVuRml0ID0gU2NyZWVuRml0Lk5PX0JPUkRFUik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjdnNfbm9kZSkge1xyXG4gICAgICAgICAgICBsZXQgY2FudmFzID0gY3ZzX25vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgICAgIGlmIChjYW52YXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IF9zY3JlZW5TY2FsZSA9IHRoaXMuc2NyZWVuU2NhbGU7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJzY3JlZW5TY2FsZSA6IFwiLCBfc2NyZWVuU2NhbGUueC50b0ZpeGVkKDIpLCBfc2NyZWVuU2NhbGUueS50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgICAgIGlmIChzY3JlZW5GaXQgPT0gU2NyZWVuRml0Lk5PX0JPUkRFUikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vL+avlOiuvuiuoeWIhui+qOeOh+e7humVvyjlrr3pq5jmr5TovoPlsI8p77yM5YiZ5a695bqm5Zu65a6a77yM5ZCm5YiZ6auY5bqm5Zu65a6aXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9maXRIZWlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX2ZpdFdpZHRoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9zY3JlZW5TY2FsZS54IDwgX3NjcmVlblNjYWxlLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2ZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfc2NyZWVuU2NhbGUueCA+IF9zY3JlZW5TY2FsZS55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9maXRXaWR0aCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IF9maXRXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gX2ZpdEhlaWdodDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2NyZWVuRml0ID09IFNjcmVlbkZpdC5TSE9XX0FMTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6ZO65ruh55+t55qE5LiA6L65XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gX3NjcmVlblNjYWxlLnggPCBfc2NyZWVuU2NhbGUueTtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gIWNhbnZhcy5maXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBfbm9kZVNjYWxlID0gY2MudjIodGhpcy5jYW52YXNTaXplLndpZHRoL2N2c19ub2RlLndpZHRoLHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQvY3ZzX25vZGUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIl9ub2RlU2NhbGUgOiBcIiwgX25vZGVTY2FsZS54LnRvRml4ZWQoMiksIF9ub2RlU2NhbGUueS50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgICAgIGlmIChzY3JlZW5GaXQgPT0gU2NyZWVuRml0Lk5PX0JPUkRFUikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZTogbnVtYmVyID0gTWF0aC5tYXgoX25vZGVTY2FsZS54LCBfbm9kZVNjYWxlLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN2c19ub2RlLnNldFNjYWxlKHNjYWxlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2NyZWVuRml0ID09IFNjcmVlbkZpdC5TSE9XX0FMTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZTogbnVtYmVyID0gTWF0aC5taW4oX25vZGVTY2FsZS54LCBfbm9kZVNjYWxlLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN2c19ub2RlLnNldFNjYWxlKHNjYWxlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3ZzX25vZGUuc2V0U2NhbGUoX25vZGVTY2FsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2MuZXJyb3IoJ2FkYXB0IHNjcmVlbiBub2RlIGlzIG51bGwnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwiYWRhcHQvc2NyZWVuX2FkYXB0XCIpXHJcbkBleGVjdXRlSW5FZGl0TW9kZVxyXG5jbGFzcyBNIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IE0gPSBuZXcgTSgpO1xyXG4gICAgXHJcbiAgICBfc2NyZWVuRml0OiBTY3JlZW5GaXQgPSBTY3JlZW5GaXQuTk9fQk9SREVSO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOmNjLkVudW0oU2NyZWVuRml0KSxcclxuICAgICAgICB0b29sdGlwOmBOT19CT1JERVIsLy/kv53or4Hnn63ovrnog73pk7rmu6HlsY/luZXvvIzplb/ovrnlj6/og73kvJrotoXlh7rlsY/luZXljLrln59cclxuICAgICAgICBTSE9XX0FMTCwvL+S/neivgemVv+i+uemTuua7oeWxj+W5le+8jOiDveaYvuekuuaJgOacieWGheWuue+8jOWPr+iDveS8muaciem7kei+uVxyXG4gICAgICAgIEVYQUNUX0ZJVCwvL+mVv+efrei+ueWdh+aLieS8uOmTuua7oeWxj+W5le+8jOWPr+iDveS8muWPmOW9olxyXG4gICAgICAgIGAsXHJcbiAgICB9KVxyXG4gICAgc2V0IHNjcmVlbkZpdCh2YWwpe1xyXG4gICAgICAgIHRoaXMuX3NjcmVlbkZpdCA9IHZhbDtcclxuICAgICAgICBTY3JlZW5BZGFwdGVyLmFkYXB0U2NyZWVuU2l6ZSh0aGlzLm5vZGUsdGhpcy5zY3JlZW5GaXQpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNjcmVlbkZpdCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JlZW5GaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgaWYoIUNDX0VESVRPUil7XHJcbiAgICAgICAgICAgIFNjcmVlbkFkYXB0ZXIuYWRhcHRTY3JlZW5TaXplKHRoaXMubm9kZSx0aGlzLnNjcmVlbkZpdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/utils/audio_util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77eafSYQz1C8IzydQMCR8fa', 'audio_util');
// Script/utils/audio_util.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioUtil = exports.AudioEnum = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioEnum;
(function (AudioEnum) {
    AudioEnum["button"] = "audio/Button_Click";
    AudioEnum["finishOne"] = "audio/ContainerFinish";
    AudioEnum["pourWater"] = "audio/pourWater";
    AudioEnum["youWin"] = "audio/Show_Victory";
})(AudioEnum = exports.AudioEnum || (exports.AudioEnum = {}));
var AudioUtil = /** @class */ (function () {
    function AudioUtil() {
    }
    AudioUtil.preloadAll = function () {
        var arr = [];
        for (var key in AudioEnum) {
            var path = AudioEnum[key];
            arr.push(path);
        }
        cc.resources.preload(arr);
    };
    AudioUtil.unloadAll = function () {
        for (var key in AudioEnum) {
            var path = AudioEnum[key];
            cc.resources.release(path, cc.AudioClip);
        }
    };
    AudioUtil.playEffect = function (path, volume) {
        if (volume === void 0) { volume = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var clip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadClip(path)];
                    case 1:
                        clip = _a.sent();
                        return [2 /*return*/, cc.audioEngine.play(clip, false, volume)];
                }
            });
        });
    };
    /**
     * 播放倒水声音，根据倒水容量播放不同的时间
     * @param time 【0,1】
     */
    AudioUtil.playPourWaterEffect = function (time) {
        return __awaiter(this, void 0, void 0, function () {
            var clip, id, dur;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadClip(AudioEnum.pourWater)];
                    case 1:
                        clip = _a.sent();
                        id = cc.audioEngine.play(clip, false, 1.0);
                        dur = 3.0 * time;
                        setTimeout(function () {
                            cc.audioEngine.stop(id);
                        }, dur * 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    AudioUtil.loadClip = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resove, reject) {
                        cc.resources.load(path, cc.AudioClip, function (err, clip) {
                            if (err) {
                                // reject(err)
                                resove(null);
                            }
                            else {
                                resove(clip);
                            }
                        });
                    })];
            });
        });
    };
    return AudioUtil;
}());
exports.AudioUtil = AudioUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx1dGlsc1xcYXVkaW9fdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFDakIsMENBQTZCLENBQUE7SUFDN0IsZ0RBQW1DLENBQUE7SUFDbkMsMENBQTZCLENBQUE7SUFDN0IsMENBQTZCLENBQUE7QUFDakMsQ0FBQyxFQUxXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBS3BCO0FBRUQ7SUFBQTtJQThDQSxDQUFDO0lBN0NVLG9CQUFVLEdBQWpCO1FBQ0ksSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsS0FBSSxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUM7WUFDckIsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDakI7UUFDRCxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ00sbUJBQVMsR0FBaEI7UUFDSSxLQUFJLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBQztZQUNyQixJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUM7SUFFWSxvQkFBVSxHQUF2QixVQUF3QixJQUFxQixFQUFDLE1BQVE7UUFBUix1QkFBQSxFQUFBLFVBQVE7Ozs7OzRCQUN2QyxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBaEMsSUFBSSxHQUFHLFNBQXlCO3dCQUNwQyxzQkFBTyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQyxFQUFDOzs7O0tBQ2pEO0lBRUQ7OztPQUdHO0lBQ1UsNkJBQW1CLEdBQWhDLFVBQWlDLElBQVc7Ozs7OzRCQUM3QixxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBQTs7d0JBQS9DLElBQUksR0FBRyxTQUF3Qzt3QkFDL0MsRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3pDLEdBQUcsR0FBRyxHQUFHLEdBQUMsSUFBSSxDQUFDO3dCQUNuQixVQUFVLENBQUM7NEJBQ1AsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7d0JBQzNCLENBQUMsRUFBRSxHQUFHLEdBQUMsSUFBSSxDQUFDLENBQUM7Ozs7O0tBQ2hCO0lBRXFCLGtCQUFRLEdBQTlCLFVBQStCLElBQVc7OztnQkFDdEMsc0JBQU8sSUFBSSxPQUFPLENBQWUsVUFBVSxNQUFNLEVBQUMsTUFBTTt3QkFDcEQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsVUFBQyxHQUFTLEVBQUMsSUFBaUI7NEJBQzVELElBQUcsR0FBRyxFQUFDO2dDQUNILGNBQWM7Z0NBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBOzZCQUNmO2lDQUFJO2dDQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTs2QkFDZjt3QkFDTCxDQUFDLENBQUMsQ0FBQTtvQkFDTixDQUFDLENBQUMsRUFBQTs7O0tBQ0w7SUFDTCxnQkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGVudW0gQXVkaW9FbnVte1xyXG4gICAgYnV0dG9uID0gXCJhdWRpby9CdXR0b25fQ2xpY2tcIixcclxuICAgIGZpbmlzaE9uZSA9IFwiYXVkaW8vQ29udGFpbmVyRmluaXNoXCIsXHJcbiAgICBwb3VyV2F0ZXIgPSBcImF1ZGlvL3BvdXJXYXRlclwiLFxyXG4gICAgeW91V2luID0gXCJhdWRpby9TaG93X1ZpY3RvcnlcIixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1ZGlvVXRpbHtcclxuICAgIHN0YXRpYyBwcmVsb2FkQWxsKCl7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQga2V5IGluIEF1ZGlvRW51bSl7XHJcbiAgICAgICAgICAgIGxldCBwYXRoID0gQXVkaW9FbnVtW2tleV07XHJcbiAgICAgICAgICAgIGFyci5wdXNoKHBhdGgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKGFycik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdW5sb2FkQWxsKCl7XHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gQXVkaW9FbnVtKXtcclxuICAgICAgICAgICAgbGV0IHBhdGggPSBBdWRpb0VudW1ba2V5XTtcclxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLnJlbGVhc2UocGF0aCxjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgcGxheUVmZmVjdChwYXRoOkF1ZGlvRW51bXxzdHJpbmcsdm9sdW1lPTEpe1xyXG4gICAgICAgIGxldCBjbGlwID0gYXdhaXQgdGhpcy5sb2FkQ2xpcChwYXRoKTtcclxuICAgICAgICByZXR1cm4gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLGZhbHNlLHZvbHVtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7lgJLmsLTlo7Dpn7PvvIzmoLnmja7lgJLmsLTlrrnph4/mkq3mlL7kuI3lkIznmoTml7bpl7RcclxuICAgICAqIEBwYXJhbSB0aW1lIOOAkDAsMeOAkVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXN5bmMgcGxheVBvdXJXYXRlckVmZmVjdCh0aW1lOm51bWJlcil7XHJcbiAgICAgICAgbGV0IGNsaXAgPSBhd2FpdCB0aGlzLmxvYWRDbGlwKEF1ZGlvRW51bS5wb3VyV2F0ZXIpO1xyXG4gICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCxmYWxzZSwxLjApO1xyXG4gICAgICAgIGxldCBkdXIgPSAzLjAqdGltZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChpZClcclxuICAgICAgICB9LCBkdXIqMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgIGFzeW5jIGxvYWRDbGlwKHBhdGg6c3RyaW5nKXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Y2MuQXVkaW9DbGlwPihmdW5jdGlvbiAocmVzb3ZlLHJlamVjdCkge1xyXG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLGNjLkF1ZGlvQ2xpcCwoZXJyOkVycm9yLGNsaXA6Y2MuQXVkaW9DbGlwKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZWplY3QoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc292ZShudWxsKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb3ZlKGNsaXApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------
