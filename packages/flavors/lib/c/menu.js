"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CCMenuOptions = exports.CMenuOptions = void 0;
const types_1 = require("@cookiedough/types");
exports.CMenuOptions = [
    {
        type: 'list',
        name: 'compiler',
        message: 'select a compiler',
        choices: types_1.CCompilers
    },
    {
        type: 'list',
        name: 'standard',
        message: 'select a standard',
        choices: types_1.CStandards
    }
];
exports.CCMenuOptions = [
    {
        type: 'list',
        name: 'compiler',
        message: 'select a compiler',
        choices: types_1.CCompilers
    },
    {
        type: 'list',
        name: 'standard',
        message: 'select a standard',
        choices: types_1.CCStandards
    }
];
