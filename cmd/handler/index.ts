import {
	NodeFlavor,
	PythonFlavor,
	CFlavor,
	DenoFlavor,
	GoFlavor,
	CookieFlavor,
	templateInquiry,
	join,
	resolve,
	warn,
	error,
	prompt,
	Inquirer,
} from '@cookiedough/include';

export function useDefaultHandler(
	config: any // todo - type
) {
	console.log(config);
	// todo- handle detatched option
	// todo- handle dry option
	//const cConfig = require(confPath);
	// if(!cConfig.path.out) {
	// 	warn('no outpath set in config');
	// }
	// console.log(cConfig.path.out);

	// prompt([templateInquiry]).then((
	// 	options: { template: CookieFlavor }
	// ) => usePrompt(options.template, wPath, inquirer));
}

function usePrompt(
	tag: CookieFlavor,
	path: string,
	inquirer: Inquirer
) {
	switch(tag) {
		case 'c':
		case 'c++':
			return CFlavor.usePrompt(path);
		case 'go':
			return GoFlavor.usePrompt(path);
		case 'deno':
			return DenoFlavor.usePrompt(path);
		case 'python':
			return PythonFlavor.usePrompt(path);
		case 'node':
			return NodeFlavor.usePrompt(path);
		default:
			error('template name invalid');
			process.exit(1);
	}
}