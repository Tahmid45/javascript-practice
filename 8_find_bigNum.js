var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];


function myArrayMax(numbers) {
    var len = numbers.length;
    let max = -Infinity;
    while (len--) {
      if (numbers[len] > max) {
        max = numbers[len];
      }
    }
    return max;
  }

console.log(myArrayMax(numbers));