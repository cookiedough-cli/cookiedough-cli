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
import { CrumbOptions } from '@cookiedough/include/types';

export function useDefaultHandler(
	config: CrumbOptions
) {
	if(config.process.dry) {
		console.log('dry mode, exiting');
		return;
	}
	if(config.process.default_template) {
		console.log('default template chosen:');
		console.log(config.process.default_template);
		return;
	}
	else {
		prompt([templateInquiry]).then(({flavor}) => useFlavorPrompt(flavor, config))//.then((options: { template: CookieFlavor }) => usePrompt(options.template, config.path.out));
	}
	// todo- validate path, or create it
	// todo- handle detatched option
	// todo- handle dry option
	//const cConfig = require(confPath);
	// if(!cConfig.path.out) {
	// 	warn('no outpath set in config');
	// }
	// console.log(cConfig.path.out);


}

function useFlavorPrompt(
	tag: CookieFlavor,
	config: CrumbOptions
) {
	switch(tag) {
		case 'c':
		case 'c++':
			return CFlavor.usePrompt(config);
		case 'go':
			return GoFlavor.usePrompt(config);
		case 'deno':
			return DenoFlavor.usePrompt(config);
		case 'python':
			return PythonFlavor.usePrompt(config);
		case 'node':
			return NodeFlavor.usePrompt(config);
		default:
			error('template name invalid');
			process.exit(1);
	}
}
