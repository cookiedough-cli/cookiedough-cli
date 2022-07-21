import { resolve } from 'path';
import axios from 'axios';
import { log, useFileList, useHomeDir } from '.';
import {
	CrumbOptions,
	ENV_RAW_SOURCE,
	ENV_COOKIE_BASE,
	ENV_CRUMB_DEFAULT_FILE,
	ENV_V_CONFIG_FILENAME,
} from '@cookiedough/types';

/**
 * @function useDefaultConfig
 * @returns Fetched Default JSON Settings from github source
 */
export async function useDefaultConfig() {
	const res = await axios.get(
		`${ENV_RAW_SOURCE}${ENV_COOKIE_BASE}/${ENV_CRUMB_DEFAULT_FILE}`
	);
	return res.data;
}

/**
 *
 * @param dir directory to find list of config files from
 * @returns list of matched config files in given dir
 */
export function useConfigList(dir: string): string[] {
	//@ts-ignore
	return useFileList(dir).filter((file) => CrumbFileNames.includes(file));
}
/**
 *
 * @param dir directory to get the matched config from
 * @returns matched config options as import, or null
 */
export async function useDirectoryConfig(
	dir: string
): Promise<CrumbOptions | null> {
	let match: string;
	const filesInBase = useFileList(dir);
	for await (const file of filesInBase) {
		if (file === ENV_V_CONFIG_FILENAME) {
			match = file;
			return;
		}
	}
	if (!match) {
		return null;
	}
	return import(resolve(dir, match));
}

/**
 *
 * @returns config that is either in the current directory, home dir, or defaulted
 */
export async function useGlobalConfigWithCWD(): Promise<CrumbOptions> {
	const wd = process.cwd();
	let match: string;
	const filesInBase = useFileList(wd);
	for await (const file of filesInBase) {
		if (file === ENV_V_CONFIG_FILENAME) {
			match = file;
			return;
		}
	}
	if (!match) {
		const home = useHomeDir();
		const filesInHome = useFileList(home);
		for await (const file of filesInHome) {
			if (file === ENV_V_CONFIG_FILENAME) {
				match = file;
				return;
			}
		}
		if (!match) {
			log('no config found, using default settings');
			// todo - maybe prompt for options
			return <CrumbOptions>await useDefaultConfig();
		} else {
			console.log('config from homedir:');
			console.log(match);
			if (match.includes('json')) {
				// return as json
				return <CrumbOptions>await import(resolve(home, match));
			}
		}
	}
	return <CrumbOptions>await import(resolve(wd, match));
}

/**
 *
 * @param dir directory to use as base - optional
 * @returns config options of some kind
 */
export async function useConfig(dir?: string): Promise<CrumbOptions> {
	if (!dir) {
		return await useGlobalConfigWithCWD();
	}
	return await useDirectoryConfig(dir);
}
