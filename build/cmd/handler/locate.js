"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocator = void 0;
const internal_1 = require("../internal");
function useLocator() {
    const caller_dir = process.cwd();
    const home_dir = (0, internal_1.useHomeDir)();
    const caller_dir_crumbs = (0, internal_1.useDirectoryConfig)(caller_dir);
    const home_dir_crumbs = (0, internal_1.useDirectoryConfig)(home_dir);
    if (caller_dir_crumbs) {
        (0, internal_1.useLog)((0, internal_1.useColor)('green', 'Crumbs in CWD:'));
        console.log(caller_dir_crumbs);
    }
    if (home_dir_crumbs) {
        (0, internal_1.useLog)((0, internal_1.useColor)('green', 'Crumbs in CWD:'));
        console.log(home_dir_crumbs);
    }
}
exports.useLocator = useLocator;
