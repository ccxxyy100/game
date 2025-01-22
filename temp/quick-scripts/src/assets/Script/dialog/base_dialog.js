"use strict";
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