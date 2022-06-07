import { DenoPresets } from '@cookiedough/types';

export default [
	{
		type: 'list',
		name: 'preset',
		message: 'select a preset',
		choices: DenoPresets
	}
]
