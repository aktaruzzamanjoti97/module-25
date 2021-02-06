const normalPerson = {
    firstName : "Rahim",
    lastName : "Karim",
    salary : 150000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
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


// const friendlyPersonChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyPersonChargeBill(25000);


// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(heroPerson, [5000, 500, 50]);
console.log(heroPerson.salary);