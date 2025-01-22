
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx2aWV3c1xcY3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBMkQ7QUFFM0QsaUNBQTJDO0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRWpDLFFBQUEsV0FBVyxHQUFHO0lBQ3JCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztDQUNaLENBQUE7QUFFRCxzQkFBc0I7QUFDdEIsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBTzFCLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQztBQUd0QjtJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQTZUQztRQTNUVyxXQUFLLEdBQVMsSUFBSSxDQUFDO1FBRW5CLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBMkM3QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBK0VyQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBb0p0QixTQUFHLEdBQVcsSUFBSSxDQUFDOztJQTJDL0IsQ0FBQztJQXZURyx5QkFBVyxHQUFYO1FBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUM7WUFDaEIsT0FBTztTQUNWO1FBQ0QsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFTSx1QkFBUyxHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFDLEdBQUcsQ0FBQztJQUN6QyxDQUFDO0lBRUQsdUJBQVMsR0FBVDtRQUNJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsS0FBSSxJQUFJLENBQUMsR0FBQyxXQUFXLEdBQUMsQ0FBQyxFQUFDLENBQUMsSUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDN0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFHLE9BQU8sSUFBRSxDQUFDLEVBQUM7Z0JBQ1YsU0FBUzthQUNaO1lBQ0QsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBRyxDQUFDLE9BQU8sSUFBRSxPQUFPLElBQUUsT0FBTyxFQUFDO2dCQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDO29CQUNMLE1BQU0sRUFBQyxDQUFDLEdBQUMsV0FBVztvQkFDcEIsT0FBTyxFQUFDLE9BQU87aUJBQ2xCLENBQUMsQ0FBQzthQUNOO2lCQUFJO2dCQUNELE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFDLFdBQVcsQ0FBQzthQUNuQztTQUNKO1FBQ0QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUc7WUFDckIsSUFBSSxHQUFHLEdBQUcsbUJBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUUsU0FBUyxDQUFBO1lBQzdDLGdEQUFnRDtZQUNoRCxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QyxHQUFHLENBQUMsTUFBTSxJQUFFLGFBQWEsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFHRCx3QkFBVSxHQUFWLFVBQVcsSUFBYSxFQUFDLE9BQXFCO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELG9CQUFNLEdBQU47UUFDSSxJQUFHLFNBQVMsRUFBQztZQUNULE9BQU87U0FDVjtRQUNELElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDckMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDM0MsQ0FBQztJQUVPLGdDQUFrQixHQUExQixVQUEyQixTQUFTLEVBQUMsT0FBTztRQUN4QyxXQUFXO1FBQ1gsSUFBTSxRQUFRLEdBQUc7WUFDYixJQUFHLFNBQVMsRUFBQztnQkFDVCxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDbEI7UUFFTCxDQUFDLENBQUE7UUFDRCxNQUFNO1FBQ04sSUFBTSxTQUFTLEdBQUc7WUFDZCxJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDckI7WUFDRCxJQUFHLE9BQU8sRUFBQztnQkFDUCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDaEI7UUFDTCxDQUFDLENBQUE7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTywrQkFBaUIsR0FBekIsVUFBMEIsUUFBUTtRQUM5QixNQUFNO1FBQ04sSUFBTSxTQUFTLEdBQUc7WUFDZCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkMsNkNBQTZDO1lBQzdDLElBQUcsUUFBUSxFQUFDO2dCQUNSLFFBQVEsQ0FBQyxJQUFJLEVBQUMsVUFBVSxDQUFDLENBQUE7YUFDNUI7WUFDRCxJQUFHLFVBQVUsRUFBQztnQkFDVixzQkFBUyxDQUFDLFVBQVUsQ0FBQyxzQkFBUyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTthQUNoRDtRQUNMLENBQUMsQ0FBQTtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxzQkFBc0I7SUFDdEIsNEJBQWMsR0FBZDtRQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxXQUFXLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDMUIsSUFBRyxLQUFLLElBQUUsSUFBSSxFQUFDO2dCQUNYLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDdEI7WUFDRCxJQUFHLEtBQUssSUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUM7Z0JBQ2xCLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ25CLE1BQU07YUFDVDtpQkFBSyxJQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLEVBQUM7Z0JBQ3BCLFFBQVEsRUFBRSxDQUFDO2FBQ2Q7U0FDSjtRQUNELElBQUcsUUFBUSxJQUFFLFdBQVcsRUFBQztZQUNyQixVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUdEOzs7OztPQUtHO0lBQ0gsd0JBQVUsR0FBVixVQUFXLEtBQWEsRUFBQyxPQUFlLEVBQUMsV0FBeUIsRUFBQyxTQUF1QjtRQUExRixpQkFtQ0M7UUFsQ0csSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBQyxTQUFTLENBQUMsQ0FBQztRQUUvQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUE7UUFDL0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQTtRQUUzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUcsT0FBTyxFQUFDO1lBQ1AsVUFBVSxJQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2YsUUFBUSxJQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUVsQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMzQixHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUM7YUFDZCxFQUFFLENBQUMsT0FBTyxFQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxDQUFDO2FBQ2xELEVBQUUsQ0FBQyxPQUFPLEVBQUMsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLENBQUM7YUFDNUIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbEMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUUsRUFBQztZQUMxQixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDckIsSUFBRyxHQUFHLElBQUUsQ0FBQyxFQUFDO2dCQUNOLFNBQVM7YUFDWjtpQkFBSyxJQUFHLEdBQUcsQ0FBQyxVQUFVLElBQUUsR0FBRyxFQUFDLEVBQUMsY0FBYztnQkFDeEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNuQjtpQkFBSTtnQkFDRCxNQUFNO2FBQ1Q7U0FDSjtJQUNMLENBQUM7SUFFRCwyQkFBYSxHQUFiLFVBQWMsT0FBYyxFQUFDLEdBQVUsRUFBQyxVQUEyQztRQUMvRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osS0FBSSxJQUFJLENBQUMsR0FBQyxXQUFXLEdBQUMsQ0FBQyxFQUFDLENBQUMsSUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDN0IsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLEVBQUM7Z0JBQ3hCLFNBQVM7YUFDWjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUNoQyxJQUFHLEVBQUUsR0FBRyxJQUFFLEdBQUcsRUFBQztnQkFDVixNQUFNO2FBQ1Q7U0FDSjtRQUNELElBQUksR0FBRyxHQUFHLG1CQUFXLENBQUMsT0FBTyxDQUFDLElBQUUsU0FBUyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ2YsT0FBTyxFQUFDLE9BQU87WUFDZixNQUFNLEVBQUMsR0FBRyxHQUFDLFdBQVcsR0FBRSxhQUFhO1lBQ3JDLEtBQUssRUFBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1NBQ3BDLENBQUMsQ0FBQztRQUVILHNCQUFTLENBQUMsbUJBQW1CLENBQUMsR0FBRyxHQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxVQUFVO0lBQ1YsaUNBQW1CLEdBQW5CLFVBQW9CLE9BQWMsRUFBQyxHQUFVO1FBQ3pDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNaLEtBQUksSUFBSSxDQUFDLEdBQUMsV0FBVyxHQUFDLENBQUMsRUFBQyxDQUFDLElBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQzdCLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxFQUFDO2dCQUN4QixTQUFTO2FBQ1o7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7WUFDaEMsSUFBRyxFQUFFLEdBQUcsSUFBRSxHQUFHLEVBQUM7Z0JBQ1YsTUFBTTthQUNUO1NBQ0o7UUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGtCQUFrQjtJQUNsQix1Q0FBeUIsR0FBekIsVUFBMEIsR0FBVTtRQUNoQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbEMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUUsRUFBQztZQUMxQixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDckIsSUFBRyxHQUFHLElBQUUsQ0FBQyxFQUFDO2dCQUNOLFNBQVM7YUFDWjtpQkFBSyxJQUFHLEdBQUcsQ0FBQyxVQUFVLElBQUUsR0FBRyxFQUFDLEVBQUMsY0FBYztnQkFDeEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsSUFBRyxFQUFFLEdBQUcsSUFBRSxHQUFHLEVBQUM7b0JBQ1YsTUFBSztpQkFDUjthQUNKO2lCQUFJO2dCQUNELE1BQU07YUFDVDtTQUNKO1FBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELG9CQUFNLEdBQU47UUFDSSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQSxVQUFVO1FBQzNCLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFBLFFBQVE7UUFDM0IsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUEsV0FBVztRQUMvQixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsV0FBVyxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQzFCLElBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsRUFBQztnQkFDZCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTO2FBQ1o7WUFDRCxJQUFHLFVBQVUsSUFBRSxDQUFDLElBQUUsVUFBVSxJQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQztnQkFDdEMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsV0FBVyxFQUFFLENBQUM7YUFDakI7aUJBQUk7Z0JBQ0QsTUFBTTthQUNUO1NBQ0o7UUFDRCxPQUFPO1lBQ0gsUUFBUSxFQUFDLFFBQVE7WUFDakIsVUFBVSxFQUFDLFVBQVU7WUFDckIsV0FBVyxFQUFDLFdBQVc7WUFDdkIsUUFBUSxFQUFDLG1CQUFXLENBQUMsVUFBVSxDQUFDLElBQUUsU0FBUztTQUM5QyxDQUFBO0lBQ0wsQ0FBQztJQUVELG1CQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFTSwyQkFBYSxHQUFwQixVQUFxQixPQUFlO1FBQ2hDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFBLENBQUMsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFN0IsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUU3QixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFTSw2QkFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBR08sdUJBQVMsR0FBakIsVUFBa0IsTUFBYztRQUM1QixzQkFBc0I7UUFDdEIsZ0NBQWdDO1FBQ2hDLG1DQUFtQztRQUNuQyxvREFBb0Q7UUFDcEQsOERBQThEO1FBQzlELHFDQUFxQztRQUNyQyxJQUFJO1FBQ0osNEJBQTRCO1FBRTVCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBLFVBQVU7UUFFL0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkUsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNwRixRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzdDLE1BQU0sQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFekMsQ0FBQztJQUVELHVCQUF1QjtJQUN2QixpQ0FBbUIsR0FBbkIsVUFBb0IsVUFBZ0I7UUFBaEIsMkJBQUEsRUFBQSxrQkFBZ0I7UUFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBQyxXQUFXLENBQUM7UUFDL0MsSUFBRyxDQUFDLEdBQUMsSUFBSSxFQUFDO1lBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQTtTQUNYO2FBQUssSUFBRyxVQUFVLEVBQUM7WUFDaEIsQ0FBQyxJQUFFLEdBQUcsR0FBQyxXQUFXLEdBQUMsYUFBYSxDQUFDO1NBQ3BDO1FBQ0QsQ0FBQyxJQUFFLGFBQWEsQ0FBQztRQUNqQixDQUFDLElBQUUsR0FBRyxDQUFDO1FBQ1AsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUM5QyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDZixDQUFDO0lBMVREO1FBREMsUUFBUSxDQUFDLGVBQUssQ0FBQztzQ0FDVztJQUZWLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0E2VHZCO0lBQUQsVUFBQztDQTdURCxBQTZUQyxDQTdUZ0MsRUFBRSxDQUFDLFNBQVMsR0E2VDVDO2tCQTdUb0IsR0FBRztBQStUeEIsU0FBUyxRQUFRLENBQUMsRUFBVSxFQUFDLEtBQVk7SUFDckMsSUFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNsQixHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEQsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXBELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLEtBQVk7SUFDOUIsT0FBTSxLQUFLLEdBQUMsR0FBRyxFQUFDO1FBQ1osS0FBSyxJQUFFLEdBQUcsQ0FBQztLQUNkO0lBQ0QsT0FBTSxLQUFLLEdBQUMsQ0FBQyxHQUFHLEVBQUM7UUFDYixLQUFLLElBQUUsR0FBRyxDQUFDO0tBQ2Q7SUFDRCxPQUFPLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0FBQ3pDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb0VudW0sIEF1ZGlvVXRpbCB9IGZyb20gXCIuLi91dGlscy9hdWRpb191dGlsXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRleHR1cmUgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25cIjtcclxuaW1wb3J0IFdhdGVyLCB7IFdhdGVySW5mbyB9IGZyb20gXCIuL3dhdGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGxldCBXYXRlckNvbG9ycyA9IFtcclxuICAgIFwiIzE1NURFRlwiLFxyXG4gICAgXCIjRjJDOTBGXCIsXHJcbiAgICBcIiNCRDI2NTZcIixcclxuICAgIFwiI0YwNzkxRlwiLFxyXG4gICAgXCIjNDU0NTc0XCIsXHJcbiAgICBcIiNGRTJEMjZcIixcclxuICAgIFwiI0JDQTZFM1wiLFxyXG4gICAgXCIjRTQ1ODRGXCIsXHJcbiAgICBcIiMwMEIzOEFcIixcclxuICAgIFwiI0REMkU0NFwiLFxyXG4gICAgXCIjRTVDNjlBXCIsXHJcbiAgICBcIiM2NURDOEVcIixcclxuICAgIFwiI0IwNjhGMFwiLFxyXG4gICAgXCIjRjAxMEJGXCIsXHJcbiAgICBcIiM1Mzg4NDlcIixcclxuXVxyXG5cclxuLyoq6auY5bqm5LmY5pWw5Zug5a2Q77yM5ruh5p2v5rC05Y+q5pi+56S6ODAlICovXHJcbmNvbnN0IEhFSUdIVF9GQUNUT1IgPSAwLjg7XHJcblxyXG4vKirkuIDmna/msLTvvIzliIbmiJDlm5vnu4Tlm5vkuKrpopzoibLvvIww6KGo56S65rKh5pyJ5rC0ICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgX0N1cEluZm97XHJcbiAgICBjb2xvcklkczpBcnJheTxudW1iZXI+Oy8v6ZW/5bqm5Li6NFxyXG59XHJcblxyXG5jb25zdCBTUExJVF9DT1VOVCA9IDQ7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KFdhdGVyKVxyXG4gICAgcHJpdmF0ZSB3YXRlcjpXYXRlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrOihjOkN1cCk9PnZvaWQgPSBudWxsO1xyXG5cclxuICAgIG9uQnRuX2NsaWNrKCl7XHJcbiAgICAgICAgaWYodGhpcy5pc1BvdXJpbmcoKSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5vbkNsaWNrKXtcclxuICAgICAgICAgICAgdGhpcy5vbkNsaWNrKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNQb3VyaW5nKCl7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMubm9kZS5hbmdsZSk+MS4wO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRXYXRlcigpe1xyXG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLmluZm87XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaT1TUExJVF9DT1VOVC0xO2k+PTA7aS0tKXtcclxuICAgICAgICAgICAgbGV0IGNvbG9ySWQgPSBpbmZvLmNvbG9ySWRzW2ldO1xyXG4gICAgICAgICAgICBpZihjb2xvcklkPT0wKXtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBsYXN0T2JqID0gYXJyW2Fyci5sZW5ndGgtMV07XHJcbiAgICAgICAgICAgIGlmKCFsYXN0T2JqfHxsYXN0T2JqIT1jb2xvcklkKXtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MS9TUExJVF9DT1VOVCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcklkOmNvbG9ySWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxhc3RPYmouaGVpZ2h0ICs9IDEvU1BMSVRfQ09VTlQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICBsZXQgaGV4ID0gV2F0ZXJDb2xvcnNbb2JqLmNvbG9ySWRdfHxcIiM1Mzg4NDlcIlxyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCJvYmouY29sb3JJZFwiLG9iai5jb2xvcklkLFwiY29sb3JcIixoZXgpXHJcbiAgICAgICAgICAgIG9iai5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoaGV4KTtcclxuICAgICAgICAgICAgb2JqLmhlaWdodCo9SEVJR0hUX0ZBQ1RPUjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMud2F0ZXIuaW5pdEluZm9zKGFycik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmZvOl9DdXBJbmZvID0gbnVsbDtcclxuICAgIHNldEN1cEluZm8oaW5mbzpfQ3VwSW5mbyxvbkNsaWNrOihjOkN1cCk9PnZvaWQpe1xyXG4gICAgICAgIHRoaXMuaW5mbyA9IGluZm87XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gb25DbGljaztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmluaXRXYXRlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICBpZihDQ19FRElUT1Ipe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMud2F0ZXIuc2tld0FuZ2xlPT10aGlzLm5vZGUuYW5nbGUpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2F0ZXIuc2tld0FuZ2xlID0gdGhpcy5ub2RlLmFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0UG91ck91dENhbGxiYWNrKHBvdXJTdGFydCxwb3VyRW5kKXtcclxuICAgICAgICAvL+awtOW8gOWni+S7jueTtuWPo+a1geWHuuadpVxyXG4gICAgICAgIGNvbnN0IF9vblN0YXJ0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYocG91clN0YXJ0KXtcclxuICAgICAgICAgICAgICAgIHBvdXJTdGFydCh0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+awtOWAkuWujOS6hlxyXG4gICAgICAgIGNvbnN0IF9vbkZpbmlzaCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudHdlZW4pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50d2Vlbi5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwb3VyRW5kKXtcclxuICAgICAgICAgICAgICAgIHBvdXJFbmQodGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndhdGVyLnNldFBvdXJPdXRDYWxsYmFjayhfb25TdGFydC5iaW5kKHRoaXMpLF9vbkZpbmlzaC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFBvdXJJbkNhbGxiYWNrKG9uRmluaXNoKXtcclxuICAgICAgICAvL+awtOWAkuWujOS6hlxyXG4gICAgICAgIGNvbnN0IF9vbkZpbmlzaCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxldCBpc0ZpbmlzaGVkID0gdGhpcy5jaGVja0lzRmluc2hlZCgpO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCItLS0tLS0tLS0tLWlzRmluaXNoZWRcIixpc0ZpbmlzaGVkKVxyXG4gICAgICAgICAgICBpZihvbkZpbmlzaCl7XHJcbiAgICAgICAgICAgICAgICBvbkZpbmlzaCh0aGlzLGlzRmluaXNoZWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaXNGaW5pc2hlZCl7XHJcbiAgICAgICAgICAgICAgICBBdWRpb1V0aWwucGxheUVmZmVjdChBdWRpb0VudW0uZmluaXNoT25lLDAuNClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndhdGVyLnNldFBvdXJJbkNhbGxiYWNrKF9vbkZpbmlzaC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmmK/lkKblrozmiJDkuobvvIjlkIzpopzoibLloavmu6HmlbTkuKrmna/lrZDvvIkgKi9cclxuICAgIGNoZWNrSXNGaW5zaGVkKCl7XHJcbiAgICAgICAgbGV0IGlzRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBjb2xvcklkcyA9IHRoaXMuaW5mby5jb2xvcklkcztcclxuICAgICAgICBsZXQgdG1wSWQgPSBudWxsO1xyXG4gICAgICAgIGxldCBlbXBUeU51bSA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxTUExJVF9DT1VOVDtpKyspe1xyXG4gICAgICAgICAgICBpZih0bXBJZD09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0bXBJZCA9IGNvbG9ySWRzW2ldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodG1wSWQhPWNvbG9ySWRzW2ldKXtcclxuICAgICAgICAgICAgICAgIGlzRmluaXNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihjb2xvcklkc1tpXT09MCl7XHJcbiAgICAgICAgICAgICAgICBlbXBUeU51bSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVtcFR5TnVtPT1TUExJVF9DT1VOVCl7XHJcbiAgICAgICAgICAgIGlzRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNGaW5pc2hlZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHR3ZWVuOmNjLlR3ZWVuID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog56e75Yqo5Yiw55uu5qCH54K544CB5peL6L2s55O25a2Q5bm25YCS5rC0XHJcbiAgICAgKiBAcGFyYW0gaXNSaWdodCDlgL7mlpzop5LluqbvvIzlkJHlt6bkuLrmraPvvIzlj7PkuLrotJ9cclxuICAgICAqIEBwYXJhbSBvblBvdXJTdGFydCDmsLTlvIDlp4vku47nk7blj6PmtYHlh7rmnaVcclxuICAgICAqIEBwYXJhbSBvblBvdXJFbmQg5pys5qyh5rC05YCS5a6M5LqGXHJcbiAgICAgKi9cclxuICAgIG1vdmVUb1BvdXIoZHN0UHQ6Y2MuVmVjMixpc1JpZ2h0OmJvb2xlYW4sb25Qb3VyU3RhcnQ6KGM6Q3VwKT0+dm9pZCxvblBvdXJFbmQ6KGM6Q3VwKT0+dm9pZCl7XHJcbiAgICAgICAgdGhpcy5zZXRQb3VyT3V0Q2FsbGJhY2sob25Qb3VyU3RhcnQsb25Qb3VyRW5kKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSB0aGlzLndhdGVyLmdldFBvdXJTdGFydEFuZ2xlKClcclxuICAgICAgICBsZXQgZW5kQW5nbGUgPSB0aGlzLndhdGVyLmdldFBvdXJFbmRBbmdsZSgpXHJcblxyXG4gICAgICAgIHRoaXMud2F0ZXIub25TdGFydFBvdXIoKTtcclxuICAgICAgICBpZihpc1JpZ2h0KXtcclxuICAgICAgICAgICAgc3RhcnRBbmdsZSo9LTE7XHJcbiAgICAgICAgICAgIGVuZEFuZ2xlKj0tMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtb3ZlRHVyID0gMC41O1xyXG4gICAgICAgIGxldCBwb3VyRHVyID0gMC44O1xyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuID0gY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAuc2V0KHthbmdsZTowfSlcclxuICAgICAgICAgICAgLnRvKG1vdmVEdXIse3g6ZHN0UHQueCx5OmRzdFB0LnksYW5nbGU6c3RhcnRBbmdsZX0pXHJcbiAgICAgICAgICAgIC50byhwb3VyRHVyLHthbmdsZTplbmRBbmdsZX0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuID0gbnVsbDtcclxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbGV0IHRvcCA9IHRoaXMuZ2V0VG9wKCk7XHJcbiAgICAgICAgbGV0IGNvbG9ySWRzID0gdGhpcy5pbmZvLmNvbG9ySWRzO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8U1BMSVRfQ09VTlQ7aSsrKXtcclxuICAgICAgICAgICAgbGV0IF9pZCA9IGNvbG9ySWRzW2ldXHJcbiAgICAgICAgICAgIGlmKF9pZD09MCl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfWVsc2UgaWYodG9wLnRvcENvbG9ySWQ9PV9pZCl7Ly/pobbpg6jnm7jlkIzpopzoibLnmoTmsLTpg73lgJLmjonkuoZcclxuICAgICAgICAgICAgICAgIGNvbG9ySWRzW2ldID0gMDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydEFkZFdhdGVyKGNvbG9ySWQ6bnVtYmVyLG51bTpudW1iZXIsb25Db21wbGV0ZTooY3VwOkN1cCxpc0ZJbmlzaDpib29sZWFuKT0+dm9pZCl7XHJcbiAgICAgICAgdGhpcy5zZXRQb3VySW5DYWxsYmFjayhvbkNvbXBsZXRlKTtcclxuICAgICAgICBsZXQgYWNjID0gMDtcclxuICAgICAgICBmb3IobGV0IGk9U1BMSVRfQ09VTlQtMTtpPj0wO2ktLSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5mby5jb2xvcklkc1tpXSE9MCl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluZm8uY29sb3JJZHNbaV0gPSBjb2xvcklkO1xyXG4gICAgICAgICAgICBpZigrK2FjYz09bnVtKXtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoZXggPSBXYXRlckNvbG9yc1tjb2xvcklkXXx8XCIjNTM4ODQ5XCJcclxuICAgICAgICB0aGlzLndhdGVyLmFkZEluZm8oe1xyXG4gICAgICAgICAgICBjb2xvcklkOmNvbG9ySWQsXHJcbiAgICAgICAgICAgIGhlaWdodDpudW0vU1BMSVRfQ09VTlQgKkhFSUdIVF9GQUNUT1IsXHJcbiAgICAgICAgICAgIGNvbG9yOm5ldyBjYy5Db2xvcigpLmZyb21IRVgoaGV4KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBBdWRpb1V0aWwucGxheVBvdXJXYXRlckVmZmVjdChudW0vU1BMSVRfQ09VTlQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWKoOawtOeri+WIuyAqL1xyXG4gICAgYWRkV2F0ZXJJbW1lZGlhdGVseShjb2xvcklkOm51bWJlcixudW06bnVtYmVyKXtcclxuICAgICAgICBsZXQgYWNjID0gMDtcclxuICAgICAgICBmb3IobGV0IGk9U1BMSVRfQ09VTlQtMTtpPj0wO2ktLSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5mby5jb2xvcklkc1tpXSE9MCl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluZm8uY29sb3JJZHNbaV0gPSBjb2xvcklkO1xyXG4gICAgICAgICAgICBpZigrK2FjYz09bnVtKXtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdFdhdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5bCG6aG26YOo55qE6aKc6Imy5Yig6ZmkbnVt5LiqICovXHJcbiAgICByZW1vdmVUb3BXYXRlckltbWVkaWF0ZWx5KG51bTpudW1iZXIpe1xyXG4gICAgICAgIGxldCBhY2MgPSAwO1xyXG4gICAgICAgIGxldCB0b3AgPSB0aGlzLmdldFRvcCgpO1xyXG4gICAgICAgIGxldCBjb2xvcklkcyA9IHRoaXMuaW5mby5jb2xvcklkcztcclxuICAgICAgICBmb3IobGV0IGk9MDtpPFNQTElUX0NPVU5UO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBfaWQgPSBjb2xvcklkc1tpXVxyXG4gICAgICAgICAgICBpZihfaWQ9PTApe1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRvcC50b3BDb2xvcklkPT1faWQpey8v6aG26YOo55u45ZCM6aKc6Imy55qE5rC06YO95YCS5o6J5LqGXHJcbiAgICAgICAgICAgICAgICBjb2xvcklkc1tpXSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZigrK2FjYz49bnVtKXtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdFdhdGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRvcDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb3AoKXtcclxuICAgICAgICBsZXQgY29sb3JJZHMgPSB0aGlzLmluZm8uY29sb3JJZHM7XHJcbiAgICAgICAgbGV0IGVtcHR5TnVtID0gMDsvL+adr+mhtueahOepuuS9jeacieWHoOagvFxyXG4gICAgICAgIGxldCB0b3BDb2xvcklkID0gMDsvL+adr+mhtuminOiJsmlkXHJcbiAgICAgICAgbGV0IHRvcENvbG9yTnVtID0gMDsvL+adr+mhtueahOminOiJsuWFseacieWHoOagvFxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8U1BMSVRfQ09VTlQ7aSsrKXtcclxuICAgICAgICAgICAgaWYoY29sb3JJZHNbaV09PTApe1xyXG4gICAgICAgICAgICAgICAgZW1wdHlOdW0rKztcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRvcENvbG9ySWQ9PTB8fHRvcENvbG9ySWQ9PWNvbG9ySWRzW2ldKXtcclxuICAgICAgICAgICAgICAgIHRvcENvbG9ySWQgPSBjb2xvcklkc1tpXTtcclxuICAgICAgICAgICAgICAgIHRvcENvbG9yTnVtKys7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZW1wdHlOdW06ZW1wdHlOdW0sXHJcbiAgICAgICAgICAgIHRvcENvbG9ySWQ6dG9wQ29sb3JJZCxcclxuICAgICAgICAgICAgdG9wQ29sb3JOdW06dG9wQ29sb3JOdW0sXHJcbiAgICAgICAgICAgIGNvbG9ySGV4OldhdGVyQ29sb3JzW3RvcENvbG9ySWRdfHxcIiM1Mzg4NDlcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy53YXRlci5za2V3QW5nbGUgPSAwXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFBvdXJBbmNob3IoaXNSaWdodDpib29sZWFuKXtcclxuICAgICAgICBsZXQgcHQgPSBjYy52MigzLDIpO1xyXG4gICAgICAgIHB0LnggPSBpc1JpZ2h0Pyh0aGlzLm5vZGUud2lkdGgtcHQueCk6cHQueDtcclxuICAgICAgICBwdC55ID0gdGhpcy5ub2RlLmhlaWdodC1wdC55O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB0LnggPSBwdC54L3RoaXMubm9kZS53aWR0aDtcclxuICAgICAgICBwdC55ID0gcHQueS90aGlzLm5vZGUuaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLnNldEFuY2hvcihwdCkgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE5vcm1hbEFuY2hvcigpe1xyXG4gICAgICAgIHRoaXMuc2V0QW5jaG9yKGNjLnYyKDAuNSwwLjUpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZG90OmNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzZXRBbmNob3IoYW5jaG9yOmNjLlZlYzIpe1xyXG4gICAgICAgIC8vIGlmKHRoaXMuZG90PT1udWxsKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5kb3QgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmRvdC5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgLy8gICAgIGxldCBsYWJlbCA9IHRoaXMuZG90LmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIC8vICAgICBsYWJlbC5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShjcmVhdGVUZXh0dXJlKCkpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZG90LmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLmRvdC5zZXRQb3NpdGlvbigwLDApXHJcblxyXG4gICAgICAgIGxldCBvbGRBbmNob3IgPSB0aGlzLm5vZGUuZ2V0QW5jaG9yUG9pbnQoKTtcclxuICAgICAgICBsZXQgc2VsZlB0ID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7Ly/lvZPliY3plJrngrnkuJbnlYzlnZDmoIdcclxuICAgICAgICBcclxuICAgICAgICBsZXQgd2F0ZXJQdCA9IHRoaXMud2F0ZXIubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRBbmNob3JQb2ludChhbmNob3IpO1xyXG4gICAgICAgIGxldCBvZmZzZXRBbmNob3IgPSBjYy52MihhbmNob3IueC1vbGRBbmNob3IueCxhbmNob3IueS1vbGRBbmNob3IueSlcclxuICAgICAgICBsZXQgb2Zmc2V0UHQgPSBjYy52MihvZmZzZXRBbmNob3IueCp0aGlzLm5vZGUud2lkdGgsb2Zmc2V0QW5jaG9yLnkqdGhpcy5ub2RlLmhlaWdodClcclxuICAgICAgICBvZmZzZXRQdCA9IHJvdGF0ZVB0KG9mZnNldFB0LHRoaXMubm9kZS5hbmdsZSlcclxuICAgICAgICBzZWxmUHQueCArPSBvZmZzZXRQdC54O1xyXG4gICAgICAgIHNlbGZQdC55ICs9IG9mZnNldFB0Lnk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHNlbGZQdCk7XHJcbiAgICAgICAgd2F0ZXJQdC54IC09IG9mZnNldEFuY2hvci54KnRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICB3YXRlclB0LnkgLT0gb2Zmc2V0QW5jaG9yLnkqdGhpcy5ub2RlLmhlaWdodDtcclxuICAgICAgICB0aGlzLndhdGVyLm5vZGUuc2V0UG9zaXRpb24od2F0ZXJQdCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluW9k+WJjeawtOmdoueahGdsb2JhbCB55Z2Q5qCHICovXHJcbiAgICBnZXRXYXRlclN1cmZhY2VQb3NZKG5lZWRBZGp1c3Q9ZmFsc2Upe1xyXG4gICAgICAgIGxldCB0b3AgPSB0aGlzLmdldFRvcCgpO1xyXG4gICAgICAgIGxldCB5ID0gKFNQTElUX0NPVU5ULXRvcC5lbXB0eU51bSkvU1BMSVRfQ09VTlQ7XHJcbiAgICAgICAgaWYoeTwwLjAyKXtcclxuICAgICAgICAgICAgeSA9IDAuMDJcclxuICAgICAgICB9ZWxzZSBpZihuZWVkQWRqdXN0KXtcclxuICAgICAgICAgICAgeS09MS4wL1NQTElUX0NPVU5UKkhFSUdIVF9GQUNUT1I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHkqPUhFSUdIVF9GQUNUT1I7XHJcbiAgICAgICAgeS09MC41O1xyXG4gICAgICAgIGxldCBwdCA9IGNjLnYyKDAsdGhpcy53YXRlci5ub2RlLmhlaWdodCp5KTtcclxuICAgICAgICBwdCA9IHRoaXMud2F0ZXIubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocHQpXHJcbiAgICAgICAgcmV0dXJuIHB0LnlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcm90YXRlUHQocHQ6Y2MuVmVjMixhbmdsZTpudW1iZXIpe1xyXG4gICAgbGV0IHJhZGlhbiA9IGFuZ2xlMnJhZGlhbihhbmdsZSk7XHJcbiAgICBsZXQgcmV0ID0gY2MudjIoKTtcclxuICAgIHJldC54ID0gcHQueCpNYXRoLmNvcyhyYWRpYW4pLXB0LnkqTWF0aC5zaW4ocmFkaWFuKTtcclxuICAgIHJldC55ID0gcHQueCpNYXRoLnNpbihyYWRpYW4pK3B0LnkqTWF0aC5jb3MocmFkaWFuKTtcclxuXHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmdsZTJyYWRpYW4oYW5nbGU6bnVtYmVyKXtcclxuICAgIHdoaWxlKGFuZ2xlPjM2MCl7XHJcbiAgICAgICAgYW5nbGUtPTM2MDtcclxuICAgIH1cclxuICAgIHdoaWxlKGFuZ2xlPC0zNjApe1xyXG4gICAgICAgIGFuZ2xlKz0zNjA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGFuZ2xlJTM2MCkgKiBNYXRoLlBJIC8gMTgwLjA7XHJcbn0iXX0=