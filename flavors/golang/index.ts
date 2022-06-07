import { CrumbOptions } from '@cookiedough/types';
import inquirer, { Inquirer } from 'inquirer';
import GoMenuOptions from './menu';

export function usePrompt(
	p: CrumbOptions
) {
	inquirer.prompt(GoMenuOptions).then(answers => {
		console.log(`go project at ${p}`);
		console.log(answers);
	});
}
