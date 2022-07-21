export * from './node';

export type FlavorAttribute = string;
export type FlavorAttributes = FlavorAttribute[];
export type FlavorDoughType = 'list' | 'boolean' | 'string';

export type ExternFlavorFileData = {
	filename: string;
	_writename: string;
};
// example inquirer option for definition in the json
export type FlavorDough<T> = {
	name: string;
	type: FlavorDoughType;
	default: T;
	choices?: T[];
};

export type FlavorDoughMap = {
	root_key: string;
	preset: {
		[key: string]: {
			_prefix: string;
			_writeable: ExternFlavorFileData[];
			_fixtures: string;
		};
	};
};
