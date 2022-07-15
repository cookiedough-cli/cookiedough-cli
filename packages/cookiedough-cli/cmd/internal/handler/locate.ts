import { useDirectoryConfig, useHomeDir, log } from '..';
import { color } from 'terminal-color';

export function useLocator(): void {
	const caller_dir = process.cwd();
	const home_dir = useHomeDir();
	const caller_dir_crumbs = useDirectoryConfig(caller_dir);
	const home_dir_crumbs = useDirectoryConfig(home_dir);
	if (caller_dir_crumbs) {
		log(color.fg.green('Crumbs in CWD:'));
		console.log(caller_dir_crumbs);
	}
	if (home_dir_crumbs) {
		log(color.fg.green('Crumbs in CWD:'));
		console.log(home_dir_crumbs);
	}
}
