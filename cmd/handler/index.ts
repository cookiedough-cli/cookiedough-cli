/**
 * @module CMD/handler
 * @description map handler callbacks to inline cmd signatures
 */
import {
	CookieFlavor,
	CookieProcessRecipe,
	CrumbOptions,
} from '@cookiedough/types';
import {
	prompt,
	useDataLog,
	useLog,
} from '@cookiedough/internal';
import {
	NodeFlavor,
	PyFlavor,
	CFlavor,
	DenoFlavor,
	GoFlavor
} from 'packages/flavors/lib';
import { FlavorInquiry } from './constants';

export function useDefaultHandler(
	recipe: CookieProcessRecipe
) {
	if(recipe.crumbs.process.dry) {
		useLog('dry mode, exiting', 'info');
		return;
	}
	if(recipe.crumbs.process.default_template) {
		useLog('default template chosen:', 'success');
		useDataLog(recipe.crumbs.process.default_template);
		return;
	}
	else {
		prompt([FlavorInquiry]).then(({flavor}) => useFlavorPrompt(flavor, recipe.crumbs))//.then((options: { template: CookieFlavor }) => usePrompt(options.template, config.path.out));
	}
	// todo- validate path, or create it
	// todo- handle detatched option
	// todo- handle dry option
	//const cConfig = require(confPath);
	// if(!cConfig.path.out) {
	// 	warn('no outpath set in config');
	// }
	// console.log(cConfig.path.out);


}

function useFlavorPrompt(
	tag: CookieFlavor,
	config: CrumbOptions
) {
	switch(tag) {
		case 'c':
		case 'c++':
			return CFlavor.usePrompt(config);
		case 'go':
			return GoFlavor.usePrompt(config);
		case 'deno':
			return DenoFlavor.usePrompt(config);
		case 'python':
			return PyFlavor.usePrompt(config);
		case 'node':
			return NodeFlavor.usePrompt(config);
		default:
			useLog('template name invalid', 'error');
			process.exit(1);
	}
}

export function useDoctor(
	recipe: CookieProcessRecipe
) {
	console.log('todo: doctor');
	console.log(recipe);
}

export function useEnvSetup(
	recipe: CookieProcessRecipe
) {
	console.log('todo: env setup');
	console.log(recipe);
}

export function useLocator(
	recipe: CookieProcessRecipe
) {
	console.log('todo: locator');
	console.log(recipe);
}
