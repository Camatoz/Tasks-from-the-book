// Task - 1
  function add(a, b) {
    return a + b;
  }
  function myltiply(a, b) {
    return a * b;
  }

  let mulResult = myltiply(5, 5);
  let addResult = add(mulResult, 50);
  console.log(addResult);

  // Task - 2
  let a1 = [1, 2, 3];
  let a2 = [4, 5, 6];
  let a3 = [1, 2, 3];

  function areArraySame(a, b) {
    let result = "";
    for (let i = 0; i < a.length; i++) {
      if (a[i] != b[i]) {
        result = false;
      } else {
        result = true;
      }
    }
    return result;
  }

  console.log(areArraySame(a1, a3));