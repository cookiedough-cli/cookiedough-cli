/**
 * CLI Types
 */
export type CLILong = 'language' | 'suppress-errors';
export type CLIShort = 'lang' | 'noerror';
export type CLIShortForm = `-${CLIShort}`;
export type CLILongForm = `--${CLILong}`;
export interface CLIOption<T> {
	short: CLIShortForm;
	long: CLILongForm;
	required: boolean;
	defaultValue: T;
}

/**
 * Runtime Types
 */
// tags for a given project type
export type AllowedTag = 'go' | 'py' | 'js' | 'ts' | 'c' | 'cpp';
// templates for a given tag
export type WebTemplate = 'full' | 'back' | 'front' | 'db';
export type GenericTemplate = 'exe' | 'lib';
export type AnyTemplate = WebTemplate | GenericTemplate;

export type SystemOverview = {
	arch    : string;
	platform: string;
	type    : string;
}

export type VerifiableTag = {
    allowed_inputs: string[];
    tag           : string;
}




export interface DirtyConfig<AllowedTag> {
	tag      : AllowedTag;
	sys     ?: SystemOverview;
	xConfig ?: xBuildConfig<AllowedTag>;
}


export interface xBuildConfig<AllowedTag> {
	buildTag     : AllowedTag;
	buildTemplate: AnyTemplate;
}


export type BuildTemplate<AllowedTag> = {
	tag     : AllowedTag;
	xConfig : xBuildConfig<AllowedTag>;
}
