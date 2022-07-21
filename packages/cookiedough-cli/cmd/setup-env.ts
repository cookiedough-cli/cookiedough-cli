import { CookieProcessRecipe } from '@cookiedough/types';
import {
	useCopyMachine,
	useHomeDir,
	log,
	useFileList,
} from '@cookiedough/internal';

export function useInteractiveEnvSetup(recipe: CookieProcessRecipe) {
	const home_dir = useHomeDir();
	log(recipe);
}
