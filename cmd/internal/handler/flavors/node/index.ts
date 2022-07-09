import { useNodeFlavorMap } from './pkg';
import { useFlavorMod } from '../../..';
import { join } from 'path';
import inquirer from 'inquirer';
import {
	Tuple,
	SystemOverview,
	useLog,
	useSysInfo,
	useValidWritePath,
	_call,
	_callFrom,
	useColor,
	useFileList,
	usePowerWasher,
	useCopyMachine,
	useDirExists,
	CrumbOptions,
	CrumbPromptNoOp
} from '../..';
export * from './modules';

// get flavor from node json at root
const NodeFlavor = Promise.resolve(useFlavorMod('node').then(flavor => flavor));
// preset path to copy the files from depending on preferences
const preset_path = 'https://raw.githubusercontent.com/cookiedough-cli/cookiedough-cli/main/.flavors/_copy_';
// user options for inquirer

// the recipe to build as recieved from the user menu answers
export type NodeFlavorRecipe = {
	preset			: string;
	pkg_mgr			: string;
	build_tools		: string;
	compiler		: string;
	bundler			: string;
	eslint			: boolean;
}

// the next type created from the recipe for the specific context with paths / sys
export interface NodeBuildInfo {
	build_root			: string,
	build_host			: SystemOverview,
	build_preferences	: NodeFlavorRecipe,
	build_frecipe		: MappedNodeFlavorRecipe
}

// setup the type for the installer + packages to install within for the shell prefix like yarn add vs npm install etc
export type MappedNodeFlavorRecipe = {
	installer: NodeModulePackager,
	packages: NodeModule[]
};
// get the optional arg as a tuple of strings
export type NodeModule = Tuple;

// package manager type
export type NodeModulePackager = {
	name				: NodeFlavorPkg; //name of process to run
	installSelf			: string; //command to install self if not installed / detected on system
	installPkgSignature	: string; //prefix for adding packages between the process and the packagename
}

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

export const NodeFlavor_PkgMgr = ['npm', 'yarn', 'pnpm'] as const;
export type NodeFlavorPkg = typeof NodeFlavor_PkgMgr[number];

export type NodeRecipeToFileMap = {
	config: CrumbOptions,
	recipe: NodeFlavorRecipe,
	installer: NodeModulePackager,
	packages: NodeModule[]
}

export function useFinalPresetCopy(
	p: CrumbOptions,
	node_build_info: NodeBuildInfo
) {
	if(!p.process.allow_cwd_write && (node_build_info.build_root == process.cwd())) {
		useLog(`
${useColor('yellow','warning:')}

the path at ${node_build_info.build_root}\n is being compared as equal to the current working directory,
which you have disabled writing to in your configuration
if youd like to automatically override in the future, set:
{
	"process": {
		"allow_cwd_write": true
	}
}

in your config file.
${useColor('yellow', 'exiting.')}`);
		process.exit(0);
	}
	const preset_root = preset_path + '/';

	useCopyMachine(join(preset_root, 'default'), node_build_info.build_root);
	useCopyMachine(join(preset_root, `node/*/${node_build_info.build_preferences.preset}`), node_build_info.build_root);
	if(node_build_info.build_preferences.eslint) {
		useCopyMachine(join(preset_root, 'node/eslint'), node_build_info.build_root);
	}
	if(node_build_info.build_preferences.bundler === 'webpack') {
		useCopyMachine(join(preset_root, 'node/bundler/webpack'), node_build_info.build_root);
	}
	if(node_build_info.build_preferences.bundler === 'rollup') {
		useCopyMachine(join(preset_root, `node/bundler/rollup/${node_build_info.build_preferences.preset}`), node_build_info.build_root);
	}
	if(node_build_info.build_preferences.bundler === 'swcpack') {
		useCopyMachine(join(preset_root, `node/bundler/swcpack/${node_build_info.build_preferences.preset}`), node_build_info.build_root);
	}

	if(node_build_info.build_preferences.compiler === 'swc') {
		useCopyMachine(join(preset_root, `node/compiler/swc/${node_build_info.build_preferences.preset}`), node_build_info.build_root);
	}
}

export function useNodeInstaller(
	p: CrumbOptions,
	node_build_info: NodeBuildInfo
) {
	console.log(p);
	console.log(node_build_info);
	// const install_cmd = `${p.process.shell_prefix ?? ''}${node_build_info.build_frecipe.installer.name} init -y && ${node_build_info.build_frecipe.installer.name} ${node_build_info.build_frecipe.installer.installPkgSignature}`;
	// const install_dev_list = node_build_info.build_frecipe.packages.filter(pkg => pkg[1] === '-D').map(pkg => pkg[0]).join(' ');
	// _callFrom(node_build_info.build_root, `${install_cmd} -D ${install_dev_list}`);
	// if(p.process.add_files_from) {
	// 	const filesToCopy = p.process.add_files_from.map(filePath => useFileList(filePath));
	// 	if(filesToCopy.flat().length > 0) {
	// 		for(const dir of p.process.add_files_from) {
	// 			useCopyMachine(dir, node_build_info.build_root);
	// 		}
	// 	}
	// }
}

/**
 * Flavor runtime file MUST have a root usePrompt to work properly with the CLI and it must return a noop, throw anything bad that happens else its considered successful
 * @param p OPTIONS Entry Point
 * @returns no op cli process
 */

export async function usePrompt(
	p: CrumbOptions,
): CrumbPromptNoOp {
	const NodeUserOptions = (await NodeFlavor).doughmap;
	const answers: NodeFlavorRecipe = await inquirer.prompt(NodeUserOptions);
	console.log(answers);
// 		const ppm = useNodeFlavorMap(answers);
// 		const node_build_info: NodeBuildInfo = {
// 			build_root: p.path.out,
// 			build_host: useSysInfo(),
// 			build_preferences: answers,
// 			build_frecipe: ppm
// 		}
// 		if(!p.process.overwrite_existing_out && useDirExists(node_build_info.build_root)) {
// 			useLog(`
// ${useColor('yellow','warning:')}

// the path at ${node_build_info.build_root}\n is already populated.
// if youd like to automatically override in the future, set:
// {
// 	"process": {
// 		"overwrite_existing_out": true
// 	}
// }

// in your config file.
// ${useColor('yellow', 'exiting.')}`);
// 		process.exit(0);
// 		}
// 		useValidWritePath(node_build_info.build_root);

		// if(p.process.overwrite_existing_out && (useFileList(node_build_info.build_root).length > 0)) {
		// 	useLog('power washing directory');
		// 	usePowerWasher(node_build_info.build_root);
		// }
		// if(node_build_info.build_frecipe.packages.length > 0) {
		// 	useNodeInstaller(p, node_build_info);
		// 	console.clear();
		// }
		// useFinalPresetCopy(p, node_build_info);
}
