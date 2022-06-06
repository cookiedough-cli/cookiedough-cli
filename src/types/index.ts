/**
 * Runtime Types
 */
export type InquirerPrompt = {
	type   	: string;
	name   	: string;
	message	: string;
	choices	: string[];
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
	extension		: string;
	filename 		: string;
	path     		: string; //has to have <base> replaced with context when loaded as towrite w/ content
	is_source		: boolean;
}

export interface ToWriteFileData extends PreloadedFileData {
	content 	?: string;
}

export interface ProjectFileMap {
	sys      	: SystemOverview;
	base_path	: string;
	add_tests	: boolean;
	files    	?: ToWriteFileData[];
}

export type Tuple = [string, string];

export type DizzyPathConfigOptions = {
	out 				?: string; // base path to use to write new files during processing
	process_root		?: string; // root of process scope
	parent_path			?: string; // path of parent config to extend
}

export type DizzyProcessConfigOptions = {
	detatched	?: boolean; // run in caller process or spawn its own
	dry			?: boolean; // run without doing anything, just print the would-be output
}

export type DizzyConfigOptions = {
	path					?: DizzyPathConfigOptions; // path related config options
	process					?: DizzyProcessConfigOptions; // runtime related config options
	default_template    	?: TemplateName; // name of template to run against prompter
	add_files_from			?: string[]; // directories to copy files into the new project from
	always_use_prompt		?: boolean; // boolean whether to override settings default template in config
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
