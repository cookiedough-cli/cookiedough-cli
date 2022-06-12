import {
	useManPage,
	log
} from '../internal';

export function useHelp() {
	log(useManPage());
}
