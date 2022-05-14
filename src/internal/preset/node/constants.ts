import { NodeUserPreferences } from './types';
import {
	NodePackagePreset,
	NodePkgMgrPreset,
	NodeBuildPreset,
	NodeCompilerPreset,
	NodeBundlerPreset
} from './types';

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
	'webpack', 'rollup', 'swcpack', 'esbuild', 'none'
];

type NodeModule = [string, string];

const GulpModules: NodeModule[] = [
	['gulp-cli', '-g'],
	['gulp', '-D']
];

const WebpackModules: NodeModule[] = [
	['webpack', '-D'],
	['webpack-cli', '-D']
];

const SWCBaseModules: NodeModule[] = [
	['@swc/cli', '-D'],
	['@swc/core', '-D']
];

export const NodePresetPackageMapper = (np: NodeUserPreferences) => {
	const needsPackage: NodeModule[] = [];

	if(np.pkg_mgr === 'yarn' || np.pkg_mgr === 'pnpm') {
		needsPackage.push([np.pkg_mgr, '-g']);
	}

	switch(np.build_tools) {
		case 'gulp':
			GulpModules.forEach(m => needsPackage.push(m));
	}

	if(np.preset === 'ts') {
		needsPackage.push(['typescript', '-D']);
	}

	switch(np.compiler) {
		case 'swc':
			SWCBaseModules.forEach(m => needsPackage.push(m));
			break;
		case 'babel':
			needsPackage.push(['@babel/core', '-D']);
			if(np.preset === 'ts') needsPackage.push(['@babel/plugin-transform-typescript', '-D']);
	}

	switch(np.bundler) {
		case 'webpack':
			WebpackModules.forEach(m => needsPackage.push(m));
			if(np.preset == 'ts') needsPackage.push(['ts-loader', '-D']);
			if(np.compiler === 'swc') needsPackage.push(['swc-loader', '-D']);
			if(np.compiler === 'babel') needsPackage.push(['babel-loader', '-D']);
			break;
		case 'rollup':
			needsPackage.push(['rollup', '-D']);
			break;
		case 'swcpack':
			needsPackage.push(['swcpack', '-D']);
	}
	// todo - set up installer
	console.log(np);
	console.log(needsPackage);
};
