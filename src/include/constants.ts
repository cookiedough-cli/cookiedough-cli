import {
	CookieFlavor,
	Tuple,
	InquirerPrompt
} from '../types';

export const TemplateNames: CookieFlavor[] = [
	'node',
	'deno',
	//'go',
	//'c',
	//'c++',
	//'rust',
	//'python'
];

export const templateInquiry: InquirerPrompt = {
	type: 'list',
	name: 'template',
	message: 'choose project template',
	choices: TemplateNames
};

export { CookieFlavor } from '../types';

