const myFunction = (...args) => {
  const result = [];
  args.forEach((arg) => {
    if (Array.isArray(arg)) {
      result.push(...arg);
    } else {
      result.push(arg);
    }
  });
  return result;
};

const combainArray = myFunction(
  1,
  "2",
  ["bipin", "sulav", "sangeer"],
  6,
  7,
  [8, 9]
);

console.log(combainArray);
