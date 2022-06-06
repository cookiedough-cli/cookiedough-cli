import { existsSync, mkdirSync } from 'fs';

export function useValidWritePath(
	p: string
): string {
	if(!existsSync(p) && (p !== process.cwd())) {
		mkdirSync(p);
	}
	return p;
}
