import axios from 'axios';
import { execSync } from 'child_process';
import { join, resolve } from 'path';
import { ENV_RAW_SOURCE, ENV_COOKIE_BASE } from './env';
import { FlavorCrumbSchema, SystemOverview } from '@cookiedough/types';
import { readdir, readFile } from 'fs/promises';
import mime_type from 'mime-types';
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
 * @returns buffer
 */
export const call = (cmd: string) => execSync(cmd);
/**
 *
 * @param from directory to cd into before running the next arg
 * @param cmd command to run in the dir
 * @returns buffer
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

/**
 *
 * @param json flavor crumb schema to validate
 * @returns whether or not it is valid
 */
export function validFlavorMod(json: FlavorCrumbSchema): boolean {
	const keys = Object.keys(json);
	if (!keys.includes('tag_name')) return false;
	if (!keys.includes('recipe_path')) return false;
	if (!json.doughmap || json.doughmap.length > 1) return false;
	return true;
}
/**
 *
 * @returns system internal for process helpers
 */
export const useSysInfo = () =>
	<SystemOverview>{
		arch: arch(),
		platform: platform(),
		type: type(),
		cwd: process.cwd(),
		home: homedir(),
	};

/**
 * Print manpage from the git main branch then exit process
 */
export const useManPage = async () => {
	const res = await retrieveExtern<string>(
		`${ENV_RAW_SOURCE}${ENV_COOKIE_BASE}/.assets/manpage.txt`
	);
	console.log(res);
	process.exit(0);
};

/**
 * @private get_files
 * Runs the Generator from the base directory in the arguments
 * @param dir base directory to run the generator function on
 */
export async function* get_files(dir: string): AsyncGenerator<any> {
	const dirents = await readdir(dir, { withFileTypes: true });
	for (const dirent of dirents) {
		const res = resolve(dir, dirent.name);
		if (dirent.isDirectory()) {
			yield* get_files(res);
		} else {
			yield {
				_basepath: dir,
				_abspath: res,
			};
		}
	}
}
/**
 *
 * @param dir entry dir
 * @returns Array of retrieved files (todo: type) from the base dir
 */
export async function recur_fs(dir: string): Promise<any> {
	const files = [];
	for await (const f of get_files(dir)) files.push(f);
	return {
		path: dir,
		files,
	};
}

export function __mime_type(path: string, as_obj?: boolean) {
	const _type = mime_type.contentType(path).toString();
	if (as_obj) {
		return { 'Content-Type': _type };
	}
	return _type;
}
