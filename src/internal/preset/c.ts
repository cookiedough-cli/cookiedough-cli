export type CPackagePreset = 'c' | 'cpp';

export type CBuildPreset = 'make' | 'cmake';

export type CPackageOptions = {

};

export const CCompilers = [
	'gcc',
	'g++',
	'clang'
];

export function prompt_c(p: string, inquirer) {

	inquirer.prompt([
		{
			type: 'list',
			name: 'compiler',
			message: 'select a compiler',
			choices: CCompilers
		}
	]).then(answers => {
		console.log(`c project at ${p}`);
		console.log(answers);
	});
}
export function prompt_cpp(p: string, inquirer) {

	inquirer.prompt([
		{
			type: 'list',
			name: 'compiler',
			message: 'select a compiler',
			choices: CCompilers
		}
	]).then(answers => {
		console.log(`c++ project at ${p}`);
		console.log(answers);
	});
}
