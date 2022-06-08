import { useDefaultHandler } from './handler';
import {
	useDataLog,
	useLog,
	useArgParser,
	useLocalConfig,
	useGlobalConfig
} from '@cookiedough/internal';
import { } from '@cookiedough/flavors'
/**
 *
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
