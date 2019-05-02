export class Person {
    firstName: string;
    middleName: string;
    lastName: string;

    constructor(data?: any) {
        this.firstName = data.firstName || 'Patto';
        this.lastName = data.lastName || 'Mack';
        this.middleName = data.middleName;
    }
}