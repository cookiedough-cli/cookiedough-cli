import { Tuple, SystemOverview } from '..';

export * from './deno';

export type GoPreset =
'simple-cli'	  |
'simple-webserver'|
'simple-library'  ;

export type PythonVersion =
'latest' |
'3.8' 	 |
'2.7'	 ;

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


export type NodeUserPreferences = {
	preset: NodePreset;
	pkg_mgr: NodePkgMgrPreset;
	build_tools: NodeBuildPreset;
	compiler: NodeCompilerPreset;
	bundler: NodeBundlerPreset;
	eslint: boolean;
}

export type CPackagePreset =
'c'  |
'cpp';

export type CBuildPreset =
'make' |
'cmake';

export type CStandard =
'C99' |
'C11' |
'C17' ;

export type CCStandard =
'C++98' |
'C++03' |
'C++11' |
'C++14' |
'C++17' |
'C++20' ;

export interface NodeBuildInfo {
	build_root: string,
	build_host: SystemOverview,
	build_preferences: NodeUserPreferences,
	build_packages: Tuple[]
}

export const PythonVersions: PythonVersion[] = [
	'latest',
	'3.8',
	'2.7'
];

export const GoPresets: GoPreset[] = [
	'simple-cli',
	'simple-library',
	'simple-webserver'
];

export const CStandards: CStandard[] = [
	'C99',
	'C11',
	'C17'
];

export const CCStandards: CCStandard[] = [
	'C++98',
	'C++03',
	'C++11',
	'C++14',
	'C++17',
	'C++20'
];

export const CCompilers = [
	'gcc',
	'g++',
	'clang'
];
