import { ensureDirSync } from 'fs-extra';

export function useValidWritePath(
	p: string
): void {
	return ensureDirSync(p);
}
