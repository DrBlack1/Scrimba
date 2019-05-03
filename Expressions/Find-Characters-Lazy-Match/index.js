let sting = "titanic";
let regex = /t[a-z]*?i/;
String.match(regex);

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/;
let result = text.match(myRegex);

console.log(result);