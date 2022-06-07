"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFileWriter = void 0;
const internal_1 = require("@cookiedough/internal");
// import { useSpinner } from '@cookiedough/cmd/handler/spinner';
const fs_extra_1 = require("fs-extra");
const Spinner = require('cli-spinner').Spinner;
function _actionFromPMgr(pkgmgr) {
    switch (pkgmgr) {
        case 'yarn':
        case 'pnpm':
            return 'add';
        default:
            return 'install';
    }
}
function useFileWriter(options, config) {
    const spinner = new Spinner('%s writing files');
    spinner.setSpinnerString('⠁⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈⠈');
    spinner.start();
    //_call(`cd ${build_root} && ${build_preferences.pkg_mgr} init -y`);
    setTimeout(() => {
        (0, internal_1.useDataLog)(options);
        if ((0, fs_extra_1.existsSync)(options.build_root)) {
            if (config.process.overwrite_existing_out) {
                (0, fs_extra_1.ensureDirSync)(options.build_root);
            }
            else {
                spinner.stop(true);
                (0, internal_1._warn)(`
${(0, internal_1.useColor)('yellow', 'warning:')}
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
        console.log('🍪 ', (0, internal_1.useColor)('green', 'all done.'));
    }, 2000);
}
exports.useFileWriter = useFileWriter;
