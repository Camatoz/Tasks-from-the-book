// Task-1
if (name === "Yura") {
  console.log("Привет Мне!");
} else if (name === "Viktor") {
  console.log("Привет пап!");
} else if (name === "Nina") {
  console.log("Привет мам!");
} else {
  console.log("Это не ты!!");
}

// Task-2
let sheepCounted = 0;
while (sheepCounted < 10) {
  console.log("Посчитано овец : " + sheepCounted + "!");
  sheepCounted++;
}
console.log("HRRRRrrrrrrrrrr......");

// Task-3
for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
  console.log("Посчитано овец : " + sheepCounted + "!");
}
console.log("HRRRRrrrrrrrrrr......");

// Task-4
for (let t = 3; t < 10000; t = t * 3) {
  console.log(t);
}

// Task-5
let t = 3;
while (t < 10000) {
  console.log(t);
  t = t * 3;
}

// Task-6
let r = "Nick";
for (let e = 0; e < r.length; e++) {
  console.log(r[e]);
}
