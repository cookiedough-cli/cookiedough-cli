import { CrumbOptions } from '.';
export declare function useDefaultConfig(context_depth: string): any;
export declare function useConfigList(dir: string): string[];
export declare function useDirectoryConfig(dir: string): CrumbOptions | null;
export declare function useGlobalConfigWithCWD(): CrumbOptions;
export declare function useConfig(dir?: string): CrumbOptions;
