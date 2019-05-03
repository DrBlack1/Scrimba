let difficultSpelling = "Mississipspi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

console.log(result);