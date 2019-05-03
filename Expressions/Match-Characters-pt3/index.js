let soccerWord = "gooooooooal";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

let chewieQuote = "Aaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);

console.log(result);