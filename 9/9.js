function getTriplet() {
  for (var a = 1; a < 1000; a++) {
    for (var b = a+1; b < 1000; b++) {
      for (var c = b+1; c < 1000; c++) {
        if (a*a + b*b == c*c && a+b+c == 1000) {
          return a*b*c;
        }
      }
    }
  }
}

console.log(getTriplet());