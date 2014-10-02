var _ = require("underscore");

function primeFactors(num) {
	for (var i = 2; i < num; i++) {
		if (num/i % 1 == 0) {
			return [primeFactors(i),primeFactors(num/i)];
		}
	}

	return num;
}

console.log(_.flatten(primeFactors(600851475143)).pop());