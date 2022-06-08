import {
	CookieFlavor,
	PathConfigOptions
} from '.';

export type LogLevel = 'verbose' | 'silent' | 'minimal';

// process-specific configuration parameters - all optional
export type ProcessCrumbs = {
	add_files_from			?: string[]; // directories to copy files into the new project from
	always_use_prompt		?: boolean; // boolean whether to override settings default template in config
	default_template    	?: CookieFlavor; // name of template to run against prompter
	detatched				?: boolean; // run in caller process or spawn its own
	dry						?: boolean; // run without doing anything, just print the would-be output
	log_level				?: LogLevel;
	log_file				?: string;
	overwrite_existing_out  ?: boolean;
	allow_cwd_write			?: boolean;
}

export type RepositoryCrumbs = {
	init			?: boolean; //init a repo and enable parsing of other attributes in the type
	type			?: string; //type eg git, gitlab, bitbucket
	template_url	?: string; // url of template repo to use for creation
	ctx_base_path ?: string // child path of the context its written to, to be written to
	submodule_map	?: any; //todo - set up map of submodules to automatically set up in the initialized repo
}

// configuration as an object
export type CrumbOptions = {
	path					?: PathConfigOptions; // path related config options
	process					?: ProcessCrumbs; // runtime related config options
	repository				?: RepositoryCrumbs; // options to configure auto repo setup/integrations
}
export type CookieCMD = {
	signature	 : COOKIE_CMD_SIG;
	alias 		?: string[];
}

export type COOKIE_CMD_SIG =
'create' 				|
'doctor' 				|
'edit' 					|
'add' 					|
'locate' 				|
'set' 					|
'setup-env'				|
'create-local-flavor'	;

export type ValidLogData = any;

export type LogType = 'success' | 'info' | 'warning' | 'error';

export type LogFilePath = string;

export type CookieProcessRecipe = {
	cmd			: COOKIE_CMD_SIG;
	crumbs		: CrumbOptions;
}
