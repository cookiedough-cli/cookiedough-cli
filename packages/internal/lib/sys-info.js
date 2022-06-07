"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGlobalConfig = exports.useSysInfo = void 0;
const config_1 = require("./config");
const os_1 = require("os");
/**
 *
 * @returns System Architecture Specs for setup process compatibility
 */
function useSysInfo() {
    return {
        arch: (0, os_1.arch)(),
        platform: (0, os_1.platform)(),
        type: (0, os_1.type)(),
        cwd: process.cwd()
    };
}
exports.useSysInfo = useSysInfo;
function useGlobalConfig() {
    return (0, config_1.useLocalConfig)((0, os_1.homedir)());
}
exports.useGlobalConfig = useGlobalConfig;
