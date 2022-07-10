import {
	copySync,
	ensureDirSync,
	readdirSync,
	emptyDirSync,
	existsSync,
	readFileSync,
} from 'fs-extra';
import { homedir, arch, platform, type } from 'os';
import { join, resolve } from 'path';
import { SystemOverview } from '../../types';
import { FlavorDeclarationJSON } from '../handler';
const context_depth = '../../../../';

export const useSysInfo: () => SystemOverview = () =>
	<SystemOverview>{
		arch: arch(),
		platform: platform(),
		type: type(),
		cwd: process.cwd(),
	};

export const useValidWritePath = (p: string) => ensureDirSync(p);
export const useProcessDir = () => process.cwd();
export const useHomeDir = () => homedir();
export const useDirExists = (dir: string) => existsSync(dir);
export const useFileList = (dir: string) => readdirSync(dir);
export const usePowerWasher = (dir: string) => emptyDirSync(dir);

export function useCopyMachine(src: string, dest: string): void {
	return copySync(src, dest);
}

export function useManPage(): string {
	return readFileSync(
		resolve(__dirname, context_depth, '.assets/manpage.txt'),
		'utf8'
	);
}

export async function useFlavorMod(
	mod: string
): Promise<FlavorDeclarationJSON> {
	return await import(
		join(__dirname, `${context_depth}.flavors/${mod}`, 'flavor.json')
	);
}

export function validFlavorMod(json: FlavorDeclarationJSON): boolean {
	const keys = Object.keys(json);
	if (!keys.includes('tag_name')) {
		return false;
	}
	if (!keys.includes('recipe_path')) {
		return false;
	}
	if (!json.doughmap || json.doughmap.length > 1) {
		return false;
	}

	return true;
}
