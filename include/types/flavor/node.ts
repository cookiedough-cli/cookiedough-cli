import {
	Tuple,
	SystemOverview
} from '..';

export type NodeUserPreferences = {
	preset: NodePreset;
	pkg_mgr: NodePkgMgrPreset;
	build_tools: NodeBuildPreset;
	compiler: NodeCompilerPreset;
	bundler: NodeBundlerPreset;
	eslint: boolean;
}

export interface NodeBuildInfo {
	build_root: string,
	build_host: SystemOverview,
	build_preferences: NodeUserPreferences,
	build_packages: Tuple[]
}

export type NodeModule = Tuple;
export interface ToInstallModule {
	asTuple				 : Tuple; //tuple representing the package name and devness
	name				 : string; //name of package
	dev				 	 : boolean; //result of the second tuple from asTuple
	global				 : boolean; //result of the second tuple from asTuple
	version				?: string; //optional - todo
}

export type NodeModuleInstaller = {
	name				: NodePkgMgrPreset; //name of process to run
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

export function asNodeModuleInstaller(
	name: NodePkgMgrPreset,
	installPkgSignature: string
) : NodeModuleInstaller {
	return <NodeModuleInstaller>{
		name,
		installSelf: '', //todo
		installPkgSignature
	}
}

export const NodePkgPresets: NodePreset[] = [
	'commonjs',
	'esm',
	'ts'
];

export const NodePkgMgrPresets: NodePkgMgrPreset[] = [
	'npm',
	'yarn',
	'pnpm'
];

export const NodeBuildPresets: NodeBuildPreset[] = [
	'gulp',
	'grunt',
	'esbuild',
	'none',
];

export const NodeCompilerPresets: NodeCompilerPreset[] = [
	'none',
	'babel',
	'swc',
	'esbuild',
];

export const NodeBundlerPresets: NodeBundlerPreset[] = [
	'none',
	'rollup',
	'webpack',
	'swcpack',
	'esbuild',
];

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

export type NodePreset =
'commonjs' |
'esm' 	   |
'ts'       ;

export type NodePkgMgrPreset =
'npm'  |
'yarn' |
'pnpm' ;

export type NodeCompilerPreset =
'babel'   |
'swc' 	  |
'esbuild' |
'none';

export type NodeBundlerPreset =
'webpack'  |
'esbuild'  |
'rollup'   |
'swcpack'  |
'none'	   ;

export type NodeBuildPreset =
'esbuild'  		|
'gulp'	   		|
'grunt'    		|
'none'	;
