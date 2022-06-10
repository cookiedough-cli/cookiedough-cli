export type FlavorAttribute = string;
export type FlavorAttributes = FlavorAttribute[];

export type FlavorDoughType = "list" | "boolean" | "string";

export type FlavorDough<T> = {
	name: string;
	type: FlavorDoughType;
	default : T;
	choices ?: T[];
}

export type FlavorDeclarationJSON = {
	tag_name: string;
	recipe_path: string;
	doughmap: FlavorDough<string|number|boolean>[]
}

export * from './c';
export * from './go';
export * from './node';
export * from './python';
