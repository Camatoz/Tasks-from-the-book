// Магический шар
let myDesign = ["Звучит неплохо...", 
				"Да, это нужно сделать!", 
				"Не думаю, что это хорошая идея.", 
				"Может не сегодня?",
				"Сама судьба - против!!!"];

let result = Math.random();
	result = result * 5;
	result = Math.floor(result);
	result = myDesign[result];

console.log(result);


// Дразнилка
let bodyParts = ['глаз', 'нос', 'рот'];
let bodyFooys = ['вонючий', 'унылый', 'дурацкий'];
let animalParts = ['глаз', 'нос', 'голова'];
let randomWords = ['мухи', 'выдры', 'дубины', 'мартышки', 'псины'];

let	oneBodyPart = bodyParts[Math.floor(Math.random() * 3)];
let	oneBodyFooy = bodyFooys[Math.floor(Math.random() * 3)];
let oneAnimalParts = animalParts[Math.floor(Math.random() * 3)];
let	oneRandomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// let wresult = "У тебя" + " " + oneBodyPart + " " + "еще более" + " " + oneBodyFooy + " " + "чем" + " " + oneAnimalParts + " " + oneRandomWord + "!!!";
let wresult = ["У тебя", oneBodyPart, "еще более", oneBodyFooy, "чем", oneAnimalParts, "у", oneRandomWord + "!!!"].join(" ");
console.log(wresult);