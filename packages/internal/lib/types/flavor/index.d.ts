export declare type FlavorLanguageInternalConfig<NameOpts, TagType, MapType> = {
    name: NameOpts;
    tags: TagType[];
    maps: MapType[];
};
export declare type FlavorAttribute = string;
export declare type FlavorAttributes = FlavorAttribute[];
export * from './node';
export * from './deno';
export * from './python';
export * from './c';
export * from './go';
