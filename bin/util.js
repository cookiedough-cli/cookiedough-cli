"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const { log } = console;
const tags_1 = require("./tags");
/**
 *
 * @returns System Architecture Specs for setup process compatibility
 */
function get_sys() {
    return {
        arch: (0, os_1.arch)(),
        platform: (0, os_1.platform)(),
        type: (0, os_1.type)()
    };
}
;
/**
 *
 * @param {*} depname name of system-specific dependency to install for given package manager in system
 * @returns status code of installation attempt
 */
function install_sys(depname) {
    // eslint-disable-next-line
    // let status = 0;
    log('todo: install dep %s', depname);
    return 0;
}
/**
 *
 * @param {ConfigWithoutSys} to_sys_stamp  the config prepared to get stamped by the system
 * @param {SysStamp} sysinfo stamp from get_sys context for the system that the program is running on
 * @returns
 */
function createConfig(to_sys_stamp // config parsed from inline user input in yargs
) {
    return { ...to_sys_stamp, sys: get_sys() };
}
function createProject(tag, options) {
    // this will have the final config ready to be parsed into the build process
    // todo
    log('create %s project:', tag);
    log(options);
    const config = createConfig(options);
    log(config);
}
module.exports.parse_config = (options) => createProject((0, tags_1.input_to_tag)(options.Lang), options);
