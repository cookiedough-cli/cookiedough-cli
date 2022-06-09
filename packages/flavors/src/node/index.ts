
import { NodePresetPackageMapper } from './pkg';
import inquirer from 'inquirer';
import NodeUserOptions from './menu';
import { useFileWriter } from './files';
import {
	CrumbOptions,
	CrumbPromptNoOp,
	NodeBuildInfo,
	NodeFlavorRecipe,
	NodeFlavorBuildTool,
	NodeModulePackager
} from '@cookiedough/types';
import {
	useSysInfo,
	_call,
	_callFrom
} from '@cookiedough/internal';

export function usePrompt(
	p: CrumbOptions,
): CrumbPromptNoOp {
	return Promise.resolve(inquirer.prompt(NodeUserOptions).then((answers: NodeFlavorRecipe) => {
		const ppm = NodePresetPackageMapper(answers);
		const node_build_info: NodeBuildInfo = {
			build_root: p.path.out,
			build_host: useSysInfo(),
			build_preferences: answers,
			build_frecipe: ppm
		}
		console.log(node_build_info);
	})).catch(console.error);
}
