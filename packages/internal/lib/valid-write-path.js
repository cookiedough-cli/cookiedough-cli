"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useValidWritePath = void 0;
const fs_extra_1 = require("fs-extra");
function useValidWritePath(p) {
    return (0, fs_extra_1.ensureDirSync)(p);
}
exports.useValidWritePath = useValidWritePath;
