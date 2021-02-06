const normalPerson = {
    firstName : "Rahim",
    lastName : "Karim",
    salary : 150000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName : "Hero",
    lastName : "Balam",
    salary: 25000
}

const friendlyPerson = {
    firstName : "Hero",
    lastName : "Golam",
    salary: 25000
}

// normalPerson.chargeBill();
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);

console.log(normalPerson.salary);


const friendlyPersonChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyPersonChargeBill(25000);