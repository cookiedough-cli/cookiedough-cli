import {
	NodeFlavor_PkgMgr,
	NodeFlavor_PkgPresets,
	NodeFlavor_BuildTools,
	NodeFlavor_Compilers,
	NodeFlavor_Bundlers,
 } from '@cookiedough/types';

export default [
	{
		type: 'list',
		name: 'preset',
		message: 'choose package preset',
		choices: NodeFlavor_PkgPresets
	},
	{
		type: 'list',
		name: 'pkg_mgr',
		message: 'choose preferred package manager',
		choices: NodeFlavor_PkgMgr
	},
	{
		type: 'list',
		name: 'build_tools',
		message: 'choose build environment',
		choices: NodeFlavor_BuildTools
	},
	{
		type: 'list',
		name: 'compiler',
		message: 'choose transpiler option',
		choices: NodeFlavor_Compilers
	},
	{
		type: 'list',
		name: 'bundler',
		message: 'choose bundler option',
		choices: NodeFlavor_Bundlers
	},
	{
		type: 'confirm',
		name: 'eslint',
		message: 'setup eslint?',
		choices: ['yes', 'no']
	}
]
