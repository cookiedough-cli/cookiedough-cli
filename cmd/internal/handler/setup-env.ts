import { CookieProcessRecipe } from '.';
import {
	useHomeDir,
	log,
	prompt,
	useFileList,
	useConfigList,
	useCopyMachine,
} from '..';
import { resolve } from 'path';

export function useInteractiveEnvSetup(recipe: CookieProcessRecipe) {
	const home_dir = useHomeDir();
	log(recipe);
	prompt([
		{
			message: 'enter desired config path',
			name: 'config_path',
			type: 'input',
			default: home_dir,
		},
	]).then((answers) => {
		// const current_files = useFileList(answers.config_path);
		const current_matches = useConfigList(answers.config_path);
		if (current_matches.length > 0) {
			log('current config files:', 'info');
			console.log(current_matches);
		} else {
			const out_path = answers.config_path.includes('.json')
				? answers.config_path
				: resolve(answers.config_path, 'crumbs.json');
			useCopyMachine(
				resolve(__dirname, '../../../.env/.defaults.json'),
				out_path
			);
			log(`wrote config files to: ${out_path}`, 'success');
		}
	});
}
