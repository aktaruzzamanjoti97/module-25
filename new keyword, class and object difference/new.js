class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 200000);
console.log(heroPerson);

const friendlyPerson = new Person('Hero', 'Kalam', 300000);
console.log(friendlyPerson);

function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1('Al', 'Amin', 100000);
console.log(oldPerson);