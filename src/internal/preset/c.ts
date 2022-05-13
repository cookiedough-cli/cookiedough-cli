export type CPackagePreset = 'c' | 'cpp';

export type CBuildPreset = 'make' | 'cmake';

export type CStandard = 'C99' | 'C11' | 'C17';
export type CCStandard = 'C++98' | 'C++03' | 'C++11' | 'C++14' | 'C++17' | 'C++20';

export const CStandards: CStandard[] = [
	'C99', 'C11', 'C17'
];

export const CCStandards: CCStandard[] = [
	'C++98', 'C++03', 'C++11', 'C++14', 'C++17', 'C++20'
];

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
		},
		{
			type: 'list',
			name: 'standard',
			message: 'select a standard',
			choices: CStandards
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
		},
		{
			type: 'list',
			name: 'standard',
			message: 'select a standard',
			choices: CCStandards
		}
	]).then(answers => {
		console.log(`c++ project at ${p}`);
		console.log(answers);
	});
}
