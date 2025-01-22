
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