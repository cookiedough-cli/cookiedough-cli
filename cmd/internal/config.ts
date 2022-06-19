import { resolve } from 'path';
import {
	useFileList,
	useHomeDir
} from './util';
import {
	CrumbOptions,
	useLog,
	__COOKIE_ENV__,
	CRUMB_DEFAULT_FILE
} from '.';

// only use this from cmd or alter path
export function useDefaultConfig(
	context_depth: string
) {
	return require(resolve(__dirname, `${context_depth}/${__COOKIE_ENV__}/${CRUMB_DEFAULT_FILE}`));
}

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
	filesInBase.forEach(file => {
		if(file === 'cookiedough.json') {
			match = file;
			return;
		}
	});
	if(!match) {
		return null;
	}
	return require(resolve(dir, match));
}

export function useGlobalConfigWithCWD():
CrumbOptions {
	const wd = process.cwd();
	let match;
	const filesInBase = useFileList(wd);
	filesInBase.forEach(file => {
		if(file === 'cookiedough.json') {
			match = file;
			return;
		}
	});
	if(!match) {
		const home = useHomeDir();
		const filesInHome = useFileList(home);
		filesInHome.forEach(file => {
			if(file === 'cookiedough.json') {
				match = file;
				return;
			}
		});
		if(!match) {
			useLog('no config found, using default settings');
			// todo - maybe prompt for options
			return <CrumbOptions>useDefaultConfig('../../');
		}
		else {
			if(match.includes('json')) {
				// return as json
				return <CrumbOptions>require(resolve(home, match));
			}
		}

	}
	return <CrumbOptions>require(resolve(wd, match));
}


export function useConfig(
	dir ?: string
): CrumbOptions {
	if(!dir) {
		return useGlobalConfigWithCWD();
	}
	return useDirectoryConfig(dir);
}
