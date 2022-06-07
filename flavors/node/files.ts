import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import {
	NodePkgMgrPreset,
	NodeFlavor,
	NodeBuildInfo
} from '@cookiedough/internal/lib/types/flavor';
import {
	useColor,
	useDataLog,
	_call,
	_callFrom,
	_warn,
	CrumbOptions
} from '@cookiedough/internal';
// import { useSpinner } from '@cookiedough/cmd/handler/spinner';
import {
	writeFileSync,
	ensureDirSync,
	rmdirSync,
	existsSync
} from 'fs-extra';
import { join } from 'path';

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

	//_call(`cd ${build_root} && ${build_preferences.pkg_mgr} init -y`);
	setTimeout(() => {
		useDataLog(options);
		if(existsSync(options.build_root)) {
			if(config.process.overwrite_existing_out) {
				ensureDirSync(options.build_root)
			}
			else {
				spinner.stop(true);
				_warn(`
${useColor('yellow','warning:')}
${options.build_root}\n is already populated.
if youd like to automatically override in the future, set:

{
	"process": {
		"overwrite_existing_out": true
	}
}

in your config file`);
				return;
			}
		}
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
		console.log('🍪 ', useColor('green', 'all done.'));
	}, 2000);
}
