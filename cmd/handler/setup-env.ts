import { CookieProcessRecipe } from '.';
import {
	useHomeDir,
	useLog,
	useColor,
	useDataLog,
	prompt,
	useFileList,
	useConfigList,
	useCopyMachine
} from '../internal';
import { resolve } from 'path';

export function useInteractiveEnvSetup(
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
		else {
			const out_path = answers.config_path.includes('.json') ? answers.config_path : resolve(answers.config_path, 'crumbs.json');
			useCopyMachine(resolve(__dirname, '../../../.config/.defaults.json'), out_path);
			useLog(`wrote config files to: ${out_path}`, 'success');
		}
	});
}
