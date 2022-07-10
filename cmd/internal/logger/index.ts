import { format } from 'util';
import { ValidLogData } from '..';
import { LogFilePath, LogType } from '../../types/log';
import { FgYellow, FgBlue, FgGreen, FgRed, Reset } from './colors';

export function useColor(color: string, val: string): string {
	switch (color) {
		case 'yellow':
		case 'warn':
		case 'warning':
		case 'txt-yellow':
			return format('%s%s\x1b[0m', FgYellow, val);
		case 'blue':
		case 'txt-blue':
		case 'status':
		case 'info':
		case 'log':
			return format('%s%s\x1b[0m', FgBlue, val);
		case 'red':
		case 'txt-red':
		case 'error':
		case 'err':
			return format('%s%s\x1b[0m', FgRed, val);
		case 'green':
		case 'txt-green':
		case 'success':
		case 'ok':
			return format('%s%s\x1b[0m', FgGreen, val);
		default:
			return format('%s%s\x1b[0m', Reset, val);
	}
}

export const _log = (data: ValidLogData): boolean => process.stdout.write(`${data}\n`);
export const log = (msg: any) => console.log(msg);
export const info = (data: ValidLogData) => _log(`${useColor('blue', 'info')}: ${data}`);
export const _warn = (data: ValidLogData) => console.warn(data);
export const _error =(data: ValidLogData) => console.error(data);
export const useDataLog = (o: object | string) => _log(o);

export function useLog(
	data: ValidLogData,
	type?: LogType,
	filePath?: LogFilePath
) {
	// todo - handle fs writer if needed
	switch (type) {
		case 'error':
			return _error(useColor(type, data));
		case 'warning':
			return _warn(useColor(type, data));
		default:
			return _log(useColor(type ?? 'info', data));
	}
}
