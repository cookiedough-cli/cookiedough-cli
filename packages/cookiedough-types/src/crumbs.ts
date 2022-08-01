import { LogLevel } from './log';
import { ChoiceCollection } from 'inquirer';
/**
 * Runtime Constants
 */
// todo - possibly change to permalink
export const ENV_RAW_SOURCE =
	'https://raw.githubusercontent.com/cookiedough-cli/cookiedough-cli/main/';
export const ENV_COOKIE_BASE = '.env';
export const ENV_CRUMB_DEFAULT_FILE = '.defaults.json';
export const ENV_COOKIE_COPY_DIR = '.flavors/_copy_';
export const ENV_V_CONFIG_FILENAME = 'cookiedough.json';
export const ENV_FLAVOR_FILE = 'flavor.json';
export const ENV_DOUGH_FILE = 'doughmap.json';

/**
 * Inline Arg Map
 */
export const ENV_INLINE_ARGS: CrumbInlineType[] = [
	{
		long: '--auto',
		short: '-a',
		tag: 'auto',
		config_tag: null,
		type: 'boolean',
	},
	{
		long: '--config',
		short: '-c',
		tag: 'load_config',
		config_tag: null,
		type: 'string',
	},
	{
		long: '--no-globals',
		short: '-ng',
		tag: 'no_globals',
		config_tag: null,
		type: 'boolean',
	},
	{
		long: '--allow-cwd-out',
		short: '-cwd',
		config_tag: 'path.allow_cwd_out',
		type: 'boolean',
	},
	{
		long: '--out',
		short: '-o',
		config_tag: 'path.out',
		type: 'string',
	},
	{
		long: '--parent-config',
		short: '-pc',
		config_tag: 'path.parent_config',
		type: 'string',
	},
	{
		long: '--custom-flavors',
		short: '-cf',
		config_tag: 'path.custom_flavors',
		type: 'string',
	},
	{
		long: '--add-files-from',
		short: '-af',
		tag: 'add_files',
		config_tag: 'process.add_files_from',
		type: 'string',
	},
	{
		long: '--always-use-prompt',
		short: '-up',
		config_tag: 'process.always_use_prompt',
		type: 'boolean',
	},
	{
		long: '--default-flavor',
		short: '-f',
		config_tag: 'process.default_flavor',
		type: 'string',
	},
	{
		long: '--detatched',
		short: '-d',
		tag: 'process_detatched',
		config_tag: 'process.detached',
		type: 'boolean',
	},
	{
		long: '--no-color',
		short: '-nc',
		tag: 'process_no_color',
		config_tag: 'process.disable_color',
		type: 'boolean',
	},
	{
		long: '--dry-run',
		short: '-dry',
		tag: 'process_dry',
		config_tag: 'process.dry',
		type: 'boolean',
	},
	{
		long: '--overwrite-existing-out',
		short: '-oeo',
		tag: 'process_overwrite',
		config_tag: 'process.overwrite_existing_out',
		type: 'boolean',
	},
	{
		long: '--shell-prefix',
		short: '-sp',
		tag: 'process_shell_prefix',
		config_tag: 'process.shell_prefix',
		type: 'string',
	},
	{
		long: '--log-path',
		short: '-logs',
		tag: 'log_path_root',
		config_tag: 'log.path',
		type: 'string',
	},
	{
		long: '--log-level',
		short: '-log',
		tag: 'log_level',
		config_tag: 'log.level',
		type: 'string',
	},
	{
		long: '--repo-init',
		short: '-repo',
		tag: 'repository_init',
		config_tag: 'repository.init',
		type: 'boolean',
	},
	{
		long: '--repo-template',
		short: '-rt',
		tag: 'repository_template',
		config_tag: 'repository.template_url',
		type: 'string',
	},
] as CrumbInlineType[];

export type CLIPrompt = {
	choices: string[];
	type: string;
	name: string;
	message: string;
};

export type CookieCMD<T> = {
	alias?: string[];
	signature: string;
	callback: (args?: T) => Promise<any>;
	follow_up_with?: CrumbInlineType[];
};

export type CookieProcessRecipe = {
	cmd: CookieCMD<any>;
	crumbs: CrumbOptions;
	__args: CrumbInlineType[];
};

// path-specific configuration parameters - all optional
export type PathConfigOptions = {
	custom_flavors?: string; //path to load custom flavor recipes from
	out?: string; // base path to use to write new files during processing
	root_config?: string; // path of parent config to extend
};
/**
 * Process Types
 */

// process-specific configuration parameters - all optional
export type ProcessCrumbs = {
	add_files_from?: string[]; // directories to copy files into the new project from
	allow_cwd_write?: boolean;
	always_use_prompt?: boolean; // boolean whether to override settings default template in config
	default_flavor?: string; // name of template to run against prompter
	detatched?: boolean; // run in caller process or spawn its own
	disable_color?: boolean; //disables colored output in terminal
	dry?: boolean; // run without doing anything, just print the would-be output
	overwrite_existing_out?: boolean;
	shell_prefix?: string; //prefix the process using this config with a shell wrapper command to run, followed by &&, followed by the process (ie cd ~/)
};

export type LogCrumbs = {
	level?: LogLevel;
	path?: string;
	write_logs?: boolean;
};

export type CrumbInlineType = {
	short: string;
	long: string;
	tag: string;
	config_tag: string;
	type: 'string' | 'boolean';
};

// configuration as an object
export type CrumbOptions = {
	path?: PathConfigOptions; // path related config options
	process?: ProcessCrumbs; // runtime related config options
	repository?: RepositoryCrumbs; // options to configure auto repo setup/integrations
};

export type RepositoryCrumbs = {
	ctx_base_path?: string; // child path of the context its written to, to be written to
	init?: boolean; //init a repo and enable parsing of other attributes in the type
	submodule_map?: any; //todo - set up map of submodules to automatically set up in the initialized repo
	type?: string; //type eg git, gitlab, bitbucket
	template_url?: string; // url of template repo to use for creation
};

export type FlavorCrumbSchema = {
	tag_name: string;
	recipe_path: string;
	_copypath: string;
	doughmap: ChoiceCollection;
};
