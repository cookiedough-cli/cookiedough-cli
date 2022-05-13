export type NodePackagePreset = 'commonjs' | 'esm' | 'ts';
export type NodePkgMgrPreset = 'npm' | 'yarn' | 'pnpm';
export type NodeCompilerPreset = 'babel' | 'swc' | 'esbuild' | 'none';
export type NodeBundlerPreset = 'webpack' | 'esbuild' | 'rollup' | 'snowpack' | 'none';
export type NodeBuildPreset = 'esbuild' | 'gulp' | 'grunt' | 'make' | 'none(npm)';
export const NodePkgPresets: NodePackagePreset[] = [
	'commonjs', 'esm', 'ts'
];

export const NodePkgMgrPresets: NodePkgMgrPreset[] = [
	'npm',
	'yarn',
	'pnpm'
];

export const NodeBuildPresets: NodeBuildPreset[] = [
	'make',
	'gulp',
	'grunt',
	'esbuild', 'none(npm)'
];

export const NodeCompilerPresets: NodeCompilerPreset[] = [
	'babel', 'swc', 'esbuild', 'none'
];

export const NodeBundlerPresets: NodeBundlerPreset[] = [
	'webpack', 'rollup', 'snowpack', 'esbuild', 'none'
];

// export interface PackageConfig {
// 	package_preset  : NodePackagePreset; //top level preset for the module generation
// 	compiler_preset ?: NodeCompilerPreset; // which transpiler to install if any
// 	bundler_preset  ?: NodeBundlerPreset; // which bundler to install if any
// 	build_preset    ?: NodeBuildPreset; // which build system to set up if any
// 	pkgr_preset     : NodePkgMgrPreset; // which process to install packages with
// }
export function prompt_node(p: string, inquirer) {
	inquirer.prompt([
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
		}
	]).then(answers => {
		console.log(`node project at ${p}`);
		console.log(answers);
	});
}
