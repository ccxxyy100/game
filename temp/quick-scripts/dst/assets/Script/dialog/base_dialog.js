
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