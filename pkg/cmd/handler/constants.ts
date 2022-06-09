// import cliSpinners from 'cli-spinners';
import { CookieFlavor } from '../../types';
import { ListQuestion } from 'inquirer';
export const Flavors: CookieFlavor[] = [
	'node',
	'deno',
	//'go',
	//'c',
	//'c++',s
	//'rust',
	//'python'
];

export const FlavorInquiry: ListQuestion = {
	type: 'list',
	name: 'flavor',
	message: 'choose project flavor',
	choices: Flavors
};

