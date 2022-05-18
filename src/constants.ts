import { TemplateName, Tuple } from './types';

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

export { TemplateName } from './types';
