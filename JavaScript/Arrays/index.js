let example1 = [5, 7, 6];

example1.push(8, 9, 10);
example1.pop();

example1[0] = 1;

example1.forEach((element) => {
    console.log(element)
});

console.log(example1)