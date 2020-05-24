
//use the keyword let to create a variable 
// the keyword const to  create a constant variable 
//Both const and let does not hoist your variables to the top as like var

let number=5; // this creates a regular variable
const minWage=50; // this creates a constant (i.e, the value cannot be changed after this line)


/*
    Variable Scope 

    1. Global Scope
    2. Function Scope (local variables)
    3. Block Scope(was only introduced in ES6)
*/

function square()
{
    return number * number;
}

console.log(square())

function cube()
{
    return number ** 3;
}

console.log(cube());


function test1()
{
    let value= 25;  //function scope (local variable)  
}

function test2()
{

    return value + value;// you cannot access value in this funciton because
    //value was delcared in another variable
}


function printMesssage()
{
    
    
    // NOBlock Scope with var 

    for(var i=1; i <=5; i++)
    {
      console.log("JavaScript is super cool!!!");
    }

    console.log(i); //variable i is accessed outside of the for block
}

printMesssage();

function printMesssage()
{
    
    // Block Scope with var 

    for(let i=1; i <=5; i++)
    {
      console.log("JavaScript is super cool!!!");
    }

    console.log(i); //variable i is not  accessed outside of the for block
}

printMesssage2();


