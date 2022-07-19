import { CookieProcessRecipe } from '@cookiedough/types';
import {
	log,
	useDirectoryConfig,
	useHomeDir
} from '..';

export async function useInteractiveEdit(recipe: CookieProcessRecipe) {
	const dir_config = await useDirectoryConfig(process.cwd());
	const home_config = await useDirectoryConfig(useHomeDir());
	if (dir_config) {
		log('directory config:');
		log(dir_config);
	}
	if (home_config) {
		log('global config:');
		log(home_config);
	}
}
