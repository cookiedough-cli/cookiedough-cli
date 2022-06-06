import { Tuple } from '..';
import {
	NodePackagePreset,
	NodePkgMgrPreset,
	NodeBuildPreset,
	NodeCompilerPreset,
	NodeBundlerPreset
} from '.';

export type NodeModule = Tuple;

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
	'gulp',
	'grunt',
	'esbuild',
	'none',
];

export const NodeCompilerPresets: NodeCompilerPreset[] = [
	'none',
	'babel',
	'swc',
	'esbuild',
];

export const NodeBundlerPresets: NodeBundlerPreset[] = [
	'none',
	'rollup',
	'webpack',
	'swcpack',
	'esbuild',
];

export const BabelBaseModules: NodeModule[] = [
	['@babel/core', '-D'],
	['@babel/preset-env', '-D']
];

export const BabelTSModules: NodeModule[] = [
	['@babel/plugin-transform-typescript', '-D'],
	['@babel/plugin-preset-typescript', '-D']
];

export const GulpModules: NodeModule[] = [
	['gulp-cli', '-g'],
	['gulp', '-D']
];

export const GulpTSModules: NodeModule[] = [
	['gulp-typescript', '-D']
];

export const RollupTSModules: NodeModule[] = [
	['@rollup/plugin-typescript', '-D']
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
