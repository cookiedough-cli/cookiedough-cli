import $FLAVOR_FILE from '@cookiedough/.config/flavors.json';
import { FlavorLanguagePresets } from '.';
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

export type CFlavorPresetTag =
'c'  |
'c++';

export const CFlavorPresetTags: CFlavorPresetTag[] = <CFlavorPresetTag[]>
FlavorLanguagePresets.filter(opt => opt.name === 'c').shift().maps;
