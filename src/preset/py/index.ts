import inquirer from 'inquirer';

export function usePyPrompt(
	p: string,
	inquirer: inquirer.Inquirer
) {
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
