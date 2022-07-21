const {
	log,
	useSysInfo,
	call
} = require('@cookiedough/internal');
log('Logger Success', 'success');
log('Logger Failure', 'error');
log('Logger Warning', 'warning');
log('Logger Info', 'info');

log(useSysInfo());
const buf = call('ls');
log(buf.toString().replace(/\n/g, ','));
