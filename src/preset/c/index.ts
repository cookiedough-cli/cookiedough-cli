import {
	CCompilers,
	CStandards,
	CCStandards
} from './constants';
import { Inquirer } from 'inquirer';

export function useCPrompt(
	p: string,
	inquirer: Inquirer
) {
	inquirer.prompt([
		{
			type: 'list',
			name: 'compiler',
			message: 'select a compiler',
			choices: CCompilers
		},
		{
			type: 'list',
			name: 'standard',
			message: 'select a standard',
			choices: CStandards
		}
	]).then(answers => {
		console.log(`c project at ${p}`);
		console.log(answers);
	});
}
export function prompt_cpp(p: string, inquirer) {
	inquirer.prompt([
		{
			type: 'list',
			name: 'compiler',
			message: 'select a compiler',
			choices: CCompilers
		},
		{
			type: 'list',
			name: 'standard',
			message: 'select a standard',
			choices: CCStandards
		}
	]).then(answers => {
		console.log(`c++ project at ${p}`);
		console.log(answers);
	});
}
