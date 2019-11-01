// Task-1 (Напишите функцию hello1(), которая при вызове будет возвращать строку «Привет, JavaScript!».)
function hello1(a) {
  console.log("Hi, world!!!");
}
hello1();

// Task-2 (Напишите функцию hello2(), которая при вызове будет принимать переменную name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).  В случае отсутствующего аргумента выводить «Привет, гость»)
let name1 = "Nick";
function hello2(a, b) {
  if (name !== "undefined") {
    console.log("Hi, " + name1 + " !");
  } else console.log("Hi, gest !");
}
hello2();

// Task-3 (Напишите функцию mul(n,m), которая принимает два аргумента и возвращает произведение этих аргументов. Проверьте ее работу.)
function mul(a, b) {
  return a * b;
}
console.log(mul(2, 5));

// Task-4 (Создайте функцию repeat(str, n), которая возвращает строку, состоящую и n повторений строки str. n — по умолчанию 2, str — пустая строка)
function repeat(str, n = 2) {
  return str * n;
}
console.log(repeat("gh", 2));

// Task-x (вывести наименьшее число)
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(20, 6));

// Task-5 (Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных)
function rgb(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return "rgb(" + a + "," + b + "," + c + ")";
}
console.log(rgb(45, 0, 89));

// Task-6 (Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам (аргументы величины числовые).)
function avg() {
  let sum = 0;
  for (let i in arguments) {
    sum += arguments[i];
  }
  console.log(sum / arguments.length);
}

avg(1000, 500, 5);

// Task-7 (Создайте функцию m(a,b) оболочку для mul(). m() должна принимать два аргумента а возвращать результат работы mul() с этими двумя аргументами После выполнения задания поэкспериментируйте, создайте функцию log(), которая будет принимать одно значение, а вызывать  console.log() с этим значением.)
function m(a, b) {
  return mul(a, b);
}

function log(text) {
  console.log(text);
}

log(m(5, 2));

// Task-8 (Напишите функцию operation(m,n,o), в которой m и n — числовые переменные, а o — функциональный литерал, который берет два аргумента и выполняет математическую операцию над ними.)
function operation(m, n, o) {
  if (o == "+") {
    return m + n;
  } else if (o == "-") {
    return m - n;
  } else if (o == "*") {
    return m * n;
  } else if (o == "/") {
    return m / n;
  }
}

log(operation(9, 3, "-"));
