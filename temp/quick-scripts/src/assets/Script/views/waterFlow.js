"use strict";
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