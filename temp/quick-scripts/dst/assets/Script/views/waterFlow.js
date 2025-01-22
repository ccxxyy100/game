
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/views/waterFlow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx2aWV3c1xcd2F0ZXJGbG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFFeEI7O0dBRUc7QUFDSDtJQUErQiw2QkFBVztJQUExQztRQUFBLHFFQThDQztRQXpDVyxXQUFLLEdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFBO1FBWXZCLFVBQUksR0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7O0lBNkJuQyxDQUFDO0lBN0NHLDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUM3QyxDQUFDO0lBRUQsc0JBQVcsMkJBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNyQixDQUFDO2FBQ0QsVUFBZ0IsR0FBRztZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUM7OztPQVBBO0lBVUQ7Ozs7OztPQU1HO0lBQ0ksK0JBQVcsR0FBbEIsVUFBbUIsSUFBWSxFQUFDLEVBQVUsRUFBQyxHQUFVLEVBQUMsTUFBYyxFQUFDLFVBQW1CO1FBRXBGLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksSUFBSSxHQUFhLElBQUksQ0FBQTtRQUN6QixJQUFHLE1BQU0sRUFBQztZQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO2FBQUk7WUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNsQixHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUM7YUFDaEIsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsQ0FBQzthQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ2hCLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSxnQ0FBWSxHQUFuQixVQUFvQixLQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxHQUFDLEtBQUssQ0FBQztJQUN6QyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQTlDQSxBQThDQyxDQTlDOEIsRUFBRSxDQUFDLFFBQVEsR0E4Q3pDO0FBOUNZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IGRmdF9saW5nV2lkdGggPSA2O1xyXG5cclxuLyoqXHJcbiAqIOWAvuWAkueahOawtOa1gVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFdhdGVyRmxvdyBleHRlbmRzIGNjLkdyYXBoaWNze1xyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSBkZnRfbGluZ1dpZHRoO1xyXG4gICAgICAgIHRoaXMubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF90b1B0OmNjLlZlYzIgPSBjYy52MigpXHJcbiAgICBwdWJsaWMgZ2V0IHRvUHQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9QdFxyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCB0b1B0KHZhbCl7XHJcbiAgICAgICAgdGhpcy5fdG9QdCA9IHZhbDtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlVG8odGhpcy5mcm9tLngsdGhpcy5mcm9tLnkpXHJcbiAgICAgICAgdGhpcy5saW5lVG8odGhpcy5fdG9QdC54LHRoaXMuX3RvUHQueSk7XHJcbiAgICAgICAgdGhpcy5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZyb206Y2MuVmVjMiA9IGNjLnYyKCk7XHJcbiAgICAvKipcclxuICAgICAqIOWAkuawtOawtOa1geWKqOeUu1xyXG4gICAgICogQHBhcmFtIGZyb20gXHJcbiAgICAgKiBAcGFyYW0gdG8gXHJcbiAgICAgKiBAcGFyYW0gZHVyIFxyXG4gICAgICogQHBhcmFtIGlzVGFpbCDlvIDlp4vlh7rmsLRmYWxzZe+8jOacgOWQjuS4gOadn+awtHRydWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBsYXlGbG93QW5pKGZyb206Y2MuVmVjMix0bzpjYy5WZWMyLGR1cjpudW1iZXIsaXNUYWlsOmJvb2xlYW4sb25Db21wbGV0ZTpGdW5jdGlvbil7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBmbG93OldhdGVyRmxvdyA9IHRoaXNcclxuICAgICAgICBpZihpc1RhaWwpe1xyXG4gICAgICAgICAgICB0aGlzLmZyb20gPSB0bztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb3ZlVG8odGhpcy5mcm9tLngsdGhpcy5mcm9tLnkpXHJcbiAgICAgICAgbGV0IHR3ID0gY2MudHdlZW4oZmxvdylcclxuICAgICAgICAgICAgLnNldCh7dG9QdDpmcm9tfSlcclxuICAgICAgICAgICAgLnRvKGR1cix7dG9QdDp0b30pXHJcbiAgICAgICAgICAgIC5jYWxsKG9uQ29tcGxldGUpXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRMaW5lU2NhbGUoc2NhbGU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IGRmdF9saW5nV2lkdGgqc2NhbGU7XHJcbiAgICB9XHJcbn0iXX0=