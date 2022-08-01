const assert = require('assert');
const {
	useDirectoryConfig,
	COOKIE_CMD_LIST
} = require('@cookiedough/internal');
const config = useDirectoryConfig(process.cwd());

describe('#helpers', function() {
	describe('foobar', () => {
		assert('foo', 'foo');
	})
});
