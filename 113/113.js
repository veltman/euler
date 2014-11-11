var numBouncy = 0,
	exp = 100;

//Row number (r) in Pascal's triangle is how many digits long a number is
//The position (p) in the row, from the left, is the number of unique digits in the number
//The value (v) in position (r,p) is how many different arrangements of p digits are possible in an r-digit number

//For 1 to 100 digits long

for (var r = 1; r <= exp; r++) {

	pascal(r).forEach(function(v,p){
		
		p++;

	 	//Both ascending+descending, all same digit
	 	if (p == 1) {

			numBouncy += 9;

	 	} else {

	 		//Descending combos
			numBouncy += c(10,p) * v;

			//Ascending combos, no zeroes (10 unique digits not possible)
			if (p < 10) {
				numBouncy += c(9,p) * v;
			}

		}

	});
}

console.log(numBouncy);

function pascal(line) {
	line--;
	lines = [1];
	for (var i = 0; i < line; i++) {
		lines.push(lines[i]*(line-i)/(i+1));
	}
	return lines.slice(0,10);
}

function c(all,choose) {
	return factorial(all)/(factorial(choose)*factorial(all-choose));
}

function factorial(n) {
	var f = 1;

	for (var i = n; i > 1; i--) {
		f = f*i;
	}

	return f;
}