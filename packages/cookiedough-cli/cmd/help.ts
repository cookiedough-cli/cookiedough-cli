import { useManPage, log } from '@cookiedough/internal';

export async function useHelp() {
	log(useManPage());
}
