
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/__appInit');
require('./assets/Script/data/const');
require('./assets/Script/dialog/base_dialog');
require('./assets/Script/dialog/dialog_mgr');
require('./assets/Script/dialog/dlg_setting');
require('./assets/Script/dialog/dlg_youWIn');
require('./assets/Script/global_node');
require('./assets/Script/launch_scene');
require('./assets/Script/play_scene');
require('./assets/Script/utils/audio_util');
require('./assets/Script/utils/click_button_effect');
require('./assets/Script/utils/function');
require('./assets/Script/utils/layer_color');
require('./assets/Script/utils/screen_adapt');
require('./assets/Script/views/cup');
require('./assets/Script/views/cupMgr');
require('./assets/Script/views/water');
require('./assets/Script/views/waterFlow');

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