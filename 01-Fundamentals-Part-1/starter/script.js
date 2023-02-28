
// VARIABLES

let js = 'amazing';

    40 + 8  + 23 - 10;
    console.log(40 + 8  + 23 - 10);

let firstName = 'mykel' 
    console.log(firstName)




// DATA TYPES

// 1. Boolean

let javascriptIsFun = true;
console.log(javascriptIsFun)

// Determining the type of data
console.log(typeof true)
console.log(typeof javascriptIsFun)
console.log(typeof 24)
console.log(typeof 'hello')

// 2. Undefined

let year;
console.log(year)
console.log(typeof year)


// Math operator

const now = 2037
const ageMykel = now - 1991;
const ageSarah = now - 2018;
console.log(ageMykel, ageSarah)

console.log(ageMykel * 2, ageMykel / 10, 2**3)


// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 15
x *= 4; // x = x * 4 = 100
x ++; // x = x +1
x--; // decrease the value by 1 = 100
x--; // decrease the value by 1 = 99
console.log(x)
//-----------------------------------------------------------
// Comparison operators
console.log(ageMykel > ageSarah); // >, <, >=, =<
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 38;
console.log(isFullAge)
console.log(now - 1991 < now - 2018)

const averageAge = (ageMykel + ageSarah) / 2
console.log(averageAge)
//------------------------------------------------------------


//------------------------------------------------------------
const age = 2;

if (age >= 18) {
    console.log(`Sarah is eligible to drive`)
} else{
    const yearLeft = 18 - age
    console.log(`Sarah has to wait ${yearLeft} years`)
}


const birthYear = 2000;

if (birthYear <= 2000) {
    console.log(`20th century`)
} else {
    console.log(`21th century`)
}


//Type conversion and coercion
//Type conversion
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(String(23) + " Years old");

//Type coercion
console.log('I am ' + 23 + ' years old');
// Answer: I am 23 years old
console.log('23' - '10' -3);
// Answer: 10.... This is because the minus operator tiggers the opposite calculation.
console.log (32 * 2)
// Answer: 46.... This is because that is the only way javascript can use the multiply operator.

//E.g
let n = '1' + 1;
n = n - 1;
console.log(n)
console.log('5' + 5 - '3' - '10') 
// Answer: 42


//-----------------------------------------------------------------------------------------------------

// Equality operators

const newAge2 = 18 
if (newAge2 === 18) {
    console.log(`Now an adult`)
} 

const favourite = prompt("what's your favourite number");
console.log(favourite);
if (favourite === 23) {
    console.log('cool, 23 is an amazing number')
} else{
    console.log('ouch, not what we want')
}
//Answer: ouch, not what we want.... This is because 23 is seen as a string


const newFavourite = Number(prompt("what's your favourite number"));
console.log(newFavourite);
if (newFavourite === 23) {
    console.log('okay cool, 23 is an amazing number');
} else if (newFavourite === 10){
    console.log('10 is also a cool number');
}
//Answer: okay cool, 23 is an amazing number... This is because of the number function added to prompt

if (newFavourite !== 23) {
    console.log('why not 23')
}


//-------------------------------------------------------------------------------------------------------------------
//THE SWICTH STATEMENT

const day = 'tuesday';

switch (day) {
    case 'monday': // this means that day === 'monday'
    console.log('plan my weekly structure');
    console.log('go to coding meetup');
    break;
    case 'tuesday':
        console.log('prepare for ama session');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('session review');
        break;
    case 'friday':
        console.log('meet up with friends');
        break;
    case 'saturday':
    case 'sunday':
        console.log('relax my brain and prepare for the next week')
        break;
        default:
            console.log('Not a valid day');
}

//------------------------------------------------------------------------------------------------------
//THE CONDITIONAL (TERNARY) OPERATOR:

const newAge = 11;
newAge >= 18 ? console.log('i like to drink wine') : console.log('i like to drink water');

// You can also say

const drink = newAge >= 18 ? 'wine' : 'water'
console.log(drink)
 
// or

let drink2;

if (newAge >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2)

//Using template literal to make a sentence with an expression
console.log(`i like to drink ${newAge >= 18 ? 'wine' : 'water'}`);


