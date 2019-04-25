let example1 = ['Patrick', 5, true];

let example2 = example1.map((element) => {
    return element;
});

example2.push(11);

console.log(example1);
console.log(example2);