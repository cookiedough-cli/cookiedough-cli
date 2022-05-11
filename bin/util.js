const { arch, platform, type } = require('os');

const DEF_CONFIG = {
    type: 'node',
    language: 'commonjs',
    x_opts: {
        compiler: 'none',
        bundler: 'none',
        build_system: 'make',
        pkg: {
            scripts: {
                'w:server': 'nodemon tools/dev-server',
                'dev': 'npm-run-all -p w:server'
            },
            dependencies: [
                'express',
                'html-chunk-loader'
            ],
            devDependencies: [
                'nodemon',
                'npm-run-all',
                'eslint'
            ]
        }
    },
};

/**
 * 
 * @param {ConfigWithoutSys} to_sys_stamp  the config prepared to get stamped by the system
 * @param {SysStamp} sysinfo stamp from get_sys context for the system that the program is running on
 * @returns 
 */
function createConfig(to_sys_stamp) {
    return {...to_sys_stamp, sys: get_sys()}
}


function get_sys() {
    return {
        arch: arch(),
        platform: platform(),
        type: type()
    };
};

module.exports.parse_config = function(options) {
    switch(options.Lang) {
        default:
            return createConfig(DEF_CONFIG);
    }
    // todo - enumerate dependencies for the system in a given type based on the submitted user options
}

module.exports.install_dependency = function(depname) {
    console.log('todo: install dep %s', depname);
}