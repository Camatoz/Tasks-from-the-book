// Task-1
let str = "HI!";
let num = 123;
let flag = true;
let txt = "true";
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

// Task-2
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

// Task-3
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

// Task-4
let height = 23;
let width = 10;
let s = height * width;
console.log(s + "cm");

// Task-5
let h = 10,
  r = 4,
  p = 3.1415,
  v = h * r * p;
v = v.toFixed(3);
console.log(v + "m");

// Task-6
let n = Math.pow(3, 2);
let m = Math.pow(4, 2);
let b = Math.sqrt(n + m);
console.log(b);

// Task-7
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
