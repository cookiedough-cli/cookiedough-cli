/**
 * Log Types
 */
 export const LogLevels = [
	'verbose',
	'silent',
	'minimal'
] as const;
export type LogLevel = typeof LogLevels[number];
export const LogTypes = [
	'success',
	'info',
	'warning',
	'error'
] as const;
export type LogType = typeof LogTypes[number];
export type LogFilePath = string;
