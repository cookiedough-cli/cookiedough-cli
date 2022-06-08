
import { NodePresetPackageMapper } from './pkg';
import inquirer from 'inquirer';
import { join } from 'path';
import NodeUserOptions from './menu';
import { useFileWriter } from './files';
import {
	CrumbOptions,
	CrumbPromptNoOp,
	NodeBuildInfo,
	NodeFlavorRecipe,
	NodeFlavorBuildTool,
	NodeModule,
	NodeModulePackager
} from '@cookiedough/types';
import {
	useSysInfo,
	_call,
	_callFrom
} from '@cookiedough/internal';

// function usePresetToFilemap(args: {
// 	config: CrumbOptions,
// 	options: NodeFlavor,
// 	installer: NodeFlavorBuildTool,
// 	packages: NodeModule[]
// }) {
// 	// const { options, packages, root } = args;
// 	const buildInfo: NodeBuildInfo = {
// 		build_root: join(process.cwd(), args.config.path.out),
// 		build_host: useSysInfo(),
// 		build_preferences: args.options,
// 		build_packages: args.packages
// 	};
// 	useFileWriter(buildInfo, args.config);
// }

export function usePrompt(
	p: CrumbOptions,
): CrumbPromptNoOp {
	return Promise.resolve(inquirer.prompt(NodeUserOptions).then((answers: NodeFlavorRecipe) => {
		// const ppm = NodePresetPackageMapper(answers);
		// return usePresetToFilemap({
		// 	options: answers,
		// 	installer: ppm.installer,
		// 	packages: ppm.packages,
		// 	config: p
		// })
		console.log(answers);
	})).catch(console.error);
}
