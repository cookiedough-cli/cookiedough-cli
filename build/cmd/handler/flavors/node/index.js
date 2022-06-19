"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrompt = exports.useNodeInstaller = exports.useFinalPresetCopy = exports.NodeFlavor_Bundlers = exports.NodeFlavor_Compilers = exports.NodeFlavor_BuildTools = exports.NodeFlavor_PkgMgr = exports.NodeFlavor_PkgPresets = exports.asNodeModulePackager = void 0;
const pkg_1 = require("./pkg");
const internal_1 = require("../../../internal");
const path_1 = require("path");
const inquirer_1 = __importDefault(require("inquirer"));
const __1 = require("../..");
__exportStar(require("./modules"), exports);
// get flavor from node json at root
const NodeFlavor = (0, internal_1.useFlavorMod)('node');
// preset path to copy the files from depending on preferences
const preset_path = '../../../../../.flavors/_copy_';
// user options for inquirer
const NodeUserOptions = NodeFlavor.doughmap;
// utils
/**
 *
 * @param name
 * @param installPkgSignature
 * @returns
 */
function asNodeModulePackager(name, installPkgSignature) {
    return {
        name,
        installSelf: '',
        installPkgSignature
    };
}
exports.asNodeModulePackager = asNodeModulePackager;
exports.NodeFlavor_PkgPresets = ['commonjs', 'esm', 'ts'];
exports.NodeFlavor_PkgMgr = ['npm', 'yarn', 'pnpm'];
exports.NodeFlavor_BuildTools = ['gulp', 'grunt', 'esbuild', 'none'];
exports.NodeFlavor_Compilers = ['none', 'babel', 'swc', 'esbuild'];
exports.NodeFlavor_Bundlers = ['none', 'rollup', 'webpack', 'swcpack', 'esbuild'];
function useFinalPresetCopy(p, node_build_info) {
    if (!p.process.allow_cwd_write && (node_build_info.build_root == process.cwd())) {
        (0, __1.useLog)(`
${(0, __1.useColor)('yellow', 'warning:')}

the path at ${node_build_info.build_root}\n is being compared as equal to the current working directory,
which you have disabled writing to in your configuration
if youd like to automatically override in the future, set:
{
	"process": {
		"allow_cwd_write": true
	}
}

in your config file.
${(0, __1.useColor)('yellow', 'exiting.')}`);
        process.exit(0);
    }
    const preset_root = (0, path_1.join)(__dirname, preset_path);
    (0, __1.useCopyMachine)((0, path_1.join)(preset_root, 'default'), node_build_info.build_root);
    (0, __1.useCopyMachine)((0, path_1.join)(preset_root, `node/*/${node_build_info.build_preferences.preset}`), node_build_info.build_root);
    if (node_build_info.build_preferences.eslint) {
        (0, __1.useCopyMachine)((0, path_1.join)(preset_root, 'node/eslint'), node_build_info.build_root);
    }
    if (node_build_info.build_preferences.bundler === 'webpack') {
        (0, __1.useCopyMachine)((0, path_1.join)(preset_root, 'node/bundler/webpack'), node_build_info.build_root);
    }
    if (node_build_info.build_preferences.bundler === 'rollup') {
        (0, __1.useCopyMachine)((0, path_1.join)(preset_root, `node/bundler/rollup/${node_build_info.build_preferences.preset}`), node_build_info.build_root);
    }
    if (node_build_info.build_preferences.bundler === 'swcpack') {
        (0, __1.useCopyMachine)((0, path_1.join)(preset_root, `node/bundler/swcpack/${node_build_info.build_preferences.preset}`), node_build_info.build_root);
    }
    if (node_build_info.build_preferences.compiler === 'swc') {
        (0, __1.useCopyMachine)((0, path_1.join)(preset_root, `node/compiler/swc/${node_build_info.build_preferences.preset}`), node_build_info.build_root);
    }
}
exports.useFinalPresetCopy = useFinalPresetCopy;
function useNodeInstaller(p, node_build_info) {
    var _a;
    const install_cmd = `${(_a = p.process.shell_prefix) !== null && _a !== void 0 ? _a : ''}${node_build_info.build_frecipe.installer.name} init -y && ${node_build_info.build_frecipe.installer.name} ${node_build_info.build_frecipe.installer.installPkgSignature}`;
    const install_dev_list = node_build_info.build_frecipe.packages.filter(pkg => pkg[1] === '-D').map(pkg => pkg[0]).join(' ');
    (0, __1._callFrom)(node_build_info.build_root, `${install_cmd} -D ${install_dev_list}`);
    if (p.process.add_files_from) {
        const filesToCopy = p.process.add_files_from.map(filePath => (0, __1.useFileList)(filePath));
        if (filesToCopy.flat().length > 0) {
            for (const dir of p.process.add_files_from) {
                (0, __1.useCopyMachine)(dir, node_build_info.build_root);
            }
        }
    }
}
exports.useNodeInstaller = useNodeInstaller;
function usePrompt(p) {
    return Promise.resolve(inquirer_1.default.prompt(NodeUserOptions).then((answers) => {
        const ppm = (0, pkg_1.useNodeFlavorMap)(answers);
        const node_build_info = {
            build_root: p.path.out,
            build_host: (0, __1.useSysInfo)(),
            build_preferences: answers,
            build_frecipe: ppm
        };
        if (!p.process.overwrite_existing_out && (0, __1.useDirExists)(node_build_info.build_root)) {
            (0, __1.useLog)(`
${(0, __1.useColor)('yellow', 'warning:')}

the path at ${node_build_info.build_root}\n is already populated.
if youd like to automatically override in the future, set:
{
	"process": {
		"overwrite_existing_out": true
	}
}

in your config file.
${(0, __1.useColor)('yellow', 'exiting.')}`);
            process.exit(0);
        }
        (0, __1.useValidWritePath)(node_build_info.build_root);
        if (p.process.overwrite_existing_out && ((0, __1.useFileList)(node_build_info.build_root).length > 0)) {
            (0, __1.useLog)('power washing directory');
            (0, __1.usePowerWasher)(node_build_info.build_root);
        }
        (0, __1.useSpinner)(__1.spinners.bouncingBar, () => {
            if (node_build_info.build_frecipe.packages.length > 0) {
                useNodeInstaller(p, node_build_info);
                console.clear();
            }
            (0, __1.useSpinner)(__1.spinners.orangeBluePulse, () => setTimeout(() => {
                useFinalPresetCopy(p, node_build_info);
            }, 180), 2);
        });
    })).catch(console.error);
}
exports.usePrompt = usePrompt;
