


function displayMessage(name,age)
{
    //ES5 way
    return 'Hello ' + name + ". You don't look like a day over " + (age-5); 
}

console.log(displayMessage("Jon snow", 30));



function displayMessageTemplateLiteral(name,age)
{
    
    //Template Literal
    return `Hello ${name}. Yoou don't look like a day over ${age-5}`; 
}



console.log(displayMessageTemplateLiteral("Thanos",50));