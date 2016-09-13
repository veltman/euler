var factors = require("./prime-factors.js"),
    _ = require("underscore");

var found = [];

for (var a = 2; a <= 100; a++) {

  // Get prime factorization of the base
  var prime = factors(a);

  if (!prime.length) {
    prime = [a];
  }

  // Group the prime factors by number
  var groupedPrimes = _.values(_.groupBy(prime));

  for (var b = 2; b <= 100; b++) {

    // Generate a unique equation of prime bases with exponents
    var slug = _.flatten(groupedPrimes.map(function(primeSet){
      // [base, exponent]
      // Multiply the exponent if the same prime factor occurs multiple times
      // e.g. 12's prime factors are 2,2,3
      // so 12^2 = 3^2 * 2^(2*2)
      return [primeSet[0],primeSet.length * b].join("^");
    })).join("*");

    // Add if it's new
    if (found.indexOf(slug) === -1) {
      found.push(slug);
    }

  }

}

console.log(found.length);
