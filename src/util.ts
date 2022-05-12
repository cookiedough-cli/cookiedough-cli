/**
 * @module Utilities
 */
import { arch, platform, type } from 'os';
const { log } = console;
import { verifiableTags } from './internal/tags';
import {
	SystemOverview,
	DirtyConfig,
	AllowedTag
} from './types';

/**
 *
 * @param i the user-defined string being matched up with the available tags
 * @returns a validated tag string from the enumerated types
 */
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
 * @returns A not-yet clean config template which has a valid tag, system info and the other uncleaned options for xConfig
 */
function createConfig (
	tag: AllowedTag,
	options: object // config parsed from inline user input in yargs
): DirtyConfig<AllowedTag> {
    return {...options, tag, sys: getSysInfo()};
}

/**
 *
 * @param tag the validated tag for the root project type
 * @param options the user defined arguments entered to commander
 */
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
