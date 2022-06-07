/**
 * Runtime Types
 */
export declare type SystemOverview = {
    arch: string;
    platform: string;
    type: string;
    cwd: string;
};
export declare type PreloadedFileData = {
    extension: string;
    filename: string;
    path: string;
    is_source: boolean;
};
export interface ToWriteFileData extends PreloadedFileData {
    content?: string;
}
export declare type Tuple = [string, string];
export * from './config';
export * from './prompt';
export * from './process';
