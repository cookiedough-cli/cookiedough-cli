export type FlavorLanguageInternalConfig<
NameOpts,
TagType,
MapType
> = {
	name: NameOpts;
	tags: TagType[];
	maps: MapType[];
}

export type FlavorAttribute = string;
export type FlavorAttributes = FlavorAttribute[];

export * from './c';
export * from './deno';
export * from './go';
export * from './node';
export * from './python';
