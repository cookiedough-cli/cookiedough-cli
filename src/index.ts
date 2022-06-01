#!/usr/bin/node
import inquirer from 'inquirer';
import { useValidWritePath } from './util';
import {
	join,
	resolve
} from 'path';
import {
	TemplateName,
	templateInquiry
} from './constants';
import { useNodePrompt } from './preset/node';
import { usePyPrompt } from './preset/py';
import { useCPrompt } from './preset/c';
import { useDenoPrompt } from './preset/deno';
import { useGoPrompt } from './preset/go';

const {
	warn,
	error
} = console;

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



function prompt(
	tag: TemplateName,
	path: string,
	inquirer: inquirer.Inquirer
) {
	switch(tag) {
		case 'c':
		case 'c++':
			return useCPrompt(path, inquirer);
		case 'go':
			return useGoPrompt(path, inquirer);
		case 'deno':
			return useDenoPrompt(path, inquirer);
		case 'python':
			return usePyPrompt(path, inquirer);
		case 'node':
			return useNodePrompt(path, inquirer);
		default:
			error('template name invalid');
			process.exit(1);
	}
}
