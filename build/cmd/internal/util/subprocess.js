"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._callFrom = exports._call = void 0;
/**
 * @module subprocess
 */
const child_process_1 = require("child_process");
function _call(cmd) {
    (0, child_process_1.execSync)(cmd);
}
exports._call = _call;
function _callFrom(from, cmd) {
    (0, child_process_1.execSync)(`cd ${from} && ${cmd}`);
}
exports._callFrom = _callFrom;
