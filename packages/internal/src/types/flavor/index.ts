

// export type FlavorLanguagePresetArray = {
// 	name			 : string;
// 	tags			?: string[];
// 	maps			?: string[];
// }[]

export type FlavorLanguageInternalConfig<
NameOpts,
TagType,
MapType
> = {
	name: NameOpts;
	tags: TagType[];
	maps: MapType[];
}


// export const FlavorLanguagePresets = <FlavorLanguageInternalConfig<string, string, string>[]>
// 									$FLAVOR_FILE['.file_types'];


export type FlavorAttribute = string;
export type FlavorAttributes = FlavorAttribute[];

export * from './node';
export * from './deno';
export * from './python';
export * from './c';
export * from './go';

//exports.$FLAVOR_FILE = $FLAVOR_FILE;
