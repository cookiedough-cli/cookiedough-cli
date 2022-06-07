"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@cookiedough/types");
exports.default = [
    {
        type: 'list',
        name: 'preset',
        message: 'choose package preset',
        choices: types_1.NodePkgPresets
    },
    {
        type: 'list',
        name: 'pkg_mgr',
        message: 'choose preferred package manager',
        choices: types_1.NodePkgMgrPresets
    },
    {
        type: 'list',
        name: 'build_tools',
        message: 'choose build environment',
        choices: types_1.NodeBuildPresets
    },
    {
        type: 'list',
        name: 'compiler',
        message: 'choose transpiler option',
        choices: types_1.NodeCompilerPresets
    },
    {
        type: 'list',
        name: 'bundler',
        message: 'choose bundler option',
        choices: types_1.NodeBundlerPresets
    },
    {
        type: 'confirm',
        name: 'eslint',
        message: 'setup eslint?',
        choices: ['yes', 'no']
    }
];
