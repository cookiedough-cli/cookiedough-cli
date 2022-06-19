"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInteractiveEdit = void 0;
const internal_1 = require("../internal");
function useInteractiveEdit(recipe) {
    const dir_config = (0, internal_1.useDirectoryConfig)(process.cwd());
    const home_config = (0, internal_1.useDirectoryConfig)((0, internal_1.useHomeDir)());
    if (dir_config) {
        (0, internal_1.log)('directory config:');
        (0, internal_1.log)(dir_config);
    }
    if (home_config) {
        (0, internal_1.log)('global config:');
        (0, internal_1.log)(home_config);
    }
}
exports.useInteractiveEdit = useInteractiveEdit;
