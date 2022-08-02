/**
 * @module setup-env
 *
 * This file contains the handlers for the `setup-env` command in the cookiedough cli,
 * and is responsible for assisting in the global config setup to the user's liking in an interactive prompter
 */
import { CookieProcessRecipe } from '@cookiedough/types';
import {
	useCopyMachine,
	useHomeDir,
	log,
	useFileList,
} from '@cookiedough/internal';

export function useInteractiveEnvSetup(recipe: CookieProcessRecipe) {
	const home_dir = useHomeDir();
	log(home_dir);
	log(recipe);
}
