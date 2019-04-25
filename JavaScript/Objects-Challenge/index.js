let example1 = {
    firstName: 'Patrick'
};

let example2 = Object.assign({}, example1);

example2.lastName = 'Mack';

console.log(example1);
console.log(example2);