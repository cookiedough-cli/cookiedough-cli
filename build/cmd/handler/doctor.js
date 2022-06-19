"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDoctor = void 0;
const internal_1 = require("../internal");
function useDoctor(recipe) {
    (0, internal_1.info)('reslolved recipe:');
    (0, internal_1.log)(recipe);
    (0, internal_1.info)('directory config:');
    (0, internal_1.log)((0, internal_1.useDirectoryConfig)(process.cwd()));
    (0, internal_1.info)('root config:');
    (0, internal_1.log)((0, internal_1.useDirectoryConfig)((0, internal_1.useHomeDir)()));
}
exports.useDoctor = useDoctor;
