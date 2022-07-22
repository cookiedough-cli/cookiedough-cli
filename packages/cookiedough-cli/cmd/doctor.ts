/**
 * @module Create
 *
 * This file contains the handlers for the `doctor` command in the cookiedough cli,
 * and is responsible for parsing the information locally and
 * externally to fix a user's local filesystem of any reserved file
 * configurations that are messing with the runtime process
 */
import { log, useHomeDir } from '@cookiedough/internal';
import { CookieProcessRecipe } from '@cookiedough/types';

export function useDoctor(recipe: CookieProcessRecipe) {
	log('reslolved recipe:', 'info');
	log(recipe);
	// log('directory config:', 'info');
	// log(useDirectoryConfig(process.cwd()));
	// log('root config:', 'info');
	// log(useDirectoryConfig(useHomeDir()));
}
