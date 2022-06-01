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
