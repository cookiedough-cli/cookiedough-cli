import { log, useHomeDir, useDirectoryConfig } from '..';
import { CookieProcessRecipe } from '@cookiedough/types';

export function useDoctor(recipe: CookieProcessRecipe) {
	log('reslolved recipe:', 'info');
	log(recipe);
	log('directory config:', 'info');
	log(useDirectoryConfig(process.cwd()));
	log('root config:', 'info');
	log(useDirectoryConfig(useHomeDir()));
}
