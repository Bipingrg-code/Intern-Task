const counter = () => {
  let count = 1;
  return () => count++;
};
const increment = counter();

console.log(increment());

console.log(increment());

console.log(increment());
