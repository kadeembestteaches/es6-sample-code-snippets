/*
    In JavaScript  (ES5)

    1. Function Declaration Syntax
    2. Function Expression Syntax

*/

//A Function Declaration Syntax (Traditional )
//Funciton declarations are hoisted

doSomething(); // a  function call or function invocation
function doSomething ()
{
    console.log("Hello!");
}




//The below is a function expression
//Function Expressions are not hoisted to the top
const doSomething2 = function()
{
    console.log("Hello (Function Expression)");
}

doSomething2();

/*
    In JavaScript  (ES6)

    1. Function Declaration Syntax
    2. Function Expression Syntax
    3. Arrow Function Syntax

*/

//Arrow functions, like Function expressions, do not hoist functions
const doSomething3 =  () => 
{
    console.log("Hello (Arrow Functions)");
}

doSomething3();

function cube(num)
{
    return num ** 3;
}


//If your function has one param then param list is optional
// if the body of your function has one statmenet then the curly braces are optional
/*
const cube2 = (num)=>
{
    return num ** 3;
}
*/

//An Arrow function for the above code
const cube2 = num => num ** 3;

console.log(cube2(5));


const areaOfRectangle = (l,w) => l*w;
console.log(areaOfRectangle(2,3));


const doSomething4 = () => console.log("Arrow Funciton");
doSomething4();

const doSomething5 = ()=> 
{
    console.log("Hello");
    console.log("Hello Again");
}

doSomething5();
