import { useCreate, useLog } from './handler';
import {
	CookieProcessRecipe,
	CMDList,
	useDefaultConfig,
	useGlobalConfigWithCWD,
	useManPage,
	ENV_INLINE_ARGS,
} from '.';
/**
 *
 * @returns recipe for the called process context
 */
export async function useCMDRecipe(): Promise<CookieProcessRecipe> {
	/**
	 * default to create cmd
	 */

	const inline = process.argv.slice(2);
	const args = ENV_INLINE_ARGS.filter(
		(arg) => inline.includes(arg.long) || inline.includes(arg.short)
	);
	if (inline.length <= args.length) {
		useLog(
			'error: args do not match up inline values passed to cookiedough',
			'error'
		);
		useLog(`${inline[inline.length - 1]} does not have a value`);
		process.exit(1);
	}
	// todo - set up new arg processor with promises setup
	const default_config = await useDefaultConfig();
	if (inline.length === 0) {
		return {
			_raw_args: null,
			_raw_cmd: null,
			cmd: {
				signature: 'create',
				callback: useCreate,
			},
			crumbs: default_config,
		};
	}
	const try_signature = inline[0];
	const cmd = CMDList.filter(
		(cmd) => cmd.signature === try_signature
	).shift();
	const crumbs = await useGlobalConfigWithCWD();

	if (!cmd) {
		const create_cmd = CMDList.filter((cmd) => cmd.signature === 'create');

		return {
			_raw_args: args,
			_raw_cmd: create_cmd,
			cmd: create_cmd[0],
			crumbs,
		};
	}

	if (cmd.signature === 'help') {
		useManPage();
	}

	return {
		_raw_args: args,
		_raw_cmd: [cmd],
		cmd,
		crumbs,
	};
}
