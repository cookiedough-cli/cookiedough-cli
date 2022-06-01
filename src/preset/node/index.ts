import { ProjectFileMap } from '../../types';
import { getSysInfo, runCmdList } from '../../util';
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

function preset_to_filemap(args: {
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
		build_host: getSysInfo(),
		build_options: options,
		build_packages: packages
	});
	console.log(pkgJSON);
	runCmdList(...packages);
}

export function prompt_node(p: string, inquirer) {
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
	]).then((answers: NodeUserPreferences) => preset_to_filemap({
			options: answers,
			packages: NodePresetPackageMapper(answers),
			root: p
		}));
}
