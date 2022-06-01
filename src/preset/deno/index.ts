export function useDenoPrompt(
	p: string,
	inquirer
) {
	inquirer.prompt([
		{
			type: 'list',
			name: 'preset',
			message: 'select a preset',
			choices: [
				'simple-cli',
				'simple-webserver',
				'simple-library'
			]
		}
	]).then(answers => {
		console.log(`deno project at ${p}`);
		console.log(answers);
	});
}
