
// Variable assignment

let country = 'Nigeria';
let continent = 'Africa';
let population = 10;
console.log(country)
console.log(continent)
console.log(population)


//---------------------------------------------------------------------------------
// Data type Assignment

//Boolean
let isIsland = true

console.log(isIsland)


//----------------------------------------------------------------------------------
// Let and Const Assignment

const language = 'igbo';

console.log(language)


//--------------------------------------------------------------------------------

// Basic operator assignment

let half_1 = population / 2
let half_2 = population / 2
console.log(half_1, half_2)
console.log(population++)

let finland = 6
console.log(population > finland)

const averagePopulation = 33
console.log(population < averagePopulation)

const description = `${country} is in ${continent} and it's ${population} people speak ${language}`
console.log(description)

//----------------------------------------------------------
//Coding challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index),
// which is calculated using the formula: 
// BMI = mass / height ** 2 or mass / (height * height).
// mass in kg and height in meter).

// 1. Store Mark's and John mass and height in variables.
// 2. Calculate both their BMIs using the formula above.
// 3. Create a boolean variable 'markHeightBMI' containing
// information about whether mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
// John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weight 95 kg and is 1.88 m tall.
// John weights 85 kg and is 1.76 m tall.

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2
console.log(markBMI)

let johnBMI = johnWeight / johnHeight ** 2
console.log(johnBMI)

let markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI)

// Muilti line strings
// console.log(`mark's height which is 
// ${markHeight} is greater than 
// john's height which is 
// ${johnHeight}`)

//--------------------------------------------------------------------------------------------------------------

// If else assignment
if (population > 33) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average`)
}
//------------------------------------------------------------------------------------------------------------
//Coding challenge #2

// Use the BMI example from Challange #1, and the code  you 
// already wrote, and improve it:

// 1. Print a nice output to the console, saying who has the 
// higher BMI. The message can be either "Mark's BMI is higher
// than John's" or "John's BMI is higher than Mark's"

// 2. Use a template string to include the BMI values as the
// output. Example: "Mark's" BMI (28.3) is higher than John's
// (23.9)"

// HINT: Use an if/else statement.
// 
// No #1
if (markBMI > johnBMI){
    console.log(`Mark BMI ${markBMI} is higher than John's BMI ${johnBMI}`)
} else{
    console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`)
}


//-------------------------------------------------------------------------------------
// Coding challenge #3
/*
1. Calculate the average score for each team, using the 
test data below.
2. Compare the team's average score to determine the winner
of the competition, and print it to the console. Don't
forget that there can be a draw, so test for that as well
(draw means they have the same average score).

3. Bonus 1: Include a requirement for a minimun score of 100.
With this rule, a team only wins if it has a higher score
than the other team, and the same time a score of at least
100 points. HINT: Use a logical operator to test for 
minimum score, as well as multiple else-if block.

4. Bonus 2: Minumun score also applies to a drae! so a draw
only happens when both team have the same score and both have
a score greater or equal 100 points. Otherwise, no team
wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 
91 and 110.
TEST DATA BONUS 1: Dolphins acore 97, 112 and 101. Koalas
score 109, 95 and 123.
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas
score 109, 95 and 106.
*/

const dolphinsAverageScore = (96 + 108 + 89) / 3;
console.log(dolphinsAverageScore)
// Answer: 97.6
const KoalasAverageScore = (88 + 91 + 110) / 3;
console.log(KoalasAverageScore)
// Answer: 96.3

if (dolphinsAverageScore > KoalasAverageScore) {
    console.log("dolphin wins");
} else if (KoalasAverageScore > dolphinsAverageScore){
    console.log("koalas wins");
} else {
    console.log("match is a draw");
}


// Bonus 1:
const dolphinsAverageScore2 = (97 + 112 + 101) / 3
const KoalasAverageScore2 = (109 + 95 + 123) / 3
const minimunScore = 100 

if (dolphinsAverageScore2 > KoalasAverageScore2 && dolphinsAverageScore2 >= minimunScore) {
    console.log("dolphin wins again")
} else if (KoalasAverageScore2 > dolphinsAverageScore2 && KoalasAverageScore2 >= minimunScore) {
    console.log("koalas wins again")
} else { 
    console.log("no team wins")
}

//Bonus 2: 

const dolphinsAverageScore3 = (97 + 112 + 101) / 3
console.log(dolphinsAverageScore3)
const KoalasAverageScore3 = (109 + 95 + 106) / 3
console.log(KoalasAverageScore3)
 if (dolphinsAverageScore3 === KoalasAverageScore3 && dolphinsAverageScore3 && KoalasAverageScore3 >= minimunScore){
    console.log("game draws")
 } else {
    console.log("no team wins")
 } 


//----------------------------------------------------------------------------------------------------------------------------
// : Equality Operators: == vs. === Assignment:

const numNeighbours = prompt('How many neighbour countries does your country have?');
 
if (numNeighbours == 1) {
 console.log('Only 1 border!')
 } else if (numNeighbours > 1) {
    console.log('More than 1 border');
 } else {
    console.log('No borders')
 }



//---------------------------------------------------------------------------------------------------------
// Logical operator assignment:

const sarahPopulation = 50000;
const sarahLanuguage = 'English';
const sarahIsland = 'False';

if (sarahPopulation < 50000 && sarahLanuguage === "English" && sarahIsland === 'False') {
    console.log(' Sarah should live in Nigeria')
} else console.log('Nigeria does not meet your criteria')



//---------------------------------------------------------------------------------------------------------
// The switch statement assignment:
const language2 = 'english';
switch (language2) {
    case 'chinese or mandarin': 
    console.log('MOST number of native speakers!');
    break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
    break;
    case 'english':
        console.log('3rd place');
    break;
    case 'hindi':
        console.log('number 4');
    break;
    case 'arabic':
        console.log('5th most spoken language')
    break;
    default:
         console.log('Great language too :D')
}

//--------------------------------------------------------------------------------------

// Coding challenge #4
/*
Steven wants to buils a very simple tip calculator for 
whenever he goes eating in a restaurant. In his country,
it's usual to tip 15% if the bill between 50 and 300. If 
the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill
value. Create a variable called 'tip' for this. It's not
allowed to use an if/else statemnet (If it's easier for you,
you can start with an if/else statement, and the try to
convert it to a ternery operator!)

2. Print a string to the console containing the bill value,
the, and the final value (bill + tip).
Example: 'The bill was 275, the tip was 41.25, and the 
total value 316.25'

//TEST DATA: Test for bill values 275, 40 and 430
*/
const bill = 430; 

const tip = bill >= 50 && bill <= 300 ? bill * 0.15  : bill * 0.2 ;
console.log(`The tip is ${tip}`)

let totalValue = (tip + bill)
console.log(`The total value is ${totalValue}`) ;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${totalValue}`)


//-----------------------------------------------------------------------------------------------


