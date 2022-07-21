import axios from 'axios';
import { execSync } from 'child_process';
import { join, resolve } from 'path';
import { FlavorCrumbSchema, SystemOverview } from '@cookiedough/types';
import {
	copySync,
	ensureDirSync,
	readdirSync,
	emptyDirSync,
	readFileSync,
} from 'fs-extra';
import { ENV_RAW_SOURCE, ENV_COOKIE_BASE } from './env';
import { homedir, arch, platform, type } from 'os';

export const hasValidUrlPattern = (input: string) => (input.includes('https://') || input.includes('http'));

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

export function _call(cmd: string): void {
	execSync(cmd);
}

export function _callFrom(from: string, cmd: string): void {
	execSync(`cd ${from} && ${cmd}`);
}

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

export const useValidWritePath = (p: string) => ensureDirSync(p);
export const useFileList = (dir: string) => readdirSync(dir);
export const usePowerWasher = (dir: string) => emptyDirSync(dir);
export const useCopyMachine = (src: string, dest: string) =>
	copySync(src, dest);
export const useHomeDir = () => homedir();

export const useManPage = async () => {
	const res = await retrieveExtern<string>(
		`${ENV_RAW_SOURCE}${ENV_COOKIE_BASE}/.assets/manpage.txt`
	);
	console.log(res);
	process.exit(0);
};
