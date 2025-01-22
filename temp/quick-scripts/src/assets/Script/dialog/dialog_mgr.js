"use strict";
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