import { CrumbOptions, retrieveExtern, FlavorCrumbSchema } from '.';
import {
	prompt,
	FlavorInquiry,
	CookieProcessRecipe,
	useLog,
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
	switch (tag) {
		case 'node':
			const res = await retrieveExtern<FlavorCrumbSchema>(
				`${ENV_RAW_SOURCE}.flavors/node/flavor.json`
			);
			useLog('flavor config:', 'info');
			useLog(res);
			useLog('build config:');
			useLog(config);
			useLog('build context:');
			useLog(useSysInfo());
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
export async function useCreate(recipe: CookieProcessRecipe) {
	const { flavor } = await prompt([FlavorInquiry]);
	return await useFlavorPrompt(flavor, {});
}
