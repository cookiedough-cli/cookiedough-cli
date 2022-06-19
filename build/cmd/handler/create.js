"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreate = exports.useFlavorPrompt = void 0;
const internal_1 = require("../internal");
const NodeFlavor = __importStar(require("./flavors/node"));
const GoFlavor = __importStar(require("./flavors/go"));
// prompt for a given flavor based on the map in the json
function useFlavorPrompt(tag, config) {
    switch (tag) {
        case 'node':
            return NodeFlavor.usePrompt(config);
        case 'go':
            return GoFlavor.usePrompt(config);
        default:
            (0, internal_1.useLog)('template name invalid', 'error');
            process.exit(0);
    }
}
exports.useFlavorPrompt = useFlavorPrompt;
function useCreate(recipe) {
    if (recipe.crumbs.process && recipe.crumbs.process.log_level && recipe.crumbs.process.log_level === 'verbose' && recipe.cmd.signature !== 'help') {
        (0, internal_1.useLog)('Recipe Found:', 'success');
        console.log(recipe);
    }
    if (recipe.crumbs.process.dry) {
        (0, internal_1.useLog)('dry mode, exiting', 'info');
        return;
    }
    if (recipe.crumbs.process.default_flavor) {
        (0, internal_1.useLog)('default flavor chosen:', 'success');
        (0, internal_1.useDataLog)(recipe.crumbs.process.default_flavor);
        return;
    }
    else {
        (0, internal_1.prompt)([internal_1.FlavorInquiry]).then(({ flavor }) => useFlavorPrompt(flavor, recipe.crumbs));
    }
}
exports.useCreate = useCreate;
