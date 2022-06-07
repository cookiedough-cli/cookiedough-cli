"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESLintTSModules = exports.ESLintBaseModules = exports.GruntBaseModules = exports.SWCBaseModules = exports.WebpackModules = exports.RollupTSModules = exports.GulpTSModules = exports.GulpModules = exports.BabelTSModules = exports.BabelBaseModules = exports.NodeBundlerPresets = exports.NodeCompilerPresets = exports.NodeBuildPresets = exports.NodePkgMgrPresets = exports.NodePkgPresets = exports.asNodeModuleInstaller = void 0;
// utils
/**
 *
 * @param name
 * @param installPkgSignature
 * @returns
 */
function asNodeModuleInstaller(name, installPkgSignature) {
    return {
        name,
        installSelf: '',
        installPkgSignature
    };
}
exports.asNodeModuleInstaller = asNodeModuleInstaller;
exports.NodePkgPresets = [
    'commonjs',
    'esm',
    'ts'
];
exports.NodePkgMgrPresets = [
    'npm',
    'yarn',
    'pnpm'
];
exports.NodeBuildPresets = [
    'gulp',
    'grunt',
    'esbuild',
    'none',
];
exports.NodeCompilerPresets = [
    'none',
    'babel',
    'swc',
    'esbuild',
];
exports.NodeBundlerPresets = [
    'none',
    'rollup',
    'webpack',
    'swcpack',
    'esbuild',
];
exports.BabelBaseModules = [
    ['@babel/core', '-D'],
    ['@babel/preset-env', '-D']
];
exports.BabelTSModules = [
    ['@babel/plugin-transform-typescript', '-D'],
    ['@babel/plugin-preset-typescript', '-D']
];
exports.GulpModules = [
    ['gulp-cli', '-g'],
    ['gulp', '-D']
];
exports.GulpTSModules = [
    ['gulp-typescript', '-D']
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
