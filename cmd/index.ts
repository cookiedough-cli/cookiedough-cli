import {
	useDoctor,
	useEnvSetup,
	useDefaultHandler,
	useLocator
} from './handler';
import {
	useDataLog,
	useLog,
	useCMD,
	useGlobalConfig
} from '@cookiedough/internal';
/**
 * @function useCookieDough
 * @description entry point for command-line interface
 * @returns entry point to cli
 */
export function useCookieDough() {
	const recipe = useCMD(useGlobalConfig());
	if(recipe.crumbs.process.log_level === 'verbose') {
		useLog('Recipe Found:', 'success');
		console.log(recipe);
	}
	switch(recipe.cmd) {
		case 'locate':
			useLocator();
			break;
		case 'create-local-flavor':
			console.log('todo: generate local flavor');
			break;
		case 'create':
			useDefaultHandler(recipe);
			break;
		case 'setup-env':
			useEnvSetup(recipe);
			break;
		case 'edit':
			console.log('todo: locate > open with default sys editor');
			break;
		case 'doctor':
			useDoctor(recipe);
			break;
	}
}
