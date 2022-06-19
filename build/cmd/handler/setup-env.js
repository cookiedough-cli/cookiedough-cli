"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInteractiveEnvSetup = void 0;
const internal_1 = require("../internal");
const path_1 = require("path");
function useInteractiveEnvSetup(recipe) {
    const home_dir = (0, internal_1.useHomeDir)();
    (0, internal_1.useDataLog)(recipe);
    (0, internal_1.prompt)([
        {
            message: 'enter desired config path',
            name: 'config_path',
            type: 'input',
            default: home_dir
        }
    ]).then(answers => {
        // const current_files = useFileList(answers.config_path);
        const current_matches = (0, internal_1.useConfigList)(answers.config_path);
        if (current_matches.length > 0) {
            (0, internal_1.useLog)('current config files:', 'info');
            console.log(current_matches);
        }
        else {
            const out_path = answers.config_path.includes('.json') ? answers.config_path : (0, path_1.resolve)(answers.config_path, 'crumbs.json');
            (0, internal_1.useCopyMachine)((0, path_1.resolve)(__dirname, '../../../.env/.defaults.json'), out_path);
            (0, internal_1.useLog)(`wrote config files to: ${out_path}`, 'success');
        }
    });
}
exports.useInteractiveEnvSetup = useInteractiveEnvSetup;
