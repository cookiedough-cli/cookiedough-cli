import { ProjectFileMap } from '../../types';
import {
	useSysInfo,
	useCmdList
} from '../../util';
import { NodeUserPreferences } from '../types';
import { NodePresetPackageMapper } from './mapper';
import { PackageJSONDefaults } from './default-files';
import {
	NodePkgPresets,
	NodePkgMgrPresets,
	NodeBuildPresets,
	NodeCompilerPresets,
	NodeBundlerPresets,
	NodeModule
} from './presets';
import { Inquirer } from 'inquirer';
function usePreseToFilemap(args: {
	root: string,
	options: NodeUserPreferences,
	packages: NodeModule[]
}) {
	const { options, packages, root } = args;
	const pkgJSON = {
		...PackageJSONDefaults
	};
	console.log({
		build_root: root,
		build_host: useSysInfo(),
		build_options: options,
		build_packages: packages
	});
	console.log(pkgJSON);
	useCmdList(...packages);
}

export function useNodePrompt(
	p: string,
	inquirer: Inquirer
) {
	inquirer.prompt([
		{
			type: 'list',
			name: 'preset',
			message: 'choose package preset',
			choices: NodePkgPresets
		},
		{
			type: 'list',
			name: 'pkg_mgr',
			message: 'choose preferred package manager',
			choices: NodePkgMgrPresets
		},
		{
			type: 'list',
			name: 'build_tools',
			message: 'choose build environment',
			choices: NodeBuildPresets
		},
		{
			type: 'list',
			name: 'compiler',
			message: 'choose transpiler option',
			choices: NodeCompilerPresets
		},
		{
			type: 'list',
			name: 'bundler',
			message: 'choose bundler option',
			choices: NodeBundlerPresets
		},
		{
			type: 'confirm',
			name: 'eslint',
			message: 'setup eslint?',
			choices: ['yes', 'no']
		}
	]).then((answers: NodeUserPreferences) => usePreseToFilemap({
			options: answers,
			packages: NodePresetPackageMapper(answers),
			root: p
		}));
}
