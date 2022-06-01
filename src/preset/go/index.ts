import { Inquirer } from 'inquirer';
export function useGoPrompt(
	p: string,
	inquirer: Inquirer
) {
	inquirer.prompt([
		{
			type: 'list',
			name: 'preset',
			message: 'select a preset',
			choices: [
				'todo',
			]
		},
		{
			type: 'string',
			name: 'pkgName',
			message: 'name your module'
		}
	]).then(answers => {
		console.log(`go project at ${p}`);
		console.log(answers);
	});
}
