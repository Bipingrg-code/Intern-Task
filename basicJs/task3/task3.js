const newString = (str) => {
  let result = "";
  const arrayToString = str.split(" ");
  for (let i = 0; i < arrayToString.length; i++) {
    result += arrayToString[i][0];
  }
  return result
};
console.log(newString("Bipin Sulav Swekreet Biraj"));
