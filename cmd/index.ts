import {
	useDoctor,
	useInteractiveEnvSetup,
	useCreate,
	useLocator,
	useHelp,
	useInteractiveEdit
} from './handler';
import {
	useCMDRecipe,
	_log
} from './internal';
/**
 * @public
 * entry point for command-line interface
 * handles the command entered at the top level, then passes to the appropriate handler
 */
export function useCookieDough() {
	const recipe = useCMDRecipe();
	switch(recipe.cmd.signature) {
		case 'locate':
			useLocator();
			break;
		case 'create-flavor':
			_log('todo: generate local flavor');
			break;
		case 'create':
			useCreate(recipe);
			break;
		case 'setup':
			useInteractiveEnvSetup(recipe);
			break;
		case 'edit':
			useInteractiveEdit(recipe);
			break;
		case 'doctor':
			useDoctor(recipe);
			break;
		case 'help':
			useHelp();
			break;
		default:
			useHelp();
			break;
	}
}
