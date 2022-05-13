/**
 * CLI Types
 */

export type FromInlineOptions = {
	Lang: string;
	Error: boolean;
}

export type CLILong = 'language' | 'suppress-errors';
export type CLIShort = 'lang' | 'noerror';
export type CLIShortForm = `-${CLIShort}`;
export type CLILongForm = `--${CLILong}`;

export interface CLIOption<T> {
	short        : CLIShortForm;
	long         : CLILongForm;
	required     : boolean;
	defaultValue : T;
}

/**
 * Runtime Types
 */
// templates for a given tag
export type WebTemplate = 'full' | 'back' | 'front' | 'db';
export type GenericTemplate = 'exe' | 'lib';
export type AnyTemplate = WebTemplate | GenericTemplate;

export type SystemOverview = {
	arch     : string;
	platform : string;
	type     : string;
	cwd      : string;
}

export interface CLIConfig {
	template      : '';
	sys     ?: SystemOverview;
}
export type TemplateName =
'node'   |
'deno'   |
'go'     |
'c'      |
'c++'	 |
'rust'   |
'python' ;

