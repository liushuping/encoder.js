var assert = require('assert');
var encoder = require('../encoder.js');

describe('#encodeHTML', function() {
	it('should encode < to &lt;', function() {
		var input = '100<200';
		var encoded = encoder.encodeHTML(input);
		assert.ok(encoded == '100&lt;200');
	});
});