let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\S/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);