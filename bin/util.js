const { arch, platform, type } = require('os');
const { DEF_JS_CONFIG } = require('../templates/node');
const { log } = console;
const { map_input_to_tag } = require('./tags');
/**
 * 
 * @returns System Architecture Specs for setup process compatibility
 */
function get_sys() {
    return {
        arch: arch(),
        platform: platform(),
        type: type()
    };
};

/**
 * 
 * @param {*} depname name of system-specific dependency to install for given package manager in system
 */
function install_sys(depname) {
    log('todo: install dep %s', depname);
}

/**
 * 
 * @param {ConfigWithoutSys} to_sys_stamp  the config prepared to get stamped by the system
 * @param {SysStamp} sysinfo stamp from get_sys context for the system that the program is running on
 * @returns 
 */
function createConfig(to_sys_stamp) {
    return {...to_sys_stamp, sys: get_sys()}
}

function createProject(tag, options) {
    // this will have the final config ready to be parsed into the build process 
    // todo
    log('create %s project:', tag);
    log(options);
    const config = createConfig(options);
    log(config);
}

module.exports.parse_config = (options) => createProject(map_input_to_tag(options.Lang), options);
