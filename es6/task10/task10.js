const person = { name: "Costas", address: { street: "Lalaland 12" } };

const {name, address: { street } } = person;

console.log(street);