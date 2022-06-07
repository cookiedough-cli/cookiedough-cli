
import { NodePresetPackageMapper } from './pkg';
import inquirer from 'inquirer';
import NodeUserOptions from './menu';
import { useFileWriter } from './files';
import { CrumbOptions, CrumbPrompt } from '@cookiedough/include/types';
import { join } from 'path';
import {
	NodeBuildInfo,
	NodeFlavor,
	NodeModule,
	NodeModuleInstaller
} from '@cookiedough/include/types/flavor';
import {
	useSysInfo,
	_call,
	_callFrom
} from '@cookiedough/include';
function usePresetToFilemap(args: {
	config: CrumbOptions,
	options: NodeFlavor,
	installer: NodeModuleInstaller,
	packages: NodeModule[]
}) {
	// const { options, packages, root } = args;
	const buildInfo: NodeBuildInfo = {
		build_root: join(process.cwd(), args.config.path.out),
		build_host: useSysInfo(),
		build_preferences: args.options,
		build_packages: args.packages
	};
	useFileWriter(buildInfo, args.config);
}

export function usePrompt(
	p: CrumbOptions,
): CrumbPrompt {
	return Promise.resolve(inquirer.prompt(NodeUserOptions).then((answers: NodeFlavor) => {
		const ppm = NodePresetPackageMapper(answers);
		return usePresetToFilemap({
			options: answers,
			installer: ppm.installer,
			packages: ppm.packages,
			config: p
		})
	})).catch(console.error);
}
