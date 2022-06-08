import { useDefaultHandler } from './handler';
import {
	useDataLog,
	useLog,
	useArgParser,
	useGlobalConfig
} from '@cookiedough/internal';
/**
 * @function useCookieDough
 * @description entry point for command-line interface
 * @returns entry point to cli
 */
export function useCookieDough() {
	const fsConfig = useGlobalConfig();
	const args = useArgParser();

	const pRecipe = {...args, ...fsConfig};
	console.log(pRecipe);
	//  const config = useLocalConfig(args.url.parent_config);
	//  useLog('found config:');
	// useDataLog(config);
	// return useDefaultHandler(config);
}
