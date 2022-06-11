import CMenuOptions from './menu';
import inquirer from 'inquirer';
import { CrumbOptions } from '../../types';

export function usePrompt(
	p: CrumbOptions
) {
	inquirer.prompt(CMenuOptions).then(answers => {
		console.log(`c project at ${p}`);
		console.log(answers);
	});
}
