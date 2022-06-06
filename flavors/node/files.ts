import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import {
	NodePkgMgrPreset,
	NodeUserPreferences,
	NodeBuildInfo
} from '@cookiedough/include/types/flavor';
import {
	_call,
	_callFrom
} from '@cookiedough/tools';
// import { useSpinner } from '@cookiedough/cmd/handler/spinner';
import { writeFileSync, existsSync, mkdirSync, rmdirSync } from 'fs';
import { join } from 'path';
import { CrumbOptions } from '@cookiedough/include/types';

const Spinner = require('cli-spinner').Spinner;
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
	options: NodeBuildInfo,
	config: CrumbOptions
) {
	const spinner = new Spinner('%s writing files');
	spinner.setSpinnerString('⠁⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈⠈');
	spinner.start();
	const {
		build_root,
		build_packages,
		build_host,
		build_preferences
	} = options;
	try {
		if(existsSync(options.build_root)) {
			if(config.process.overwrite_existing_out) {
				rmdirSync(options.build_root);
			}
			else {
				throw 'out dir already exists';
			}
		}
		mkdirSync(build_root);
		//_call(`cd ${build_root} && ${build_preferences.pkg_mgr} init -y`);
		setTimeout(() => {
			// writeFileSync(resolve(build_root, 'index.js'), '', {encoding: 'utf-8'});
			// const acName = _actionFromPMgr(build_preferences.pkg_mgr);
			// for(const pkg of build_packages) {
			// 	switch(pkg[1]) {
			// 		case '-g':
			// 			_callFrom(join(process.cwd(), build_root), `${build_preferences.pkg_mgr} ${acName} -g ${pkg[0]}`);
			// 			break;
			// 		case '-D':
			// 			_callFrom(join(process.cwd(), build_root), `${build_preferences.pkg_mgr} ${acName} -D ${pkg[0]}`);
			// 			break;
			// 		default:
			// 			_callFrom(join(process.cwd(), build_root), `${build_preferences.pkg_mgr} ${acName} ${pkg[0]}`);
			// 			break;
			// 	}
			// }
			spinner.stop(true);
			console.log(options);
			console.log('🍪 all done.');
		}, 2000);
	}
	catch(e) {
		throw 'out dir already exists';
	}
}
