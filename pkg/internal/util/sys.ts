import {
	copySync,
	ensureDirSync,
	readdirSync,
	emptyDirSync,
	existsSync,
	readFileSync
} from 'fs-extra';
import {
	homedir,
	arch,
	platform,
	type
} from 'os';
import { join, resolve } from 'path';
import  { DoughFlavor, SystemOverview } from '../../types';

export function useSysInfo():
 SystemOverview {
	return {
		arch: arch(),
		platform: platform(),
		type: type(),
		cwd: process.cwd()
	};
}
export function copyDirectory(
	to: string,
	from: string,
	recur: boolean
): boolean {
	try {
		copySync(to, from, {
			recursive: recur
		});
		return true;
	}
	catch(e) {
		return false;
	}
}

export function useValidWritePath(
	p: string
): void {
	return ensureDirSync(p);
}
export function useProcessDir() {
	return process.cwd();
}

export function useHomeDir() {
	return homedir();
}

export function useDirExists(
	dir: string
) {
	return existsSync(dir);
}

export function useFileList(
	dir: string
) {
	return readdirSync(dir);
}

export function usePowerWasher(
	dir: string
) {
	return emptyDirSync(dir);
}

export function useCopyMachine(
	src: string,
	dest: string
) {
	return copySync(src, dest);
}

export function useManPage() {
	return readFileSync(resolve(__dirname, '../../../.assets/manpage.txt'), 'utf8');
}

export function useFlavorMod(
	mod: DoughFlavor
) {
	return require(join(__dirname, `../../../.flavormods/${mod}`, 'flavor.json'));
}
