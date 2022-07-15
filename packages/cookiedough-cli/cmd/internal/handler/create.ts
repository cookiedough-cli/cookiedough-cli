import { CrumbOptions, retrieveExtern, FlavorCrumbSchema } from '.';
import {
	prompt,
	FlavorInquiry,
	CookieProcessRecipe,
	log,
	ENV_RAW_SOURCE,
	useSysInfo,
} from '..';

export type FlavorAttribute = string;
export type FlavorAttributes = FlavorAttribute[];
export type FlavorDoughType = 'list' | 'boolean' | 'string';

// example inquirer option for definition in the json
export type FlavorDough<T> = {
	name: string;
	type: FlavorDoughType;
	default: T;
	choices?: T[];
};
// file json that the flavor is saved at the base with
export type FlavorDeclarationJSON = {
	tag_name: string;
	recipe_path: string;
	doughmap: FlavorDough<string | number | boolean>[];
};

/**
 *
 * @param tag the flavor tag to match up with in the enumerated runtime options
 * @param config  config for the local crumb configuration options
 */
export async function useFlavorPrompt(tag: string, config: CrumbOptions) {
	const res = await retrieveExtern<FlavorCrumbSchema>(
		`${ENV_RAW_SOURCE}.flavors/${tag}/flavor.json`
	);
	log('flavor config:', 'info');
	log(res);
	log('build config:');
	log(config);
	log('build context:');
	log(useSysInfo());
}

/**
 *
 * @param recipe Recipe of the process resolved from the primer stage of the process
 */
export async function useCreate(recipe: CookieProcessRecipe) {
	const { flavor } = await prompt([FlavorInquiry]);
	log('recipe:', 'info');
	log(recipe);
	return await useFlavorPrompt(flavor, {});
}
