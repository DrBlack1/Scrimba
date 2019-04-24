const createPerson = (name, age, gender) => {

    return {
        name: name,
        age: age,
        gender: gender
    };

};

const createPerson = (name, age, gender) => ( { name, age, gender });
console.log(createPerson("Zodiac Hasbro", 56, "male"));