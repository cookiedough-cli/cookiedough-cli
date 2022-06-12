import {
	prompt,
	useDataLog,
	FlavorInquiry,
	CookieProcessRecipe,
	useLog,
	DoughFlavor,
	CrumbOptions
} from '../internal';
import * as NodeFlavor from './flavors/_handle/node';

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
	tag		: DoughFlavor,
	config	: CrumbOptions
) {
	switch(tag) {
		case 'node':
			return NodeFlavor.usePrompt(config);
		default:
			useLog('template name invalid', 'error');
			process.exit(1);
	}
}
export function useCreate(
	recipe	: CookieProcessRecipe
) {
	if(recipe.crumbs.process && recipe.crumbs.process.log_level && recipe.crumbs.process.log_level === 'verbose' && recipe.cmd.signature !== 'help') {
		useLog('Recipe Found:', 'success');
		console.log(recipe);
	}
	if(recipe.crumbs.process.dry) {
		useLog('dry mode, exiting', 'info');
		return;
	}
	if(recipe.crumbs.process.default_flavor) {
		useLog('default flavor chosen:', 'success');
		useDataLog(recipe.crumbs.process.default_flavor);
		return;
	}
	else {
		prompt([FlavorInquiry]).then(({flavor}) =>
		useFlavorPrompt(flavor, recipe.crumbs));
	}
}
