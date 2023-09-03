function countDistinctElements(arr) {
  const counts = {}; 

  for (let i = 0; i < arr.length; i++) {
    const innerArray = arr[i];

    for (let j = 0; j < innerArray.length; j++) {
      const element = innerArray[j];

      // Check if the element is already in the counts object
      if (counts.hasOwnProperty(element)) {
        counts[element]++;
      } else {
        counts[element] = 1; // Initialize count to 1 for new elements
      }
    }
  }

  return counts;
}

const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
const result = countDistinctElements(input);
console.log(result);
