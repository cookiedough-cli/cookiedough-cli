import { arch, platform, type } from 'os';
const { log } = console;
import { verifiableTags } from './internal/tags';
import {
	SystemOverview,
	DirtyConfig,
	AllowedTag
} from './types';

export const verifyTag = (
	i: string
): AllowedTag => <AllowedTag>verifiableTags.filter(tag => (tag.tag === i || tag.allowed_inputs.includes(i))).shift().tag;

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
	tag: AllowedTag,
	options: object // config parsed from inline user input in yargs
): DirtyConfig<AllowedTag> {
    return {...options, tag, sys: getSysInfo()};
}

function createProject (
	tag: AllowedTag,
	options
): void {
    // this will have the final config ready to be parsed into the build process
    // todo
    log('create %s project:', tag);
    log(options);
    const config = createConfig(tag, options);
    log(config);
}

export default (options) => createProject(verifyTag(options.Lang), options);
