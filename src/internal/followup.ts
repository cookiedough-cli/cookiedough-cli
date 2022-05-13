import inquirer from 'inquirer';
import { TemplateName } from '../types';
import { NodeBuildPresets, NodePkgMgrPresets } from '../types/node-preset';

function prompt_node(p: string) {
	inquirer.prompt([
		{
			type: 'list',
			name: 'pkg_mgr',
			message: 'choose preferred package manager',
			choices: NodePkgMgrPresets
		},
		{
			type: 'list',
			name: 'build_tools',
			message: 'choose build environment',
			choices: NodeBuildPresets
		}
	]).then(answers => {
		console.log(`node project at ${p}`);
		console.log(answers);
	});
}

export default function prompt_new(tag: TemplateName, _path: string) {
	switch(tag) {
		case 'node':
			return prompt_node(_path);
		default:
			console.error('tag error');
			process.exit(1);
	}
}
