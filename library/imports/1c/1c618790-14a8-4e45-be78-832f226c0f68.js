"use strict";
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