var matches = [];

// Brute force?
for (var i = 2; i <= Math.pow(9,5) * 6; i++) {
  if (sum(fifthPowers(i)) === i) {
    matches.push(i);
  }
}

console.log(sum(matches));

function fifthPowers(num) {

  var digits = (""+num).split("");

  return digits.map(function(d){
    return Math.pow(+d,5);
  });

}

function sum(arr) {
  return arr.reduce(function(a,b){
    return a + b;
  });
}
