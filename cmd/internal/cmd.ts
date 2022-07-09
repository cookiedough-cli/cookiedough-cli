import { useCreate } from './handler';
import {
	CookieProcessRecipe,
	CMDList,
	CookieCMD,
	useDirectoryConfig,
	useDefaultConfig,
	useGlobalConfigWithCWD,
	useManPage
 } from '.';
/**
 *
 * @returns recipe for the called process context
 */
export async function useCMDRecipe():
Promise<CookieProcessRecipe> {

	/**
	 * default to create cmd
	 */
	let valid: CookieCMD<any> = {
		signature: 'create',
		callback: useCreate
	};
	const inline = process.argv.slice(2);
	// todo - set up new arg processor with promises setup
	// if(inline.length > 0) {
	// 	// command to run, validate it
	// 	const cmd_list = CMDList.filter(cmd => cmd.signature === inline[0]);
	// 	if(cmd_list.length === 1) {
	// 		valid = cmd_list[0];
	// 	}
	// 	let crumbs;

	// 	if(inline.length > 1) {
	// 		if(inline.includes('--no-config')) {
	// 			useDefaultConfig().then(val => {
	// 				crumbs = val;
	// 			});
	// 		}
	// 		else if(inline.includes('-c') || inline.includes('--config')) {
	// 			if(valid.signature === 'create' && !inline.includes('create')) {
	// 				crumbs = useDirectoryConfig(inline[1] || '.');
	// 			}
	// 			else {
	// 				crumbs = useDirectoryConfig(inline[2] || '.');
	// 			}
	// 		}
	// 		else {
	// 			crumbs = useGlobalConfigWithCWD();
	// 		}
	// 	}

	// 	const outData = {
	// 		_raw_args: inline,
	// 		_raw_cmd: cmd_list,
	// 		cmd: valid,
	// 		crumbs
	// 	};

	// 	return outData;
	// }
	const crumbs = await useGlobalConfigWithCWD();
	return {
		_raw_args: inline,
		_raw_cmd: [valid],
		cmd: valid,
		crumbs
	};
}
