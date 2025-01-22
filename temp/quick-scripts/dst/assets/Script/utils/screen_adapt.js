
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/utils/screen_adapt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '989386J09lA6rleZStEOfsK', 'screen_adapt');
// Script/utils/screen_adapt.ts

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
exports.ScreenAdapter = exports.ScreenFit = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, executeInEditMode = _a.executeInEditMode;
var ScreenFit;
(function (ScreenFit) {
    ScreenFit[ScreenFit["NO_BORDER"] = 0] = "NO_BORDER";
    ScreenFit[ScreenFit["SHOW_ALL"] = 1] = "SHOW_ALL";
    ScreenFit[ScreenFit["EXACT_FIT"] = 2] = "EXACT_FIT";
})(ScreenFit = exports.ScreenFit || (exports.ScreenFit = {}));
var ScreenAdapter = /** @class */ (function () {
    function ScreenAdapter() {
    }
    Object.defineProperty(ScreenAdapter, "canvasSize", {
        get: function () {
            var ret = cc.view.getCanvasSize();
            do {
                var canvas_node = cc.Canvas.instance.node;
                if (!canvas_node) {
                    break;
                }
                ret = canvas_node.getContentSize();
            } while (false);
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScreenAdapter, "leftTop", {
        get: function () {
            var size = this.canvasSize;
            return cc.v2(-size.width * 0.5, size.height * 0.5);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScreenAdapter, "middleBottom", {
        get: function () {
            var size = this.canvasSize;
            var pos = cc.v2(0, -size.height * 0.5);
            return pos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScreenAdapter, "screenScale", {
        /**实际分辨率和设计分辨率的比例 */
        get: function () {
            var visible = this.canvasSize;
            var design = cc.Canvas.instance.designResolution;
            cc.log("visibleSize : " + visible.toString() + " designSize:" + design.toString());
            return cc.v2(visible.width / design.width, visible.height / design.height);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScreenAdapter, "aspectRatio", {
        get: function () {
            var visible = this.canvasSize;
            var ratio = visible.height / visible.width;
            cc.log("aspectRatio : " + ratio.toFixed(2));
            return ratio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScreenAdapter, "isHigherScreen", {
        get: function () {
            return this.aspectRatio >= 2.0;
        },
        enumerable: false,
        configurable: true
    });
    ///画布和背景图片，自动适应屏幕尺寸
    ScreenAdapter.adaptScreenSize = function (cvs_node, screenFit) {
        if (screenFit === void 0) { screenFit = ScreenFit.NO_BORDER; }
        if (cvs_node) {
            var canvas = cvs_node.getComponent(cc.Canvas);
            if (canvas != null) {
                var _screenScale = this.screenScale;
                cc.log("screenScale : ", _screenScale.x.toFixed(2), _screenScale.y.toFixed(2));
                if (screenFit == ScreenFit.NO_BORDER) {
                    ///比设计分辨率细长(宽高比较小)，则宽度固定，否则高度固定
                    var _fitHeight = false;
                    var _fitWidth = false;
                    if (_screenScale.x < _screenScale.y) {
                        _fitHeight = true;
                    }
                    else if (_screenScale.x > _screenScale.y) {
                        _fitWidth = true;
                    }
                    canvas.fitWidth = _fitWidth;
                    canvas.fitHeight = _fitHeight;
                }
                else if (screenFit == ScreenFit.SHOW_ALL) {
                    //铺满短的一边
                    canvas.fitWidth = _screenScale.x < _screenScale.y;
                    canvas.fitHeight = !canvas.fitWidth;
                }
                else {
                    canvas.fitWidth = true;
                    canvas.fitHeight = true;
                }
            }
            else {
                var _nodeScale = cc.v2(this.canvasSize.width / cvs_node.width, this.canvasSize.height / cvs_node.height);
                cc.log("_nodeScale : ", _nodeScale.x.toFixed(2), _nodeScale.y.toFixed(2));
                if (screenFit == ScreenFit.NO_BORDER) {
                    var scale = Math.max(_nodeScale.x, _nodeScale.y);
                    cvs_node.setScale(scale);
                }
                else if (screenFit == ScreenFit.SHOW_ALL) {
                    var scale = Math.min(_nodeScale.x, _nodeScale.y);
                    cvs_node.setScale(scale);
                }
                else {
                    cvs_node.setScale(_nodeScale);
                }
            }
        }
        else {
            cc.error('adapt screen node is null');
        }
    };
    return ScreenAdapter;
}());
exports.ScreenAdapter = ScreenAdapter;
var M = /** @class */ (function (_super) {
    __extends(M, _super);
    function M() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._screenFit = ScreenFit.NO_BORDER;
        return _this;
    }
    M_1 = M;
    Object.defineProperty(M.prototype, "screenFit", {
        get: function () {
            return this._screenFit;
        },
        set: function (val) {
            this._screenFit = val;
            ScreenAdapter.adaptScreenSize(this.node, this.screenFit);
        },
        enumerable: false,
        configurable: true
    });
    M.prototype.onLoad = function () {
        if (!CC_EDITOR) {
            ScreenAdapter.adaptScreenSize(this.node, this.screenFit);
        }
    };
    var M_1;
    M.instance = new M_1();
    __decorate([
        property({
            type: cc.Enum(ScreenFit),
            tooltip: "NO_BORDER,//\u4FDD\u8BC1\u77ED\u8FB9\u80FD\u94FA\u6EE1\u5C4F\u5E55\uFF0C\u957F\u8FB9\u53EF\u80FD\u4F1A\u8D85\u51FA\u5C4F\u5E55\u533A\u57DF\n        SHOW_ALL,//\u4FDD\u8BC1\u957F\u8FB9\u94FA\u6EE1\u5C4F\u5E55\uFF0C\u80FD\u663E\u793A\u6240\u6709\u5185\u5BB9\uFF0C\u53EF\u80FD\u4F1A\u6709\u9ED1\u8FB9\n        EXACT_FIT,//\u957F\u77ED\u8FB9\u5747\u62C9\u4F38\u94FA\u6EE1\u5C4F\u5E55\uFF0C\u53EF\u80FD\u4F1A\u53D8\u5F62\n        ",
        })
    ], M.prototype, "screenFit", null);
    M = M_1 = __decorate([
        ccclass,
        menu("adapt/screen_adapt"),
        executeInEditMode
    ], M);
    return M;
}(cc.Component));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx1dGlsc1xcc2NyZWVuX2FkYXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQTZDLEVBQUUsQ0FBQyxVQUFVLEVBQXpELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFDLElBQUksVUFBQSxFQUFDLGlCQUFpQix1QkFBaUIsQ0FBQztBQUVqRSxJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDakIsbURBQVMsQ0FBQTtJQUNULGlEQUFRLENBQUE7SUFDUixtREFBUyxDQUFBO0FBQ2IsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBRUQ7SUFBQTtJQW9GQSxDQUFDO0lBbkZHLHNCQUFrQiwyQkFBVTthQUE1QjtZQUNJLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbEMsR0FBRTtnQkFDRSxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQzFDLElBQUcsQ0FBQyxXQUFXLEVBQUM7b0JBQUMsTUFBTTtpQkFBQztnQkFDeEIsR0FBRyxHQUFHLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN0QyxRQUFNLEtBQUssRUFBQztZQUNiLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0Isd0JBQU87YUFBekI7WUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzNCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDdkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0IsNkJBQVk7YUFBOUI7WUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzNCLElBQUksR0FBRyxHQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN4QyxPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7OztPQUFBO0lBR0Qsc0JBQWtCLDRCQUFXO1FBRDdCLG9CQUFvQjthQUNwQjtZQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDOUIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7WUFDakQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsT0FBTyxDQUFDLFFBQVEsRUFBRSxvQkFBZSxNQUFNLENBQUMsUUFBUSxFQUFJLENBQUMsQ0FBQztZQUM5RSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9FLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLDRCQUFXO2FBQTdCO1lBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUM5QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDekMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLCtCQUFjO2FBQWhDO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELG1CQUFtQjtJQUNMLDZCQUFlLEdBQTdCLFVBQThCLFFBQWlCLEVBQUUsU0FBMEM7UUFBMUMsMEJBQUEsRUFBQSxZQUF1QixTQUFTLENBQUMsU0FBUztRQUN2RixJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDaEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDcEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvRSxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO29CQUNsQywrQkFBK0I7b0JBQy9CLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDdkIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN0QixJQUFJLFlBQVksQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsRUFBRTt3QkFDakMsVUFBVSxHQUFHLElBQUksQ0FBQztxQkFDckI7eUJBQU0sSUFBSSxZQUFZLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLEVBQUU7d0JBQ3hDLFNBQVMsR0FBRyxJQUFJLENBQUM7cUJBQ3BCO29CQUNELE1BQU0sQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO29CQUM1QixNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztpQkFDakM7cUJBQU0sSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtvQkFDeEMsUUFBUTtvQkFDUixNQUFNLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDbEQsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7aUJBQ3ZDO3FCQUFNO29CQUNILE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN2QixNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztpQkFDM0I7YUFDSjtpQkFBTTtnQkFDSCxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwRyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO29CQUNsQyxJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6RCxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM1QjtxQkFBTSxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO29CQUN4QyxJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6RCxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM1QjtxQkFBTTtvQkFDSCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNqQzthQUNKO1NBQ0o7YUFBSTtZQUNELEVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFDTCxvQkFBQztBQUFELENBcEZBLEFBb0ZDLElBQUE7QUFwRlksc0NBQWE7QUF5RjFCO0lBQWdCLHFCQUFZO0lBQTVCO1FBQUEscUVBd0JDO1FBckJHLGdCQUFVLEdBQWMsU0FBUyxDQUFDLFNBQVMsQ0FBQzs7SUFxQmhELENBQUM7VUF4QkssQ0FBQztJQVdILHNCQUFJLHdCQUFTO2FBSWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQU5ELFVBQWMsR0FBRztZQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUQsQ0FBQzs7O09BQUE7SUFLRCxrQkFBTSxHQUFOO1FBQ0ksSUFBRyxDQUFDLFNBQVMsRUFBQztZQUNWLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDOztJQXRCc0IsVUFBUSxHQUFNLElBQUksR0FBQyxFQUFFLENBQUM7SUFVN0M7UUFQQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdkIsT0FBTyxFQUFDLDJhQUdQO1NBQ0osQ0FBQztzQ0FJRDtJQWRDLENBQUM7UUFITixPQUFPO1FBQ1AsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQzFCLGlCQUFpQjtPQUNaLENBQUMsQ0F3Qk47SUFBRCxRQUFDO0NBeEJELEFBd0JDLENBeEJlLEVBQUUsQ0FBQyxTQUFTLEdBd0IzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHksbWVudSxleGVjdXRlSW5FZGl0TW9kZX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGVudW0gU2NyZWVuRml0e1xyXG4gICAgTk9fQk9SREVSLC8v5L+d6K+B55+t6L656IO96ZO65ruh5bGP5bmV77yM6ZW/6L655Y+v6IO95Lya6LaF5Ye65bGP5bmV5Yy65Z+fXHJcbiAgICBTSE9XX0FMTCwvL+S/neivgemVv+i+uemTuua7oeWxj+W5le+8jOiDveaYvuekuuaJgOacieWGheWuue+8jOWPr+iDveS8muaciem7kei+uVxyXG4gICAgRVhBQ1RfRklULC8v6ZW/55+t6L655Z2H5ouJ5Ly46ZO65ruh5bGP5bmV77yM5Y+v6IO95Lya5Y+Y5b2iXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW5BZGFwdGVye1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgY2FudmFzU2l6ZSgpOmNjLlNpemV7XHJcbiAgICAgICAgbGV0IHJldCA9IGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpO1xyXG4gICAgICAgIGRve1xyXG4gICAgICAgICAgICBsZXQgY2FudmFzX25vZGUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcclxuICAgICAgICAgICAgaWYoIWNhbnZhc19ub2RlKXticmVhazt9XHJcbiAgICAgICAgICAgIHJldCA9IGNhbnZhc19ub2RlLmdldENvbnRlbnRTaXplKCk7XHJcbiAgICAgICAgfXdoaWxlKGZhbHNlKVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbGVmdFRvcCgpOiBjYy5WZWMyIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuY2FudmFzU2l6ZTtcclxuICAgICAgICByZXR1cm4gY2MudjIoLXNpemUud2lkdGggKiAwLjUsIHNpemUuaGVpZ2h0ICogMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBtaWRkbGVCb3R0b20oKTogY2MuVmVjMiB7XHJcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLmNhbnZhc1NpemU7XHJcbiAgICAgICAgbGV0IHBvcyA9ICBjYy52MigwLCAtc2l6ZS5oZWlnaHQgKiAwLjUpO1xyXG4gICAgICAgIHJldHVybiBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5a6e6ZmF5YiG6L6o546H5ZKM6K6+6K6h5YiG6L6o546H55qE5q+U5L6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzY3JlZW5TY2FsZSgpe1xyXG4gICAgICAgIGxldCB2aXNpYmxlID0gdGhpcy5jYW52YXNTaXplO1xyXG4gICAgICAgIGxldCBkZXNpZ24gPSBjYy5DYW52YXMuaW5zdGFuY2UuZGVzaWduUmVzb2x1dGlvbjtcclxuICAgICAgICBjYy5sb2coYHZpc2libGVTaXplIDogJHt2aXNpYmxlLnRvU3RyaW5nKCl9IGRlc2lnblNpemU6JHtkZXNpZ24udG9TdHJpbmcoKX1gKTtcclxuICAgICAgICByZXR1cm4gY2MudjIodmlzaWJsZS53aWR0aCAvIGRlc2lnbi53aWR0aCwgdmlzaWJsZS5oZWlnaHQgLyBkZXNpZ24uaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBhc3BlY3RSYXRpbygpOm51bWJlcntcclxuICAgICAgICBsZXQgdmlzaWJsZSA9IHRoaXMuY2FudmFzU2l6ZTtcclxuICAgICAgICBsZXQgcmF0aW8gPSB2aXNpYmxlLmhlaWdodC92aXNpYmxlLndpZHRoO1xyXG4gICAgICAgIGNjLmxvZyhgYXNwZWN0UmF0aW8gOiAke3JhdGlvLnRvRml4ZWQoMil9YCk7XHJcbiAgICAgICAgcmV0dXJuIHJhdGlvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlzSGlnaGVyU2NyZWVuKCk6IGJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNwZWN0UmF0aW8gPj0gMi4wO1xyXG4gICAgfVxyXG5cclxuICAgIC8vL+eUu+W4g+WSjOiDjOaZr+WbvueJh++8jOiHquWKqOmAguW6lOWxj+W5leWwuuWvuFxyXG4gICAgcHVibGljIHN0YXRpYyBhZGFwdFNjcmVlblNpemUoY3ZzX25vZGU6IGNjLk5vZGUsIHNjcmVlbkZpdDogU2NyZWVuRml0ID0gU2NyZWVuRml0Lk5PX0JPUkRFUik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjdnNfbm9kZSkge1xyXG4gICAgICAgICAgICBsZXQgY2FudmFzID0gY3ZzX25vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgICAgIGlmIChjYW52YXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IF9zY3JlZW5TY2FsZSA9IHRoaXMuc2NyZWVuU2NhbGU7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJzY3JlZW5TY2FsZSA6IFwiLCBfc2NyZWVuU2NhbGUueC50b0ZpeGVkKDIpLCBfc2NyZWVuU2NhbGUueS50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgICAgIGlmIChzY3JlZW5GaXQgPT0gU2NyZWVuRml0Lk5PX0JPUkRFUikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vL+avlOiuvuiuoeWIhui+qOeOh+e7humVvyjlrr3pq5jmr5TovoPlsI8p77yM5YiZ5a695bqm5Zu65a6a77yM5ZCm5YiZ6auY5bqm5Zu65a6aXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9maXRIZWlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX2ZpdFdpZHRoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9zY3JlZW5TY2FsZS54IDwgX3NjcmVlblNjYWxlLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2ZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfc2NyZWVuU2NhbGUueCA+IF9zY3JlZW5TY2FsZS55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9maXRXaWR0aCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IF9maXRXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gX2ZpdEhlaWdodDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2NyZWVuRml0ID09IFNjcmVlbkZpdC5TSE9XX0FMTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6ZO65ruh55+t55qE5LiA6L65XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gX3NjcmVlblNjYWxlLnggPCBfc2NyZWVuU2NhbGUueTtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gIWNhbnZhcy5maXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBfbm9kZVNjYWxlID0gY2MudjIodGhpcy5jYW52YXNTaXplLndpZHRoL2N2c19ub2RlLndpZHRoLHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQvY3ZzX25vZGUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIl9ub2RlU2NhbGUgOiBcIiwgX25vZGVTY2FsZS54LnRvRml4ZWQoMiksIF9ub2RlU2NhbGUueS50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgICAgIGlmIChzY3JlZW5GaXQgPT0gU2NyZWVuRml0Lk5PX0JPUkRFUikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZTogbnVtYmVyID0gTWF0aC5tYXgoX25vZGVTY2FsZS54LCBfbm9kZVNjYWxlLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN2c19ub2RlLnNldFNjYWxlKHNjYWxlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2NyZWVuRml0ID09IFNjcmVlbkZpdC5TSE9XX0FMTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZTogbnVtYmVyID0gTWF0aC5taW4oX25vZGVTY2FsZS54LCBfbm9kZVNjYWxlLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN2c19ub2RlLnNldFNjYWxlKHNjYWxlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3ZzX25vZGUuc2V0U2NhbGUoX25vZGVTY2FsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2MuZXJyb3IoJ2FkYXB0IHNjcmVlbiBub2RlIGlzIG51bGwnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwiYWRhcHQvc2NyZWVuX2FkYXB0XCIpXHJcbkBleGVjdXRlSW5FZGl0TW9kZVxyXG5jbGFzcyBNIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IE0gPSBuZXcgTSgpO1xyXG4gICAgXHJcbiAgICBfc2NyZWVuRml0OiBTY3JlZW5GaXQgPSBTY3JlZW5GaXQuTk9fQk9SREVSO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOmNjLkVudW0oU2NyZWVuRml0KSxcclxuICAgICAgICB0b29sdGlwOmBOT19CT1JERVIsLy/kv53or4Hnn63ovrnog73pk7rmu6HlsY/luZXvvIzplb/ovrnlj6/og73kvJrotoXlh7rlsY/luZXljLrln59cclxuICAgICAgICBTSE9XX0FMTCwvL+S/neivgemVv+i+uemTuua7oeWxj+W5le+8jOiDveaYvuekuuaJgOacieWGheWuue+8jOWPr+iDveS8muaciem7kei+uVxyXG4gICAgICAgIEVYQUNUX0ZJVCwvL+mVv+efrei+ueWdh+aLieS8uOmTuua7oeWxj+W5le+8jOWPr+iDveS8muWPmOW9olxyXG4gICAgICAgIGAsXHJcbiAgICB9KVxyXG4gICAgc2V0IHNjcmVlbkZpdCh2YWwpe1xyXG4gICAgICAgIHRoaXMuX3NjcmVlbkZpdCA9IHZhbDtcclxuICAgICAgICBTY3JlZW5BZGFwdGVyLmFkYXB0U2NyZWVuU2l6ZSh0aGlzLm5vZGUsdGhpcy5zY3JlZW5GaXQpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNjcmVlbkZpdCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JlZW5GaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgaWYoIUNDX0VESVRPUil7XHJcbiAgICAgICAgICAgIFNjcmVlbkFkYXB0ZXIuYWRhcHRTY3JlZW5TaXplKHRoaXMubm9kZSx0aGlzLnNjcmVlbkZpdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19