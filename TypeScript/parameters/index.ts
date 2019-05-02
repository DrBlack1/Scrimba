import { Person } from './person.model';

function add(val1: number, val2: number) {
    return val1 + val2;
}

add(1, 10);

function sayHello(person: Person) {
    return `Say Hello to My Little Friend, ${person.firstName}!`
}

sayHello(new Person({firstName: 'Patto'}));