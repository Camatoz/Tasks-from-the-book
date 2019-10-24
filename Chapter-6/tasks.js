// Chapter 6 (Написать цикл for  для изменения массива)
let animals = ["Cat", "Dog", "Fish", "Bird"];

for (let i = 0; i < animals.length; i++) {
  animals[i] = animals[i] + " прекрасное животное!";
}

console.log(animals);

// Chapter 6 (Генератор случайных строк.)
let alfabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";
let stringLength = 5;

while (randomString.length < stringLength) {
  randomString += alfabet[Math.floor(Math.random() * alfabet.length)];
  console.log(randomString);
}

// Chapter 6 (Поменять символы строки.)
let input = "javascript is awesome";
let output = "";

for (let i = 0; i < input.length; i++) {
  let letter = input[i];

  if (letter == "a") {
    output = output + 4;
  } else if (letter == "e") {
    output += 3;
  } else if (letter == "o") {
    output += 0;
  } else if (letter == "i") {
    output += 1;
  } else {
    output += letter;
  }
}

console.log(output);
