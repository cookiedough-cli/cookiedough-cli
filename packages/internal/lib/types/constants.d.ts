import { CookieFlavor, CLIPrompt } from '../types';
export declare const Flavors: CookieFlavor[];
export declare const FlavorPrompt: CLIPrompt;
/**
 * Type for a command that is interpretable by the entry point.
 * */
export declare type __COOKIE_CMD__ = {
    signature: string;
    alias?: string[];
    cmd_callback?: any;
};
/**
 * Names recognized by the command line when called as a process
 */
export declare const COMMAND_NAMES: __COOKIE_CMD__[];
