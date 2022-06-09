import {
	Tuple,
	SystemOverview,
	CrumbOptions
} from '..';

export type NodeFlavorRecipe = {
	preset			: NodeFlavorPreset;
	pkg_mgr			: NodeFlavorPkg;
	build_tools		: NodeFlavorBuildTool;
	compiler		: NodeFlavorCompiler;
	bundler			: NodeFlavorBundler;
	eslint			: boolean;
}

export interface NodeBuildInfo {
	build_root			: string,
	build_host			: SystemOverview,
	build_preferences	: NodeFlavorRecipe,
	build_frecipe		: MappedNodeFlavorRecipe
}

export type MappedNodeFlavorRecipe = { installer: NodeModulePackager, packages: NodeModule[] };

export type NodeModule = Tuple;
export interface ToInstallModule {
	asTuple				 : Tuple; //tuple representing the package name and devness
	name				 : string; //name of package
	dev				 	 : boolean; //result of the second tuple from asTuple
	global				 : boolean; //result of the second tuple from asTuple
	version				?: string; //optional - todo
}

export type NodeModulePackager = {
	name				: NodeFlavorPkg; //name of process to run
	installSelf			: string; //command to install self if not installed / detected on system
	installPkgSignature	: string; //prefix for adding packages between the process and the packagename
}

// utils
/**
 *
 * @param name
 * @param installPkgSignature
 * @returns
 */

export function asNodeModulePackager(
	name: NodeFlavorPkg,
	installPkgSignature: string
) : NodeModulePackager {
	return <NodeModulePackager>{
		name,
		installSelf: '', //todo
		installPkgSignature
	}
}
export const NodeFlavor_PkgPresets = ['commonjs', 'esm', 'ts'] as const;
export type NodeFlavorPreset = typeof NodeFlavor_PkgPresets[number];

export const NodeFlavor_PkgMgr = ['npm', 'yarn', 'pnpm'] as const;
export type NodeFlavorPkg = typeof NodeFlavor_PkgMgr[number];

export const NodeFlavor_BuildTools = ['gulp', 'grunt', 'esbuild', 'none'] as const;
export type NodeFlavorBuildTool = typeof NodeFlavor_BuildTools[number];

export const NodeFlavor_Compilers = ['none', 'babel', 'swc', 'esbuild'] as const;
export type NodeFlavorCompiler = typeof NodeFlavor_Compilers[number];

export const NodeFlavor_Bundlers = ['none', 'rollup', 'webpack', 'swcpack', 'esbuild'] as const;
export type NodeFlavorBundler = typeof NodeFlavor_Bundlers[number];

export const BabelBaseModules: NodeModule[] = [
	['@babel/core', '-D'],
	['@babel/preset-env', '-D']
];

export const BabelTSModules: NodeModule[] = [
	['@babel/plugin-transform-typescript', '-D'],
	['@babel/plugin-preset-typescript', '-D']
];

export const GulpModules: NodeModule[] = [
	['gulp-cli', '-g'],
	['gulp', '-D']
];

export const GulpTSModules: NodeModule[] = [
	['gulp-typescript', '-D']
];

export const RollupTSModules: NodeModule[] = [
	['@rollup/plugin-typescript', '-D']
];

export const WebpackModules: NodeModule[] = [
	['webpack', '-D'],
	['webpack-cli', '-D']
];

export const SWCBaseModules: NodeModule[] = [
	['@swc/cli', '-D'],
	['@swc/core', '-D']
];

export const GruntBaseModules: NodeModule[] = [
	['grunt-cli', '-g'],
	['grunt', '-D']
];

export const ESLintBaseModules: NodeModule[] = [
	['eslint', '-D']
];

export const ESLintTSModules: NodeModule[] = [
	...ESLintBaseModules,
	['@typescript-eslint/eslint-plugin', '-D'],
	['@typescript-eslint/parser', '-D']
];

export type NodeRecipeToFileMap = {
	config: CrumbOptions,
	recipe: NodeFlavorRecipe,
	installer: NodeModulePackager,
	packages: NodeModule[]
}
