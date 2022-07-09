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
import fetch from 'node-fetch';

// only use this from cmd or alter path
export async function useDefaultConfig() {
	const res = await fetch('https://raw.githubusercontent.com/cookiedough-cli/main/.env/.defaults.json');
	const data = await res.json();
	return data;
}

export function useConfigList(
	dir: string
): string[] {
	//@ts-ignore
	return useFileList(dir).filter(file => CrumbFileNames.includes(file));
}

export async function useDirectoryConfig(
	dir: string
): Promise<CrumbOptions | null> {
	let match;
	const filesInBase = useFileList(dir);
	for await(const file of filesInBase) {
		if(file === 'cookiedough.json') {
			match = file;
			return;
		}
	}
	if(!match) {
		return null;
	}
	return import(resolve(dir, match));
}

export async function useGlobalConfigWithCWD():
Promise<CrumbOptions> {
	const wd = process.cwd();
	let match;
	const filesInBase = useFileList(wd);
	for await(const file of filesInBase) {
		if(file === 'cookiedough.json') {
			match = file;
			return;
		}
	}
	if(!match) {
		const home = useHomeDir();
		const filesInHome = useFileList(home);
		for await(const file of filesInHome) {
			if(file === 'cookiedough.json') {
				match = file;
				return;
			}
		}
		if(!match) {
			useLog('no config found, using default settings');
			// todo - maybe prompt for options
			return <CrumbOptions>await useDefaultConfig();
		}
		else {
			if(match.includes('json')) {
				// return as json
				return <CrumbOptions>await import (resolve(home, match));
			}
		}

	}
	return <CrumbOptions>await import(resolve(wd, match));
}


export async function useConfig(
	dir ?: string
): Promise<CrumbOptions> {
	if(!dir) {
		return await useGlobalConfigWithCWD();
	}
	return await useDirectoryConfig(dir);
}
