#!/usr/bin/node
import inquirer from 'inquirer';
import { useValidWritePath } from './util';
import { join, resolve } from 'path';
import {
	TemplateName,
	templateInquiry
} from './constants';
import { prompt_node } from './preset/node';
import { prompt_py } from './preset/py';
import { prompt_c } from './preset/c';
import { prompt_deno } from './preset/deno';
import { prompt_go } from './preset/go';

const { warn } = console;

function bob() {
	let wPath: string;
	const pathRoot = process.argv[2] ?? process.cwd();
	const dizzyPath = resolve(pathRoot, 'dizzy.json');
	const dizzy = require(dizzyPath);
	if(!dizzy.outPath) {
		warn('no outpath set in dizzy, using cwd / inline');
		wPath = pathRoot;
	}
	wPath = useValidWritePath(join(pathRoot, dizzy.outPath ?? ''));
	// main inquiry process
	inquirer.prompt([templateInquiry]).then((options: { template: TemplateName }) => prompt(options.template, wPath, inquirer));
}
bob();



function prompt(tag: TemplateName, _path: string, inquirer) {
	switch(tag) {
		case 'c':
		case 'c++':
			return prompt_c(_path, inquirer);
		case 'go':
			return prompt_go(_path, inquirer);
		case 'deno':
			return prompt_deno(_path, inquirer);
		case 'python':
			return prompt_py(_path, inquirer);
		case 'node':
			return prompt_node(_path, inquirer);
		default:
			console.error('template name resolution error');
			process.exit(1);
	}
}
