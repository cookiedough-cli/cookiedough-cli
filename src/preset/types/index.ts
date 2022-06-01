export type DenoPackagePreset =
'simple-cli'	  |
'simple-webserver'|
'simple-library'  ;

export type GoPackagePreset =
'simple-cli'	  |
'simple-webserver'|
'simple-library'  ;

export type PythonVersion =
'latest' |
'3.8' 	 |
'2.7'	 ;

export type NodePackagePreset =
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
'esbuild'  |
'gulp'	   |
'grunt'    |
'make' 	   |
'default(npm)';


export type NodeUserPreferences = {
	preset: NodePackagePreset;
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
