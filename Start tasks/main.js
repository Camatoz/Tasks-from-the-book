// Task-1 (Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true». При помощи оператора определения типа убедитесь, что переменных принадлежат типам: string, number, boolean.)
let str = "HI!";
let num = 123;
let flag = true;
let txt = "true";
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

// Task-2 (Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
// 5 + 3,
// 5 - 3,
// 5 * 3,
// 5 / 3,
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.)
let a1 = 5 + 3;
console.log(a1);
let a2 = 5 - 3;
console.log(a2);
let a3 = 5 * 3;
console.log(a3);
let a4 = 5 / 3;
console.log(a4);
let a5 = a1 + (a2 * a3) / a4;
console.log(a5);

// Task-3 (Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
// 5 % 3,
// 3 % 5,
// 5 + '3',
// '5' - 3,
// 75 + 'кг')
let a6 = 5 % 3;
console.log(a6);
let a7 = 3 % 5;
console.log(a7);
let a8 = 5 + "3";
console.log(a8);
let a9 = "5" - 3;
console.log(a9);
let a10 = 75 + "kg";
console.log(a10);

// Task-4 (Напишите скрипт, который находит площадь прямоугольника высота 23см. (в числовую переменную height), шириной 10см (в числовую переменную width), значение площади должно хранится в числовой переменной s.)
let height = 23;
let width = 10;
let s = height * width;
console.log(s + "cm");

// Task-5 (Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC), результат поместите в переменную v.)
let h = 10,
  r = 4,
  p = 3.1415,
  v = h * r * p;
v = v.toFixed(3);
console.log(v + "m");

// Task-6 (У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4). Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).)
let n = Math.pow(3, 2);
let m = Math.pow(4, 2);
let b = Math.sqrt(n + m);
console.log(b);

// Task-7 (Найди двенадцатый элемент (let nFib = 12, el12;) последовательности Леонардо Пизанского (нужно использовать функцию Math.pow(число, степень)). Не забудьте округлить полученное число до целого — Math.round(число).)
let f0 = 0;
let f1 = 1;
let f2 = f0 + f1;
let f3 = f1 + f2;
let f4 = f2 + f3;
let f5 = f3 + f4;
let f6 = f4 + f5;
let f7 = f5 + f6;
let f8 = f6 + f7;
let f9 = f7 + f8;
let f10 = f8 + f9;
let f11 = f9 + f10;
let f12 = f10 + f11;
console.log(f11);

// Task-8
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключи
  console.log(key); // name, age, isAdmin
  // значения ключей
  console.log(user[key]); // John, 30, true
}

// Task-9
let obj = {
  name: "John",
  surname: "Smith"
};
let nameNew = obj;
nameNew.name = "Pete";
delete obj.name;

console.log(obj);

// Task-10
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);

/* Техническое задание

Вес корма храним в переменной foodInGrams, а время сна в переменной sleepInHours.
В обе переменные будем записывать целые числа.

За каждые 10 грамм корма, которые я съел, я получаю 3 прыжка.
Например: за 50 грамм корма я должен сделать 15 прыжков.
Прыжки храним в переменной jumps.

За каждый час сна — 2 подтягивания.
Например: я поспал 5 часов и должен подтянуться 10 раз.
Подтягивания храним в переменной pulls.

Каждый прыжок дополняется одним кругом пробежки, а каждое подтягивание — половиной круга.
Например: 20 кругов по комнате даётся за 15 прыжков и 10 подтягиваний.
Круги храним в переменной runs.

*/
let foodInGrams = 300;
let sleepInHours = 15;

let jumps = ((foodInGrams / 10) * 3);
console.log("Нужно сделать " + jumps + " прыжков.");
let pulls = (sleepInHours * 2);
console.log("Нужно сделать " + pulls + " подтягиваний.");
let runs = jumps + (pulls / 2);
console.log("Нужно сделать " + runs + " кругов.");