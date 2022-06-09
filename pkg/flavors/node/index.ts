
import { NodePresetPackageMapper } from './pkg';
import inquirer from 'inquirer';
import NodeUserOptions from './menu';
import {
	CrumbOptions,
	CrumbPromptNoOp,
	NodeBuildInfo,
	NodeFlavorRecipe
} from '../../types';
import {
	useLog,
	useSysInfo,
	useValidWritePath,
	_call,
	_callFrom,
	useColor,
	useFileList,
	usePowerWasher,
	useCopyMachine,
	useDirExists
} from '../../internal';
import { join } from 'path';

const Spinner = require('cli-spinner').Spinner;

export function useFinalPresetCopy(
	p: CrumbOptions,
	node_build_info: NodeBuildInfo
) {
	const preset_path = '../../../pkg/flavors/node/.recipe';
	useCopyMachine(join(__dirname, `${preset_path}/../../*/default`), node_build_info.build_root);
	if(node_build_info.build_preferences.eslint) {
		useCopyMachine(join(__dirname, `${preset_path}/eslint`), node_build_info.build_root);
	}
	if(node_build_info.build_preferences.preset === 'ts') {
		useCopyMachine(join(__dirname, `${preset_path}/ts`), node_build_info.build_root);
	}
}

export function useNodeInstaller(
	p: CrumbOptions,
	node_build_info: NodeBuildInfo
) {
	const install_cmd = `${node_build_info.build_frecipe.installer.name} init -y && ${node_build_info.build_frecipe.installer.name} ${node_build_info.build_frecipe.installer.installPkgSignature}`;
	const install_dev_list = node_build_info.build_frecipe.packages.filter(pkg => pkg[1] === '-D').map(pkg => pkg[0]).join(' ');
	_callFrom(node_build_info.build_root, `${install_cmd} -D ${install_dev_list}`);
	if(p.process.add_files_from) {
		const filesToCopy = p.process.add_files_from.map(filePath => useFileList(filePath));
		if(filesToCopy.flat().length > 0) {
			for(const dir of p.process.add_files_from) {
				useCopyMachine(dir, node_build_info.build_root);
			}
		}
	}
}

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
		if(!p.process.overwrite_existing_out && useDirExists(node_build_info.build_root)) {
			useLog(`
${useColor('yellow','warning:')}

the path at ${node_build_info.build_root}\n is already populated.
if youd like to automatically override in the future, set:
{
	"process": {
		"overwrite_existing_out": true
	}
}

in your config file.
${useColor('yellow', 'exiting.')}`);
		process.exit(0);
		}

		if(p.process.overwrite_existing_out && (useFileList(node_build_info.build_root).length > 0)) {
			useLog('power washing directory');
			usePowerWasher(node_build_info.build_root);
		}

		useValidWritePath(node_build_info.build_root);
		const spinner = new Spinner('%s writing recipe files');
		spinner.setSpinnerString('⠁⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈⠈');
		spinner.start();
		setTimeout(() => {
			useNodeInstaller(p, node_build_info);
			spinner.stop(true);

			setTimeout(() => {
				useFinalPresetCopy(p, node_build_info);
			}, 100);
		}, 300);

	})).catch(console.error);
}
