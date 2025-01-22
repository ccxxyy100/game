"use strict";
cc._RF.push(module, 'e44fb/QXXZDuo/DYQQGIFkr', 'function');
// Script/utils/function.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createColorSpriteFrame = exports.createTexture = void 0;
function createTexture(color, size) {
    if (color === void 0) { color = cc.color(255, 255, 255, 255); }
    if (size === void 0) { size = cc.size(6, 6); }
    var width = size.width;
    var height = size.height;
    var tex = new cc.Texture2D();
    var buf = new ArrayBuffer(width * height * 4);
    var arr = new Uint8Array(buf);
    arr.fill(0);
    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            var idx = (i * height + j) * 4;
            arr[idx] = color.r;
            arr[idx + 1] = color.g;
            arr[idx + 2] = color.b;
            arr[idx + 3] = color.a;
            var k = 0;
        }
    }
    tex.initWithData(arr, cc.Texture2D.PixelFormat.RGBA8888, width, height);
    return tex;
}
exports.createTexture = createTexture;
var _texture = null;
function createColorSpriteFrame(rect) {
    if (rect === void 0) { rect = null; }
    if (_texture == null) {
        _texture = createTexture();
    }
    rect = rect || cc.rect(0, 0, cc.view.getVisibleSize().width, cc.view.getVisibleSize().height);
    var spriteFrame = new cc.SpriteFrame(_texture, rect);
    return spriteFrame;
}
exports.createColorSpriteFrame = createColorSpriteFrame;

cc._RF.pop();