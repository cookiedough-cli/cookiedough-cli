/**
 * Runtime Types
 */
export * from './colors';
export * from './error';
export type SystemOverview = {
	arch     : string;
	cwd      : string;
	platform : string;
	type     : string;
}

export type Tuple = [string, string];
