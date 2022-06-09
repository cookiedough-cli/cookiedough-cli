// default flavors included in the bundle
export type CookieFlavor =
'node'   |
'deno'   |
'go'     |
'c'      |
'c++'	 |
'rust'   |
'python' ;



export type CrumbFileName = `${string}.json` | '.cookie';

export const CrumbFileNames: CrumbFileName[] = [
	'.cookie',
	'cookie.json',
	'cookies.json',
	'cookie-config.json',
	'crumb.json',
	'crumbs.json'
];
