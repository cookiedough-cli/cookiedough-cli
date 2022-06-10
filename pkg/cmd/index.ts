import {
	useDoctor,
	useInteractiveEnvSetup,
	useCreate,
	useLocator,
	useHelp
} from './handler';
import {
	useLog,
	useCMDRecipe,
	_log
} from '../internal';
/**
 * @public
 * entry point for command-line interface
 * handles the command entered at the top level, then passes to the appropriate handler
 */
export function useCookieDough() {
	// get the config file from either the working directory or the global path
	const recipe = useCMDRecipe();
	if(recipe.crumbs.process && recipe.crumbs.process.log_level && recipe.crumbs.process.log_level === 'verbose' && recipe.cmd.signature !== 'help') {
		useLog('Recipe Found:', 'success');
		console.log(recipe);
	}
	switch(recipe.cmd.signature) {
		case 'locate':
			useLocator();
			break;
		case 'create-local-flavor':
			_log('todo: generate local flavor');
			break;
		case 'create':
			useCreate(recipe);
			break;
		case 'setup-env':
			useInteractiveEnvSetup(recipe);
			break;
		case 'edit':
			_log('todo: locate > open with default sys editor');
			break;
		case 'doctor':
			useDoctor(recipe);
			break;
		case 'help':
			useHelp();
			break;
	}
}
