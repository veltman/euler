var fs = require("fs");

fs.readFile("numbers.txt","utf8",function(err,data){
  var rows = data.split("\n").map(function(d){
    return d.split("");
  });

  var carry = 0,
      digits = [];

  for (var i = rows[0].length-1; i >= 0; i--) {

    var sum = carry + rows.map(function(row){
      return row[i];
    }).reduce(function(a,b) {
      return +a + +b;
    });

    digits.unshift(sum % 10);

    carry = Math.floor(sum/10);

  }

  if (!carry) {
    carry = "";
  }

  console.log((carry+digits.join("")).slice(0,10));

});