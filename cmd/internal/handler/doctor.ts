import {
	CookieProcessRecipe,
	log,
	info,
	useHomeDir,
	useDirectoryConfig
} from '..';

export function useDoctor(
	recipe: CookieProcessRecipe
) {
	info('reslolved recipe:');
	log(recipe);
	info('directory config:')
	log(useDirectoryConfig(process.cwd()));
	info('root config:');
	log(useDirectoryConfig(useHomeDir()));
}
