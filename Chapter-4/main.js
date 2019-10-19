// Chapter 4 Подсчет очков
let scores = {};
scores["Yura"] = 0;
scores["Ryslan"] = 0;
scores["Sasha"] = 0;
scores["Serega"] = 0;

scores["Yura"] += 1;
scores["Ryslan"] += 4;
scores["Sasha"] += 2;
scores["Serega"] += 2;

console.log(scores);
// Chapter 4 Подсчет очков



// Извлечение из объекта
let myCrazyObject = {
	"name" : "Нелепый объект",
	"some array" : [7, 9, { purpose : "путаница", number : 123}, 3.3],
	"randome animal" : "Банановая акула"
};
console.log (myCrazyObject["some array"][2].number);