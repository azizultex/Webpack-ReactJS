const add = (a, b ) => a + b;
const multiply = (a, b) => a * b;

function count(x) {
  var numbers = [];
  if (x % 2 == 0) {
    for (var i=0; i<x; i += 2) {
      numbers.push(i);
    }
  } else {
    for (var i=1; i<x; i += 2) {
      numbers.push(i);
    }
  }
  return numbers;
}

export {add, multiply, count};