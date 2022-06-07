"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@cookiedough/types");
exports.default = [
    {
        type: 'list',
        name: 'preset',
        message: 'select a preset',
        choices: types_1.GoPresets
    },
    {
        type: 'string',
        name: 'pkgName',
        message: 'name your module'
    }
];
