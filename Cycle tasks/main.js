// Task-1 (Выводить результат, в зависимости отзначения переменной "m")
let m = "55";
let n = "";

if (m > 50) {
  n = "Bigger";
} else {
  n = "Smaller";
}

console.log(n);

// Task-2 (Вывести числа от 45 - 67)
let number1 = 45;
do {
  console.log(number1);
  number1++;
} while (number1 < 68);

// Task-3 (вывести числа от 45 до 670, кратно 10)
let w = 45;
while (w <= 670) {
  console.log(w);
  w += 10;
}

// Task-4 (Вывести числа от 45 - 67, используя for)
for (let n1 = 45; n1 <= 67; n1++) {
  console.log(n1);
}

// Task-5 (Вывести числа от 45 - 670, используя for)
for (let n2 = 45; n2 <= 670; n2 += 10) {
  console.log(n2);
}

// Task-6 (выводить название числа от 0 до 5 используя switch)
let sameNum = "2";
switch (sameNum) {
  case "0":
    console.log("zero");
    break;
  case "1":
    console.log("one");
    break;
  case "2":
    console.log("two");
    break;
  case "3":
    console.log("three");
    break;
  case "4":
    console.log("four");
    break;
  case "5":
    console.log("five");
    break;
  default:
    console.log("not us number");
}
// Task-7 (выводить название числа от 0 до 5 используя if)
let sameNum1 = "3";
if (sameNum1 == 0) {
  console.log("zero");
} else if (sameNum1 == 1) {
  console.log("two");
} else if (sameNum1 == 2) {
  console.log("two");
} else if (sameNum1 == 3) {
  console.log("three");
} else if (sameNum1 == 4) {
  console.log("four");
} else if (sameNum1 == 5) {
  console.log("five");
} else {
  console.log("not us number");
}

// Task-8 (В переменных size и unit хранятся размер и единицы измерения информации 120 и «Кб» соответственно. Зная что могут быть заданные Кб, Мб, Гб (кило-, мега- и гигабайты) и 1килобайт равен 1024 байта, найти количество байт в size.)
let size = 120;
let unit = "Мб";

if (unit === "Кб") {
  console.log((size *= 1024));
} else if (unit == "Мб") {
  console.log((size *= 1024 * 1024));
} else if (unit == "Гб") {
  console.log((size *= 1024 * 1024 * 1024));
} else {
  console.log("Incorrect value!");
}




