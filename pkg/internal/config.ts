import { resolve } from 'path';
import { useLog } from '.';
import DEFAULTS from './.config/.defaults.json';
import {
	useFileList,
	useHomeDir
} from './util';
import {
	CrumbFileNames,
	CrumbOptions
} from '../types';

export function useConfigList(
	dir: string
): string[] {
	//@ts-ignore
	return useFileList(dir).filter(file => CrumbFileNames.includes(file));
}

export function useDirectoryConfig(
	dir: string
): CrumbOptions | null {
	let match;
	const filesInBase = useFileList(dir);
	CrumbFileNames.forEach(file => {
		if(filesInBase.includes(file)) {
			match = file;
			return;
		}
	});
	if(!match) {
		return null;
	}
	return require(resolve(dir, match));
}

export function useGlobalConfig():
CrumbOptions {
	const wd = process.cwd();
	let match;
	const filesInBase = useFileList(wd);
	CrumbFileNames.forEach(file => {
		if(filesInBase.includes(file)) {
			match = file;
			return;
		}
	});
	if(!match) {
		const home = useHomeDir();
		const filesInHome = useFileList(home);
		CrumbFileNames.forEach(file => {
			if(filesInHome.includes(file)) {
				match = file;
				return;
			}
		});
		if(!match) {
			useLog('no config found, using default settings');
			// todo - maybe prompt for options
			return <CrumbOptions>DEFAULTS;
		}
		else {
			if(match.includes('json')) {
				// return as json
				return <CrumbOptions>require(resolve(home, match));
			}
		}

	}
	if(match.includes('json')) {
		// return as json
		return <CrumbOptions>require(resolve(wd, match));
	}
	// return as string
	//return <CrumbOptions>readFileSync(resolve(base, match), 'utf-8'); //todo - actually set this up
}
