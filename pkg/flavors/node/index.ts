
import { NodePresetPackageMapper } from './pkg';
import inquirer from 'inquirer';
import NodeUserOptions from './menu';
import { exists, existsSync } from 'fs';
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
	useCopyMachine
} from '../../internal';

const Spinner = require('cli-spinner').Spinner;
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
		if(!p.process.overwrite_existing_out && existsSync(node_build_info.build_root)) {
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

${useColor('yellow', 'exiting')}`);
		process.exit(0);

		}

		if(p.process.overwrite_existing_out && (useFileList(node_build_info.build_root).length > 0)) {
			const spinner = new Spinner('%s power washing directory');
			spinner.setSpinnerString('⠁⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈⠈');
			spinner.start();
			setTimeout(() => {
				usePowerWasher(node_build_info.build_root);
				spinner.stop(true);
			}, 250);
		}

		useValidWritePath(node_build_info.build_root);
		const spinner = new Spinner('%s writing files');
		spinner.setSpinnerString('⠁⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈⠈');
		spinner.start();
		setTimeout(() => {
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
			spinner.stop(true);
		}, 300);

	})).catch(console.error);
}
