#!/usr/bin/node
require('module-alias/register');
import { useDefaultHandler } from './handler';
import {
	useArgParser,
	useLocalConfig,
	useDataLog,
	useLog
} from '@cookiedough/include';
/**
 *
 * @returns entry point to cli
 */
export function useCookieDough() {
	const args = useArgParser();
	const config = useLocalConfig(args.url.parent_config);
	useLog('found config:');
	useDataLog(config);
	return useDefaultHandler(config);
}
