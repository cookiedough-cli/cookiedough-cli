/**
 * This is a top level file in the workspace, it exists merely as a playground to mess with
 * the packages in the /packages subdirs, which are the actual node modules we will use to build this
 *
 * To Start Off, i have set up basic demos with the logger module that I made in the internals package.
 *
 * These package are imported by npm/yarn when you run install on the base package at the top level
 */
const {
	log,
	useSysInfo,
	call,
	useConfig,
} = require('@cookiedough/internal');
const { useCookieDough } = require('cookiedough-cli');
log('Logger Success', 'success');
log('Logger Failure', 'error');
log('Logger Warning', 'warning');
log('Logger Info', 'info');

// log(useSysInfo());
// const buf = call('ls');
useConfig(process.cwd()).then(console.log);
// useCookieDough();
