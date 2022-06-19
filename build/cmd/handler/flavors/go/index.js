"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrompt = exports.GoMenu = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const internal_1 = require("../../../internal");
exports.GoMenu = (0, internal_1.useFlavorMod)('go').doughmap;
function usePrompt(p) {
    inquirer_1.default.prompt(exports.GoMenu).then(answers => {
        console.log(`go project at ${p}`);
        console.log(answers);
    });
}
exports.usePrompt = usePrompt;
