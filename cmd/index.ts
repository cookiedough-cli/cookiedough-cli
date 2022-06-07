#!/usr/bin/node
require('module-alias/register');
import { useDefaultHandler } from './handler';
import {
	useDataLog,
	useLog,
	useArgParser,
	useLocalConfig,
	useGlobalConfig
} from '@cookiedough/internal';
/**
 *
 * @returns entry point to cli
 */
export function useCookieDough() {
	 console.log(useGlobalConfig());
	 const args = useArgParser();
	 const config = useLocalConfig(args.url.parent_config);
	 useLog('found config:');
	// useDataLog(config);
	// return useDefaultHandler(config);
}
