import axios from 'axios';
import { execSync } from 'child_process';
import { join, resolve } from 'path';
import { ENV_RAW_SOURCE, ENV_COOKIE_BASE } from './env';
import { FlavorCrumbSchema, SystemOverview } from '@cookiedough/types';
import {
	copySync,
	ensureDirSync,
	readdirSync,
	emptyDirSync,
	readFileSync,
} from 'fs-extra';
import { homedir, arch, platform, type } from 'os';

/**
 *
 * @param input url to check
 * @returns bool if it has a protocol prefix or not
 */
export const hasValidUrlPattern = (input: string) =>
	input.includes('https://') || input.includes('http://');

/**
 * TODO: setup error handlers & winston
 * @param url url to get
 * @returns typed promise from raw url
 */
export async function retrieveExtern<T>(url: string): Promise<T> {
	const res = await axios.get(url);
	if (res.status === 200) return <T>res.data;
	throw res.data;
}
/**
 *
 * @param cmd command to run synchronously
 * @returns nothing
 */
export const call = (cmd: string) => execSync(cmd);
/**
 *
 * @param from directory to cd into before running the next arg
 * @param cmd command to run in the dir
 * @returns nothing
 */
export const callFrom = (from: string, cmd: string) =>
	execSync(`cd ${from} && ${cmd}`);
/**
 *
 * @param p path to create if it doesn't exist
 * @returns nothing
 */
export const useValidWritePath = (p: string) => ensureDirSync(p);
/**
 *
 * @param dir dir to list files in
 * @returns list of files as string[]
 */
export const useFileList = (dir: string) => readdirSync(dir);
/**
 *
 * @param dir dir to clear all files from
 * @returns empty directory
 */
export const usePowerWasher = (dir: string) => emptyDirSync(dir);

/**
 *
 * @param src place to copy files from
 * @param dest place to write files to
 * @returns
 */
export const useCopyMachine = (src: string, dest: string) =>
	copySync(src, dest);
/**
 *
 * @returns home directory of process's sys
 */
export const useHomeDir = () => homedir();

export function validFlavorMod(json: FlavorCrumbSchema): boolean {
	const keys = Object.keys(json);
	if (!keys.includes('tag_name')) return false;
	if (!keys.includes('recipe_path')) return false;
	if (!json.doughmap || json.doughmap.length > 1) return false;
	return true;
}

export const useSysInfo = () =>
	<SystemOverview>{
		arch: arch(),
		platform: platform(),
		type: type(),
		cwd: process.cwd(),
		home: homedir(),
	};

export const useManPage = async () => {
	const res = await retrieveExtern<string>(
		`${ENV_RAW_SOURCE}${ENV_COOKIE_BASE}/.assets/manpage.txt`
	);
	console.log(res);
	process.exit(0);
};
