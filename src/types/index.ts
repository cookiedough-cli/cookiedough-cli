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

export type PreloadedFileData = {
	extension: string;
	filename: string;
	path: string; //has to have <base> replaced with context when loaded as towrite w/ content
	is_source: boolean;
}

export interface ToWriteFileData extends PreloadedFileData {
	content ?: string;
}

export interface ProjectFileMap {
	sys: SystemOverview;
	base_path: string;
	files ?: ToWriteFileData[];
}
