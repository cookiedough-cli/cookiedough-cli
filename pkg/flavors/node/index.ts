
import { NodePresetPackageMapper } from './pkg';
import inquirer from 'inquirer';
import NodeUserOptions from './menu';
import { useFileWriter } from './files';
import {
	CrumbOptions,
	CrumbPromptNoOp,
	NodeBuildInfo,
	NodeFlavorRecipe
} from '../../types';
import {
	useSysInfo,
	useValidWritePath,
	_call,
	_callFrom
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
		useValidWritePath(node_build_info.build_root);
		const spinner = new Spinner('%s writing files');
		spinner.setSpinnerString('⠁⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈⠈');
		spinner.start();
		setTimeout(() => {
			const install_cmd = `${node_build_info.build_frecipe.installer.name} ${node_build_info.build_frecipe.installer.installPkgSignature}`;
			const install_dev_list = node_build_info.build_frecipe.packages.filter(pkg => pkg[1] === '-D').map(pkg => pkg[0]).join(' ');
			_callFrom(node_build_info.build_root, `${install_cmd} -D ${install_dev_list}`);
			spinner.stop(true);
		}, 300);

	})).catch(console.error);
}
