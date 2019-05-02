import { Person } from './person.model';

function add(val1: number, val2: number) {
    return val1 + val2;
}

function sayHello(person: Person): string {
    return `Say Hello to My Little Friend, ${person.firstName}!`
}

function voidExample(): void {
    add(1,2);
}

function neverExample(): never {
    throw Error;
}