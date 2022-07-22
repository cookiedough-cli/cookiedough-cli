/**
 * @module Create
 *
 * This file contains the handlers for the `create` command in the cookiedough cli,
 * and is responsible for parsing the information locally and
 * externally to build a user's project the way they want.
 */
import {
	CookieProcessRecipe,
	CrumbOptions,
	FlavorCrumbSchema,
	ENV_RAW_SOURCE,
	FlavorDoughMap,
} from '@cookiedough/types';
import { retrieveExtern, log, useSysInfo } from '@cookiedough/internal';
import { prompt, FlavorInquiry } from './handle';

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
