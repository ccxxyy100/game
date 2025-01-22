"use strict";
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