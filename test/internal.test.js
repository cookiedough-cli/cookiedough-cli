const assert = require('assert');
const {
	useConfigList,
	useDirectoryConfig,
	COOKIE_CMD_LIST
} = require('../cjs/internal');
const configs = useConfigList(process.cwd());
const config = useDirectoryConfig(process.cwd());

describe('#helpers', function() {
	describe('@cmd runtime', function() {
		const len = COOKIE_CMD_LIST.length;
		it('should load a populated list', function() {
			assert(len > 0);
		});
		it('should have signatures on each option', function() {
			assert(COOKIE_CMD_LIST.filter(opt => opt.signature).length === len);
		});
	});
	describe('@config', function() {
		it('should find the right configs for the given path', function() {
			assert(configs.length === 1);
		});

		it('should parse the config properly', function() {
			assert(config.path.out === '__fixtures__/test0');
			assert(config.process.add_files_from.length === 1);
			assert(config.process.allow_cwd_write === false);
		});
	})
});
