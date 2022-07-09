import {
	useManPage,
	log
} from '..';

export async function useHelp() {
	log(useManPage());
}
