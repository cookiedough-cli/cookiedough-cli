import { useNodeFlavorMap } from './pkg';
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
	spinners,
	useSpinner,
	CrumbOptions,
	CrumbPromptNoOp
} from '../..';
import { useFlavorMod } from '../../../internal';
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

export const SWCPackModules: NodeModule[] = [
	['swcpack', '-D']
]

export const GulpModules: NodeModule[] = [
	['gulp-cli', '-g'],
	['gulp', '-D']
];

export const GulpTSModules: NodeModule[] = [
	['gulp-typescript', '-D']
];

export const RollupModules: NodeModule[] = [
	['rollup', '-g'],
	['@rollup/plugin-json', '-D']
]

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

import { join } from 'path';
const NodeFlavor = useFlavorMod('node');
const preset_path = '../../../../../.flavors/_copy_';
const NodeUserOptions = NodeFlavor.doughmap;
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
	const preset_root = join(__dirname, preset_path);

	useCopyMachine(join(preset_root, '*/default'), node_build_info.build_root);
	useCopyMachine(join(preset_root, 'node/*'), node_build_info.build_root);
	if(node_build_info.build_preferences.eslint) {
		useCopyMachine(join(preset_root, 'node/eslint'), node_build_info.build_root);
	}
	if(node_build_info.build_preferences.preset === 'ts') {
		useCopyMachine(join(preset_root, 'node/ts'), node_build_info.build_root);
	}
}

export function useNodeInstaller(
	p: CrumbOptions,
	node_build_info: NodeBuildInfo
) {
	const install_cmd = `${p.process.shell_prefix ?? ''}${node_build_info.build_frecipe.installer.name} init -y && ${node_build_info.build_frecipe.installer.name} ${node_build_info.build_frecipe.installer.installPkgSignature}`;
	const install_dev_list = node_build_info.build_frecipe.packages.filter(pkg => pkg[1] === '-D').map(pkg => pkg[0]).join(' ');
	_callFrom(node_build_info.build_root, `${install_cmd} -D ${install_dev_list}`);
	if(p.process.add_files_from) {
		const filesToCopy = p.process.add_files_from.map(filePath => useFileList(filePath));
		if(filesToCopy.flat().length > 0) {
			for(const dir of p.process.add_files_from) {
				useCopyMachine(dir, node_build_info.build_root);
			}
		}
	}
}

export function usePrompt(
	p: CrumbOptions,
): CrumbPromptNoOp {
	return Promise.resolve(inquirer.prompt(NodeUserOptions).then((answers: NodeFlavorRecipe) => {
		const ppm = useNodeFlavorMap(answers);
		const node_build_info: NodeBuildInfo = {
			build_root: p.path.out,
			build_host: useSysInfo(),
			build_preferences: answers,
			build_frecipe: ppm
		}
		if(!p.process.overwrite_existing_out && useDirExists(node_build_info.build_root)) {
			useLog(`
${useColor('yellow','warning:')}

the path at ${node_build_info.build_root}\n is already populated.
if youd like to automatically override in the future, set:
{
	"process": {
		"overwrite_existing_out": true
	}
}

in your config file.
${useColor('yellow', 'exiting.')}`);
		process.exit(0);
		}
		useValidWritePath(node_build_info.build_root);

		if(p.process.overwrite_existing_out && (useFileList(node_build_info.build_root).length > 0)) {
			useLog('power washing directory');
			usePowerWasher(node_build_info.build_root);
		}

		useSpinner(spinners.bluePulse, () => {
			if(node_build_info.build_frecipe.packages.length > 0) {
				useNodeInstaller(p, node_build_info);
				console.clear();
			}
			useSpinner(spinners.bouncingBall, () => setTimeout(() => {
				useFinalPresetCopy(p, node_build_info);
			}, 180), 2);
		});
	})).catch(console.error);
}
