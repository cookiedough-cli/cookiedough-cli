#!/usr/bin/node

const { program } = require('commander');
// const { exec } = require('child_process');
const { parse_config } = require('./util');
const { 
    log, 
    error, 
    warn 
} = console;

let options = null;

// name of pkg manager to call, will be determined from guessing based on the architecture of teh system itself
/**
 * win32 - try winget prob
 * darwin/freebsd/whatever unix - apt/snap/etc 
 */
let pkg_handle = null;

program.requiredOption('--language, -lang <language>', 'project language');
program.option('--suppress-errors, -noerror', 'try to fix errors during runtime', false);
program.parse(process.argv)
options = program.opts();
const config = parse_config(options);

// log(config);
