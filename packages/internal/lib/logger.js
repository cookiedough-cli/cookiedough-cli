"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDataLog = exports.useLog = exports._error = exports._warn = exports._log = exports.useColor = exports.BgWhite = exports.BgCyan = exports.BgMagenta = exports.BgBlue = exports.BgYellow = exports.BgGreen = exports.BgRed = exports.BgBlack = exports.FgWhite = exports.FgCyan = exports.FgMagenta = exports.FgBlue = exports.FgYellow = exports.FgGreen = exports.FgRed = exports.FgBlack = exports.Hidden = exports.Reverse = exports.Blink = exports.Underscore = exports.Dim = exports.Bright = exports.Reset = void 0;
const util_1 = require("util");
exports.Reset = '\x1b[0m';
exports.Bright = '\x1b[1m';
exports.Dim = '\x1b[2m';
exports.Underscore = '\x1b[4m';
exports.Blink = '\x1b[5m';
exports.Reverse = '\x1b[7m';
exports.Hidden = '\x1b[8m';
exports.FgBlack = '\x1b[30m';
exports.FgRed = '\u001b[31m';
exports.FgGreen = '\x1b[32m';
exports.FgYellow = '\x1b[33m';
exports.FgBlue = '\x1b[34m';
exports.FgMagenta = '\x1b[35m';
exports.FgCyan = '\x1b[36m';
exports.FgWhite = '\x1b[37m';
exports.BgBlack = '\x1b[40m';
exports.BgRed = '\x1b[41m';
exports.BgGreen = '\x1b[42m';
exports.BgYellow = '\x1b[43m';
exports.BgBlue = '\x1b[44m';
exports.BgMagenta = '\x1b[45m';
exports.BgCyan = '\x1b[46m';
exports.BgWhite = '\x1b[47m';
function useColor(color, val) {
    switch (color) {
        case 'yellow':
        case 'warn':
        case 'warning':
        case 'txt-yellow':
            return (0, util_1.format)('%s%s\x1b[0m', exports.FgYellow, val);
        case 'blue':
        case 'txt-blue':
        case 'status':
        case 'info':
        case 'log':
            return (0, util_1.format)('%s%s\x1b[0m', exports.FgBlue, val);
        case 'red':
        case 'txt-red':
        case 'error':
        case 'err':
            return (0, util_1.format)('%s%s\x1b[0m', exports.FgRed, val);
        case 'green':
        case 'txt-green':
        case 'success':
        case 'ok':
            return (0, util_1.format)('%s%s\x1b[0m', exports.FgGreen, val);
        default:
            return (0, util_1.format)('%s%s\x1b[0m', exports.Reset, val);
    }
}
exports.useColor = useColor;
function _log(data) {
    return console.log(data);
}
exports._log = _log;
function _warn(data) {
    return console.warn(data);
}
exports._warn = _warn;
function _error(data) {
    return console.error(data);
}
exports._error = _error;
function useLog(data, type, filePath) {
    // todo - handle fs writer if needed
    switch (type) {
        case 'error':
            return _error(useColor(type, data));
        case 'warning':
            return _warn(useColor(type, data));
        default:
            return _log(useColor(type !== null && type !== void 0 ? type : 'info', data));
    }
}
exports.useLog = useLog;
function useDataLog(o) {
    return _log(o);
}
exports.useDataLog = useDataLog;
