import {
	useSysInfo,
	_call,
	_callFrom
} from '../../../../tools';
import { NodePkgMgrPreset, NodeUserPreferences } from '../types';
import { NodePresetPackageMapper } from './pkg';
import { NodeModule } from './presets';
import { Inquirer } from 'inquirer';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import NodeUserOptions from './menu';

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
	const buildInfo = {
		build_root: root,
		build_host: useSysInfo(),
		build_options: options,
		build_packages: packages
	};

	_call(`cd ${buildInfo.build_root} && ${options.pkg_mgr} init -y`);
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
	inquirer.prompt(NodeUserOptions).then((answers: NodeUserPreferences) => usePresetToFilemap({
			options: answers,
			packages: NodePresetPackageMapper(answers),
			root: p
	}));
}
