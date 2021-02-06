const normalPerson = {
    firstName : "Rahim",
    lastName : "Karim",
    salary : 150000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

// console.log(normalPerson.firstName);
normalPerson.chargeBill(15000);
console.log(normalPerson.salary);