"use strict";
cc._RF.push(module, '77eafSYQz1C8IzydQMCR8fa', 'audio_util');
// Script/utils/audio_util.ts

"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioUtil = exports.AudioEnum = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioEnum;
(function (AudioEnum) {
    AudioEnum["button"] = "audio/Button_Click";
    AudioEnum["finishOne"] = "audio/ContainerFinish";
    AudioEnum["pourWater"] = "audio/pourWater";
    AudioEnum["youWin"] = "audio/Show_Victory";
})(AudioEnum = exports.AudioEnum || (exports.AudioEnum = {}));
var AudioUtil = /** @class */ (function () {
    function AudioUtil() {
    }
    AudioUtil.preloadAll = function () {
        var arr = [];
        for (var key in AudioEnum) {
            var path = AudioEnum[key];
            arr.push(path);
        }
        cc.resources.preload(arr);
    };
    AudioUtil.unloadAll = function () {
        for (var key in AudioEnum) {
            var path = AudioEnum[key];
            cc.resources.release(path, cc.AudioClip);
        }
    };
    AudioUtil.playEffect = function (path, volume) {
        if (volume === void 0) { volume = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var clip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadClip(path)];
                    case 1:
                        clip = _a.sent();
                        return [2 /*return*/, cc.audioEngine.play(clip, false, volume)];
                }
            });
        });
    };
    /**
     * 播放倒水声音，根据倒水容量播放不同的时间
     * @param time 【0,1】
     */
    AudioUtil.playPourWaterEffect = function (time) {
        return __awaiter(this, void 0, void 0, function () {
            var clip, id, dur;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadClip(AudioEnum.pourWater)];
                    case 1:
                        clip = _a.sent();
                        id = cc.audioEngine.play(clip, false, 1.0);
                        dur = 3.0 * time;
                        setTimeout(function () {
                            cc.audioEngine.stop(id);
                        }, dur * 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    AudioUtil.loadClip = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resove, reject) {
                        cc.resources.load(path, cc.AudioClip, function (err, clip) {
                            if (err) {
                                // reject(err)
                                resove(null);
                            }
                            else {
                                resove(clip);
                            }
                        });
                    })];
            });
        });
    };
    return AudioUtil;
}());
exports.AudioUtil = AudioUtil;

cc._RF.pop();