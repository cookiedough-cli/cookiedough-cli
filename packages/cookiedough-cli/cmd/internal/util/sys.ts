import { join, resolve } from 'path';
import { FlavorCrumbSchema } from '../../types';
import { SystemOverview } from '../../types';
import { ENV_RAW_SOURCE } from '../handler';
import {
	copySync,
	ensureDirSync,
	readdirSync,
	emptyDirSync,
	readFileSync,
} from 'fs-extra';
import { homedir, arch, platform, type } from 'os';

const context_depth = '../../../../';

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

export const useManPage = () =>
	readFileSync(
		resolve(__dirname, context_depth, '.env/.assets/manpage.txt'),
		'utf8'
	);

export async function useFlavorMod(
	mod: string
): Promise<FlavorCrumbSchema> {
	return await import(
		join(__dirname, `${context_depth}.flavors/${mod}`, 'flavor.json')
	);
}

export function validFlavorMod(json: FlavorCrumbSchema): boolean {
	const keys = Object.keys(json);
	if (!keys.includes('tag_name')) return false;
	if (!keys.includes('recipe_path')) return false;
	if (!json.doughmap || json.doughmap.length > 1) return false;
	return true;
}
