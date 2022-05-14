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
	'webpack', 'rollup', 'snowpack', 'esbuild', 'none'
];


export const NodePresetPackageMapper = (np: NodeUserPreferences) => {
	type NodeModule = [string, string];
	// name of pkg, dev ^
	const needsPackage: NodeModule[] = [];

	// todo - figure out an optimized ordering for this
	if(np.pkg_mgr === 'yarn') {
		needsPackage.push(['yarn', '-g']);
	}
	if(np.preset === 'ts') {
		needsPackage.push(['typescript', '-D']);
		if(np.bundler == 'webpack') {
			needsPackage.push(['ts-loader', '-D']);
		}

		if(np.compiler === 'babel') {
			needsPackage.push(['@babel/core', '-D']);
			needsPackage.push(['@babel/plugin-transform-typescript', '-D']);
		}
	}

	// todo - set up installer
	console.log(np);
	console.log(needsPackage);
};
