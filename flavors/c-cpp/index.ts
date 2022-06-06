import {
	CMenuOptions,
	CCMenuOptions
} from './menu';
import inquirer from 'inquirer';
import { CrumbOptions } from '@cookiedough/include/types';

export function usePrompt(
	p: CrumbOptions
) {
	inquirer.prompt(CMenuOptions).then(answers => {
		console.log(`c project at ${p}`);
		console.log(answers);
	});
}
// export function usePromptCpp(p: string, inquirer) {
// 	inquirer.prompt(CCMenuOptions).then(answers => {
// 		console.log(`c++ project at ${p}`);
// 		console.log(answers);
// 	});
// }
