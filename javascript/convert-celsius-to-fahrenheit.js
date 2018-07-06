function convertToF(celsius) {
    return (celsius * 9) / 5 + 32;
}

console.log(convertToF(0)); // should return a number
console.log(convertToF(-30)); // should return a value of -22
console.log(convertToF(-10)); // should return a value of 14
console.log(convertToF(0)); // should return a value of 32
console.log(convertToF(20)); // should return a value of 68
console.log(convertToF(30)); // should return a value of 86