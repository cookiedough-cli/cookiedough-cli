import { CrumbOptions } from '../..';
import {
	NodeModule,
	SWCBaseModules,
	GulpModules,
	WebpackModules,
	GruntBaseModules,
	ESLintBaseModules,
	ESLintTSModules,
	BabelBaseModules,
	BabelTSModules,
	RollupModules,
	RollupTSModules,
	GulpTSModules,
	SWCPackModules,
} from './modules';

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

/**
 *
 * @param name
 * @param installPkgSignature
 * @returns
 */

export function asNodeModulePackager(
	name: string,
	installPkgSignature: string
): NodeModulePackager {
	return <NodeModulePackager>{
		name,
		installSelf: '', //todo
		installPkgSignature,
	};
}

export const useNodeFlavorMap = (np: NodeFlavorRecipe): MappedNodeFlavor => {
	let installer: NodeModulePackager;

	switch (np.pkg_mgr) {
		case 'pnpm':
			installer = asNodeModulePackager('pnpm', 'add');
			break;
		case 'yarn':
			installer = asNodeModulePackager('yarn', 'add');
			break;
		default:
			installer = asNodeModulePackager('npm', 'i');
			break;
	}

	const needsPackage: NodeModule[] = [];
	if (np.eslint) {
		// add eslint plugins for typescript
		if (np.preset == 'ts') {
			ESLintTSModules.forEach((m) => needsPackage.push(m));
		}
		// just add regular eslint modules
		else {
			ESLintBaseModules.forEach((m) => needsPackage.push(m));
		}
	}
	// add selected build tools
	switch (np.build_tools) {
		case 'grunt':
			GruntBaseModules.forEach((m) => needsPackage.push(m));
			break;
		case 'gulp':
			GulpModules.forEach((m) => needsPackage.push(m));
	}
	// add ts if needed
	if (np.preset === 'ts') {
		needsPackage.push(['typescript', '-D']);
		if (np.bundler === 'rollup') {
			RollupTSModules.forEach((m) => needsPackage.push(m));
		}
		if (np.build_tools === 'gulp') {
			GulpTSModules.forEach((m) => needsPackage.push(m));
		}
	}
	// add chosen compiler
	switch (np.compiler) {
		case 'esbuild':
			needsPackage.push(['esbuild', '']);
			break;
		case 'swc':
			SWCBaseModules.forEach((m) => needsPackage.push(m));
			break;
		case 'babel':
			BabelBaseModules.forEach((m) => needsPackage.push(m));
			if (np.preset === 'ts') {
				BabelTSModules.forEach((m) => needsPackage.push(m));
			}
	}
	// add bundler
	switch (np.bundler) {
		case 'esbuild':
			needsPackage.push(['esbuild', '']);
			break;
		case 'webpack':
			WebpackModules.forEach((m) => needsPackage.push(m));
			if (np.preset == 'ts') needsPackage.push(['ts-loader', '-D']);
			if (np.compiler === 'swc') needsPackage.push(['swc-loader', '-D']);
			if (np.compiler === 'babel')
				needsPackage.push(['babel-loader', '-D']);
			break;
		case 'rollup':
			RollupModules.forEach((m) => needsPackage.push(m));
			break;
		case 'swcpack':
			SWCPackModules.forEach((m) => needsPackage.push(m));
	}
	// return package list
	return {
		installer,
		node_modules: needsPackage,
	};
};

// export function useFinalPresetCopy(
// 	p: CrumbOptions,
// 	node_build_info: NodeBuildInfo
// ) {
// 	if(!p.process.allow_cwd_write && (node_build_info.build_root == process.cwd())) {
// 		useLog(`
// ${useColor('yellow','warning:')}

// the path at ${node_build_info.build_root}\n is being compared as equal to the current working directory,
// which you have disabled writing to in your configuration
// if youd like to automatically override in the future, set:
// {
// 	"process": {
// 		"allow_cwd_write": true
// 	}
// }

// in your config file.
// ${useColor('yellow', 'exiting.')}`);
// 		process.exit(0);
// 	}
// 	const preset_root = preset_path + '/';

// 	useCopyMachine(join(preset_root, 'default'), node_build_info.build_root);
// 	useCopyMachine(join(preset_root, `node/*/${node_build_info.build_preferences.preset}`), node_build_info.build_root);
// 	if(node_build_info.build_preferences.eslint) {
// 		useCopyMachine(join(preset_root, 'node/eslint'), node_build_info.build_root);
// 	}
// 	if(node_build_info.build_preferences.bundler === 'webpack') {
// 		useCopyMachine(join(preset_root, 'node/bundler/webpack'), node_build_info.build_root);
// 	}
// 	if(node_build_info.build_preferences.bundler === 'rollup') {
// 		useCopyMachine(join(preset_root, `node/bundler/rollup/${node_build_info.build_preferences.preset}`), node_build_info.build_root);
// 	}
// 	if(node_build_info.build_preferences.bundler === 'swcpack') {
// 		useCopyMachine(join(preset_root, `node/bundler/swcpack/${node_build_info.build_preferences.preset}`), node_build_info.build_root);
// 	}

// 	if(node_build_info.build_preferences.compiler === 'swc') {
// 		useCopyMachine(join(preset_root, `node/compiler/swc/${node_build_info.build_preferences.preset}`), node_build_info.build_root);
// 	}
// }

// export function useNodeInstaller(
// 	p: CrumbOptions,
// 	node_build_info: NodeBuildInfo
// ) {
// 	console.log(p);
// 	console.log(node_build_info);
// 	const install_cmd = `${p.process.shell_prefix ?? ''}${node_build_info.build_frecipe.installer.name} init -y && ${node_build_info.build_frecipe.installer.name} ${node_build_info.build_frecipe.installer.installPkgSignature}`;
// 	const install_dev_list = node_build_info.build_frecipe.packages.filter(pkg => pkg[1] === '-D').map(pkg => pkg[0]).join(' ');
// 	return {
// 		crumb_options: p,
// 		build_info: node_build_info,
// 		install: {
// 			cmd: install_cmd,
// 			dev_pkg: install_dev_list
// 		}
// 	};
// 	// _callFrom(node_build_info.build_root, `${install_cmd} -D ${install_dev_list}`);
// 	// if(p.process.add_files_from) {
// 	// 	const filesToCopy = p.process.add_files_from.map(filePath => useFileList(filePath));
// 	// 	if(filesToCopy.flat().length > 0) {
// 	// 		for(const dir of p.process.add_files_from) {
// 	// 			useCopyMachine(dir, node_build_info.build_root);
// 	// 		}
// 	// 	}
// 	// }
// }
