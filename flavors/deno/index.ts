import DenoMenuOptions from './menu';
import inquirer from 'inquirer';
export function usePrompt(
	p: string
) {
	inquirer.prompt(DenoMenuOptions).then(answers => {
		console.log(`deno project at ${p}`);
		console.log(answers);
	});
}
