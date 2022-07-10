import { CookieProcessRecipe } from '.';
import { log, useDirectoryConfig, useHomeDir } from '..';

export function useInteractiveEdit(recipe: CookieProcessRecipe) {
	const dir_config = useDirectoryConfig(process.cwd());
	const home_config = useDirectoryConfig(useHomeDir());
	if (dir_config) {
		log('directory config:');
		log(dir_config);
	}
	if (home_config) {
		log('global config:');
		log(home_config);
	}
}
