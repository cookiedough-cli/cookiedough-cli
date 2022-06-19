"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrompt = exports.PythonVersions = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
exports.PythonVersions = [
    'latest',
    '3.8',
    '2.7'
];
function usePrompt(p) {
    inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'version',
            message: 'version',
            choices: exports.PythonVersions
        }
    ]).then(answers => {
        console.log(`python project at ${p}`);
        console.log(answers);
    });
}
exports.usePrompt = usePrompt;
