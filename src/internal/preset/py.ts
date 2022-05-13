export function prompt_py(p: string, inquirer) {
	inquirer.prompt([
		{
			type: 'list',
			name: 'version',
			message: 'version',
			choices: [
				'latest',
				'3.8',
				'2.7'
			]
		}
	]).then(answers => {
		console.log(`python project at ${p}`);
		console.log(answers);
	});
}
