import { CookieProcessRecipe } from '../../types';
import {
	useHomeDir,
	useLog,
	useColor,
	useDataLog,
	prompt,
	useFileList,
	useConfigList
} from '../../internal';

export function useEnvSetup(
	recipe: CookieProcessRecipe
) {
	const home_dir = useHomeDir();
	useDataLog(recipe);
	prompt([
		{
			message: 'enter desired config path',
			name: 'config_path',
			type: 'input',
			default: home_dir
		}
	]).then(answers => {
		// const current_files = useFileList(answers.config_path);
		const current_matches = useConfigList(answers.config_path);
		if(current_matches.length > 0) {
			useLog('current config files:', 'info');
			console.log(current_matches);
		}
	});
}
