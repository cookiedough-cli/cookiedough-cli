import {
	TemplateName,
	Tuple,
	InquirerPrompt
} from './types';

export const TemplateNames: TemplateName[] = [
	'node',
	'deno',
	'go',
	'c',
	'c++',
	'rust',
	'python'
];

export const InlineOptions: Tuple[] = [
	['--dry-run', '-dry'],
	['--config-path', '-c'],
	['--template-name', '-t'],
	['--custom-files', '-cf']
];

export const templateInquiry: InquirerPrompt = {
	type: 'list',
	name: 'template',
	message: 'choose project template',
	choices: TemplateNames
};

export { TemplateName } from './types';

