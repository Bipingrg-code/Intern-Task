const employee = {
  name: "Bipin",
  category: "Intern",
  startDate: "sep",
  endDate: "nov",
};
const interns = [
  { name: "Sulav", category: "Frontend" },
  { name: "Swekrit", category: "Backend" },
  { name: "Bipin", category: "Frontend" },
  { name: "Joyesh", category: "Backend" },
  { name: "Sangeer", category: "Ux/UI" },
  { name: "Kritgya", category: "Fluter" },
];

const { name } = employee;
console.log(name);

interns.forEach(({ name }) => {
  console.log(name);
});
