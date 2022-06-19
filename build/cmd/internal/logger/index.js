"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDataLog = exports.useLog = exports._error = exports._warn = exports.info = exports.log = exports._log = exports.useColor = void 0;
const util_1 = require("util");
const colors_1 = require("./colors");
function useColor(color, val) {
    switch (color) {
        case 'yellow':
        case 'warn':
        case 'warning':
        case 'txt-yellow':
            return (0, util_1.format)('%s%s\x1b[0m', colors_1.FgYellow, val);
        case 'blue':
        case 'txt-blue':
        case 'status':
        case 'info':
        case 'log':
            return (0, util_1.format)('%s%s\x1b[0m', colors_1.FgBlue, val);
        case 'red':
        case 'txt-red':
        case 'error':
        case 'err':
            return (0, util_1.format)('%s%s\x1b[0m', colors_1.FgRed, val);
        case 'green':
        case 'txt-green':
        case 'success':
        case 'ok':
            return (0, util_1.format)('%s%s\x1b[0m', colors_1.FgGreen, val);
        default:
            return (0, util_1.format)('%s%s\x1b[0m', colors_1.Reset, val);
    }
}
exports.useColor = useColor;
function _log(data) {
    return process.stdout.write(`${data}\n`);
}
exports._log = _log;
function log(msg) {
    console.log(msg);
}
exports.log = log;
function info(data) {
    return _log(`${useColor('blue', 'info')}: ${data}`);
}
exports.info = info;
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
