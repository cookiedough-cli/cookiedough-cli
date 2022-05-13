const { execSync } = require('child_process');

module.exports = function(name) {
	// todo - handle for specific pkger not jsut yarn
	const exe = execSync(`yarn add ${name}`);
	return exe.toString().includes('success');
}
