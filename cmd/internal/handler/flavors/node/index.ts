import inquirer from 'inquirer';
import {
	Tuple,
	useValidWritePath,
	_call,
	_callFrom,
	useColor,
	usePowerWasher,
	useCopyMachine,
	CrumbOptions,
	useSysInfo,
	SystemOverview,
	FlavorCrumbSchema
} from '../..';
import { useNodeFlavorMap, MappedNodeFlavor } from './pkg';
import { useFlavorMod, retrieveExtern } from '../../../util';
export * from './modules';
import {
	ENV_RAW_SOURCE,
	ENV_COOKIE_COPY_DIR
} from '../../../env';
// preset path to copy the files from depending on preferences
const preset_path = `${ENV_RAW_SOURCE}${ENV_COOKIE_COPY_DIR}`;
// user options for inquirer

// the recipe to build as recieved from the user menu answers
export type NodeFlavorRecipe = {
	preset: string;
	pkg_mgr: string;
	build_tools: string;
	compiler: string;
	bundler: string;
	eslint: boolean;
};

// get the optional arg as a tuple of strings
export type NodeModule = Tuple;

/**
 * Flavor runtime file MUST have a root usePrompt to work properly with the CLI and it must return a noop, throw anything bad that happens else its considered successful
 * @param p OPTIONS Entry Point
 * @returns no op cli process
 */

export async function usePrompt(p: CrumbOptions) {
	/**
	 * retrieve github raw asset from min repo for node flavor
	 */
	const NodeUserOptions = await retrieveExtern<FlavorCrumbSchema>(`${ENV_RAW_SOURCE}.flavors/node/flavor.json`);
	const answers = await inquirer.prompt(NodeUserOptions.doughmap);
	return {
		_sys: useSysInfo(),
		crumbs: p,
		flavor: answers
	};
	// 		const ppm = useNodeFlavorMap(answers);
	// 		const node_build_info: NodeBuildInfo = {
	// 			build_root: p.path.out,
	// 			build_host: useSysInfo(),
	// 			build_preferences: answers,
	// 			build_frecipe: ppm
	// 		}
	// 		if(!p.process.overwrite_existing_out && useDirExists(node_build_info.build_root)) {
	// 			useLog(`
	// ${useColor('yellow','warning:')}

	// the path at ${node_build_info.build_root}\n is already populated.
	// if youd like to automatically override in the future, set:
	// {
	// 	"process": {
	// 		"overwrite_existing_out": true
	// 	}
	// }

	// in your config file.
	// ${useColor('yellow', 'exiting.')}`);
	// 		process.exit(0);
	// 		}
	// 		useValidWritePath(node_build_info.build_root);

	// if(p.process.overwrite_existing_out && (useFileList(node_build_info.build_root).length > 0)) {
	// 	useLog('power washing directory');
	// 	usePowerWasher(node_build_info.build_root);
	// }
	// if(node_build_info.build_frecipe.packages.length > 0) {
	// 	useNodeInstaller(p, node_build_info);
	// 	console.clear();
	// }
	// useFinalPresetCopy(p, node_build_info);
}
