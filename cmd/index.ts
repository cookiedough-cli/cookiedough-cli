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
	 console.log(useGlobalConfig());
	 const args = useArgParser();
	 console.log(args);
	//  const config = useLocalConfig(args.url.parent_config);
	//  useLog('found config:');
	// useDataLog(config);
	// return useDefaultHandler(config);
}
