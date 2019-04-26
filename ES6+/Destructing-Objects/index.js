const personalInformation = {
    firstName: 'Patrick',
    lastName: 'Mack',
    city: 'Austin',
    state: 'Texas',
    zipCode: '73301'
};

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);