import { SystemOverview } from './types';
import { useLocalConfig } from './config';
import {
	arch,
	platform,
	type,
	homedir
} from 'os';
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

export function useGlobalConfig() {
	return useLocalConfig(homedir());
}
