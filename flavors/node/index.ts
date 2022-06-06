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
import { CrumbOptions, CrumbPrompt } from '@cookiedough/include/types';
import { join } from 'path';

function usePresetToFilemap(args: {
	config: CrumbOptions,
	options: NodeUserPreferences,
	packages: NodeModule[]
}) {
	// const { options, packages, root } = args;
	const buildInfo: NodeBuildInfo = {
		build_root: join(process.cwd(), args.config.path.out),
		build_host: useSysInfo(),
		build_preferences: args.options,
		build_packages: args.packages
	};
	useFileWriter(buildInfo);
}

export function usePrompt(
	p: CrumbOptions,
): CrumbPrompt {
	return Promise.resolve(inquirer.prompt(NodeUserOptions).then((answers: NodeUserPreferences) => usePresetToFilemap({
			options: answers,
			packages: NodePresetPackageMapper(answers),
			config: p
	})));
}
