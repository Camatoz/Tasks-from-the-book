// Task-1
function hello1(a) {
  console.log("Hi, world!!!");
}
hello1();

// Task-2
let name1 = "Nick";
function hello2(a, b) {
  if (name !== "undefined") {
    console.log("Hi, " + name1 + " !");
  } else console.log("Hi, gest !");
}
hello2();

// Task-3
function mul(a, b) {
  return a * b;
}
console.log(mul(2, 5));

// Task-4
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
  console.log(min(2, 6));