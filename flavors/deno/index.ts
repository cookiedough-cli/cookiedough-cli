import DenoMenuOptions from './menu';

export function usePrompt(
	p: string,
	inquirer
) {
	inquirer.prompt(DenoMenuOptions).then(answers => {
		console.log(`deno project at ${p}`);
		console.log(answers);
	});
}
