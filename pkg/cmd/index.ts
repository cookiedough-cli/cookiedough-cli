import {
	useDoctor,
	useInteractiveEnvSetup,
	useDefaultHandler,
	useLocator
} from './handler';
import {
	useLog,
	useCMDRecipe,
	useGlobalConfigWithCWD
} from '../internal';
/**
 * @public
 * entry point for command-line interface
 * handles the command entered at the top level, then passes to the appropriate handler
 */
export function useCookieDough() {
	// get the config file from either the working directory or the global path
	const recipe = useCMDRecipe(useGlobalConfigWithCWD());
	if(recipe.crumbs.process.log_level === 'verbose') {
		useLog('Recipe Found:', 'success');
		console.log(recipe);
	}
	switch(recipe.cmd.signature) {
		case 'locate':
			useLocator();
			break;
		case 'create-local-flavor':
			console.log('todo: generate local flavor');
			break;
		case 'create':
			useDefaultHandler(recipe);
			break;
		case 'setup-env':
			useInteractiveEnvSetup(recipe);
			break;
		case 'edit':
			console.log('todo: locate > open with default sys editor');
			break;
		case 'doctor':
			useDoctor(recipe);
			break;
	}
}
