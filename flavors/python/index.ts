import { CrumbOptions } from '@cookiedough/internal/lib/types';
import inquirer from 'inquirer';
import PythonMenuOptions from './menu';

export function usePrompt(
	p: CrumbOptions
) {
	inquirer.prompt(PythonMenuOptions).then(answers => {
		console.log(`python project at ${p}`);
		console.log(answers);
	});
}
