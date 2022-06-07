"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrompt = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const menu_1 = __importDefault(require("./menu"));
function usePrompt(p) {
    inquirer_1.default.prompt(menu_1.default).then(answers => {
        console.log(`python project at ${p}`);
        console.log(answers);
    });
}
exports.usePrompt = usePrompt;
