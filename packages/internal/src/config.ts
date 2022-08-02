import { resolve } from 'path';
import axios from 'axios';
import { readdir } from 'fs/promises';
import {
	CrumbOptions,
	ENV_RAW_SOURCE,
	ENV_COOKIE_BASE,
	ENV_CRUMB_DEFAULT_FILE,
} from '@cookiedough/types';
import { ENV_CONFIG_FILENAMES } from './env';

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

export function matchConfigs(list: string[]) {
	const out = [];
	for (const fname of ENV_CONFIG_FILENAMES) {
		if (list.includes(fname)) {
			out.push(fname);
		}
	}
	return out;
}
/**
 *
 * @param dir directory to get the matched config from
 * @returns matched config options as import, or null
 */
export async function useConfig(dir: string): Promise<CrumbOptions | null> {
	const filesInBase = await readdir(dir);
	const configs = matchConfigs(filesInBase);
	const raw_config = (
		await import(
			resolve(dir, filesInBase.filter((f) => f === configs[0]).shift())
		)
	)?.default;
	const clean_config = {};
	const defaults = await useDefaultConfig();
	for await (const entry of Object.entries(raw_config)) {
		const key = entry[0];
		const val = entry[1];
		if (Object.keys(defaults).includes(entry[0])) {
			clean_config[key] = val;
			clean_config[key] = { ...defaults[key], ...clean_config[key] };
		}
	}
	return <CrumbOptions>{ ...defaults, ...clean_config };
}
