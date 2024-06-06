#! /usr/bin/env node
//Class creation
var Bankaccount = /** @class */ (function () {
    function Bankaccount(accountbalance) {
        this.accountbalance = accountbalance;
    }
    // publically credit 
    Bankaccount.prototype.credit = function (amount) {
        if (amount > 0) {
            this.accountbalance += amount;
            console.log("Credit successgggully get into new account and your balance is :" + this.accountbalance);
        }
        else {
            console.log("Credit unsuccessful");
        }
    };
    // publically debit  
    Bankaccount.prototype.debit = function (amount) {
        if (amount > 0 && amount < this.accountbalance) {
            this.accountbalance -= amount;
            console.log("Debit successfully share in new account balance:" + this.accountbalance);
        }
        else {
            console.log("Debit unsuccessful");
        }
    };
    return Bankaccount;
}());
// Customer details 
var Customer = /** @class */ (function () {
    function Customer(person, age, gender, mobile_number, bank_account) {
        // this property utilization
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bank_account = bank_account;
    }
    // publically user access 
    Customer.prototype.display = function () {
        console.log("Name: " + this.person.firstname + "  " + this.person.lastname);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Mobile_No: " + this.mobile_number);
        console.log("Amount in Bank: " + this.bank_account.accountbalance);
    };
    return Customer;
}());
var a1 = new Bankaccount(72300);
var c1 = new Customer({ firstname: "Ameer", lastname: "Saria" }, 20, "Male", 7231782345, a1);
c1.display();
c1.bank_account.debit(723);
var a2 = new Bankaccount(72300);
var c2 = new Customer({ firstname: "Ameer", lastname: "Mavia" }, 22, "Male", 7623782345, a2);
c2.display();
c2.bank_account.debit(725);
