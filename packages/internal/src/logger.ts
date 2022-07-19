import { format } from 'util';
import { LogFilePath, LogType, ValidLogData } from '@cookiedough/types';
import { color } from 'terminal-color';

export function __log(val: string, mode?: string): string {
	switch (mode) {
		case 'yellow':
		case 'warn':
		case 'warning':
		case 'txt-yellow':
			return `[${color.fg.yellow('cookiedough')}] ${val}`;
		case 'blue':
		case 'txt-blue':
		case 'status':
		case 'info':
		case 'log':
			return `[${color.fg.blue('cookiedough')}] ${val}`;
		case 'red':
		case 'txt-red':
		case 'error':
		case 'err':
			return `[${color.fg.red('cookiedough')}] ${val}`;
		case 'green':
		case 'txt-green':
		case 'success':
		case 'ok':
			return `[${color.fg.green('cookiedough')}] ${val}`;
		default:
			return format(color.reset('[cookiedough] %s'), val);
	}
}

export const _warn = (data: ValidLogData) => console.warn(data);
export const _error = (data: ValidLogData) => console.error(data);

export function log(
	data: ValidLogData,
	type?: LogType,
	filePath?: LogFilePath
) {
	if (typeof data === 'object') {
		return console.log(data);
	}
	// todo - handle fs writer if needed
	switch (type) {
		case 'error':
			return _error(__log(type, data));
		case 'warning':
			return _warn(__log(type, data));
		default:
			return console.log(__log(data, type ?? 'info'));
	}
}
