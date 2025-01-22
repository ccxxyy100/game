
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkaWFsb2dcXGRpYWxvZ19tZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBZ0U7QUFDaEUsb0RBQWtEO0FBQ2xELDZDQUF3RDtBQVdsRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQyxTQUFTLFdBQVcsQ0FBQyxJQUFZO0lBQzdCLElBQUksTUFBTSxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLElBQUcsTUFBTSxJQUFFLElBQUksRUFBQztRQUNaLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6QztJQUNELE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDaEIsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDakIsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDNUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFFM0IsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUFFRDtJQUE4Qiw0QkFBWTtJQUExQztRQUFBLHFFQXdQQztRQTFPRyxjQUFRLEdBQXFCLEVBQUUsQ0FBQSxDQUFBLE1BQU07UUFTN0IsWUFBTSxHQUFjLElBQUksQ0FBQztRQTBGekIsZUFB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SUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDO1lBQ3pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUF0UE0sNEJBQW1CLEdBQUcscUJBQXFCLENBQUM7SUFDNUMsNEJBQW1CLEdBQUcscUJBQXFCLENBQUM7SUFZbkQ7UUFEQyxRQUFROzhDQUNzQjtJQTBPbkMsZUFBQztDQXhQRCxBQXdQQyxDQXhQNkIsRUFBRSxDQUFDLFNBQVMsR0F3UHpDO0FBeFBZLDRCQUFRO0FBMFByQix3QkFBVSxDQUFDLE1BQU0sR0FBRyxVQUFZLEdBQW9CLEVBQUMsS0FBVzs7SUFBQyxjQUFPO1NBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztRQUFQLDZCQUFPOztJQUNwRSxPQUFPLENBQUEsS0FBQSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUEsQ0FBQyxVQUFVLDJCQUFDLEdBQUcsRUFBQyxLQUFLLEdBQUksSUFBSSxHQUFDO0FBQy9ELENBQUMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEdsb2JhbE5vZGUsIEdsb2JhbE5vZGVOYW1lcyB9IGZyb20gXCIuLi9nbG9iYWxfbm9kZVwiO1xyXG5pbXBvcnQgeyBMYXllckNvbG9yIH0gZnJvbSBcIi4uL3V0aWxzL2xheWVyX2NvbG9yXCI7XHJcbmltcG9ydCB7IEJhc2VEaWFsb2csIFdpbmRvd1N0eWxlIH0gZnJvbSBcIi4vYmFzZV9kaWFsb2dcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNob3dXaW5kb3dBcmdze1xyXG4gICAgc3R5bGU/OldpbmRvd1N0eWxlLC8v5by556qX6aOO5qC8XHJcbiAgICBtYXNrT3BhY2l0eT86bnVtYmVyLC8v6buR6Imy5Y2K6YCP5piO6YGu572p55qE6YCP5piO5bqmXHJcbiAgICBcclxuICAgIGNsb3NlQnlUb3VjaEJnPzpib29sZWFuLC8v5piv5ZCm54K55Ye76IOM5ZCO6ZqQ6JePXHJcbiAgICBjbG9zZUJ5VG91Y2hCYWNrPzpib29sZWFuLC8v5piv5ZCm54K55Ye76L+U5Zue6ZSu6ZqQ6JePXHJcbn1cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFwcGx5V2lkZ2V0KG5vZGU6Y2MuTm9kZSl7XHJcbiAgICBsZXQgd2lkZ2V0ID0gIG5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICBpZih3aWRnZXQ9PW51bGwpe1xyXG4gICAgICAgIHdpZGdldCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICB9XHJcbiAgICB3aWRnZXQuYm90dG9tID0gMDtcclxuICAgIHdpZGdldC50b3AgPSAwO1xyXG4gICAgd2lkZ2V0LmxlZnQgPSAwO1xyXG4gICAgd2lkZ2V0LnJpZ2h0ID0gMDtcclxuICAgIHdpZGdldC5pc0FsaWduQm90dG9tID0gdHJ1ZTtcclxuICAgIHdpZGdldC5pc0FsaWduVG9wID0gdHJ1ZTtcclxuICAgIHdpZGdldC5pc0FsaWduTGVmdCA9IHRydWU7XHJcbiAgICB3aWRnZXQuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcclxuXHJcbiAgICB3aWRnZXQudXBkYXRlQWxpZ25tZW50KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cE1nciBleHRlbmRzIGNjLkNvbXBvbmVudHtcclxuICAgIHN0YXRpYyBFVlRfUE9QT19PUEVOX0ZSSVNUID0gXCJFVlRfUE9QT19PUEVOX0ZSSVNUXCI7XHJcbiAgICBzdGF0aWMgRVZUX1BPUE9fQ0xPU0VfTEFTVCA9IFwiRVZUX1BPUE9fQ0xPU0VfTEFTVFwiO1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6UG9wdXBNZ3J7XHJcbiAgICAgICAgbGV0IF9ub2RlID0gZ2V0R2xvYmFsTm9kZShHbG9iYWxOb2RlTmFtZXMuUG9wdU1ncik7Ly/mjILlnKjluLjpqbvoioLngrnkuIpcclxuICAgICAgICBsZXQgcmV0ID0gX25vZGUuZ2V0Q29tcG9uZW50KFBvcHVwTWdyKVxyXG4gICAgICAgIGlmKHJldD09bnVsbCl7XHJcbiAgICAgICAgICAgIGFwcGx5V2lkZ2V0KF9ub2RlKTtcclxuICAgICAgICAgICAgcmV0ID0gX25vZGUuYWRkQ29tcG9uZW50KFBvcHVwTWdyKVxyXG4gICAgICAgICAgICByZXQuY3JlYXRlTWFza05vZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbV9wb3B1cHM6QXJyYXk8QmFzZURpYWxvZz4gPSBbXS8v5a2Y5pS+5by556qXXHJcblxyXG4gICAgb25Mb2FkKCl7XHJcblxyXG4gICAgfVxyXG4gICAgb25EZXN0cm95KCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWFza0JnOkxheWVyQ29sb3IgPSBudWxsO1xyXG4gICAgLy8v5Yib5bu66JKZ54mIXHJcbiAgICBwcml2YXRlIGNyZWF0ZU1hc2tOb2RlKCk6TGF5ZXJDb2xvcntcclxuICAgICAgICB0aGlzLm1hc2tCZyA9IG5ldyBMYXllckNvbG9yKGNjLmNvbG9yKDAsMCwwKSk7XHJcbiAgICAgICAgdGhpcy5tYXNrQmcub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXNrQmcucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hc2tCZztcclxuICAgIH1cclxuXHJcbiAgICAvL+aYvuekuuW8ueeql1xyXG4gICAgYXN5bmMgc2hvd1dpbmRvdzxUPihwYXJhbTpzdHJpbmd8Y2MuUHJlZmFiLGJ1bmRsZURhdGE/OlR8YW55LC4uLmFyZ3MpOlByb21pc2U8QmFzZURpYWxvZz57XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEJhc2VEaWFsb2c+KChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgaWYocGFyYW09PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IF9wcmVmYWI6Y2MuUHJlZmFiO1xyXG4gICAgICAgICAgICBpZihwYXJhbSBpbnN0YW5jZW9mIGNjLlByZWZhYil7XHJcbiAgICAgICAgICAgICAgICBfcHJlZmFiID0gcGFyYW07XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHR5cGVvZihwYXJhbSk9PVwic3RyaW5nXCIgKXtcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKF9wcmVmYWIhPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvcHUgPSB0aGlzLmNyZWF0ZVdpbmRvd0J5UHJlZmFiKF9wcmVmYWIsX3ByZWZhYi5uYW1lLGZhbHNlLGJ1bmRsZURhdGEsLi4uYXJncyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHBvcHUpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxldCBwYXRoID0gcGFyYW0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgaWYoIXBhdGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBwb3B1ID0gUG9wdXBNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRXaW5kb3dCeVRhZyhwYXRoKTtcclxuICAgICAgICAgICAgICAgIGlmKHBvcHUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHUucmVmcmVzaFZpZXcoYnVuZGxlRGF0YSwuLi5hcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1Lm5vZGUuekluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiPT09PT09PT3lvLnnqpdcIixwb3B1Lm5vZGUubmFtZSxwb3B1Lm5vZGUuekluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocG9wdSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHBhdGg7XHJcbiAgICAgICAgICAgICAgICBfcHJlZmFiID0gY2MucmVzb3VyY2VzLmdldCh1cmwsY2MuUHJlZmFiKSBhcyBjYy5QcmVmYWI7XHJcbiAgICAgICAgICAgICAgICBpZihfcHJlZmFiKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3B1ID0gdGhpcy5jcmVhdGVXaW5kb3dCeVByZWZhYihfcHJlZmFiLHBhdGgsdHJ1ZSxidW5kbGVEYXRhLC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBvcHUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsY2MuUHJlZmFiLChlcnJvcixfcHJlZmFiOmNjLlByZWZhYik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCItLS0tLS0tLS3lvLnnqpfliqDovb3plJnor69cIixlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLWxvYWQgcHJlZmFiIHN1Y2Nlc3NcIixwYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9wdSA9IHRoaXMuY3JlYXRlV2luZG93QnlQcmVmYWIoX3ByZWZhYixwYXRoLHRydWUsYnVuZGxlRGF0YSwuLi5hcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwb3B1KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxuICAgIC8v5LuOcHJlZmFi5paH5Lu25a6e5L6L5YyW5Li65by556qX6IqC54K5XHJcbiAgICAvL2lzUGZiUmF3LOaYr+WKqOaAgeWKoOi9veeahHByZWZhYizlhbPpl63lkI7ph4rmlL5cclxuICAgIHByaXZhdGUgY3JlYXRlV2luZG93QnlQcmVmYWIoX3ByZWZhYjpjYy5QcmVmYWIsdGFnOnN0cmluZyxpc1BmYlJhdzpib29sZWFuLGJ1bmRsZURhdGE6YW55LC4uLmFyZ3MpOkJhc2VEaWFsb2d7XHJcbiAgICAgICAgaWYoIWNjLmlzVmFsaWQodGhpcykpe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBvcHUgPSBQb3B1cE1nci5nZXRJbnN0YW5jZSgpLmdldFdpbmRvd0J5VGFnKHRhZyk7XHJcbiAgICAgICAgaWYocG9wdSl7XHJcbiAgICAgICAgICAgIHBvcHUucmVmcmVzaFZpZXcoYnVuZGxlRGF0YSwuLi5hcmdzKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUoX3ByZWZhYik7XHJcbiAgICAgICAgaWYobm9kZT09bnVsbCl7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuW8ueeql+mihOWItuaWh+S7tuS4jeWtmOWcqFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwwKTtcclxuICAgICAgICBsZXQgcG9wdXAgPSBub2RlLmdldENvbXBvbmVudChCYXNlRGlhbG9nKTtcclxuICAgICAgICBpZighcG9wdXApe1xyXG4gICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLWVycm9yIHByZWZhYuW8ueeql+W8guW4uFwiLHRhZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwb3B1cC5pbml0V2luZG93KHRoaXMsdGFnLGlzUGZiUmF3LCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucmVhbFNob3cocG9wdXAsYnVuZGxlRGF0YSwuLi5hcmdzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcG9wdXBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc01hc2tPbiA9IGZhbHNlO1xyXG4gICAgLy8v5bCG5a6e5L6L5YyW5aW955qE5by556qX5re75Yqg5Yiw6IqC54K55qCRXHJcbiAgICBwcml2YXRlIHJlYWxTaG93KHBvcHVwOkJhc2VEaWFsb2csYnVuZGxlRGF0YTphbnksLi4uYXJncyl7XHJcbiAgICAgICAgLy8gaWYoIXRoaXMuX2lzTWFza09uKXtcclxuICAgICAgICAgICAgdGhpcy5tYXNrQmcub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMub25CZ1RvdWNoLHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tCZy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLm9uQmdUb3VjaCx0aGlzKTtcclxuICAgICAgICAgICAgaWYocG9wdXAubWFza09wYWNpdHkpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGZhZGV0aW1lID0gcG9wdXAuc3R5bGU9PVdpbmRvd1N0eWxlLlBPUFVQPzAuMjowO1xyXG4gICAgICAgICAgICAgICAgaWYoY2MuZGlyZWN0b3IuaXNQYXVzZWQoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrQmcub3BhY2l0eSA9IHBvcHVwLm1hc2tPcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrQmcuZmFkZVRvKGZhZGV0aW1lLHBvcHVwLm1hc2tPcGFjaXR5LDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX2lzTWFza09uID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IHpPcmRlciA9IDA7XHJcbiAgICAgICAgaWYodGhpcy5tX3BvcHVwcy5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChQb3B1cE1nci5FVlRfUE9QT19PUEVOX0ZSSVNUKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgek9yZGVyID0gdGhpcy5tX3BvcHVwc1t0aGlzLm1fcG9wdXBzLmxlbmd0aC0xXS5ub2RlLnpJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXNrQmcuekluZGV4ID0gKHpPcmRlcilcclxuICAgICAgICB0aGlzLm1hc2tCZy5zZXRTaWJsaW5nSW5kZXgoek9yZGVyKzEpXHJcbiAgICAgICAgcG9wdXAubm9kZS56SW5kZXggPSB6T3JkZXIrMTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocG9wdXAubm9kZSk7XHJcbiAgICAgICAgcG9wdXAuc2hvd1dpbmRvdyhidW5kbGVEYXRhLC4uLmFyZ3MpO1xyXG5cclxuICAgICAgICB0aGlzLm1fcG9wdXBzLnB1c2gocG9wdXApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmdUb3VjaChldmVudDpjYy5FdmVudC5FdmVudFRvdWNoKXtcclxuICAgICAgICBmb3IobGV0IGk9dGhpcy5tX3BvcHVwcy5sZW5ndGgtMTtpPj0wO2ktLSl7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cCA9IHRoaXMubV9wb3B1cHNbaV07XHJcbiAgICAgICAgICAgIGlmKGNjLmlzVmFsaWQocG9wdXAubm9kZSkmJnBvcHVwLm5vZGUuYWN0aXZlKXtcclxuICAgICAgICAgICAgICAgIGlmKHBvcHVwLmNsb3NlQnlUb3VjaEJnJiYhcG9wdXAuaXNQdXB1QW5pKXtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cC5kaXNtaXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnnRydWXooajnpLrkuI3lvoDkuIvkvKDpgJJcclxuICAgICAqL1xyXG4gICAgb25CYWNrKCl7XHJcbiAgICAgICAgbGV0IHJldCA9IGZhbHNlXHJcbiAgICAgICAgaWYoIWNjLmlzVmFsaWQodGhpcyl8fCF0aGlzLm5vZGUuYWN0aXZlKVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIGZvcihsZXQgaT10aGlzLm1fcG9wdXBzLmxlbmd0aC0xO2k+PTA7aS0tKXtcclxuICAgICAgICAgICAgZG97XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9wdXAgPSB0aGlzLm1fcG9wdXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYoIWNjLmlzVmFsaWQocG9wdXAubm9kZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZighcG9wdXAubm9kZS5hY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoIXBvcHVwLmNsb3NlQnlUb3VjaEJhY2t8fHBvcHVwLmlzUHVwdUFuaSl7Ly/mnInlvLnnqpfvvIzkvYbmmK/ov5nkuKrlvLnnqpfkuI3lk43lupTov5Tlm57plK5cclxuICAgICAgICAgICAgICAgICAgICByZXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cC5kaXNtaXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH13aGlsZShmYWxzZSlcclxuICAgICAgICAgICAgaWYocmV0KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXRcclxuICAgIH1cclxuICAgIG9uSGlkZUVuZChwb3B1cDpCYXNlRGlhbG9nKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwO2k8dGhpcy5tX3BvcHVwcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5tX3BvcHVwc1tpXT09PXBvcHVwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9wb3B1cHMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBwb3B1cC5vblByZURlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHBvcHVwLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLm1fcG9wdXBzLmxlbmd0aD09MCl7XHJcbiAgICAgICAgICAgIHRoaXMubWFza0JnLnpJbmRleCA9ICgwKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgek9yZGVyID0gdGhpcy5tX3BvcHVwc1t0aGlzLm1fcG9wdXBzLmxlbmd0aC0xXS5ub2RlLnpJbmRleC0xO1xyXG4gICAgICAgICAgICBpZih6T3JkZXI8MCl7XHJcbiAgICAgICAgICAgICAgICB6T3JkZXIgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWFza0JnLnpJbmRleCA9ICh6T3JkZXIpO1xyXG4gICAgICAgICAgICB0aGlzLm1fcG9wdXBzW3RoaXMubV9wb3B1cHMubGVuZ3RoLTFdLm5vZGUuekluZGV4ID0gKHpPcmRlcisxKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaWYodGhpcy5tX3BvcHVwcy5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgICBpZihjYy5kaXJlY3Rvci5pc1BhdXNlZCgpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFza0JnLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFza0JnLmZhZGVPdXQocG9wdXAuc3R5bGU9PVdpbmRvd1N0eWxlLlBPUFVQPzAuMjowLjEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWFza0JnLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLm9uQmdUb3VjaCx0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoUG9wdXBNZ3IuRVZUX1BPUE9fQ0xPU0VfTEFTVCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzTWFza09uID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFZpc2libGVDb3VudCgpOm51bWJlcntcclxuICAgICAgICBsZXQgbnVtID0gMDtcclxuICAgICAgICBmb3IobGV0IF9wb3B1cCBvZiB0aGlzLm1fcG9wdXBzKXtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBfcG9wdXAubm9kZTtcclxuICAgICAgICAgICAgaWYoY2MuaXNWYWxpZChub2RlKSYmbm9kZS5hY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgKytudW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH1cclxuICAgIGNsb3NlV2luZG93QnlUYWcodGFnOmFueSxub0FuaW06Ym9vbGVhbiA9IHRydWUpe1xyXG4gICAgICAgIGZvcihsZXQgcG9wdXAgb2YgdGhpcy5tX3BvcHVwcyl7XHJcbiAgICAgICAgICAgIGlmKGNjLmlzVmFsaWQocG9wdXAubm9kZSkmJnBvcHVwLnRhZz09dGFnKXtcclxuICAgICAgICAgICAgICAgIHBvcHVwLmRpc21pc3Mobm9BbmltKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0V2luZG93QnlUYWcodGFnOmFueSk6QmFzZURpYWxvZ3tcclxuICAgICAgICBmb3IobGV0IHBvcHVwIG9mIHRoaXMubV9wb3B1cHMpe1xyXG4gICAgICAgICAgICBpZihjYy5pc1ZhbGlkKHBvcHVwLm5vZGUpJiZwb3B1cC50YWc9PXRhZyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9wdXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICAvKirnp7vpmaTmiYDmnInlvLnnqpcgKi9cclxuICAgIHJlbW92ZUFsbFBvcHVwKCl7XHJcbiAgICAgICAgd2hpbGUodGhpcy5tX3BvcHVwcy5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cCA9IHRoaXMubV9wb3B1cHNbMF07XHJcbiAgICAgICAgICAgIHBvcHVwLmRpc21pc3ModHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5CYXNlRGlhbG9nLmNyZWF0ZSA9IGZ1bmN0aW9uPFQ+KHBmYjpzdHJpbmd8Y2MuUHJlZmFiLHBhcmFtOlR8YW55LC4uLmFyZ3MpOlByb21pc2U8QmFzZURpYWxvZz4ge1xyXG4gICAgcmV0dXJuIFBvcHVwTWdyLmdldEluc3RhbmNlKCkuc2hvd1dpbmRvdyhwZmIscGFyYW0sLi4uYXJncylcclxufSJdfQ==