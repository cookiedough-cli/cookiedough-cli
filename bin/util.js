const { arch, platform, type } = require('os')
module.exports.get_sys = function() {
    return {
        arch: arch(),
        platform: platform(),
        type: type()
    };
};