import {
	CMenuOptions,
	CCMenuOptions
} from './menu';
import { Inquirer } from 'inquirer';

export function useCPrompt(
	p: string,
	inquirer: Inquirer
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
