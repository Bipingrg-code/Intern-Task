const sumOfnumber = (...nums) => {
  const sum = nums.reduce((a, b) => a + b);
  return sum;
};

console.log(`Sumof Random Number(1,2,3,4,5): ${sumOfnumber(1, 2, 3, 4, 5)}`);
console.log(`Sumof Random Number(20,10,50,60): ${sumOfnumber(20, 10, 50, 60)}`);
