import { Inquirer } from 'inquirer';
import GoMenuOptions from './menu';

export function useGoPrompt(
	p: string,
	inquirer: Inquirer
) {
	inquirer.prompt(GoMenuOptions).then(answers => {
		console.log(`go project at ${p}`);
		console.log(answers);
	});
}
