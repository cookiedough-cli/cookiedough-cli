"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCookieDough = void 0;
const handler_1 = require("./handler");
const internal_1 = require("./internal");
/**
 * @public
 * entry point for command-line interface
 * handles the command entered at the top level, then passes to the appropriate handler
 */
function useCookieDough() {
    const recipe = (0, internal_1.useCMDRecipe)();
    switch (recipe.cmd.signature) {
        case 'locate':
            (0, handler_1.useLocator)();
            break;
        case 'create-flavor':
            (0, internal_1._log)('todo: generate local flavor');
            break;
        case 'create':
            (0, handler_1.useCreate)(recipe);
            break;
        case 'setup':
            (0, handler_1.useInteractiveEnvSetup)(recipe);
            break;
        case 'edit':
            (0, handler_1.useInteractiveEdit)(recipe);
            break;
        case 'doctor':
            (0, handler_1.useDoctor)(recipe);
            break;
        case 'help':
            (0, handler_1.useHelp)();
            break;
        default:
            (0, handler_1.useHelp)();
            break;
    }
}
exports.useCookieDough = useCookieDough;
