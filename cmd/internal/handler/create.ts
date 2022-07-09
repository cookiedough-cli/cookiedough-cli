import {
	prompt,
	useDataLog,
	FlavorInquiry,
	CookieProcessRecipe,
	useLog,
	CrumbOptions
} from '..';
import * as NodeFlavor from './flavors/node';

export type FlavorAttribute = string;
export type FlavorAttributes = FlavorAttribute[];
export type FlavorDoughType = "list" | "boolean" | "string";

// example inquirer option for definition in the json
export type FlavorDough<T> = {
	name: string;
	type: FlavorDoughType;
	default : T;
	choices ?: T[];
}
// file json that the flavor is saved at the base with
export type FlavorDeclarationJSON = {
	tag_name: string;
	recipe_path: string;
	doughmap: FlavorDough<string|number|boolean>[]
}

// prompt for a given flavor based on the map in the json
export function useFlavorPrompt(
	tag		: string,
	config	: CrumbOptions
) {
	switch(tag) {
		case 'node':
			return NodeFlavor.usePrompt(config);
		default:
			useLog('template name invalid', 'error');
			process.exit(0);
	}
}

/**
 *
 * @param recipe Recipe of the process resolved from the primer stage of the process
 */
export async function useCreate(
	recipe	: CookieProcessRecipe
) {
	console.log(recipe);
	const { flavor } = await prompt([FlavorInquiry]);
	console.log(flavor);
	return useFlavorPrompt(flavor, {});
}
