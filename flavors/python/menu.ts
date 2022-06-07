import { PythonVersions } from '@cookiedough/internal/lib/types/flavor/python';
export default [
	{
		type: 'list',
		name: 'version',
		message: 'version',
		choices: PythonVersions
	}
]
