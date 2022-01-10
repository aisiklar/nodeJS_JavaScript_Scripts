// an example on reduce()

// example on summation
// ex-1

const arr1 = [1, 2, 3, 4];
const reducer = (value1, value2) => value1 + value2;

let result1 = arr1.reduce(reducer);
console.log("result1: ", result1);



let result2 = arr1.reduce(reducer, 5);
console.log("result2: ", result2);

let result3 = arr1.reduce((v1, v2) => v1 + v2, 5);
console.log("result3: ", result3);

let result4 = arr1.reduce((v1, v2) => v1 * v2, 5);
console.log("result4: ", result4);

let result5 = arr1.reduce((v1, v2) => v1 * v2);
console.log("result5: ", result5);

const array = [15, 16, 17, 18, 19];

function reducer2(previous, current, index, array) {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}

console.log(array.reduce(reducer2));

// rest parameter
console.log("\n**********REST PARAMETER **************" + "\n");
const sum = (...args) => {
    //const args = argss;
    //console.log("args: ", args);
    return args.reduce((a, b) => a + b, 0);
  }

  console.log(sum(1, 2));