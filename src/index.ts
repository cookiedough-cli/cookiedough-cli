#!/usr/bin/node
import { program } from 'commander';
import parse_config from './util';
let options = null;

program.requiredOption('--language, -lang <language>', 'project language');
program.option('--suppress-errors, -noerror', 'try to fix errors during runtime', false);
program.parse(process.argv)
options = program.opts();
const config = parse_config(options);

// log(config);
