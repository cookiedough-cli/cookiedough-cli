import inquirer from 'inquirer';
import PythonMenuOptions from './menu';

export function usePrompt(
	p: string
) {
	inquirer.prompt(PythonMenuOptions).then(answers => {
		console.log(`python project at ${p}`);
		console.log(answers);
	});
}
