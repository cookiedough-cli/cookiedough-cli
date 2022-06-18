import { ListQuestion } from 'inquirer';
export * from './logger';
export * from './config';
export { Inquirer, prompt } from 'inquirer';
export * from './util';
export * from './env';
export * from './spinner';

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
