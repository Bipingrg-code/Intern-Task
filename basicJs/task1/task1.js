const sumOfPositiveArray = (arr) => {
  let result = 0;

  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
  return result;
};
console.log(sumOfPositiveArray([1, -4, 12, 0, -3, 29, -150]));
