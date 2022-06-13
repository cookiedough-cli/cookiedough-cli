import { CrumbOptions } from '../../../internal';
import inquirer from 'inquirer';
import { FlavorAttributes } from '../../create';
import { useFlavorMod } from '../../../internal';

export const GoMenu = useFlavorMod('go').doughmap;

export function usePrompt(
	p: CrumbOptions
) {
	inquirer.prompt(GoMenu).then(answers => {
		console.log(`go project at ${p}`);
		console.log(answers);
	});
}
