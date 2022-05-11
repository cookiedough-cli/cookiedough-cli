import { arch, platform, type } from 'os';
const { log } = console;
import { verifiable_tags } from './internal/tags';
import { SystemOverview } from './types';

export const input_to_tag = (
	i: string
): string => verifiable_tags.filter(tag => (tag.tag === i || tag.allowed_inputs.includes(i))).shift().tag;

/**
 *
 * @returns System Architecture Specs for setup process compatibility
 */
function getSysInfo():
SystemOverview {
    return {
        arch: arch(),
        platform: platform(),
        type: type()
    };
}

/**
 *
 * @param {ConfigWithoutSys} to_sys_stamp  the config prepared to get stamped by the system
 * @param {SysStamp} sysinfo stamp from get_sys context for the system that the program is running on
 * @returns
 */
function createConfig (
	to_sys_stamp: object // config parsed from inline user input in yargs
) {
    return {...to_sys_stamp, sys: getSysInfo()};
}

function createProject (
	tag: string,
	options
): void {
    // this will have the final config ready to be parsed into the build process
    // todo
    log('create %s project:', tag);
    log(options);
    const config = createConfig(options);
    log(config);
}

export default (options) => createProject(input_to_tag(options.Lang), options);
