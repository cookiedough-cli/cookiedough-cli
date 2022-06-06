import {
	useSysInfo,
	_call,
	_callFrom
} from '@cookiedough/tools';
import { NodeBuildInfo, NodeUserPreferences } from '@cookiedough/include/types/flavor';
import { NodePresetPackageMapper } from './pkg';
import { NodeModule } from '@cookiedough/include/types/flavor/node';
import inquirer, { Inquirer } from 'inquirer';
import NodeUserOptions from './menu';
import { useFileWriter } from './files';
import { CrumbPrompt } from '@cookiedough/include/types';
function usePresetToFilemap(args: {
	root: string,
	options: NodeUserPreferences,
	packages: NodeModule[]
}) {
	const { options, packages, root } = args;
	const buildInfo: NodeBuildInfo = {
		build_root: root,
		build_host: useSysInfo(),
		build_preferences: options,
		build_packages: packages
	};
	useFileWriter(buildInfo);
}

export function usePrompt(
	p: string,
): CrumbPrompt {
	return Promise.resolve(inquirer.prompt(NodeUserOptions).then((answers: NodeUserPreferences) => usePresetToFilemap({
			options: answers,
			packages: NodePresetPackageMapper(answers),
			root: p
	})));
}
