import { CookieProcessRecipe } from '@cookiedough/types';
import { resolve } from 'path';
import {
	useHomeDir,
	log,
	prompt,
	useFileList,
	useConfigList,
	useCopyMachine,
} from '..';

export function useInteractiveEnvSetup(recipe: CookieProcessRecipe) {
	const home_dir = useHomeDir();
	log(recipe);

}
