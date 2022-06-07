import { GoPresets } from '@cookiedough/types';

export default [
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
