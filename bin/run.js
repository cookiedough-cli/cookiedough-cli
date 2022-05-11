#!/usr/bin/node
const { exec } = require('child_process');
const { program } = require('commander');

let cond = false;

program.requiredOption('--type, -t', 'project type', 'node');
program.option('--lang, -l', 'project language', 'js');
program.parse(process.argv)
// console.log(program.opts());


exec('where python', (err, _, stderr) => {
    if(err || stderr) {
        throw err || stderr;
    }
    cond = true;
});

setTimeout(() => {
    if(cond) {
       
        // .help('h').argv
        // process.exit(0);
    }
}, 1000);