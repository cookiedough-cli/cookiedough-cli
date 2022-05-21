/**
 * @module Utilities
 */

import { arch, platform, type } from 'os';
import { existsSync, mkdirSync } from 'fs';
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

export function createValidWritePath (p: string)
: string {
	if(!existsSync(p) && (p !== process.cwd())) {
		mkdirSync(p);
	}
	return p;
}

export function replacePathBase (
	sl: string,
	path_base: string
): string {
	return sl.replace('<base>', path_base);
}
