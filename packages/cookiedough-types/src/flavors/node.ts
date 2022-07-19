import { CrumbOptions } from '../crumbs';

export type NodeModule = [string, string];

export const BabelBaseModules: NodeModule[] = [
	['@babel/core', '-D'],
	['@babel/preset-env', '-D'],
];

export const BabelTSModules: NodeModule[] = [
	['@babel/plugin-transform-typescript', '-D'],
	['@babel/plugin-preset-typescript', '-D'],
];

export const SWCPackModules: NodeModule[] = [['swcpack', '-D']];

export const GulpModules: NodeModule[] = [
	['gulp-cli', '-g'],
	['gulp', '-D'],
];

export const GulpTSModules: NodeModule[] = [['gulp-typescript', '-D']];

export const RollupModules: NodeModule[] = [
	['rollup', '-g'],
	['@rollup/plugin-json', '-D'],
];

export const RollupTSModules: NodeModule[] = [
	['@rollup/plugin-typescript', '-D'],
];

export const WebpackModules: NodeModule[] = [
	['webpack', '-D'],
	['webpack-cli', '-D'],
];

export const SWCBaseModules: NodeModule[] = [
	['@swc/cli', '-D'],
	['@swc/core', '-D'],
];

export const GruntBaseModules: NodeModule[] = [
	['grunt-cli', '-g'],
	['grunt', '-D'],
];

export const ESLintBaseModules: NodeModule[] = [['eslint', '-D']];

export const ESLintTSModules: NodeModule[] = [
	...ESLintBaseModules,
	['@typescript-eslint/eslint-plugin', '-D'],
	['@typescript-eslint/parser', '-D'],
];

export type NodeFlavorRecipe = {
	preset: string;
	pkg_mgr: string;
	build_tools: string;
	compiler: string;
	bundler: string;
	eslint: boolean;
};
// package manager type
export type NodeModulePackager = {
	name: string; //name of process to run
	installSelf: string; //command to install self if not installed / detected on system
	installPkgSignature: string; //prefix for adding packages between the process and the packagename
};

// setup the type for the installer + packages to install within for the shell prefix like yarn add vs npm install etc
export type MappedNodeFlavor = {
	installer: NodeModulePackager;
	node_modules: NodeModule[];
};
export type NodeRecipeToFileMap = {
	config: CrumbOptions;
	recipe: NodeFlavorRecipe;
	installer: NodeModulePackager;
	packages: NodeModule[];
};
