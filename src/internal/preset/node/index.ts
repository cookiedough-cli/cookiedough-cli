import { ProjectFileMap } from '../../../types';
import { getSysInfo } from '../../../util';
import { NodeUserPreferences } from './types';
import { NodePresetPackageMapper } from './mapper';
import {
	NodePkgPresets,
	NodePkgMgrPresets,
	NodeBuildPresets,
	NodeCompilerPresets,
	NodeBundlerPresets,
} from './presets';

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
			message: 'setup linter?',
			choices: ['yes', 'no']
		}
	]).then((answers: NodeUserPreferences) => {
		console.log(`node project at ${p}`);
		console.log(answers);
		// console.log(answers);
		const requiredPacakges = NodePresetPackageMapper(answers);
		console.log(requiredPacakges);
		// const mapper: ProjectFileMap = {
		// 	base_path: p,
		// 	sys: getSysInfo(),

		// };
	});
}
