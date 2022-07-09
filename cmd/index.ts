import {
	useCMDRecipe,
	_log
} from './internal';
/**
 * @public
 * entry point for command-line interface
 * handles the command entered at the top level, then passes to the appropriate handler
 */
export async function useCookieDough() {
	const recipe = await useCMDRecipe();
	/**
	 * print help menu dont return anything
	 */
	if(recipe.cmd.signature === 'help') {
		return console.log(recipe.cmd.callback());
	}

	return recipe.cmd.callback(recipe);
}
