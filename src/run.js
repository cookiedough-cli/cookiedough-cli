#!/usr/bin/node

const { program } = require('commander');
// const { exec } = require('child_process');
const { parse_config } = require('./util');
let options = null;


program.requiredOption('--language, -lang <language>', 'project language');
program.option('--suppress-errors, -noerror', 'try to fix errors during runtime', false);
program.parse(process.argv)
options = program.opts();
const config = parse_config(options);

// log(config);
