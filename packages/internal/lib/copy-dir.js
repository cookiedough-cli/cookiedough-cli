"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyDirectory = void 0;
const fs_extra_1 = require("fs-extra");
function copyDirectory(to, from, recur) {
    try {
        (0, fs_extra_1.copySync)(to, from, {
            recursive: recur
        });
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.copyDirectory = copyDirectory;
