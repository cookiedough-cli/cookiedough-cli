"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrompt = void 0;
const pkg_1 = require("./pkg");
const inquirer_1 = __importDefault(require("inquirer"));
const path_1 = require("path");
const menu_1 = __importDefault(require("./menu"));
const files_1 = require("./files");
const internal_1 = require("@cookiedough/internal");
function usePresetToFilemap(args) {
    // const { options, packages, root } = args;
    const buildInfo = {
        build_root: (0, path_1.join)(process.cwd(), args.config.path.out),
        build_host: (0, internal_1.useSysInfo)(),
        build_preferences: args.options,
        build_packages: args.packages
    };
    (0, files_1.useFileWriter)(buildInfo, args.config);
}
function usePrompt(p) {
    return Promise.resolve(inquirer_1.default.prompt(menu_1.default).then((answers) => {
        const ppm = (0, pkg_1.NodePresetPackageMapper)(answers);
        return usePresetToFilemap({
            options: answers,
            installer: ppm.installer,
            packages: ppm.packages,
            config: p
        });
    })).catch(console.error);
}
exports.usePrompt = usePrompt;
