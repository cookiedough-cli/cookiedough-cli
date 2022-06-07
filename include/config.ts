import { readdirSync } from 'fs';
import { resolve } from 'path';
import { useLog } from '@cookiedough/tools';
import DEFAULTS from '../.config/.defaults.json';
import {
	CrumbFileNames,
	CrumbOptions
} from '@cookiedough/include/types';
export function useArgParser() {
	const inline = process.argv.slice(2);

	if(inline.length === 1) {
		// path for config
		return {
			url: {
				parent_config: inline[0]
			}
		};
	}
	return {
		url: {
			parent_config: '.'
		}
	};
}

export function useLocalConfig(
	base: string
): CrumbOptions {
	let match;
	const filesInBase = readdirSync(base);
	CrumbFileNames.forEach(file => {
		if(filesInBase.includes(file)) {
			match = file;
			return;
		}
	});
	if(!match) {
		useLog('no config found, using default settings');
		// todo - maybe prompt for options
		return <CrumbOptions>DEFAULTS;
	}
	if(match.includes('json')) {
		// return as json
		return <CrumbOptions>require(resolve(base, match));
	}
	// return as string
	//return <CrumbOptions>readFileSync(resolve(base, match), 'utf-8'); //todo - actually set this up
}
