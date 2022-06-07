"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalConfig = exports.useArgParser = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const _1 = require(".");
const _defaults_json_1 = __importDefault(require("./.config/.defaults.json"));
const types_1 = require("./types");
function useArgParser() {
    const inline = process.argv.slice(2);
    // determine what the context of the command is
    if (inline.length === 1) {
        // path for config
        return {
            url: {
                parent_config: inline[0]
            }
        };
    }
    return {
        url: {
            parent_config: '.'
        }
    };
}
exports.useArgParser = useArgParser;
function useLocalConfig(base) {
    let match;
    const filesInBase = (0, fs_1.readdirSync)(base);
    types_1.CrumbFileNames.forEach(file => {
        if (filesInBase.includes(file)) {
            match = file;
            return;
        }
    });
    if (!match) {
        (0, _1.useLog)('no config found, using default settings');
        // todo - maybe prompt for options
        return _defaults_json_1.default;
    }
    if (match.includes('json')) {
        // return as json
        return require((0, path_1.resolve)(base, match));
    }
    // return as string
    //return <CrumbOptions>readFileSync(resolve(base, match), 'utf-8'); //todo - actually set this up
}
exports.useLocalConfig = useLocalConfig;
