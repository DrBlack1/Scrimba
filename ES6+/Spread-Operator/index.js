let example1 = [1,2,3,4,5,6];
let example2 = [...example1];
example2.puch(true);

console.log(example2);

let example1 = {
    firstName: 'Patrick'
};

let example2 = {
    firstName: 'N/A'
    ...example1
}

example2 = {firstName: 'Patrick'}