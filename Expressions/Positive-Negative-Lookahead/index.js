let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!=u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]


let sampleWord = "astronaut";
let pwRegex = /(?=\w{5})(?=\D*\d{2})/; //Change this line
let result = pwRegex.test(sampleWord);