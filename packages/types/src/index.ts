/**
 * Runtime Types
 */

export type SystemOverview = {
	arch     : string;
	platform : string;
	type     : string;
	cwd      : string;
}

export type PreloadedFileData = {
	extension		: string;
	filename 		: string;
	path     		: string; //has to have <base> replaced with context when loaded as towrite w/ content
	is_source		: boolean;
}

export interface ToWriteFileData extends PreloadedFileData {
	content 	?: string;
}

export type Tuple = [string, string];

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

export type ProcessRecipe = {
	cmd: COOKIE_CMD_SIG;
}


export * from './config';
export * from './prompt';
export * from './process';
export * from './flavors';
