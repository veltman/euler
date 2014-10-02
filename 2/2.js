var fib = [1,2];

do {

	fib.push(fib[fib.length-1]+fib[fib.length-2]);

} while (fib[fib.length-1] <= 4000000);

console.log(fib.filter(function(number){
	return number % 2 == 0;
}).reduce(function(a,b){
	return a+b;
},0));