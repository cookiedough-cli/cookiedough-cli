import { FlavorAttributes } from ".";
export declare type GoPresetTag = 'simple-cli' | 'simple-webserver' | 'simple-library';
export declare type GoEnvFlag = 'workspace' | 'module' | 'gopath';
export declare const DEFAULT_GO_ENV: GoEnvFlag;
export declare const GoPresets: FlavorAttributes;
export declare const GoEnvOptions: FlavorAttributes;
