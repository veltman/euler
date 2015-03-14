var _  = require("underscore");

var abundants = [],
	sumsOfAbundants = [],
	upperBound = 28123;

for (var i = 1; i <= upperBound; i++) {
	if (isAbundant(i)) {
		abundants.push(i);
	}
}

for (var i = 0; i < abundants.length; i++) {
	for (var j = i; i < abundants.length; j++) {
		if (abundants[i]+abundants[j] > upperBound) {
			break;
		}
		sumsOfAbundants.push(abundants[i]+abundants[j]);
	}
}

sumsOfAbundants.sort(function(a,b){
	return a-b;
});

sumsOfAbundants = _.uniq(sumsOfAbundants,true);

var total = 0;

for (var i = 1; i <= upperBound; i++) {

	while (sumsOfAbundants[0] < i) {
		sumsOfAbundants.shift();
	}

	if (sumsOfAbundants[0] !== i) {
		total += i;
	}

	/*
	if (!sumsOfAbundants.length) {
		total += i;
	} else {

		while (sumsOfAbundants[0] < i) {
			sumsOfAbundants.shift();
		}

		if (sumsOfAbundants[0] !== i) {
			total += i;
		}

	}
	*/
}

console.log(total);

/*
var abundantSums = getPairs(abundants).map(function(pair){
	return sum(pair);
});

var total = 0;

console.log(total);

function getPairs(arr) {

	var pairs = [];

	for (var i = 0; i < arr.length; i++) {
		for (var j = i+1; j < arr.length; j++) {
			pairs.push([arr[i],arr[j]]);
		}
	}

	return pairs;

}
*/
function isAbundant(num) {
	var div = divisors(num);
	return div.length && sum(div) > num;
}

function divisors(num) {
	var div = [];

	for (var i = 1; i <= Math.sqrt(num); i++) {
		if (i !== num && num % i === 0) {
			div.push(i);
			var b = num/i;
			if (i > 1 && b !== i) {
				div.push(b);
			}
		}
	}
	return div;
}

function sum(arr) {
	return arr.reduce(function(a,b) {
		return a + b;
	});
}