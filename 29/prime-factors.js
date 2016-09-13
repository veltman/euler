var _ = require("underscore");

function primeFactors(num) {
	for (var i = 2; i < num; i++) {
		if (num/i % 1 == 0) {
			return [primeFactors(i),primeFactors(num/i)];
		}
	}

	return num;
}

module.exports = function(num) {
	return _.flatten(primeFactors(num));
}
