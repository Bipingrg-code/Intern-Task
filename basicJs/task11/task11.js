const isNull = (args) => {
  if (args === null) {
    return true;
  } else {
    return false;
  }
};

console.log(isNull(null));
console.log(isNull(undefined));
