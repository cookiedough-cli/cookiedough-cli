/**
 * @module Utilities
 */

import { arch, platform, type } from 'os';
import { existsSync, mkdirSync } from 'fs';
import { SystemOverview } from './types';
import { Tuple } from './types/index';
import { execSync } from 'child_process';
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

export function useValidWritePath(
	p: string
): string {
	if(!existsSync(p) && (p !== process.cwd())) {
		mkdirSync(p);
	}
	return p;
}

export function _call(
	cmd: string
): void {
	execSync(cmd);
}

export function _callFrom(
	from: string,
	cmd: string
): void {
	execSync(`cd ${from} && ${cmd}`);
}
