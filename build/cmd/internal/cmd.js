"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCMDRecipe = void 0;
const _1 = require(".");
function useCMDRecipe() {
    let valid = { signature: 'create' };
    const inline = process.argv.slice(2);
    // determine what the context of the command is
    if (inline.length > 0) {
        // command to run, validate it
        const cmd_list = _1.CMDList.filter(cmd => cmd.signature === inline[0]);
        if (cmd_list.length === 1) {
            valid = cmd_list[0];
        }
        let crumbs;
        if (inline.length > 1) {
            if (inline.includes('--no-config')) {
                crumbs = (0, _1.useDefaultConfig)('../..');
            }
            else if (inline.includes('-c') || inline.includes('--config')) {
                if (valid.signature === 'create' && !inline.includes('create')) {
                    const dirConf = (0, _1.useDirectoryConfig)(inline[1] || '.');
                    crumbs = dirConf;
                }
                else {
                    const dirConf = (0, _1.useDirectoryConfig)(inline[2] || '.');
                    crumbs = dirConf;
                }
            }
            else {
                crumbs = (0, _1.useGlobalConfigWithCWD)();
            }
        }
        return {
            _raw_args: inline,
            _raw_cmd: cmd_list,
            cmd: valid,
            crumbs
        };
    }
    return {
        _raw_args: inline,
        _raw_cmd: [valid],
        cmd: valid,
        crumbs: (0, _1.useGlobalConfigWithCWD)()
    };
}
exports.useCMDRecipe = useCMDRecipe;
