import { ANSIEffect } from '../types';
import { format } from 'util';
import {
	LogFilePath,
	LogType,
	ValidLogData
} from '../types';

export const Reset: ANSIEffect = '\x1b[0m';

export const Bright: ANSIEffect = '\x1b[1m';
export const Dim: ANSIEffect = '\x1b[2m';
export const Underscore: ANSIEffect = '\x1b[4m';
export const Blink: ANSIEffect = '\x1b[5m';
export const Reverse: ANSIEffect = '\x1b[7m';
export const Hidden: ANSIEffect = '\x1b[8m';

export const FgBlack = '\x1b[30m';
export const FgRed = '\u001b[31m';
export const FgGreen = '\x1b[32m';
export const FgYellow = '\x1b[33m';
export const FgBlue = '\x1b[34m';
export const FgMagenta = '\x1b[35m';
export const FgCyan = '\x1b[36m';
export const FgWhite = '\x1b[37m';

export const BgBlack = '\x1b[40m';
export const BgRed = '\x1b[41m';
export const BgGreen = '\x1b[42m';
export const BgYellow = '\x1b[43m';
export const BgBlue = '\x1b[44m';
export const BgMagenta = '\x1b[45m';
export const BgCyan = '\x1b[46m';
export const BgWhite = '\x1b[47m';

export function useColor(
	color		: string,
	val			: string
): string {
	switch(color) {
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

export function _log(
	data		: ValidLogData
): boolean {
	return process.stdout.write(`${data}\n`);
}

export function _warn(
	data		: ValidLogData
) {
	return console.warn(data);
}

export function _error(
	data		: ValidLogData
) {
	return console.error(data);
}

export function useLog(
	data		: ValidLogData,
	type		?: LogType,
	filePath 	?: LogFilePath
) {
	// todo - handle fs writer if needed
	switch(type) {
		case 'error':
			return _error(useColor(type, data));
		case 'warning':
			return _warn(useColor(type, data));
		default:
			return _log(useColor(type ?? 'info', data));
	}
}

export function useDataLog(
	o: object | string
) {
	return _log(o);
}
