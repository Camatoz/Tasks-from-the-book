// Task-1 (Создайте объект city1 (var city1 = {}), укажите у него свойства name (название города, строка) со значением «ГородN» и population (населенность города, число) со значением 10 млн.)
let city1 = {
  name: "Moscow",
  population: "10000000"
};

// Task-2 (Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.)
let city2 = {};
city2.name = "New York";
city2.population = "1e6";

// console.log(city2);

// Task-3 (Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов)
function getName() {
  console.log(this.name);
}

city1.f = getName;
city2.f = getName;

city1.f();
city2.f();

// Task-4 (Создайте массив d1 с числовыми величинами 45,78,10,3.  Добавьте в массив d1 еще одно число ( d1[7] = 100). Выведите в консоль весь массив и его элементы с индексами 6 и 7.)
let d1 = [45, 78, 10, 3];
d1[7] = 100;
console.log(d1);
console.log(d1[6]);
console.log(d1[7]);

// Task-5
// let d2 = [45, 78, 10, 3];
// let sum2 = [];
// for (i = 0; i <= d2.length; i++) {
//   sum2[i] = [] +;
//   console.log(sum2);
// }
