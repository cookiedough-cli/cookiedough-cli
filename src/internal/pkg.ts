import { SystemOverview } from '../types/index';
// name of pkg manager to call, will be determined from guessing based on the architecture of teh system itself
/**
 * win32 - try winget prob
 * darwin/freebsd/whatever unix - apt/snap/etc
 */

export function resolve_pkgr (
	tag: string,
	sys_info: SystemOverview
): string {
	console.log(tag);
	switch(tag) {
		default:
			return 'apt';
	}
}

/**
 *
 * @param {*} depname name of system-specific dependency to install for given package manager in system
 * @returns status code of installation attempt
 */
export function install_sys (
	depname: string
): number {
	// eslint-disable-next-line
	// let status = 0;
    console.log('todo: install dep %s', depname);
	return 0;
}
