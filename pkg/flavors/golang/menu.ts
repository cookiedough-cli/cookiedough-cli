import { GoPresets } from '../../types';

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
