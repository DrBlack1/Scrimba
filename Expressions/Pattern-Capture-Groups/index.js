let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex," "regex"]

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let results = reRegex.test(repeatNum);