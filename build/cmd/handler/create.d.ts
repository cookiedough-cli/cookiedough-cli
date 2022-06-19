import { CookieProcessRecipe, CrumbOptions } from '../internal';
export declare type FlavorAttribute = string;
export declare type FlavorAttributes = FlavorAttribute[];
export declare type FlavorDoughType = "list" | "boolean" | "string";
export declare type FlavorDough<T> = {
    name: string;
    type: FlavorDoughType;
    default: T;
    choices?: T[];
};
export declare type FlavorDeclarationJSON = {
    tag_name: string;
    recipe_path: string;
    doughmap: FlavorDough<string | number | boolean>[];
};
export declare function useFlavorPrompt(tag: string, config: CrumbOptions): void | import("../internal").CrumbPromptNoOp;
export declare function useCreate(recipe: CookieProcessRecipe): void;
