import { useCreate, useDoctor, useInteractiveEdit, useInteractiveEnvSetup, useLocator, useManPage } from '../internal/handler';
import { ListQuestion } from 'inquirer';
export const __COOKIE_ENV__ = '.env';
export const CRUMB_DEFAULT_FILE = '.defaults.json'

export type CLIPrompt = {
	choices	: string[];
	type   	: string;
	name   	: string;
	message	: string;
}

export type CrumbPromptNoOp = Promise<void>;

export type CrumbInlineType = {
	type	 : string | number;
	key		 : string;
	required : boolean;
}

// configuration as an object
export type CrumbOptions = {
	path					?: PathConfigOptions; // path related config options
	process					?: ProcessCrumbs; // runtime related config options
	repository				?: RepositoryCrumbs; // options to configure auto repo setup/integrations
}
export type CookieCMD = {
	alias 		 	?: string[];
	signature	 	: CookieCMDSignature;
	callback		: Function;
	follow_up_with 	?: CrumbInlineType[];
}

export type CookieCMDSignature =
'create' 				|
'doctor' 				|
'edit' 					|
'add' 					|
'locate' 				|
'set' 					|
'setup'					|
'help'					|
'create-flavor'			;

export type CookieProcessRecipe = {
	cmd			: CookieCMD;
	crumbs		: CrumbOptions;
	_raw_args	: string[];
	_raw_cmd	: CookieCMD[];
}

export type LogLevel = 'verbose' | 'silent' | 'minimal';
export type LogType = 'success' | 'info' | 'warning' | 'error';
export type LogFilePath = string;

// process-specific configuration parameters - all optional
export type ProcessCrumbs = {
	add_files_from			?: string[]; // directories to copy files into the new project from
	allow_cwd_write			?: boolean;
	always_use_prompt		?: boolean; // boolean whether to override settings default template in config
	default_flavor    		?: string; // name of template to run against prompter
	detatched				?: boolean; // run in caller process or spawn its own
	dry						?: boolean; // run without doing anything, just print the would-be output
	log_level				?: LogLevel;
	log_file				?: string;
	overwrite_existing_out  ?: boolean;
	shell_prefix			?: string; //prefix the process using this config with a shell wrapper command to run, followed by &&, followed by the process (ie cd ~/)
}
// path-specific configuration parameters - all optional
export type PathConfigOptions = {
	custom_flavors		?: string; //path to load custom flavor recipes from
	out 				?: string; // base path to use to write new files during processing
	root_config			?: string; // path of parent config to extend
}
export type RepositoryCrumbs = {
	ctx_base_path ?: string // child path of the context its written to, to be written to
	init			?: boolean; //init a repo and enable parsing of other attributes in the type
	submodule_map	?: any; //todo - set up map of submodules to automatically set up in the initialized repo
	type			?: string; //type eg git, gitlab, bitbucket
	template_url	?: string; // url of template repo to use for creation
}

export type ValidLogData = any;

export const FlavorInquiry: ListQuestion = {
	type: 'list',
	name: 'flavor',
	message: 'choose project flavor',
	choices: [
		'node'
	]
};

/**
 * Full List of Commands to interpret at runtime
 */
export const CMDList: CookieCMD[] = [
	{
		signature: 'create',
		alias: ['', null],
		callback: useCreate
	},
	{
		signature: 'edit',
		alias: ['edit-env', 'edit-config'],
		callback: useInteractiveEdit
	},
	{
		signature: 'doctor',
		alias: ['fix', 'ihelp'],
		callback: useDoctor
	},
	{
		signature: 'set',
		alias : ['set-env', 'set-config', 'setup-env'],
		callback: useInteractiveEnvSetup
	},
	// {
	// 	signature: 'create-flavor',
	// 	callback: useFl
	// },
	{
		signature: 'locate',
		callback: useLocator
	},
	{
		signature: 'help',
		alias: ['manpage', 'man'],
		callback: useManPage
	}
];
