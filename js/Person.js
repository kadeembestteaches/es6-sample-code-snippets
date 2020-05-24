class Person
{

    //properties
    firstName;
    lastName;
    age;
    address;
    gender;
    emergencyContact;


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


export default Person;