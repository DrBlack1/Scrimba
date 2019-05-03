let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu/;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

let exampleStar = "Let's have fun with regular expressions!";
let unRegex = /.uk/;
let result = unRegex.test(exampleStar);

console.log(result);