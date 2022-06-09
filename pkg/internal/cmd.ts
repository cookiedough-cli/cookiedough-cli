import {
	CookieCMD,
	COOKIE_CMD_SIG,
	CookieProcessRecipe,
	CrumbOptions
} from '../types';

export const COOKIE_CMD_LIST: CookieCMD[] = [
	{
		signature: 'create',
		alias: [
			'',
			null
		]
	},
	{
		signature: 'edit'
	},
	{
		signature: 'doctor'
	},
	{
		signature: 'set'
	},
	{
		signature: 'create-local-flavor'
	},
	{
		signature: 'locate'
	},
	{
		signature: 'setup-env'
	}
];

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
			_raw_args: inline,
			cmd: valid,
			crumbs: options
		};
	}
	return {
		_raw_args: inline,
		cmd: valid,
		crumbs: options
	};
}
