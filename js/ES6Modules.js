import Person from "./Person.js"; //import module
import movies  from "./Arrays.js";

//WHAT AND WHO IS PERSON?
const p1 = new Person("Jon","Snow");

console.log(p1.displayFullName());


console.log(`The size of the movies array is ${movies.length}`);


console.log("The movies inside of the array is : ");

for(let i=0; i<movies.length; i++)
{
    console.log(movies[i]);
}