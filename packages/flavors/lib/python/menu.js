"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@cookiedough/types");
exports.default = [
    {
        type: 'list',
        name: 'version',
        message: 'version',
        choices: types_1.PythonVersions
    }
];
