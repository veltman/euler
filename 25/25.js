var big = require("bignumber.js"),
    _ = require("underscore");

big.config({ EXPONENTIAL_AT: 10000 });

var fibonacci = _.memoize(function(n) {
  if (n < 2) {
    return new big(n);
  }

  return fibonacci(n - 1).add(fibonacci(n - 2));
});

var i = 1,
    str = "";

while (str.length < 1000) {
  str = fibonacci(i).toString();
  i++;
}

console.log(i-1);