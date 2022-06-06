import { NodeUserPreferences } from '@cookiedough/types/flavor';
import {
	NodeModule,
	SWCBaseModules,
	GulpModules,
	WebpackModules,
	GruntBaseModules,
	ESLintBaseModules,
	ESLintTSModules,
	BabelBaseModules,
	BabelTSModules,
	RollupTSModules,
	GulpTSModules
} from '@cookiedough/types/flavor/node';

export const NodePresetPackageMapper = (
	np: NodeUserPreferences
): NodeModule[] => {
	const needsPackage: NodeModule[] = [];
	if(np.eslint) {
		// add eslint plugins for typescript
		if(np.preset == 'ts') {
			ESLintTSModules.forEach(m => needsPackage.push(m));
		}
		// just add regular eslint modules
		else {
			ESLintBaseModules.forEach(m => needsPackage.push(m));
		}
	}
	// add selected build tools
	switch(np.build_tools) {
		case 'grunt':
			GruntBaseModules.forEach(m => needsPackage.push(m));
			break;
		case 'gulp':
			GulpModules.forEach(m => needsPackage.push(m));
	}
	// add ts if needed
	if(np.preset === 'ts') {
		needsPackage.push(['typescript', '-D']);
		if(np.bundler === 'rollup') {
			RollupTSModules.forEach(m => needsPackage.push(m));
		}
		if(np.build_tools === 'gulp') {
			GulpTSModules.forEach(m => needsPackage.push(m));
		}
	}
	// add chosen compiler
	switch(np.compiler) {
		case 'esbuild':
			needsPackage.push(['esbuild', '']);
			break;
		case 'swc':
			SWCBaseModules.forEach(m => needsPackage.push(m));
			break;
		case 'babel':
			BabelBaseModules.forEach(m => needsPackage.push(m));
			if(np.preset === 'ts') {
				BabelTSModules.forEach(m => needsPackage.push(m));
			}
	}
	// add bundler
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
	// return package list
	return needsPackage;
};

