#!/usr/bin/node
import { useValidWritePath } from './tools';
import inquirer from 'inquirer';
import {
	RootNodePreset,
	RootPythonPreset,
	RootCPreset,
	RootDenoPreset,
	RootGoPreset,
	TemplateName,
	templateInquiry,
	join,
	resolve,
	warn,
	error,
	prompt,
	Inquirer
} from './include';

function useBob() {
	let wPath: string;
	const pathRoot = process.argv[2] ?? process.cwd();
	const confPath = resolve(pathRoot, 'crumbs.json');
	const cConfig = require(confPath);
	if(!cConfig.path.out) {
		warn('no outpath set in config');
		wPath = pathRoot;
	}
	wPath = useValidWritePath(join(pathRoot, cConfig.outPath ?? ''));
	prompt([templateInquiry]).then((
		options: { template: TemplateName }
	) => usePrompt(options.template, wPath, inquirer));
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
