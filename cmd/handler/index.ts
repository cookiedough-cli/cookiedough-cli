import {
	useDataLog,
	useLog
} from '@cookiedough/tools';
import {
	NodeFlavor,
	PythonFlavor,
	CFlavor,
	DenoFlavor,
	GoFlavor,
	CookieFlavor,
	templateInquiry,
	prompt,
	CrumbOptions
} from '@cookiedough/include';

export function useDefaultHandler(
	config: CrumbOptions
) {
	if(config.process.dry) {
		useLog('dry mode, exiting', 'info');
		return;
	}
	if(config.process.default_template) {
		useLog('default template chosen:', 'success');
		useDataLog(config.process.default_template);
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
			useLog('template name invalid', 'error');
			process.exit(1);
	}
}
