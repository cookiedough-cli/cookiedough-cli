/**
 * @module Utilities
 */

import { arch, platform, type } from 'os';
import { join } from 'path';
import { SystemOverview } from './types';
/**
 *
 * @returns System Architecture Specs for setup process compatibility
 */
export function getSysInfo():
SystemOverview {
    return {
        arch: arch(),
        platform: platform(),
        type: type(),
		cwd: process.cwd()
    };
}


export function replacePathBase (
	sl: string,
	path_base: string
): string {
	return sl.replace('<base>', path_base);
}
