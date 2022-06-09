import { DenoPresets } from '../../types';

export default [
	{
		type: 'list',
		name: 'preset',
		message: 'select a preset',
		choices: DenoPresets
	}
]
