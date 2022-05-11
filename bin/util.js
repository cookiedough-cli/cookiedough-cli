const { arch, platform, type } = require('os');
const { DEF_JS_CONFIG } = require('../templates/node');
const { log } = console;

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

function createProject(tag, clean_config) {
    // this will have the final config ready to be parsed into the build process 
    // todo
    log('create %s project:', tag);
    log(clean_config);
}

module.exports.parse_config = function(options) {
    switch(options.Lang) {
        case 'python':
        case 'py':
        case 'python3':
        case 'python27':
            return createProject('py', createConfig(options));
        case 'c':
        case 'make':
            return createProject('c', createConfig(options));
        case 'cpp':
        case 'c++':
        case 'cmake':
            return createProject('cpp', createConfig(options));
        case 'golang':
        case 'go':
            return createProject('go', createConfig(options));
        case 'nodejs':
        case 'js':
        case 'javascript':
            return createProject('js', createConfig(options));
        case 'node':
        case 'ts':
        case 'typescript':
            return createProject('ts', createConfig(options));
        default:
            return createProject(createConfig(DEF_JS_CONFIG));
    }
}