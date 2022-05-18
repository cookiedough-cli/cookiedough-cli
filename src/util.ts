/**
 * @module Utilities
 */

import { arch, platform, type } from 'os';
import { statSync, existsSync, mkdirSync } from 'fs';
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

export function validWritePath (
	p: string
): boolean {
	try {
		if(statSync(p).isDirectory()) {
			return true;
		}
		if(statSync(p).isFile()) {
			return false;
		}
		if(!existsSync(p)) {
			mkdirSync(p);
			return true;
		}
	}
	catch(_) {
		return false;
	}
}

export function replacePathBase (
	sl: string,
	path_base: string
): string {
	return sl.replace('<base>', path_base);
}
