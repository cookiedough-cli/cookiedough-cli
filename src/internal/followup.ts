import { TemplateName } from '../types';
import { prompt_node } from './preset/node';
import { prompt_py } from './preset/py';
import { prompt_c } from './preset/c';
import { prompt_deno } from './preset/deno';
import { prompt_go } from './preset/go';
export default function prompt_new(tag: TemplateName, _path: string, inquirer) {
	switch(tag) {
		case 'c':
		case 'c++':
			return prompt_c(_path, inquirer);
		case 'go':
			return prompt_go(_path, inquirer);
		case 'deno':
			return prompt_deno(_path, inquirer);
		case 'python':
			return prompt_py(_path, inquirer);
		case 'node':
			return prompt_node(_path, inquirer);
		default:
			console.error('template name resolution error');
			process.exit(1);
	}
}
