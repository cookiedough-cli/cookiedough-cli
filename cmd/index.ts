#!/usr/bin/node
require('module-alias/register');
import { useDefaultHandler } from './handler';
import {
	useArgParser,
	useLocalConfig
} from '@cookiedough/include';
import { useDataLog, useLog } from '@cookiedough/tools'
// import { useSpinner } from './handler/spinner';

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
