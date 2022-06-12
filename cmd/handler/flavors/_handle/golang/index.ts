import { CrumbOptions } from '../../../../internal';
import inquirer, { Inquirer } from 'inquirer';
import { FlavorAttributes } from '../../../create';
export type GoPresetTag =
'simple-cli'	  |
'simple-webserver'|
'simple-library'  ;

export type GoEnvFlag = 'workspace' | 'module' | 'gopath';

export const DEFAULT_GO_ENV: GoEnvFlag = 'module';

export const GoPresets: FlavorAttributes = [
	'simple-cli',
	'simple-library',
	'simple-webserver'
];

export const GoEnvOptions: FlavorAttributes = [
	'workspace',
	'module',
	'gopath'
]
export const GoMenu = [
	{
		type: 'list',
		name: 'preset',
		message: 'select a preset',
		choices: GoPresets
	},
	{
		type: 'string',
		name: 'pkgName',
		message: 'name your module'
	}
];

export function usePrompt(
	p: CrumbOptions
) {
	inquirer.prompt(GoMenu).then(answers => {
		console.log(`go project at ${p}`);
		console.log(answers);
	});
}
