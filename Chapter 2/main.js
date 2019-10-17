// Первая буква большая
let someString = "jaVasCript";
let lowerString = someString.toLowerCase();

let firstLetter = lowerString[0];
let firstLetterUpper = firstLetter.toUpperCase();

let restOfString = lowerString.slice(1,4); 

let fourLetter = lowerString[4];
let fourLetterUpper = fourLetter.toUpperCase();

let restOfStringEnd = lowerString.slice(5,10);

firstLetterUpper + restOfString + fourLetterUpper + restOfStringEnd;

console.log (firstLetterUpper + restOfString + fourLetterUpper + restOfStringEnd);
// Первая буква большая


// Проход в кино
let age = 11;
let accompanied = true;
let ageControl = 12;
let goToSinema = (age >= ageControl) || (accompanied);
console.log(goToSinema);
// Проход в кино
