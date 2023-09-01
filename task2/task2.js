const mean = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
};
const median = (arr) => {
  const { length } = arr;

  arr.sort((a, b) => a - b);

  if (length % 2 === 0) {
    return arr[length / 2 - 1];
  }

  return arr[(length - 1) / 2];
};

const arr = [12, 46, 32, 64];

console.log(`mean:${mean(arr)}, meadian:${median(arr)}`);
