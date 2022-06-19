"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validFlavorMod = exports.useFlavorMod = exports.useManPage = exports.useCopyMachine = exports.usePowerWasher = exports.useFileList = exports.useDirExists = exports.useHomeDir = exports.useProcessDir = exports.useValidWritePath = exports.useSysInfo = void 0;
const fs_extra_1 = require("fs-extra");
const os_1 = require("os");
const path_1 = require("path");
const context_depth = '../../../../';
const useSysInfo = () => ({
    arch: (0, os_1.arch)(),
    platform: (0, os_1.platform)(),
    type: (0, os_1.type)(),
    cwd: process.cwd()
});
exports.useSysInfo = useSysInfo;
const useValidWritePath = (p) => (0, fs_extra_1.ensureDirSync)(p);
exports.useValidWritePath = useValidWritePath;
const useProcessDir = () => process.cwd();
exports.useProcessDir = useProcessDir;
const useHomeDir = () => (0, os_1.homedir)();
exports.useHomeDir = useHomeDir;
const useDirExists = (dir) => (0, fs_extra_1.existsSync)(dir);
exports.useDirExists = useDirExists;
const useFileList = (dir) => (0, fs_extra_1.readdirSync)(dir);
exports.useFileList = useFileList;
const usePowerWasher = (dir) => (0, fs_extra_1.emptyDirSync)(dir);
exports.usePowerWasher = usePowerWasher;
function useCopyMachine(src, dest) {
    return (0, fs_extra_1.copySync)(src, dest);
}
exports.useCopyMachine = useCopyMachine;
function useManPage() {
    return (0, fs_extra_1.readFileSync)((0, path_1.resolve)(__dirname, context_depth, '.assets/manpage.txt'), 'utf8');
}
exports.useManPage = useManPage;
function useFlavorMod(mod) {
    return require((0, path_1.join)(__dirname, `${context_depth}.flavors/${mod}`, 'flavor.json'));
}
exports.useFlavorMod = useFlavorMod;
function validFlavorMod(json) {
    const keys = Object.keys(json);
    if (!keys.includes('tag_name')) {
        return false;
    }
    if (!keys.includes('recipe_path')) {
        return false;
    }
    if (!json.doughmap || json.doughmap.length > 1) {
        return false;
    }
    return true;
}
exports.validFlavorMod = validFlavorMod;
