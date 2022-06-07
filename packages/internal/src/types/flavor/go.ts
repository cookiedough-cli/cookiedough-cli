import { FlavorAttributes } from ".";

export type GoPresetTag =
'simple-cli'	  |
'simple-webserver'|
'simple-library'  ;

export type GoEnvFlag = 'workspace' | 'module' | 'gopath';

export const DEFAULT_GO_ENV: GoEnvFlag = 'module';

export const GoPresets: FlavorAttributes = [
	'simple-cli',
	'simple-library',
	'simple-webserver'
];

export const GoEnvOptions: FlavorAttributes = [
	'workspace',
	'module',
	'gopath'
]
