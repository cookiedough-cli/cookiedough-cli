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
	console.log(recipe);
	//  const config = useLocalConfig(args.url.parent_config);
	//  useLog('found config:');
	// useDataLog(config);
	// return useDefaultHandler(config);
}
