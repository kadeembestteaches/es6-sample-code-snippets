const person = 
{

    firstName : "Jon",
    lastName : "Snow",
    age:25,
    address:"Beyond the Wall",
    gender :"Male",
    emergencyContact:"Batman",
    contact :
    {
        phoneNo: "111-11111",
        email : "jon@snow.com"
    },
    //method Syntax
    displayFullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }

}
//object literal
const person = 
{

    firstName : "Jon",
    lastName : "Snow",
    age:25,
    address:"Beyond the Wall",
    gender :"Male",
    emergencyContact:"Batman",
    contact :
    {
        phoneNo: "111-11111",
        email : "jon@snow.com"
    },
    //method Syntax
    displayFullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }

}





const displayInfo = (fn,gender,phoneNo)=>
{
    console.log(fn);
    console.log(gender);
    console.log(phoneNo);
}


//Destructure an object(An array or object)
const {firstName, gender, contact} = person;

console.log(firstName);
console.log(gender);
console.log(contact);


//displayInfo(person.firstName, person.gender,person.contact.phoneNo);


const movies = ["Titanic", "The Avengers: Infinity Wars","The Matrix","Bad Boy II"];

//Destructring for an Array
const [mov1,mov2,mov3] = movies;

console.log(mov1);


