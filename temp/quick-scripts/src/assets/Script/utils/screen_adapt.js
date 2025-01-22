"use strict";
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