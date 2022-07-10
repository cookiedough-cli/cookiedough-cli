import { CrumbOptions } from '.';
import {
	prompt,
	FlavorInquiry,
	CookieProcessRecipe,
	useLog
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

/**
 *
 * @param tag the flavor tag to match up with in the enumerated runtime options
 * @param config  config for the local crumb configuration options
 */
export async function useFlavorPrompt(
	tag		: string,
	config	: CrumbOptions
) {
	switch(tag) {
		case 'node':
			const res = await NodeFlavor.usePrompt(config);
			// todo - set up new parser with github raw urls instead of local nested
			console.log(res);
			break;
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
	const { flavor } = await prompt([FlavorInquiry]);
	return await useFlavorPrompt(flavor, {});
}
