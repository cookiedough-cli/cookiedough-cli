export type CookieFlavor =
'node'   |
'deno'   |
'go'     |
'c'      |
'c++'	 |
'rust'   |
'python' ;

export type CrumbPathConfigOptions = {
	out 				?: string; // base path to use to write new files during processing
	process_root		?: string; // root of process scope
	parent_config		?: string; // path of parent config to extend
}

export type CrumbProcessConfigOptions = {
	detatched	?: boolean; // run in caller process or spawn its own
	dry			?: boolean; // run without doing anything, just print the would-be output
}

export type CrumbConfigOptions = {
	path					?: CrumbPathConfigOptions; // path related config options
	process					?: CrumbProcessConfigOptions; // runtime related config options
	default_template    	?: CookieFlavor; // name of template to run against prompter
	add_files_from			?: string[]; // directories to copy files into the new project from
	always_use_prompt		?: boolean; // boolean whether to override settings default template in config
}

export type CrumbFilePrefix =
'crumb' 	  	|
'crumbs'   	  	|
'cookieconfig' 	|
'cookieconf'   	|
'cookie-config' |
'crumbconf'		|
'crumb-config'	|
'crumbconfig'	;

export type CrumbFileSuffix =
'.json' 	|
'.yml'  	|
'.yaml' 	|
'.js'   	|
'.ts'   	|
'.cjs'  	|
'.esm'  	|
'.crumb'	|
'.build'	|
'.cookie'  	|
'.make'		|
'.conf'		|
'.ini'		|
''

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
