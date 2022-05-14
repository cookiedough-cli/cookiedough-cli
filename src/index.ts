#!/usr/bin/node
import inquirer from 'inquirer';
import followup from './internal/followup';
import { TemplateName } from './types';
const path_arg = process.argv[2] ?? '.';
const TemplateNames: TemplateName[] = [
	'node',
	'deno',
	'go',
	'c',
	'c++',
	'rust',
	'python'
];
inquirer.prompt([
	{
		type: 'list',
		name: 'template',
		message: 'choose project template',
		choices: TemplateNames
	}
])
.then((options: { template: TemplateName }) => followup(options.template, path_arg, inquirer));

// const config = parse_config(options);
// log(config);
