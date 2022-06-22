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
	return recipe.cmd.callback(recipe);
}
