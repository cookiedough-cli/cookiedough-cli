import { format } from 'util';
import { ValidLogData } from '..';
import { LogFilePath, LogType } from '../../types/log';
import { FgYellow, FgBlue, FgGreen, FgRed, Reset } from './colors';

const __ansi_reset = (data: string) => `${data}${Reset}`;

export function useStatusColor(color: string, val: string): string {
	switch (color) {
		case 'yellow':
		case 'warn':
		case 'warning':
		case 'txt-yellow':
			return format(
				__ansi_reset('[%scookiedough%s] %s'),
				FgYellow,
				Reset,
				val
			);
		case 'blue':
		case 'txt-blue':
		case 'status':
		case 'info':
		case 'log':
			return format(
				__ansi_reset('[%scookiedough%s] %s'),
				FgBlue,
				Reset,
				val
			);
		case 'red':
		case 'txt-red':
		case 'error':
		case 'err':
			return format(
				__ansi_reset('[%scookiedough%s] %s'),
				FgRed,
				Reset,
				val
			);
		case 'green':
		case 'txt-green':
		case 'success':
		case 'ok':
			return format(
				__ansi_reset('[%scookiedough%s] %s'),
				FgGreen,
				Reset,
				val
			);
		default:
			return format(__ansi_reset('[cookiedough] %s'), Reset, val);
	}
}

export const _log = (data: ValidLogData): boolean =>
	process.stdout.write(`${data}\n`);
export const log = (msg: any) => console.log(msg);
export const info = (data: ValidLogData) =>
	_log(`${useStatusColor('blue', 'info')}: ${data}`);
export const _warn = (data: ValidLogData) => console.warn(data);
export const _error = (data: ValidLogData) => console.error(data);
export const useDataLog = (o: object | string) => _log(o);

export function useLog(
	data: ValidLogData,
	type?: LogType,
	filePath?: LogFilePath
) {
	if (typeof data === 'object') {
		return log(data);
	}
	// todo - handle fs writer if needed
	switch (type) {
		case 'error':
			return _error(useStatusColor(type, data));
		case 'warning':
			return _warn(useStatusColor(type, data));
		default:
			return _log(useStatusColor(type ?? 'info', data));
	}
}
