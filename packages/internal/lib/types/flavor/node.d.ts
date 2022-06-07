import { Tuple, SystemOverview, CrumbOptions } from '..';
export declare type NodeFlavor = {
    preset: NodePreset;
    pkg_mgr: NodePkgMgrPreset;
    build_tools: NodeBuildPreset;
    compiler: NodeCompilerPreset;
    bundler: NodeBundlerPreset;
    eslint: boolean;
};
export interface NodeBuildInfo {
    build_root: string;
    build_host: SystemOverview;
    build_preferences: NodeFlavor;
    build_packages: Tuple[];
}
export declare type NodeModule = Tuple;
export interface ToInstallModule {
    asTuple: Tuple;
    name: string;
    dev: boolean;
    global: boolean;
    version?: string;
}
export declare type NodeModuleInstaller = {
    name: NodePkgMgrPreset;
    installSelf: string;
    installPkgSignature: string;
};
/**
 *
 * @param name
 * @param installPkgSignature
 * @returns
 */
export declare function asNodeModuleInstaller(name: NodePkgMgrPreset, installPkgSignature: string): NodeModuleInstaller;
export declare const NodePkgPresets: NodePreset[];
export declare const NodePkgMgrPresets: NodePkgMgrPreset[];
export declare const NodeBuildPresets: NodeBuildPreset[];
export declare const NodeCompilerPresets: NodeCompilerPreset[];
export declare const NodeBundlerPresets: NodeBundlerPreset[];
export declare const BabelBaseModules: NodeModule[];
export declare const BabelTSModules: NodeModule[];
export declare const GulpModules: NodeModule[];
export declare const GulpTSModules: NodeModule[];
export declare const RollupTSModules: NodeModule[];
export declare const WebpackModules: NodeModule[];
export declare const SWCBaseModules: NodeModule[];
export declare const GruntBaseModules: NodeModule[];
export declare const ESLintBaseModules: NodeModule[];
export declare const ESLintTSModules: NodeModule[];
export declare type NodePreset = 'commonjs' | 'esm' | 'ts';
export declare type NodePkgMgrPreset = 'npm' | 'yarn' | 'pnpm';
export declare type NodeCompilerPreset = 'babel' | 'swc' | 'esbuild' | 'none';
export declare type NodeBundlerPreset = 'webpack' | 'esbuild' | 'rollup' | 'swcpack' | 'none';
export declare type NodeBuildPreset = 'esbuild' | 'gulp' | 'grunt' | 'none';
export declare type NodeFlavorPresetToFileMapArgs = {
    config: CrumbOptions;
    options: NodeFlavor;
    installer: NodeModuleInstaller;
    packages: NodeModule[];
};
