import {
	NodePackagePreset,
	NodePkgMgrPreset,
	NodeBuildPreset,
	NodeCompilerPreset,
	NodeBundlerPreset
} from './types';

export type NodeModule = [string, string];

export const NodePkgPresets: NodePackagePreset[] = [
	'commonjs',
	'esm',
	'ts'
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
	'babel',
	'swc',
	'esbuild',
	'none'
];

export const NodeBundlerPresets: NodeBundlerPreset[] = [
	'webpack',
	'rollup',
	'swcpack',
	'esbuild',
	'none'
];

export const GulpModules: NodeModule[] = [
	['gulp-cli', '-g'],
	['gulp', '-D']
];

export const WebpackModules: NodeModule[] = [
	['webpack', '-D'],
	['webpack-cli', '-D']
];

export const SWCBaseModules: NodeModule[] = [
	['@swc/cli', '-D'],
	['@swc/core', '-D']
];

export const GruntBaseModules: NodeModule[] = [
	['grunt-cli', '-g'],
	['grunt', '-D']
];

export const ESLintBaseModules: NodeModule[] = [
	['eslint', '-D']
];

export const ESLintTSModules: NodeModule[] = [
	...ESLintBaseModules,
	['@typescript-eslint/eslint-plugin', '-D'],
	['@typescript-eslint/parser', '-D']
];
