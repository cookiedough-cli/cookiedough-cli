/**
 * @module Help
 *
 * This file contains the handlers for the `locate` command in the cookiedough cli,
 * and is responsible for printing the location of the most global config file being
 * parsed by the runtime on the local system
 */
import { useHomeDir, log } from '@cookiedough/internal';

export function useLocator(): void {
	const caller_dir = process.cwd();
	const home_dir = useHomeDir();
	// const caller_dir_crumbs = useDirectoryConfig(caller_dir);
	// const home_dir_crumbs = useDirectoryConfig(home_dir);
	// if (caller_dir_crumbs) {
	// 	log(color.fg.green('Crumbs in CWD:'));
	// 	console.log(caller_dir_crumbs);
	// }
	// if (home_dir_crumbs) {
	// 	log(color.fg.green('Crumbs in CWD:'));
	// 	console.log(home_dir_crumbs);
	// }
}
