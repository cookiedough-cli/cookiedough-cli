import {
	copySync
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
