"use strict";
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