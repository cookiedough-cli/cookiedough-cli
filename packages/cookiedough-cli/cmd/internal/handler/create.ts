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

export type ExternFlavorFileData = {
	filename: string;
	_writename: string;
}
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
			_prefix: string,
			_writeable: ExternFlavorFileData[];
			_fixtures: string;
		}
	}
}
/**
 *
 * @param tag the flavor tag to match up with in the enumerated runtime options
 * @param config  config for the local crumb configuration options
 */
export async function useFlavorPrompt(tag: string, config: CrumbOptions) {
	const flavor_schema = await retrieveExtern<FlavorCrumbSchema>(
		`${ENV_RAW_SOURCE}.flavors/${tag}/flavor.json`
	);
	const flavor_dough = await retrieveExtern<FlavorDoughMap>(
		`${ENV_RAW_SOURCE}.flavors/${tag}/doughmap.json`
	);

	log('flavor config:', 'info');
	log(flavor_schema);
	log('build config:');
	log(config);
	log('build context:');
	log(useSysInfo());

	log(flavor_dough);
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
