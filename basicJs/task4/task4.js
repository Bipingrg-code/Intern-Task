function findAgeDifference(people) {
    let young = people[0].age;
    let old = people[0].age;
  
    for (let i = 1; i < people.length; i++) {
      const age = people[i].age;
  
      if (age < young) {
        young = age;
      }
  
      if (age > old) {
        old = age;
      }
    }
  
    const ageDifference = old - young;
  
    return [young, old, ageDifference];
  }
  
  const input = [
    { name: 'John', age: 13 },
    { name: 'Mark', age: 56 },
    { name: 'Rachel', age: 45 },
    { name: 'Nate', age: 67 },
    { name: 'Jeniffer', age: 65 }
  ];
  
  const ageInfo = findAgeDifference(input);
  console.log(ageInfo); 
  
