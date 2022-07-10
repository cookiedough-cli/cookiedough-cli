import { ListQuestion } from 'inquirer';
import { useCreate, useManPage } from '../internal/handler';
import { CrumbInlineType, CrumbOptions } from '../types';
/**
 * Environment Variables Constants
 */
export const ENV_RAW_SOURCE = 'https://raw.githubusercontent.com/cookiedough-cli/cookiedough-cli/main/';
export const ENV_COOKIE_BASE = '.env';
export const ENV_CRUMB_DEFAULT_FILE = '.defaults.json';
export const ENV_COOKIE_COPY_DIR = '.flavors/_copy_';
export const ENV_V_CONFIG_FILENAME = 'cookiedough.json';

export type CLIPrompt = {
	choices: string[];
	type: string;
	name: string;
	message: string;
};

export type CookieCMD<T> = {
	alias?: string[];
	signature: CookieCMDSignature;
	callback: (args?: T) => Promise<any>;
	follow_up_with?: CrumbInlineType[];
};

export const CookieCMDSignatures = [
	'create',
	'doctor',
	'edit',
	'add',
	'locate',
	'set',
	'setup',
	'help',
	'create-flavor',
] as const;
export type CookieCMDSignature = typeof CookieCMDSignatures[number];

export type CookieProcessRecipe = {
	cmd: CookieCMD<any>;
	crumbs: CrumbOptions;
	_raw_args: string[];
	_raw_cmd: CookieCMD<any>[];
};

// path-specific configuration parameters - all optional
export type PathConfigOptions = {
	custom_flavors?: string; //path to load custom flavor recipes from
	out?: string; // base path to use to write new files during processing
	root_config?: string; // path of parent config to extend
};

export type ValidLogData = any;

/**
 * Core Preset Flavor Options
 * todo: add more than node
 */
export const FlavorInquiry: ListQuestion = {
	type: 'list',
	name: 'flavor',
	message: 'choose project flavor',
	choices: ['node'],
};

/**
 * Full List of Commands to interpret at runtime
 * todo: commented sections
 */
export const CMDList: CookieCMD<any>[] = [
	{
		signature: 'create',
		alias: ['', null],
		callback: useCreate,
	},
	// {
	// 	signature: 'edit',
	// 	alias: ['edit-env', 'edit-config'],
	// 	callback: useInteractiveEdit
	// },
	// {
	// 	signature: 'doctor',
	// 	alias: ['fix', 'ihelp'],
	// 	callback: useDoctor
	// },
	// {
	// 	signature: 'set',
	// 	alias : ['set-env', 'set-config', 'setup-env'],
	// 	callback: useInteractiveEnvSetup
	// },
	// {
	// 	signature: 'create-flavor',
	// 	callback: useFl
	// },
	// {
	// 	signature: 'locate',
	// 	callback: useLocator
	// },
	{
		signature: 'help',
		alias: ['manpage', 'man'],
		callback: async () => useManPage(),
	},
];
