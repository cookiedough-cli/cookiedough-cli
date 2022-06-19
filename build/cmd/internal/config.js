"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConfig = exports.useGlobalConfigWithCWD = exports.useDirectoryConfig = exports.useConfigList = exports.useDefaultConfig = void 0;
const path_1 = require("path");
const util_1 = require("./util");
const _1 = require(".");
// only use this from cmd or alter path
function useDefaultConfig(context_depth) {
    return require((0, path_1.resolve)(__dirname, `${context_depth}/${_1.__COOKIE_ENV__}/${_1.CRUMB_DEFAULT_FILE}`));
}
exports.useDefaultConfig = useDefaultConfig;
function useConfigList(dir) {
    //@ts-ignore
    return (0, util_1.useFileList)(dir).filter(file => CrumbFileNames.includes(file));
}
exports.useConfigList = useConfigList;
function useDirectoryConfig(dir) {
    let match;
    const filesInBase = (0, util_1.useFileList)(dir);
    filesInBase.forEach(file => {
        if (file === 'cookiedough.json') {
            match = file;
            return;
        }
    });
    if (!match) {
        return null;
    }
    return require((0, path_1.resolve)(dir, match));
}
exports.useDirectoryConfig = useDirectoryConfig;
function useGlobalConfigWithCWD() {
    const wd = process.cwd();
    let match;
    const filesInBase = (0, util_1.useFileList)(wd);
    filesInBase.forEach(file => {
        if (file === 'cookiedough.json') {
            match = file;
            return;
        }
    });
    if (!match) {
        const home = (0, util_1.useHomeDir)();
        const filesInHome = (0, util_1.useFileList)(home);
        filesInHome.forEach(file => {
            if (file === 'cookiedough.json') {
                match = file;
                return;
            }
        });
        if (!match) {
            (0, _1.useLog)('no config found, using default settings');
            // todo - maybe prompt for options
            return useDefaultConfig('../../');
        }
        else {
            if (match.includes('json')) {
                // return as json
                return require((0, path_1.resolve)(home, match));
            }
        }
    }
    return require((0, path_1.resolve)(wd, match));
}
exports.useGlobalConfigWithCWD = useGlobalConfigWithCWD;
function useConfig(dir) {
    if (!dir) {
        return useGlobalConfigWithCWD();
    }
    return useDirectoryConfig(dir);
}
exports.useConfig = useConfig;
