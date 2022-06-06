import DenoMenuOptions from './menu';

export function useDenoPrompt(
	p: string,
	inquirer
) {
	inquirer.prompt(DenoMenuOptions).then(answers => {
		console.log(`deno project at ${p}`);
		console.log(answers);
	});
}
