import { ProjectFileMap } from '../../types';
import {
	useSysInfo,
	_call,
	_callFrom
} from '../../util';
import { NodePkgMgrPreset, NodeUserPreferences } from '../types';
import { NodePresetPackageMapper } from './mapper';
import {
	NodePkgPresets,
	NodePkgMgrPresets,
	NodeBuildPresets,
	NodeCompilerPresets,
	NodeBundlerPresets,
	NodeModule
} from './presets';
import { Inquirer } from 'inquirer';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

function _actionFromPMgr(
	pkgmgr: NodePkgMgrPreset
): string {
	switch(pkgmgr) {
		case 'yarn':
		case 'pnpm':
			return 'add';
		default:
			return 'install';
	}
}

function usePresetToFilemap(args: {
	root: string,
	options: NodeUserPreferences,
	packages: NodeModule[]
}) {
	const { options, packages, root } = args;
	console.log({
		build_root: root,
		build_host: useSysInfo(),
		build_options: options,
		build_packages: packages
	});
	_call(`cd ${root} && ${options.pkg_mgr} init -y`);
	writeFileSync(resolve(root, 'index.js'), '', {encoding: 'utf-8'});
	const acName = _actionFromPMgr(options.pkg_mgr);
	for(const pkg of packages) {
		switch(pkg[1]) {
			case '-g':
				_callFrom(root, `${options.pkg_mgr} ${acName} -g ${pkg[0]}`);
				break;
			case '-D':
				_callFrom(root, `${options.pkg_mgr} ${acName} -D ${pkg[0]}`);
				break;
			default:
				_callFrom(root, `${options.pkg_mgr} ${acName} ${pkg[0]}`);
				break;
		}
	}
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
	]).then((answers: NodeUserPreferences) => usePresetToFilemap({
			options: answers,
			packages: NodePresetPackageMapper(answers),
			root: p
		}));
}
