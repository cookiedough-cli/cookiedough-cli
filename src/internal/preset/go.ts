export type GoPackagePreset = '';
export function prompt_go(p: string, inquirer) {
	inquirer.prompt([
		{
			type: 'list',
			name: 'preset',
			message: 'select a preset',
			choices: [
				'todo',
			]
		}
	]).then(answers => {
		console.log(`go project at ${p}`);
		console.log(answers);
	});
}
