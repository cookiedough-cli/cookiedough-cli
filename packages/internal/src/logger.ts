import { format } from 'util';
import { LogFilePath, LogType, ValidLogData } from '@cookiedough/types';
import { color } from 'terminal-color';

/**
 *
 * @param val value to log as a string
 * @param mode color tag to use
 * @returns formatted string ready to be logged
 */
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
/**
 *
 * @param data data to log in warning form
 * @returns nothing
 */
export const _warn = (data: ValidLogData) => console.warn(data);
/**
 *
 * @param data data to log in error form
 * @returns nothing
 */
export const _error = (data: ValidLogData) => console.error(data);

/**
 *
 * @param data data to clean / log
 * @param type type of log to process
 * @param filePath file path of logfile to write event to if applicable
 * @returns
 */
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
			return _error(__log(data, type));
		case 'warning':
			return _warn(__log(data, type));
		default:
			return console.log(__log(data, type ?? 'info'));
	}
}
