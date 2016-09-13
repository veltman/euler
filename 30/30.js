var total = 0,
    pows = [0,1,2,3,4,5,6,7,8,9].map(function(d){return Math.pow(d,5);});

for (var i = 0; i <= 354294; i++) {

  var sum = 0;

  var over = (i + "").split("").some(function(d){
    sum += pows[+d];
    if (sum > i) {
      return true;
    }
  });

  if (!over && sum === i && i > 9) {
    total += i;
  }

}

console.log(total);
