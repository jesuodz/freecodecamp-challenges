function findElement(arr, func) {
  return arr.find(func);
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); // should return 8.
Passed
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); // should return undefined.