import { Tuple, SystemOverview } from '..';

export type GoPreset =
'simple-cli'	  |
'simple-webserver'|
'simple-library'  ;

export type PythonVersion =
'latest' |
'3.8' 	 |
'2.7'	 ;

export type CPackagePreset =
'c'  |
'cpp';

export type CBuildPreset =
'make' |
'cmake';

export type CStandard =
'C99' |
'C11' |
'C17' ;

export type CCStandard =
'C++98' |
'C++03' |
'C++11' |
'C++14' |
'C++17' |
'C++20' ;

export const PythonVersions: PythonVersion[] = [
	'latest',
	'3.8',
	'2.7'
];

export const GoPresets: GoPreset[] = [
	'simple-cli',
	'simple-library',
	'simple-webserver'
];

export const CStandards: CStandard[] = [
	'C99',
	'C11',
	'C17'
];

export const CCStandards: CCStandard[] = [
	'C++98',
	'C++03',
	'C++11',
	'C++14',
	'C++17',
	'C++20'
];

export const CCompilers = [
	'gcc',
	'g++',
	'clang'
];

export * from './node';
export * from './deno';
