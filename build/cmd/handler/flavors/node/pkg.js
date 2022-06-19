"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNodeFlavorMap = void 0;
const _1 = require(".");
const useNodeFlavorMap = (np) => {
    let installer;
    switch (np.pkg_mgr) {
        case 'pnpm':
            installer = (0, _1.asNodeModulePackager)('pnpm', 'add');
            break;
        case 'yarn':
            installer = (0, _1.asNodeModulePackager)('yarn', 'add');
            break;
        default:
            installer = (0, _1.asNodeModulePackager)('npm', 'i');
            break;
    }
    const needsPackage = [];
    if (np.eslint) {
        // add eslint plugins for typescript
        if (np.preset == 'ts') {
            _1.ESLintTSModules.forEach(m => needsPackage.push(m));
        }
        // just add regular eslint modules
        else {
            _1.ESLintBaseModules.forEach(m => needsPackage.push(m));
        }
    }
    // add selected build tools
    switch (np.build_tools) {
        case 'grunt':
            _1.GruntBaseModules.forEach(m => needsPackage.push(m));
            break;
        case 'gulp':
            _1.GulpModules.forEach(m => needsPackage.push(m));
    }
    // add ts if needed
    if (np.preset === 'ts') {
        needsPackage.push(['typescript', '-D']);
        if (np.bundler === 'rollup') {
            _1.RollupTSModules.forEach(m => needsPackage.push(m));
        }
        if (np.build_tools === 'gulp') {
            _1.GulpTSModules.forEach(m => needsPackage.push(m));
        }
    }
    // add chosen compiler
    switch (np.compiler) {
        case 'esbuild':
            needsPackage.push(['esbuild', '']);
            break;
        case 'swc':
            _1.SWCBaseModules.forEach(m => needsPackage.push(m));
            break;
        case 'babel':
            _1.BabelBaseModules.forEach(m => needsPackage.push(m));
            if (np.preset === 'ts') {
                _1.BabelTSModules.forEach(m => needsPackage.push(m));
            }
    }
    // add bundler
    switch (np.bundler) {
        case 'esbuild':
            needsPackage.push(['esbuild', '']);
            break;
        case 'webpack':
            _1.WebpackModules.forEach(m => needsPackage.push(m));
            if (np.preset == 'ts')
                needsPackage.push(['ts-loader', '-D']);
            if (np.compiler === 'swc')
                needsPackage.push(['swc-loader', '-D']);
            if (np.compiler === 'babel')
                needsPackage.push(['babel-loader', '-D']);
            break;
        case 'rollup':
            _1.RollupModules.forEach(m => needsPackage.push(m));
            break;
        case 'swcpack':
            _1.SWCPackModules.forEach(m => needsPackage.push(m));
    }
    // return package list
    return {
        installer,
        packages: needsPackage
    };
};
exports.useNodeFlavorMap = useNodeFlavorMap;
