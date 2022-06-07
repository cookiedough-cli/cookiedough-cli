"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePresetPackageMapper = void 0;
const types_1 = require("@cookiedough/types");
const NodePresetPackageMapper = (np) => {
    let installer;
    switch (np.pkg_mgr) {
        case 'pnpm':
            installer = (0, types_1.asNodeModuleInstaller)('pnpm', 'add');
        case 'yarn':
            installer = (0, types_1.asNodeModuleInstaller)('yarn', 'add');
        default:
            installer = (0, types_1.asNodeModuleInstaller)('npm', 'i');
            break;
    }
    const needsPackage = [];
    if (np.eslint) {
        // add eslint plugins for typescript
        if (np.preset == 'ts') {
            types_1.ESLintTSModules.forEach(m => needsPackage.push(m));
        }
        // just add regular eslint modules
        else {
            types_1.ESLintBaseModules.forEach(m => needsPackage.push(m));
        }
    }
    // add selected build tools
    switch (np.build_tools) {
        case 'grunt':
            types_1.GruntBaseModules.forEach(m => needsPackage.push(m));
            break;
        case 'gulp':
            types_1.GulpModules.forEach(m => needsPackage.push(m));
    }
    // add ts if needed
    if (np.preset === 'ts') {
        needsPackage.push(['typescript', '-D']);
        if (np.bundler === 'rollup') {
            types_1.RollupTSModules.forEach(m => needsPackage.push(m));
        }
        if (np.build_tools === 'gulp') {
            types_1.GulpTSModules.forEach(m => needsPackage.push(m));
        }
    }
    // add chosen compiler
    switch (np.compiler) {
        case 'esbuild':
            needsPackage.push(['esbuild', '']);
            break;
        case 'swc':
            types_1.SWCBaseModules.forEach(m => needsPackage.push(m));
            break;
        case 'babel':
            types_1.BabelBaseModules.forEach(m => needsPackage.push(m));
            if (np.preset === 'ts') {
                types_1.BabelTSModules.forEach(m => needsPackage.push(m));
            }
    }
    // add bundler
    switch (np.bundler) {
        case 'esbuild':
            needsPackage.push(['esbuild', '']);
            break;
        case 'webpack':
            types_1.WebpackModules.forEach(m => needsPackage.push(m));
            if (np.preset == 'ts')
                needsPackage.push(['ts-loader', '-D']);
            if (np.compiler === 'swc')
                needsPackage.push(['swc-loader', '-D']);
            if (np.compiler === 'babel')
                needsPackage.push(['babel-loader', '-D']);
            break;
        case 'rollup':
            needsPackage.push(['rollup', '-D']);
            break;
        case 'swcpack':
            needsPackage.push(['swcpack', '-D']);
    }
    // return package list
    return {
        installer,
        packages: needsPackage
    };
};
exports.NodePresetPackageMapper = NodePresetPackageMapper;
