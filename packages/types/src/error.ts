
export type GenericErrType = 'crumb_parse' | 'write_fs';
export type GenericErrNo = number;
export type GenericError<
T extends GenericErrType,
N extends GenericErrNo
> = {
	msg				: 'cookiedough error';
	type			: T;
	no				: N;
}

export type CrumbParseError = GenericError<"crumb_parse", 100>
export type RecipeWriterError = GenericError<"write_fs", 9000>
