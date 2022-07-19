/**
 * Runtime Types
 */
export * from './colors';
export * from './error';
export * from './crumbs';
export * from './log';
export * from './util';
export * from './flavors/node';

import { CrumbOptions } from './crumbs';
export type FlavorAttribute = string;
export type FlavorAttributes = FlavorAttribute[];
export type FlavorDoughType = 'list' | 'boolean' | 'string';

export type ExternFlavorFileData = {
	filename: string;
	_writename: string;
}
// example inquirer option for definition in the json
export type FlavorDough<T> = {
	name: string;
	type: FlavorDoughType;
	default: T;
	choices?: T[];
};

export type FlavorDoughMap = {
	root_key: string;
	preset: {
		[key: string]: {
			_prefix: string,
			_writeable: ExternFlavorFileData[];
			_fixtures: string;
		}
	}
}
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
