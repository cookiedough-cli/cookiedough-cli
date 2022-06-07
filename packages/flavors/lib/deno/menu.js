"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@cookiedough/types");
exports.default = [
    {
        type: 'list',
        name: 'preset',
        message: 'select a preset',
        choices: types_1.DenoPresets
    }
];
