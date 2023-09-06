const queryFun = (url) => {
  const queryString = url.split("?")[1]; // Get the query string part of the URL

  if (!queryString) {
    return {};
  }

  const paramsArray = queryString.split("&");
  const paramsObject = {};

  paramsArray.forEach((param) => {
    const [key, value] = param.split("=");
    paramsObject[key] = decodeURIComponent(value); //decode the url
  });

  return paramsObject;
};

const url = "https://w3schools.com/my test.asp?name=ståle&car=saab";
const queryParameter = queryFun(url);
console.log(queryParameter);
