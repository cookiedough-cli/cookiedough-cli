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
