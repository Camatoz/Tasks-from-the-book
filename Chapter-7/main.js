let words = ["кот", "жук", "ухо", "мак"];

// Выбираем случайное слово
let word = words[Math.floor(Math.random() * words.length)];

// Создаем итоговый массив
let answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

let remainingLetters = word.length;
let guesses = 0;

// Игровой цикл
while (remainingLetters > 0 && guesses < 6) {
  // Показываем состояние игры
  alert(answerArray.join(" "));

  // Запрашиваем вариант ответа
  let guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");

  if (guess === null) {
    // Выходим из игрового цикла
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
  } else {
    guess = guess.toLowerCase();
    guesses++;
    console.log(guesses);
  }
  // Обновляем состояние игры
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess && answerArray[j] === "_") {
      answerArray[j] = guess;
      remainingLetters--;
    }
  }
}
// Конец игрового цикла

// Отображаем ответ и поздравляем игрока

if (remainingLetters > 0) {
  alert("Очень плохо! Было загадано слово " + word);
} else {
  alert("Отлично! Было загадано слово " + word);
}
alert(answerArray.join(" "));