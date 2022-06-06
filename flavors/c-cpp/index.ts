import {
	CMenuOptions,
	CCMenuOptions
} from './menu';
import inquirer from 'inquirer';

export function usePrompt(
	p: string
) {
	inquirer.prompt(CMenuOptions).then(answers => {
		console.log(`c project at ${p}`);
		console.log(answers);
	});
}
export function prompt_cpp(p: string, inquirer) {
	inquirer.prompt(CCMenuOptions).then(answers => {
		console.log(`c++ project at ${p}`);
		console.log(answers);
	});
}
