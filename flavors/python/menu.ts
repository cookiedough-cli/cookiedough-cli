import { PythonVersions } from "@cookiedough/include/types/flavor"
export default [
	{
		type: 'list',
		name: 'version',
		message: 'version',
		choices: PythonVersions
	}
]
