function remainder(a, b) {
  if (a === 0) {
    return 0;
  }
  if (b === 0 || isNaN(a) || isNaN(b)) {
    return NaN;
  }
  if (a < b) {
    return a;
  }
  if (a > 0 && b > 0) {
    var counter = a;
    while (counter >= Math.abs(b)) {
      counter = counter - b;
    }
    return counter;
  }
}
var output =remainder(10,3);
console.log(output);