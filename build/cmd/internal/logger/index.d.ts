import { LogFilePath, LogType, ValidLogData } from '..';
export declare function useColor(color: string, val: string): string;
export declare function _log(data: ValidLogData): boolean;
export declare function log(msg: any): void;
export declare function info(data: ValidLogData): boolean;
export declare function _warn(data: ValidLogData): void;
export declare function _error(data: ValidLogData): void;
export declare function useLog(data: ValidLogData, type?: LogType, filePath?: LogFilePath): boolean | void;
export declare function useDataLog(o: object | string): boolean;
