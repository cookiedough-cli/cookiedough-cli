"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMAND_NAMES = exports.FlavorPrompt = exports.Flavors = void 0;
exports.Flavors = [
    'node',
    'deno',
    //'go',
    //'c',
    //'c++',
    //'rust',
    //'python'
];
exports.FlavorPrompt = {
    type: 'list',
    name: 'flavor',
    message: 'choose project flavor',
    choices: exports.Flavors
};
/**
 * Names recognized by the command line when called as a process
 */
exports.COMMAND_NAMES = [
    {
        signature: 'run',
        alias: [
            null
        ]
    },
    {
        signature: 'edit',
        alias: [
            'edit-root',
            'edit-configroot'
        ]
    },
    {
        signature: 'locate',
        alias: [
            'find'
        ]
    },
    {
        signature: 'doctor',
        alias: [
            'fix'
        ]
    },
    {
        signature: 'create-local-flavor',
        alias: [
            'flavor',
            'clf'
        ]
    }
];
