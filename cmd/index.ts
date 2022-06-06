#!/usr/bin/node
require('module-alias/register');
import { useDefaultHandler } from './handler';
import {
	useArgParser,
	useLocalConfig
} from '@cookiedough/include';

/**
 *
 * @returns entry point to cli
 */
function useCookieDough() {
	const args = useArgParser();
	const config = useLocalConfig(args.url.parent_config);
	return useDefaultHandler(config);
}

useCookieDough();
