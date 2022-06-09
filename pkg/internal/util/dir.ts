import {
	copySync,
	ensureDirSync
} from 'fs-extra';

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
