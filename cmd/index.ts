import { useDefaultHandler } from './handler';
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
			console.log('todo: locate config root');
			break;
		case 'create-local-flavor':
			console.log('todo: generate local flavor');
			break;
		case 'create':
			console.log(recipe);
			break;
		case 'setup-env':
			console.log('todo: setup root env');
			break;
		case 'edit':
			console.log('todo: locate > open with default sys editor');
			break;
		case 'doctor':
			console.log('todo: doctor callbacks');
			break;
	}
	//  const config = useLocalConfig(args.url.parent_config);
	//  useLog('found config:');
	// useDataLog(config);
	// return useDefaultHandler(config);
}
