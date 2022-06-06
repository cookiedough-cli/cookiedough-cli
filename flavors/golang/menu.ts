import { GoPresets } from "@cookiedough/include/types/flavor";

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
