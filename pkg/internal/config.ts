import { resolve } from 'path';
import { useLog } from '.';
import DEFAULTS from './.config/.defaults.json';
import { useFileList, useHomeDir } from './util';
import {
	CrumbFileNames,
	CrumbOptions,
	COOKIE_CMD_SIG,
	CookieProcessRecipe
} from '../types';
import { COOKIE_CMD_LIST } from './cmd';

export function useCMD(
	options: CrumbOptions
): CookieProcessRecipe {
	let valid: COOKIE_CMD_SIG = 'create';
	const inline = process.argv.slice(2);
	// determine what the context of the command is
	if(inline.length > 0) {
		// command to run, validate it
		const cmd_list = COOKIE_CMD_LIST.filter(cmd => cmd.signature === inline[0]);

		if(cmd_list.length === 1) {
			valid = cmd_list[0].signature;
		}
		if(cmd_list.length > 1) {
			throw 'error: multiple commands detected';
		}
		return {
			cmd: valid,
			crumbs: options
		};
	}
	return {
		cmd: valid,
		crumbs: options
	};
}

export function useConfigList(
	dir: string
): string[] {
	//@ts-ignore
	return useFileList(dir).filter(file => CrumbFileNames.includes(file));
}

export function useDirectoryConfig(
	dir: string
): CrumbOptions | null {
	let match;
	const filesInBase = useFileList(dir);
	CrumbFileNames.forEach(file => {
		if(filesInBase.includes(file)) {
			match = file;
			return;
		}
	});
	if(!match) {
		return null;
	}
	return require(resolve(dir, match));
}

export function useGlobalConfig():
CrumbOptions {
	const wd = process.cwd();
	let match;
	const filesInBase = useFileList(wd);
	CrumbFileNames.forEach(file => {
		if(filesInBase.includes(file)) {
			match = file;
			return;
		}
	});
	if(!match) {
		const home = useHomeDir();
		const filesInHome = useFileList(home);
		CrumbFileNames.forEach(file => {
			if(filesInHome.includes(file)) {
				match = file;
				return;
			}
		});
		if(!match) {
			useLog('no config found, using default settings');
			// todo - maybe prompt for options
			return <CrumbOptions>DEFAULTS;
		}
		else {
			if(match.includes('json')) {
				// return as json
				return <CrumbOptions>require(resolve(home, match));
			}
		}

	}
	if(match.includes('json')) {
		// return as json
		return <CrumbOptions>require(resolve(wd, match));
	}
	// return as string
	//return <CrumbOptions>readFileSync(resolve(base, match), 'utf-8'); //todo - actually set this up
}
