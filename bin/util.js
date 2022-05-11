const { arch, platform, type } = require('os')
module.exports.get_sys = function() {
    return {
        arch: arch(),
        platform: platform(),
        type: type()
    };
};

module.exports.parse_config = function(options) {
    console.log('chosen language: %s', options.Lang);
    // todo - enumerate dependencies for the system in a given type based on the submitted user options
}