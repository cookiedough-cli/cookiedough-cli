/**
 * @module Edit
 *
 * This file contains the handlers for the `edit` command in the cookiedough cli,
 * and is responsible for assisting in setting / updating global config crumbs in the user's home directory
 */
import { CookieProcessRecipe } from '@cookiedough/types';
import { log, useHomeDir } from '@cookiedough/internal';

export async function useInteractiveEdit(recipe: CookieProcessRecipe) {
	// const dir_config = await useDirectoryConfig(process.cwd());
	// const home_config = await useDirectoryConfig(useHomeDir());
	// if (dir_config) {
	// 	log('directory config:');
	// 	log(dir_config);
	// }
	// if (home_config) {
	// 	log('global config:');
	// 	log(home_config);
	// }
}
