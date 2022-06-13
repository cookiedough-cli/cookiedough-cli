// import cliSpinners from 'cli-spinners';
import { ListQuestion } from 'inquirer';
export const Flavors: string[] = [
	'node',
	'go',
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

