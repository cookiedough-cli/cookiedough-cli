// default flavors included in the bundle
export type CookieFlavor =
'node'   |
'deno'   |
'go'     |
'c'      |
'c++'	 |
'rust'   |
'python' ;

// path-specific configuration parameters - all optional
export type PathConfigOptions = {
	custom_flavors		?: string; //path to load custom flavor recipes from
	out 				?: string; // base path to use to write new files during processing
	root_config			?: string; // path of parent config to extend
}

// process-specific configuration parameters - all optional
export type ProcessConfigOptions = {
	add_files_from			?: string[]; // directories to copy files into the new project from
	always_use_prompt		?: boolean; // boolean whether to override settings default template in config
	default_template    	?: CookieFlavor; // name of template to run against prompter
	detatched				?: boolean; // run in caller process or spawn its own
	dry						?: boolean; // run without doing anything, just print the would-be output
	log_level				?: 'verbose' | 'silent' | 'minimal';
	log_file				?: string;
	overwrite_existing_out  ?: boolean;
	allow_cwd_write			?: boolean;
}

export type RepositoryConfigOptions = {
	init			?: boolean; //init a repo and enable parsing of other attributes in the type
	type			?: string; //type eg git, gitlab, bitbucket
	template_url	?: string; // url of template repo to use for creation
	ctx_base_path ?: string // child path of the context its written to, to be written to
	submodule_map	?: any; //todo - set up map of submodules to automatically set up in the initialized repo
}

// configuration as an object
export type CrumbOptions = {
	path					?: PathConfigOptions; // path related config options
	process					?: ProcessConfigOptions; // runtime related config options
	repository				?: RepositoryConfigOptions; // options to configure auto repo setup/integrations
}

// valie prefix matchers for the crumb config file
export type CrumbFilePrefix =
'crumb' 	  	|
'crumbs'   	  	|
'cookieconfig' 	|
'cookieconf'   	|
'cookie-config' |
'crumbconf'		|
'crumb-config'	|
'crumbconfig'	;

// valid suffix matchers for the crumb config file
export type CrumbFileSuffix =
'.json' 	| //js
'.yml'  	| //yaml
'.yaml' 	| //yaml
'.js'   	| //js
'.ts'   	| //ts
'.cjs'  	| //js
'.mjs'  	| //js
'.crumb'	| //ini
'.build'	| //ini
'.cookie'  	| //ini
'.make'		| //ini
'.conf'		| //ini parse
'.ini'		| //ini parse
''			; // will work as an ini file if you just use a prefix

export type CrumbFileName = `${CrumbFilePrefix}${CrumbFileSuffix}`;

export const CrumbFileNames: CrumbFileName[] = [
	'crumb.json',
	'crumbs.json',
	'cookie-config.build',
	'cookie-config.json',
	'cookie-config',
	'cookieconf',
	'crumbs.yml',
	'crumbs.build',
	'crumbs.make',
	'cookieconf.yml',
	'cookieconf.make',
	'cookie-config.make'
];
