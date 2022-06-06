#!/usr/bin/node
import { useValidWritePath } from './tools';
import inquirer, {
	prompt,
	Inquirer
} from 'inquirer';
import {
	join,
	resolve
} from 'path';
import {
	TemplateName,
	templateInquiry
} from './include/constants';
import {
	RootNodePreset,
	RootPythonPreset,
	RootCPreset,
	RootDenoPreset,
	RootGoPreset
} from './include/presets';

const {
	warn,
	error
} = console;

function useBob() {
	let wPath: string;
	const pathRoot = process.argv[2] ?? process.cwd();
	const dizzyPath = resolve(pathRoot, 'dizzy.json');
	const dizzy = require(dizzyPath);
	if(!dizzy.outPath) {
		warn('no outpath set in dizzy, using cwd / inline');
		wPath = pathRoot;
	}
	wPath = useValidWritePath(join(pathRoot, dizzy.outPath ?? ''));
	prompt([templateInquiry]).then((options: { template: TemplateName }) => usePrompt(options.template, wPath, inquirer));
}

function usePrompt(
	tag: TemplateName,
	path: string,
	inquirer: Inquirer
) {
	switch(tag) {
		case 'c':
		case 'c++':
			return RootCPreset.useCPrompt(path, inquirer);
		case 'go':
			return RootGoPreset.useGoPrompt(path, inquirer);
		case 'deno':
			return RootDenoPreset.useDenoPrompt(path, inquirer);
		case 'python':
			return RootPythonPreset.usePyPrompt(path, inquirer);
		case 'node':
			return RootNodePreset.useNodePrompt(path, inquirer);
		default:
			error('template name invalid');
			process.exit(1);
	}
}

useBob();
