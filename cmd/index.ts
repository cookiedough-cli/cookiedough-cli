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
	switch(recipe.cmd) {
		case 'locate':
			return useLocator(recipe);
		case 'create-local-flavor':
			console.log('todo: generate local flavor');
			break;
		case 'create':
			return useDefaultHandler(recipe);
		case 'setup-env':
			return useEnvSetup(recipe);
		case 'edit':
			console.log('todo: locate > open with default sys editor');
			break;
		case 'doctor':
			return useDoctor(recipe);
	}
}
