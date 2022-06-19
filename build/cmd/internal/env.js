"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMDList = exports.FlavorInquiry = exports.Flavors = exports.CRUMB_DEFAULT_FILE = exports.__COOKIE_ENV__ = void 0;
exports.__COOKIE_ENV__ = '.env';
exports.CRUMB_DEFAULT_FILE = '.defaults.json';
exports.Flavors = [
    'node',
    'go',
    //'c',
    //'c++',
    //'rust',
    //'python'
];
exports.FlavorInquiry = {
    type: 'list',
    name: 'flavor',
    message: 'choose project flavor',
    choices: exports.Flavors
};
/**
 * Full List of Commands to interpret at runtime
 */
exports.CMDList = [
    {
        signature: 'create',
        alias: ['', null]
    },
    {
        signature: 'edit',
        alias: ['edit-env', 'edit-config']
    },
    {
        signature: 'doctor',
        alias: ['fix', 'ihelp']
    },
    {
        signature: 'set',
        alias: ['set-env', 'set-config']
    },
    {
        signature: 'create-flavor'
    },
    {
        signature: 'locate'
    },
    {
        signature: 'setup',
        alias: ['setup-env']
    },
    {
        signature: 'help',
        alias: ['manpage', 'man']
    }
];
