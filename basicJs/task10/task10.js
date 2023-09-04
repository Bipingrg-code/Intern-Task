const isUndefined = (args) => {
  if (typeof args === "undefined") {
    return true;
  } else {
    return false;
  }
};


console.log(isUndefined(undefined));
console.log(isUndefined(null)); 

