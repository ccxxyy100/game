
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/global_node.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c618eQFKhORb54gy8ibA9o', 'global_node');
// Script/global_node.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalNode = exports.GlobalNodeNames = void 0;
///全局常驻节点的枚举
var GlobalNodeNames;
(function (GlobalNodeNames) {
    GlobalNodeNames["PopuMgr"] = "PopuMgr";
    GlobalNodeNames["SoundMgr"] = "SoundMgr";
    GlobalNodeNames["GlobalScheduler"] = "GlobalScheduler";
})(GlobalNodeNames = exports.GlobalNodeNames || (exports.GlobalNodeNames = {}));
var zOrder = (_a = {},
    _a[GlobalNodeNames.PopuMgr] = 1,
    _a[GlobalNodeNames.SoundMgr] = 2,
    _a[GlobalNodeNames.GlobalScheduler] = 3,
    _a);
var _globalNode = null;
/**
 * 获得或者生成常驻节点
 */
function getGlobalNode(type, offset) {
    if (offset === void 0) { offset = cc.v2(0, 0); }
    if (_globalNode == null) {
        _globalNode = new cc.Node("_globalNode");
        _globalNode.zIndex = 100;
        if (!CC_EDITOR) {
            cc.game.addPersistRootNode(_globalNode);
        }
    }
    var size = cc.view.getVisibleSize();
    _globalNode.setContentSize(size);
    _globalNode.setPosition(size.width / 2, size.height / 2);
    var ret = _globalNode.getChildByName(type);
    if (!ret) {
        ret = new cc.Node(type);
        ret.zIndex = zOrder[type] || 0;
        _globalNode.addChild(ret);
    }
    ret.position = cc.v3(offset);
    return ret;
}
exports.getGlobalNode = getGlobalNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnbG9iYWxfbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsWUFBWTtBQUNaLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN2QixzQ0FBbUIsQ0FBQTtJQUNuQix3Q0FBcUIsQ0FBQTtJQUNyQixzREFBbUMsQ0FBQTtBQUN2QyxDQUFDLEVBSlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFJMUI7QUFFRCxJQUFJLE1BQU07SUFDTixHQUFDLGVBQWUsQ0FBQyxPQUFPLElBQUksQ0FBQztJQUM3QixHQUFDLGVBQWUsQ0FBQyxRQUFRLElBQUksQ0FBQztJQUM5QixHQUFDLGVBQWUsQ0FBQyxlQUFlLElBQUksQ0FBQztPQUV4QyxDQUFBO0FBR0QsSUFBSSxXQUFXLEdBQVcsSUFBSSxDQUFDO0FBQy9COztHQUVHO0FBQ0gsU0FBZ0IsYUFBYSxDQUFDLElBQW9CLEVBQUMsTUFBMkI7SUFBM0IsdUJBQUEsRUFBQSxTQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDMUUsSUFBRyxXQUFXLElBQUUsSUFBSSxFQUFDO1FBQ2pCLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDekIsSUFBRyxDQUFDLFNBQVMsRUFBQztZQUNWLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0M7S0FDSjtJQUNELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFcEMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEQsSUFBSSxHQUFHLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxJQUFHLENBQUMsR0FBRyxFQUFDO1FBQ0osR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBRSxDQUFDLENBQUM7UUFDN0IsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM3QjtJQUNELEdBQUcsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFyQkQsc0NBcUJDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vL+WFqOWxgOW4uOmpu+iKgueCueeahOaemuS4vlxyXG5leHBvcnQgZW51bSBHbG9iYWxOb2RlTmFtZXN7XHJcbiAgICBQb3B1TWdyID0gXCJQb3B1TWdyXCIsXHJcbiAgICBTb3VuZE1nciA9IFwiU291bmRNZ3JcIixcclxuICAgIEdsb2JhbFNjaGVkdWxlciA9IFwiR2xvYmFsU2NoZWR1bGVyXCIsLy/lhajlsYDlrprml7blmahcclxufVxyXG5cclxubGV0IHpPcmRlciA9IHtcclxuICAgIFtHbG9iYWxOb2RlTmFtZXMuUG9wdU1ncl0gOiAxLFxyXG4gICAgW0dsb2JhbE5vZGVOYW1lcy5Tb3VuZE1ncl0gOiAyLFxyXG4gICAgW0dsb2JhbE5vZGVOYW1lcy5HbG9iYWxTY2hlZHVsZXJdIDogMyxcclxuICAgIFxyXG59XHJcblxyXG5cclxubGV0IF9nbG9iYWxOb2RlOmNjLk5vZGUgPSBudWxsO1xyXG4vKipcclxuICog6I635b6X5oiW6ICF55Sf5oiQ5bi46am76IqC54K5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsTm9kZSh0eXBlOkdsb2JhbE5vZGVOYW1lcyxvZmZzZXQ6Y2MuVmVjMiA9IGNjLnYyKDAsMCkpe1xyXG4gICAgaWYoX2dsb2JhbE5vZGU9PW51bGwpe1xyXG4gICAgICAgIF9nbG9iYWxOb2RlID0gbmV3IGNjLk5vZGUoXCJfZ2xvYmFsTm9kZVwiKTtcclxuICAgICAgICBfZ2xvYmFsTm9kZS56SW5kZXggPSAxMDA7XHJcbiAgICAgICAgaWYoIUNDX0VESVRPUil7XHJcbiAgICAgICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKF9nbG9iYWxOb2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuXHJcbiAgICBfZ2xvYmFsTm9kZS5zZXRDb250ZW50U2l6ZShzaXplKTtcclxuICAgIF9nbG9iYWxOb2RlLnNldFBvc2l0aW9uKHNpemUud2lkdGgvMixzaXplLmhlaWdodC8yKTtcclxuICAgIFxyXG4gICAgbGV0IHJldCA9IF9nbG9iYWxOb2RlLmdldENoaWxkQnlOYW1lKHR5cGUpO1xyXG4gICAgaWYoIXJldCl7XHJcbiAgICAgICAgcmV0ID0gbmV3IGNjLk5vZGUodHlwZSk7XHJcbiAgICAgICAgcmV0LnpJbmRleCA9IHpPcmRlclt0eXBlXXx8MDtcclxuICAgICAgICBfZ2xvYmFsTm9kZS5hZGRDaGlsZChyZXQpO1xyXG4gICAgfVxyXG4gICAgcmV0LnBvc2l0aW9uID0gY2MudjMob2Zmc2V0KTtcclxuICAgIHJldHVybiByZXQ7XHJcbn0iXX0=