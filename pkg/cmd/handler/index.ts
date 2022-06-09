/**
 * @module CMD/handler
 * @description map handler callbacks to inline cmd signatures
 */
import {
	CookieFlavor,
	CookieProcessRecipe,
	CrumbOptions,
} from '../../types';
import {
	prompt,
	useDataLog,
	useLog,
} from '../../internal';
import {
	NodeFlavor,
	PyFlavor,
	CFlavor,
	DenoFlavor,
	GoFlavor
} from '../../flavors';
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

export * from './setup-env';
export * from './doctor';
export * from './locate';
