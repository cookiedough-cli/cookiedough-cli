import {
	CookieFlavor,
	InquirerPrompt
} from '@cookiedough/include/types';

export const Flavors: CookieFlavor[] = [
	'node',
	'deno',
	//'go',
	//'c',
	//'c++',
	//'rust',
	//'python'
];

export const FlavorPrompt: InquirerPrompt = {
	type: 'list',
	name: 'flavor',
	message: 'choose project flavor',
	choices: Flavors
};

/**
 * Type for a command that is interpretable by the entry point.
 * */
export type __COOKIE_CMD__ = {
	signature	 : string;
	alias		 ?: string[];
	cmd_callback ?: any;
}

/**
 * Names recognized by the command line when called as a process
 */
export const COMMAND_NAMES: __COOKIE_CMD__[] = [
	{
		signature: 'run',
		alias: [
			null
		]
	},
	{
		signature: 'edit',
		alias: [
			'edit-root',
			'edit-configroot'
		]
	},
	{
		signature: 'locate',
		alias: [
			'find'
		]
	},
	{
		signature: 'doctor',
		alias: [
			'fix'
		]
	},
	{
		signature: 'create-local-flavor',
		alias: [
			'flavor',
			'clf'
		]
	}
]

export { CookieFlavor } from '@cookiedough/include/types';
