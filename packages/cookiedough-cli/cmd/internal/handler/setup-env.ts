import { CookieProcessRecipe } from '@cookiedough/types';
import { resolve } from 'path';
import {
	prompt,
	useConfigList,
} from '..';
import {
	useCopyMachine,
	useHomeDir,
	log,
	useFileList,
} from '@cookiedough/internal'
export function useInteractiveEnvSetup(recipe: CookieProcessRecipe) {
	const home_dir = useHomeDir();
	log(recipe);

}
