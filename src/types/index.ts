/**
 * Runtime Types
 */
export type InquirerPrompt = {
	type   : string;
	name   : string;
	message: string;
	choices: string[];
}
export type SystemOverview = {
	arch     : string;
	platform : string;
	type     : string;
	cwd      : string;
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
	filename : string;
	path     : string; //has to have <base> replaced with context when loaded as towrite w/ content
	is_source: boolean;
}

export interface ToWriteFileData extends PreloadedFileData {
	content ?: string;
}

export interface ProjectFileMap {
	sys      : SystemOverview;
	base_path: string;
	add_tests: boolean;
	files    ?: ToWriteFileData[];
}

export type Tuple = [string, string];
export type Mapped<T> = {
	[key: string]: T;
};

export type DizzyConfigOptions = {
	outPath     ?: string;
	dryRun      ?: boolean;
	template    ?: TemplateName;
	customFiles ?: Mapped<string>;
}

export type DizzyFilePrefix =
'dizzy' 	  |
'dizzyfile'   |
'dizzyconfig' |
'dizzyconf'   |
'dizzy-config'

export type DizzyFileSuffix =
'.json' 	|
'.yml'  	|
'.yaml' 	|
'.js'   	|
'.ts'   	|
'.cjs'  	|
'.esm'  	|
'.dizzy'	|
'.build'	|
'.bob'  	|
'.bootstrap'|
'.make'		|
'.conf'		|
''
