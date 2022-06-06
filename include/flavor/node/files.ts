import { writeFileSync } from 'fs';
import { resolve } from 'path';
import {
	NodePkgMgrPreset,
	NodeUserPreferences,
	NodeBuildInfo
} from '@cookiedough/types/flavor';
import {
	_call,
	_callFrom
} from '@cookiedough/tools';

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

export function useFileWriter(
	options: NodeBuildInfo
) {
	const {
		build_root = '.',
		build_packages,
		build_host,
		build_preferences
	} = options;
	_call(`cd ${build_root} && ${build_preferences.pkg_mgr} init -y`);
	writeFileSync(resolve(build_root, 'index.js'), '', {encoding: 'utf-8'});
	const acName = _actionFromPMgr(build_preferences.pkg_mgr);
	for(const pkg of build_packages) {
		switch(pkg[1]) {
			case '-g':
				_callFrom(build_root, `${build_preferences.pkg_mgr} ${acName} -g ${pkg[0]}`);
				break;
			case '-D':
				_callFrom(build_root, `${build_preferences.pkg_mgr} ${acName} -D ${pkg[0]}`);
				break;
			default:
				_callFrom(build_root, `${build_preferences.pkg_mgr} ${acName} ${pkg[0]}`);
				break;
		}
	}
}
