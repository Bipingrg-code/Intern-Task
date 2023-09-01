function factorial(n) {
  if (n === 0) {
    return 1; 
  } else {
    return n * factorial(n - 1);
  }
}

const input = 6;
const result = factorial(input);

console.log(`${input} = ${result}`);
