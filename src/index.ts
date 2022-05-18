#!/usr/bin/node
import inquirer from 'inquirer';
import followup from './internal/followup';
import { resolve } from 'path';
import {
	TemplateName,
	TemplateNames
} from './constants';

const { log, warn } = console;

function bob() {
	const path_arg = process.argv[2] ?? '.';
	if(path_arg === '.') {
		const dizzyPath = resolve(process.cwd(), 'dizzy.json');
		const dizzy = require(dizzyPath);
		log('config found:');
		log(dizzy);
		process.exit(0);
		// todo - parse any overrides that cancel the prompt here
	}

	inquirer.prompt([
		{
			type: 'list',
			name: 'template',
			message: 'choose project template',
			choices: TemplateNames
		}
	])
	.then((options: { template: TemplateName }) => followup(options.template, path_arg, inquirer));
}
bob();
