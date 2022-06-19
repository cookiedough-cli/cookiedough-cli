import { Tuple, SystemOverview, CrumbOptions, CrumbPromptNoOp } from '../..';
export * from './modules';
export declare type NodeFlavorRecipe = {
    preset: NodeFlavorPreset;
    pkg_mgr: NodeFlavorPkg;
    build_tools: NodeFlavorBuildTool;
    compiler: NodeFlavorCompiler;
    bundler: NodeFlavorBundler;
    eslint: boolean;
};
export interface NodeBuildInfo {
    build_root: string;
    build_host: SystemOverview;
    build_preferences: NodeFlavorRecipe;
    build_frecipe: MappedNodeFlavorRecipe;
}
export declare type MappedNodeFlavorRecipe = {
    installer: NodeModulePackager;
    packages: NodeModule[];
};
export declare type NodeModule = Tuple;
export declare type NodeModulePackager = {
    name: NodeFlavorPkg;
    installSelf: string;
    installPkgSignature: string;
};
/**
 *
 * @param name
 * @param installPkgSignature
 * @returns
 */
export declare function asNodeModulePackager(name: NodeFlavorPkg, installPkgSignature: string): NodeModulePackager;
export declare const NodeFlavor_PkgPresets: readonly ["commonjs", "esm", "ts"];
export declare type NodeFlavorPreset = typeof NodeFlavor_PkgPresets[number];
export declare const NodeFlavor_PkgMgr: readonly ["npm", "yarn", "pnpm"];
export declare type NodeFlavorPkg = typeof NodeFlavor_PkgMgr[number];
export declare const NodeFlavor_BuildTools: readonly ["gulp", "grunt", "esbuild", "none"];
export declare type NodeFlavorBuildTool = typeof NodeFlavor_BuildTools[number];
export declare const NodeFlavor_Compilers: readonly ["none", "babel", "swc", "esbuild"];
export declare type NodeFlavorCompiler = typeof NodeFlavor_Compilers[number];
export declare const NodeFlavor_Bundlers: readonly ["none", "rollup", "webpack", "swcpack", "esbuild"];
export declare type NodeFlavorBundler = typeof NodeFlavor_Bundlers[number];
export declare type NodeRecipeToFileMap = {
    config: CrumbOptions;
    recipe: NodeFlavorRecipe;
    installer: NodeModulePackager;
    packages: NodeModule[];
};
export declare function useFinalPresetCopy(p: CrumbOptions, node_build_info: NodeBuildInfo): void;
export declare function useNodeInstaller(p: CrumbOptions, node_build_info: NodeBuildInfo): void;
export declare function usePrompt(p: CrumbOptions): CrumbPromptNoOp;
