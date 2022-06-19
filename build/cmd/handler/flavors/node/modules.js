"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESLintTSModules = exports.ESLintBaseModules = exports.GruntBaseModules = exports.SWCBaseModules = exports.WebpackModules = exports.RollupTSModules = exports.RollupModules = exports.GulpTSModules = exports.GulpModules = exports.SWCPackModules = exports.BabelTSModules = exports.BabelBaseModules = void 0;
exports.BabelBaseModules = [
    ['@babel/core', '-D'],
    ['@babel/preset-env', '-D']
];
exports.BabelTSModules = [
    ['@babel/plugin-transform-typescript', '-D'],
    ['@babel/plugin-preset-typescript', '-D']
];
exports.SWCPackModules = [
    ['swcpack', '-D']
];
exports.GulpModules = [
    ['gulp-cli', '-g'],
    ['gulp', '-D']
];
exports.GulpTSModules = [
    ['gulp-typescript', '-D']
];
exports.RollupModules = [
    ['rollup', '-g'],
    ['@rollup/plugin-json', '-D']
];
exports.RollupTSModules = [
    ['@rollup/plugin-typescript', '-D']
];
exports.WebpackModules = [
    ['webpack', '-D'],
    ['webpack-cli', '-D']
];
exports.SWCBaseModules = [
    ['@swc/cli', '-D'],
    ['@swc/core', '-D']
];
exports.GruntBaseModules = [
    ['grunt-cli', '-g'],
    ['grunt', '-D']
];
exports.ESLintBaseModules = [
    ['eslint', '-D']
];
exports.ESLintTSModules = [
    ...exports.ESLintBaseModules,
    ['@typescript-eslint/eslint-plugin', '-D'],
    ['@typescript-eslint/parser', '-D']
];
