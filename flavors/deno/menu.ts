import { DenoPresets } from '@cookiedough/internal/lib/types/flavor';

export default [
	{
		type: 'list',
		name: 'preset',
		message: 'select a preset',
		choices: DenoPresets
	}
]
