/**
 * @module Utilities
 */

import { arch, platform, type } from 'os';
import { SystemOverview } from './types';
/**
 *
 * @returns System Architecture Specs for setup process compatibility
 */
function getSysInfo():
SystemOverview {
    return {
        arch: arch(),
        platform: platform(),
        type: type(),
		cwd: process.cwd()
    };
}
