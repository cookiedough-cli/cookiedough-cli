import { NodeUserPreferences, NodePackagePreset, NodePkgMgrPreset} from '../types';
import {
	NodeModule,
	SWCBaseModules,
	GulpModules,
	WebpackModules,
	GruntBaseModules,
	ESLintBaseModules,
	ESLintTSModules
} from './presets';

export const NodePresetPackageMapper = (
	np: NodeUserPreferences
): NodeModule[] => {
	const needsPackage: NodeModule[] = [];
	if(np.pkg_mgr === 'yarn' || np.pkg_mgr === 'pnpm') {
		// pkg manager name should match the package to install so just run it if its not npm
		needsPackage.push([np.pkg_mgr, '-g']);
	}

	if(np.eslint) {
		if(np.preset == 'ts') {
			ESLintTSModules.forEach(m => needsPackage.push(m));
		}
		else {
			ESLintBaseModules.forEach(m => needsPackage.push(m));
		}
	}

	switch(np.build_tools) {
		case 'grunt':
			GruntBaseModules.forEach( m => needsPackage.push(m));
			break;
		case 'gulp':
			GulpModules.forEach(m => needsPackage.push(m));
	}

	if(np.preset === 'ts') {
		needsPackage.push(['typescript', '-D']);
	}

	switch(np.compiler) {
		case 'esbuild':
			needsPackage.push(['esbuild', '']);
			break;
		case 'swc':
			SWCBaseModules.forEach(m => needsPackage.push(m));
			break;
		case 'babel':
			needsPackage.push(['@babel/core', '-D']);
			needsPackage.push(['@babel/preset-env', '-D']);
			if(np.preset === 'ts') {
				needsPackage.push(['@babel/plugin-transform-typescript', '-D']);
				needsPackage.push(['@babel/plugin-preset-typescript', '-D']);
			}
	}

	switch(np.bundler) {
		case 'esbuild':
			needsPackage.push(['esbuild', '']);
			break;
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
	return needsPackage;
};

export function presetToInstallPrefix(p: NodePkgMgrPreset) {
	switch(p) {
		case 'yarn':
			return 'yarn add ';
		case 'pnpm':
			return 'pnpm add';
		default:
			return 'npm i ';
	}
}
