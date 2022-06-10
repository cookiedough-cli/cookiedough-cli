import {
	CookieCMD,
	CookieProcessRecipe,
	CrumbOptions
} from '../types';
import {
	useDefaultConfig,
	useDirectoryConfig,
	useGlobalConfigWithCWD
} from './config';
export const CMDList: CookieCMD[] = [
	{
		signature: 'create',
		alias: ['', null]
	},
	{
		signature: 'edit',
		alias: ['edit-env', 'edit-config']
	},
	{
		signature: 'doctor',
		alias: ['fix', 'ihelp']
	},
	{
		signature: 'set',
		alias : ['set-env', 'set-config']
	},
	{
		signature: 'create-flavor'
	},
	{
		signature: 'locate'
	},
	{
		signature: 'setup',
		alias: ['setup-env']
	},
	{
		signature: 'help',
		alias: ['manpage', 'man']
	}
];

export function useCMDRecipe(): CookieProcessRecipe {
	let valid: CookieCMD = { signature: 'create' };
	const inline = process.argv.slice(2);
	// determine what the context of the command is
	if(inline.length > 0) {
		// command to run, validate it
		const cmd_list = CMDList.filter(cmd => cmd.signature === inline[0]);
		if(cmd_list.length === 1) {
			valid = cmd_list[0];
		}
		let crumbs;

		if(inline.length > 1) {
			if(inline.includes('--no-config')) {
				crumbs = useDefaultConfig('../..');
			}
			else if(inline.includes('-c') || inline.includes('--config')) {
				if(valid.signature === 'create' && !inline.includes('create')) {
					const dirConf = useDirectoryConfig(inline[1] || '.');
					crumbs = dirConf
				}
				else {
					const dirConf = useDirectoryConfig(inline[2] || '.');
					crumbs = dirConf
				}
				console.log(crumbs);
			}
			else {
				crumbs = useGlobalConfigWithCWD();
			}
		}

		return {
			_raw_args: inline,
			_raw_cmd: cmd_list,
			cmd: valid,
			crumbs
		};
	}
	return {
		_raw_args: inline,
		_raw_cmd: [valid],
		cmd: valid,
		crumbs: useGlobalConfigWithCWD()
	};
}
