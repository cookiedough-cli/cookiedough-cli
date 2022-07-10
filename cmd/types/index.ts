/**
 * Runtime Types
 */
export * from './colors';
export * from './error';
export * from './crumbs';
export * from './log';

export type SystemOverview = {
	arch: string;
	cwd: string;
	platform: string;
	type: string;
	home: string;
};

export type Tuple = [string, string];
