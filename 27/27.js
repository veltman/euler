var Sieve = require("./sieve.js");

// Start with a comfortably large sieve
var sieve = new Sieve(Math.pow(2,15)),
    product,
    max = 0;

for (var a = -999; a <= 999; a++) {
  for (var b = -999; b <= 999; b++) {

    var streak = checkStreak(a,b);

    if (streak > max) {
      max = streak;
      product = a*b;
    }

  }

}

console.log(product);

function checkStreak(a,b) {

  // b has to be prime for n = 0
  if (!sieve.isPrime(b)) {
    return 0;
  }

  // a has to be odd for n = 1
  if (a % 2 === 0) {
    return 0;
  }

  // check consecutive primes
  var n = 0;

  while (sieve.isPrime(n * n + a * n + b)) {

    n++;

  }

  return n;

}
