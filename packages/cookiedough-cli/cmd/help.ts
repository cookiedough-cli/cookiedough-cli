/**
 * @module Help
 *
 * This file contains the handlers for the `help` command in the cookiedough cli,
 * and is responsible for printing the manpage
 */
import { useManPage, log } from '@cookiedough/internal';

export async function useHelp() {
	log(useManPage());
}
