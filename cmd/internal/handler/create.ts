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
export function useCreate(
	recipe	: CookieProcessRecipe
) {
	recipe.crumbs.then(val => {
		if(val.process && val.process.log_level && val.process.log_level === 'verbose' && recipe.cmd.signature !== 'help') {
			useLog('Recipe Found:', 'success');
			console.log(recipe);
		}
		if(val.process.dry) {
			useLog('dry mode, exiting', 'info');
			return;
		}
		if(val.process.default_flavor) {
			useLog('default flavor chosen:', 'success');
			useDataLog(val.process.default_flavor);
			return;
		}
		else {
			prompt([FlavorInquiry]).then(({flavor}) =>
			useFlavorPrompt(flavor, val));
		}
	});

}
