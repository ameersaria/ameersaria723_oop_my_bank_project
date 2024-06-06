#! /usr/bin/env node
interface asbankaccount{
    credit(amount:number):void;
    debit(amount:number):void
} // interface creation

//Class creation
class Bankaccount implements asbankaccount{
    accountbalance:number;
    constructor(accountbalance:number)
{
    this.accountbalance=accountbalance
}
// publically credit 
public credit(amount: number) {
    if(amount>0){
        this.accountbalance+=amount
        console.log("Credit successgggully get into new account and your balance is :"+this.accountbalance);
    }else{console.log("Credit unsuccessful");
    }
}
// publically debit  
public debit(amount: number) {
    if(amount>0 && amount<this.accountbalance){
        this.accountbalance-=amount;
        console.log("Debit successfully share in new account balance:"+this.accountbalance);    
    }else{
        console.log("Debit unsuccessful");
    }
} 
}
// Customer details 
class Customer{
    person : {
        firstname:string;
        lastname:string;
        }
        age:number;
        gender:string;
        mobile_number:number;
        bank_account:Bankaccount;
        
        constructor(person:{firstname:string,lastname:string},age:number,gender:string,mobile_number:number,bank_account:Bankaccount){
            // this property utilization
            this.person=person
            this.age=age
            this.gender=gender
            this.mobile_number=mobile_number
            this.bank_account=bank_account
        }
        // publically user access 
        public display(){
            console.log("Name: "+this.person.firstname+"  "+this.person.lastname);
            console.log("Age: "+this.age)
            console.log("Gender: "+this.gender)
            console.log("Mobile_No: "+this.mobile_number)
            console.log("Amount in Bank: "+this.bank_account.accountbalance)
            
        }
}
const a1=new Bankaccount(72300)
const c1=new Customer({firstname:"Ameer",lastname:"Saria"},20,"Male",7231782345,a1)
c1.display()
c1.bank_account.debit(723)



const a2=new Bankaccount(72300)
const c2=new Customer({firstname:"Ameer",lastname:"Mavia"},22,"Male",7623782345,a2)
c2.display()
c2.bank_account.debit(725)



