let example1 = {
    firstName: 'Patrick',
    lastName: 'Mack',
    address: {
        city: 'Austin',
        state: 'Texas'
    },
    age: 30,
    cats: ['Milo', 'Tito', 'Achieles']
};

example1.age = 31;

console.log(example1.hasOwnProperty('firstName2'));