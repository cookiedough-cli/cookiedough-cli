#!/usr/bin/node

const { program } = require('commander');
const { exec } = require('child_process');
const { get_sys, parse_config } = require('./util');
const { 
    log, 
    error, 
    warn 
} = console;

let cond = false;
let options = null;

// name of pkg manager to call, will be determined from guessing based on the architecture of teh system itself
/**
 * win32 - try winget
 * darwin/freebsd/whatever unix - apt/snap/etc 
 */
let pkg_handle = null;
const sys = get_sys();
log(sys);

function installDependency(name) {
    
    // call spawn that installs it for the given system
    log('todo: install %s', name);
}

function setCondState(error, stdout) { 
    if(error) {
        if(options.Noerror) {
            warn('ignoring error, installing necessary dependencies: python3');
            installDependency(options.Lang);
        }
        else {
            throw error;
        }
    }
    cond = stdout ? true : false;
    log(`has ${options.Lang} installed: %s`, cond);
    if(!cond) {
        log('installing necessary dependencies');
        installPython();
    }
    return setup();
}

program.requiredOption('--language, -lang <language>', 'project language', 'js');
program.option('--suppress-errors, -noerror', 'try to fix errors during runtime', false);
program.parse(process.argv)
options = program.opts();
parse_config(options);

exec('where python', setCondState);

function setup() {
    log(options);
    log('todo: setup script');
}
