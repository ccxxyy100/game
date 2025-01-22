
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/utils/audio_util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx1dGlsc1xcYXVkaW9fdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFDakIsMENBQTZCLENBQUE7SUFDN0IsZ0RBQW1DLENBQUE7SUFDbkMsMENBQTZCLENBQUE7SUFDN0IsMENBQTZCLENBQUE7QUFDakMsQ0FBQyxFQUxXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBS3BCO0FBRUQ7SUFBQTtJQThDQSxDQUFDO0lBN0NVLG9CQUFVLEdBQWpCO1FBQ0ksSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsS0FBSSxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUM7WUFDckIsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDakI7UUFDRCxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ00sbUJBQVMsR0FBaEI7UUFDSSxLQUFJLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBQztZQUNyQixJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUM7SUFFWSxvQkFBVSxHQUF2QixVQUF3QixJQUFxQixFQUFDLE1BQVE7UUFBUix1QkFBQSxFQUFBLFVBQVE7Ozs7OzRCQUN2QyxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBaEMsSUFBSSxHQUFHLFNBQXlCO3dCQUNwQyxzQkFBTyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQyxFQUFDOzs7O0tBQ2pEO0lBRUQ7OztPQUdHO0lBQ1UsNkJBQW1CLEdBQWhDLFVBQWlDLElBQVc7Ozs7OzRCQUM3QixxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBQTs7d0JBQS9DLElBQUksR0FBRyxTQUF3Qzt3QkFDL0MsRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3pDLEdBQUcsR0FBRyxHQUFHLEdBQUMsSUFBSSxDQUFDO3dCQUNuQixVQUFVLENBQUM7NEJBQ1AsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7d0JBQzNCLENBQUMsRUFBRSxHQUFHLEdBQUMsSUFBSSxDQUFDLENBQUM7Ozs7O0tBQ2hCO0lBRXFCLGtCQUFRLEdBQTlCLFVBQStCLElBQVc7OztnQkFDdEMsc0JBQU8sSUFBSSxPQUFPLENBQWUsVUFBVSxNQUFNLEVBQUMsTUFBTTt3QkFDcEQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsVUFBQyxHQUFTLEVBQUMsSUFBaUI7NEJBQzVELElBQUcsR0FBRyxFQUFDO2dDQUNILGNBQWM7Z0NBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBOzZCQUNmO2lDQUFJO2dDQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTs2QkFDZjt3QkFDTCxDQUFDLENBQUMsQ0FBQTtvQkFDTixDQUFDLENBQUMsRUFBQTs7O0tBQ0w7SUFDTCxnQkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGVudW0gQXVkaW9FbnVte1xyXG4gICAgYnV0dG9uID0gXCJhdWRpby9CdXR0b25fQ2xpY2tcIixcclxuICAgIGZpbmlzaE9uZSA9IFwiYXVkaW8vQ29udGFpbmVyRmluaXNoXCIsXHJcbiAgICBwb3VyV2F0ZXIgPSBcImF1ZGlvL3BvdXJXYXRlclwiLFxyXG4gICAgeW91V2luID0gXCJhdWRpby9TaG93X1ZpY3RvcnlcIixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1ZGlvVXRpbHtcclxuICAgIHN0YXRpYyBwcmVsb2FkQWxsKCl7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQga2V5IGluIEF1ZGlvRW51bSl7XHJcbiAgICAgICAgICAgIGxldCBwYXRoID0gQXVkaW9FbnVtW2tleV07XHJcbiAgICAgICAgICAgIGFyci5wdXNoKHBhdGgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKGFycik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdW5sb2FkQWxsKCl7XHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gQXVkaW9FbnVtKXtcclxuICAgICAgICAgICAgbGV0IHBhdGggPSBBdWRpb0VudW1ba2V5XTtcclxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLnJlbGVhc2UocGF0aCxjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgcGxheUVmZmVjdChwYXRoOkF1ZGlvRW51bXxzdHJpbmcsdm9sdW1lPTEpe1xyXG4gICAgICAgIGxldCBjbGlwID0gYXdhaXQgdGhpcy5sb2FkQ2xpcChwYXRoKTtcclxuICAgICAgICByZXR1cm4gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLGZhbHNlLHZvbHVtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7lgJLmsLTlo7Dpn7PvvIzmoLnmja7lgJLmsLTlrrnph4/mkq3mlL7kuI3lkIznmoTml7bpl7RcclxuICAgICAqIEBwYXJhbSB0aW1lIOOAkDAsMeOAkVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXN5bmMgcGxheVBvdXJXYXRlckVmZmVjdCh0aW1lOm51bWJlcil7XHJcbiAgICAgICAgbGV0IGNsaXAgPSBhd2FpdCB0aGlzLmxvYWRDbGlwKEF1ZGlvRW51bS5wb3VyV2F0ZXIpO1xyXG4gICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCxmYWxzZSwxLjApO1xyXG4gICAgICAgIGxldCBkdXIgPSAzLjAqdGltZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChpZClcclxuICAgICAgICB9LCBkdXIqMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgIGFzeW5jIGxvYWRDbGlwKHBhdGg6c3RyaW5nKXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Y2MuQXVkaW9DbGlwPihmdW5jdGlvbiAocmVzb3ZlLHJlamVjdCkge1xyXG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLGNjLkF1ZGlvQ2xpcCwoZXJyOkVycm9yLGNsaXA6Y2MuQXVkaW9DbGlwKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZWplY3QoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc292ZShudWxsKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb3ZlKGNsaXApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdfQ==