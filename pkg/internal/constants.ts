// import cliSpinners from 'cli-spinners';
import { DoughFlavor } from '../types';
import { ListQuestion } from 'inquirer';
export const Flavors: DoughFlavor[] = [
	'node',
	//'go',
	//'c',
	//'c++',
	//'rust',
	//'python'
];

export const FlavorInquiry: ListQuestion = {
	type: 'list',
	name: 'flavor',
	message: 'choose project flavor',
	choices: Flavors
};

