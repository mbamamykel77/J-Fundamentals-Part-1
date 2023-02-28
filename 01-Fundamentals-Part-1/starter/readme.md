VARIABLES AND OPERATORS

- If you want to declare a new variable, you need to do that using the "let" word
e.g
let firstName = 'mykel'
console.log(firstName)

- But if you want to reassign the variable, you do not need to use the "let"
e.g 
firstName = 'chigozie'
console.log(firstName)
------------------------------------------------------------------------------------------------------------------------
Naming Convention:
* Naming your value should be easy and readable for anyone looking at your code.
* Always use "camelCase" for naming your variables
* If it is a single word, it should always be written in "lowercase"
* More than one word should be written in "firstWordUpperCase"
* If you are using the underscore, it should be "all_lower_case"
* Starting variable with number is an illegal variable name
* If it is a real constant like "let PI = 3.1415", it is allowed as the console will recognize it.

-------------------------------------------------------------------------------------------------------------------------
TYPES OF DATA TYPES

To determine the type of data type, you can say console.log(type of & value) 
1. Number
2. String - This is a text and should be in a "quote"

3. Boolean - This is a logical type that is either true or false and does not require a "quote" for output
- let javascriptIsFun = true;
- console.log(javascriptIsFun)
4. Undefined - This is the value taken by a variable but not yet defined.
- let year;
- console.log(year)
5. Null - Also means empty value
6. Symbol - A unique value that cannot be changed.
7. BigInt - Larger integers than the number type can hold


-------------------------------------------------------------------------------------------------------------------------
LET, CONST & VAR

(By default always use CONST in your program to avoid bugs).
(Never use VAR)
Let - This can be used when you want to reassign the variable. This is also called mutate of variable
e.g
let age = 30'
age = 31;

Const - This is used to declare a variable that cannot be changed
e.g
const birthYear = 1991;
birthYear = 1990
***error***

CaseScenero: The age can age but the birthYear of a person cannot change, 
that is why let is good for age and const is good for year.


-------------------------------------------------------------------------------------------------------------------------
OPERATOR PRECEDENCE:
This shows what operator takes place before the other.
E.G 	

const now = 2037
const ageMykel = now - 1991;
const ageSarah = now - 2018;
console.log(ageMykel, ageSarah)

Answer:
ageMykel = 46 , ageSarah = 19

const averageAge = ageMykel + ageSarah / 2
console.log(averageAge)
Answer = 55.5 (which is wrong because division comes before multiplication in JavaScript)

The correct syntax should be:
const averageAge = (ageMykel + ageSarah) / 2
console.log(averageAge)
Answer = 32.5 
(This is correct because the bracket which is called grouping, takes precedence and will calculate anything in the bracket first before what is outside takes effect).

------------------------------------------------------------------------------------------------------------------------

TYPE CONVERSION AND TYPE COERCION 
TYPE CONVERSION:
This involves converting your strings to numbers. When you have a variable value as a string but you want to calculate with another number or console.log it as arithmetic, you will have to use the number function;
NB: Remember to always start the Number and String function with a capital letter.
Const inputYear = “1991”;
Console.log(inputYear + 18)
Answer: 199118 (this is wrong because the output recognizes the inputYear as a string)
To rectify this, you need to use the number function
Console.log(Number(inputYear) + 18);
Answer: 1991
Console.log(String(23) + ‘years old’)
Answer: 23 years old

TYPE COERCION:
This happens when an operator is dealing with two values that have different types.
//Type coercion
console.log('I am ' + 23 + ' years old');
// Answer: I am 23 years old

console.log('23' - '10' -3);
// Answer: 10.... This is because the minus operator triggers the opposite calculation. 


NB: You can only concatenate two strings with the + operator, but when any other operator is involved, it will see it as a calculation.
If you have a combination of strings and numbers with both the plus and minus operators, the plus will add the strings to the number and the minus will subtract the string as a number.
e.g: console.log(‘5’ + 5 – ‘3’ * ‘2’) 
answer: 5+5 = 55 – 3 = 52 - 10 = 42



-------------------------------------------------------------------------------------------------------------------------------

STATEMENT AND EXPRESSION:
EXPRESSION:
An expression is a piece of code that produces a value.
E.g; 3+4 is and expression because it produces a value.

STATEMENT:
A statement is a bigger piece of code that does no produce a value.
E.g: 
if (23 > 10)
const str = '23 is bigger');

-------------------------------------------------------------------------------------------------------------------------

THE CONDITIONAL (TERNARY) OPERATOR:
The ternery operator has 3 parts:

const newAge = 17;

newAge >= 18 ? // The condition part
console.log('i like to drink wine') : // The If part
 console.log('i like to drink water'); // The Else part

The condition part
The IF part
The Else part