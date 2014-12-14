var d3 = require("d3");

var amicable = [];

for (var i = 1; i < 10000; i++) {

	if (amicable.indexOf(i) >= 0) {
		continue;
	}

	var di = d(i);

	if (di > 0 && d(di) === i && di !== i) {
		amicable.push(i);
		amicable.push(di);
	}

}

console.log(sum(amicable));

function d(num) {
	return sum(divisors(num));
}

function sum(array) {
	var s = 0,
		l = array.length;

	for (var i = 0; i < l; i++) {
		s += array[i];
	}

	return s;

}

function divisors(num) {
	var div = [];
	for (var i = 0; i <= Math.sqrt(num); i++) {
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