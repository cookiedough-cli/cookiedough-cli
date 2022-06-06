import { SystemOverview } from '@cookiedough/include/types';
import { arch, platform, type } from 'os';
/**
 *
 * @returns System Architecture Specs for setup process compatibility
 */
export function useSysInfo():
 SystemOverview {
	return {
		arch: arch(),
		platform: platform(),
		type: type(),
		cwd: process.cwd()
	};
}
