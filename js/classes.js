//Class is a blue print used to create  object(s). It indicates the properties
//and actions that each object will have from being created from the class

//Template
class Person
{

    //properties
    firstName;
    lastName;
    age;
    address;
    gender;
    emergencyContact;

    /*a constructor 
    A constructor is a special type of method that is
    used to create an object and/or intialize the object with default values
    */

    constructor(fn="no val",ln="no val",age="no value",add="no va",gen="no val",ec="no val")
    {
        this.firstName = fn;
        this.lastName =ln;
        this.age = age;
        this.address=add;
        this.gender=gen;
        this.emergencyContact=ec;
    }


    //methods (function attached to an object)

    displayFullName()
    {
        return `${this.firstName}  ${this.lastName}`;
    }

}
const p0 = new Person();
p0.firstName="Riahnna"
console.log("P0 INFO: \n");
console.log(p0.firstName);


const p1 = new Person("Jon","Snow");


console.log("\n\nP1 INFO: \n");
console.log(p1.firstName);
console.log(p1.lastName);

const p2 = new Person ("Thanos","Thanos",53,"Nowhere","male","Peter Parker");

console.log("\n\nP2 INFO: \n");
console.log(p2.firstName);
console.log(p2.lastName);


console.log(p0.firstName)