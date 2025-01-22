
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/utils/function.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx1dGlsc1xcZnVuY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBZ0IsYUFBYSxDQUFDLEtBQXdDLEVBQUMsSUFBeUI7SUFBbEUsc0JBQUEsRUFBQSxRQUFlLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO0lBQUMscUJBQUEsRUFBQSxPQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3ZCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDekIsSUFBSSxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDN0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxHQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxJQUFJLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU5QixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ1gsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLEtBQUssRUFBQyxDQUFDLEVBQUUsRUFBQztRQUNwQixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQ3JCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkIsR0FBRyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNyQixHQUFHLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7S0FDSjtJQUNELEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFdkUsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBckJELHNDQXFCQztBQUdELElBQUksUUFBUSxHQUFnQixJQUFJLENBQUM7QUFDakMsU0FBZ0Isc0JBQXNCLENBQUMsSUFBaUI7SUFBakIscUJBQUEsRUFBQSxXQUFpQjtJQUNwRCxJQUFHLFFBQVEsSUFBRSxJQUFJLEVBQUM7UUFDZCxRQUFRLEdBQUcsYUFBYSxFQUFFLENBQUE7S0FDN0I7SUFDRCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNGLElBQUksV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkQsT0FBTyxXQUFXLENBQUM7QUFDdkIsQ0FBQztBQVBELHdEQU9DIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXh0dXJlKGNvbG9yOmNjLkNvbG9yPWNjLmNvbG9yKDI1NSwyNTUsMjU1LDI1NSksc2l6ZTpjYy5TaXplPWNjLnNpemUoNiw2KSkge1xyXG4gICAgbGV0IHdpZHRoID0gc2l6ZS53aWR0aDtcclxuICAgIGxldCBoZWlnaHQgPSBzaXplLmhlaWdodDtcclxuICAgIGxldCB0ZXggPSBuZXcgY2MuVGV4dHVyZTJEKCk7XHJcbiAgICBsZXQgYnVmID0gbmV3IEFycmF5QnVmZmVyKHdpZHRoKmhlaWdodCo0KTtcclxuICAgIGxldCBhcnIgPSBuZXcgVWludDhBcnJheShidWYpO1xyXG5cclxuICAgIGFyci5maWxsKDApXHJcbiAgICBmb3IobGV0IGk9MDtpPHdpZHRoO2krKyl7XHJcbiAgICAgICAgZm9yKGxldCBqPTA7ajxoZWlnaHQ7aisrKXtcclxuICAgICAgICAgICAgbGV0IGlkeCA9IChpKmhlaWdodCtqKSo0O1xyXG4gICAgICAgICAgICBhcnJbaWR4XSA9IGNvbG9yLnI7XHJcbiAgICAgICAgICAgIGFycltpZHgrMV0gPSBjb2xvci5nO1xyXG4gICAgICAgICAgICBhcnJbaWR4KzJdID0gY29sb3IuYjtcclxuICAgICAgICAgICAgYXJyW2lkeCszXSA9IGNvbG9yLmE7XHJcbiAgICAgICAgICAgIGxldCBrID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0ZXguaW5pdFdpdGhEYXRhKGFycixjYy5UZXh0dXJlMkQuUGl4ZWxGb3JtYXQuUkdCQTg4ODgsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIHJldHVybiB0ZXg7XHJcbn1cclxuXHJcblxyXG5sZXQgX3RleHR1cmU6Y2MuVGV4dHVyZTJEID0gbnVsbDtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbG9yU3ByaXRlRnJhbWUocmVjdDpjYy5SZWN0PW51bGwpe1xyXG4gICAgaWYoX3RleHR1cmU9PW51bGwpe1xyXG4gICAgICAgIF90ZXh0dXJlID0gY3JlYXRlVGV4dHVyZSgpXHJcbiAgICB9IFxyXG4gICAgcmVjdCA9IHJlY3QgfHwgY2MucmVjdCgwLDAsY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoLGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQpO1xyXG4gICAgbGV0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKF90ZXh0dXJlLHJlY3QpXHJcbiAgICByZXR1cm4gc3ByaXRlRnJhbWU7XHJcbn0iXX0=