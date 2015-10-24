var _ = require("underscore");

var Sieve = function(limit) {

  this.primes = this.generate(limit);
  return this;

};

Sieve.prototype.isPrime = function(num) {

  if (!this.primes.length || this.primes[this.primes.length-1] < num) {
    throw new Error("Sieve is too small");
  }

  for (var i = 0; i < this.primes.length; i++) {
    if (this.primes[i] > num) {
      return false;
    }
    if (this.primes[i] === num) {
      return true;
    }
  }

  return false;

}

Sieve.prototype.generate = function(limit) {

    if (!limit) {
      return [];
    }

    var array = _.range(limit+1).map(function(num){
      return (num > 1);
    });

    for (var i = 2; i < array.length; i++) {
      if (array[i]) {
          _.range(i+i,array.length,i).forEach(function(num){
            array[num] = false;
          });
      }
    }

    return array.map(function(isPrime,num){

      if (isPrime) {
        return num;
      }

      return false;

    }).filter(function(num){
      return num;
    });

}

module.exports = Sieve;
