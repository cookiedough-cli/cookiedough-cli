#!/usr/bin/node
require('module-alias/register');
import { useDefaultHandler } from './handler';
import {
	useArgParser,
	useLocalConfig
} from '@cookiedough/include';
// import { useSpinner } from './handler/spinner';

/**
 *
 * @returns entry point to cli
 */
export function useCookieDough() {
	const args = useArgParser();
	const config = useLocalConfig(args.url.parent_config);
	console.log('found config:');
	console.log(config);
	return useDefaultHandler(config);
}
