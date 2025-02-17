const obj1 = { a: 2, b: 18, c: 3, d: 4, e: 57, f: 6, g: 78};
const obj2 = { a: 22, b: 1, c: 3, d: 4, e: 5, f: 6, go: 78}; // Different key "go"

// Function to check if objects have the same values
const compareObjectValues = (o1, o2) => {
  const values1 = Object.values(o1).sort();
  const values2 = Object.values(o2).sort();
  return JSON.stringify(values1) === JSON.stringify(values2);
};

console.log(compareObjectValues(obj1, obj2)); // ✅ true
