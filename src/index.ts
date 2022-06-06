#!/usr/bin/node
import { useValidWritePath } from './tools';
import inquirer from 'inquirer';
import {
	RootNodePreset,
	RootPythonPreset,
	RootCPreset,
	RootDenoPreset,
	RootGoPreset,
	CookieFlavor,
	templateInquiry,
	join,
	resolve,
	warn,
	error,
	prompt,
	Inquirer
} from './include';
import { useArgParser, useLocalConfig } from './internal/args';

function useBob() {
	const args = useArgParser();
	const config = useLocalConfig(args.url.parent_config);
	console.log(config);
	// todo- handle detatched option
	// todo- handle dry option
	//const cConfig = require(confPath);
	// if(!cConfig.path.out) {
	// 	warn('no outpath set in config');
	// }
	// console.log(cConfig.path.out);

	// prompt([templateInquiry]).then((
	// 	options: { template: CookieFlavor }
	// ) => usePrompt(options.template, wPath, inquirer));
}

function usePrompt(
	tag: CookieFlavor,
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
