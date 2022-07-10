import { useCMDRecipe, useDefaultConfig, _log } from './internal';
/**
 * @public
 * entry point for command-line interface
 * handles the command entered at the top level, then passes to the appropriate handler
 */
export async function useCookieDough() {
	const recipe = await useCMDRecipe();
	if (!recipe.crumbs) {
		recipe.crumbs = await useDefaultConfig();
	}
	// console.log('recipe:');
	// console.log(recipe);
	/**
	 * print help menu dont return anything
	 */
	if (recipe.cmd.signature === 'help') {
		return _log(await recipe.cmd.callback());
	}

	return recipe.cmd.callback(recipe);
}
