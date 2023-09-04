const checkValidJSONfun = (json) => {
  try {
    const parseData = JSON.parse(json);
    return parseData;
  } catch (error) {
    return false;
  }
};
const validJSON = '{ "name":"bipin", "position":"developer"}';
const invaliJSON = "i am-developer";

console.log(checkValidJSONfun(validJSON));
console.log(checkValidJSONfun(invaliJSON));
