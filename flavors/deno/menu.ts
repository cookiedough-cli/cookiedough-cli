import { DenoPresets } from "@cookiedough/include/types/flavor"

export default [
	{
		type: 'list',
		name: 'preset',
		message: 'select a preset',
		choices: DenoPresets
	}
]
