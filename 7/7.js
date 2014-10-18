var d3 = require("d3");

function sieve(n) {
  var array = d3.range(0,n+1).map(function(d){
    return true;
  });

  array[0] = false;
  array[1] = false;

  for (var i = 2, l = array.length; i < l; i++) {
    if (array[i]) {

      for (var p = i+i; p < l; p += i) {
        array[p] = false;
      }
    }
  }

  var primes = [];

  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i]) {
      primes.push(i);
    }
  }

  return primes;

}


var primes = sieve(104750);

console.log(primes.length);
console.log(primes.pop());
