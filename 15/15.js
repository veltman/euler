console.log(c(40,20));

function c(n,r) {
	r = Math.max(r,n-r);
	return Math.round(factorial(n,r+1)/factorial(n-r));
}

function factorial(max,min) {
	if (!min) {
		min = 1;
	}

	var prod = 1;

	for (var i = max; i >= min; i--) {
		console.log(i);
		prod = prod*i;
	}

	return prod;
}