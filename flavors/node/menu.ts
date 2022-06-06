import {
	NodePkgPresets,
	NodePkgMgrPresets,
	NodeBuildPresets,
	NodeCompilerPresets,
	NodeBundlerPresets,
 } from '@cookiedough/types/flavor/node';

export default [
	{
		type: 'list',
		name: 'preset',
		message: 'choose package preset',
		choices: NodePkgPresets
	},
	{
		type: 'list',
		name: 'pkg_mgr',
		message: 'choose preferred package manager',
		choices: NodePkgMgrPresets
	},
	{
		type: 'list',
		name: 'build_tools',
		message: 'choose build environment',
		choices: NodeBuildPresets
	},
	{
		type: 'list',
		name: 'compiler',
		message: 'choose transpiler option',
		choices: NodeCompilerPresets
	},
	{
		type: 'list',
		name: 'bundler',
		message: 'choose bundler option',
		choices: NodeBundlerPresets
	},
	{
		type: 'confirm',
		name: 'eslint',
		message: 'setup eslint?',
		choices: ['yes', 'no']
	}
]
