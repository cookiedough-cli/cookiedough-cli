"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useValidWritePath = void 0;
const fs_1 = require("fs");
function useValidWritePath(p) {
    if (!(0, fs_1.existsSync)(p) && (p !== process.cwd())) {
        (0, fs_1.mkdirSync)(p);
    }
    return p;
}
exports.useValidWritePath = useValidWritePath;
