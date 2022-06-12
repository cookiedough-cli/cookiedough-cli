import { CrumbOptions } from '../../../../internal';
import inquirer from 'inquirer';
export const PythonVersions: PythonVersion[] = [
	'latest',
	'3.8',
	'2.7'
];

export type PythonVersion =
'latest' |
'3.8' 	 |
'2.7'	 ;

export function usePrompt(
	p: CrumbOptions
) {
	inquirer.prompt([
		{
			type: 'list',
			name: 'version',
			message: 'version',
			choices: PythonVersions
		}
	]).then(answers => {
		console.log(`python project at ${p}`);
		console.log(answers);
	});
}
