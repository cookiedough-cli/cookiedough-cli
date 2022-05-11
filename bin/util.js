"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTag = void 0;
const os_1 = require("os");
const { log } = console;
const tags_1 = require("./internal/tags");
const verifyTag = (i) => tags_1.verifiableTags.filter(tag => (tag.tag === i || tag.allowed_inputs.includes(i))).shift().tag;
exports.verifyTag = verifyTag;
/**
 *
 * @returns System Architecture Specs for setup process compatibility
 */
function getSysInfo() {
    return {
        arch: (0, os_1.arch)(),
        platform: (0, os_1.platform)(),
        type: (0, os_1.type)()
    };
}
/**
 *
 * @param {ConfigWithoutSys} to_sys_stamp  the config prepared to get stamped by the system
 * @param {SysStamp} sysinfo stamp from get_sys context for the system that the program is running on
 * @returns
 */
function createConfig(to_sys_stamp // config parsed from inline user input in yargs
) {
    return { ...to_sys_stamp, sys: getSysInfo() };
}
function createProject(tag, options) {
    // this will have the final config ready to be parsed into the build process
    // todo
    log('create %s project:', tag);
    log(options);
    const config = createConfig(options);
    log(config);
}
module.exports = (options) => createProject((0, exports.verifyTag)(options.Lang), options);
