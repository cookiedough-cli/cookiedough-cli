import inquirer from 'inquirer';
import PythonMenuOptions from './menu';
export function usePyPrompt(
	p: string,
	inquirer: inquirer.Inquirer
) {
	inquirer.prompt(PythonMenuOptions).then(answers => {
		console.log(`python project at ${p}`);
		console.log(answers);
	});
}
