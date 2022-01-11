// apply() method:

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

console.log("This doesn't work because Math.max expects comma-separated arguments, but not an array.")
console.log(Math.max(numbers));

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2

// ************************ aşağıdaki blok çalıştı ancak arrow function ile çalışmıyor **************************

console.log("************start of this script***************");

// aşağıdaki obj ve key olarak function() çalıştı. Ancak arrow function olursa çalışmıyor
/* 
const Obj = {
    func1: function () {
    console.log(`this.number1: ${this.number1}, this.number2: ${this.number2}`);
    this.number1 *= 2;
    this.number2 -= 1;
    return this.number1 * this.number2; 
  }
}
 */

// below function doesnt work with arrow function!
function func1() {
    console.log(`this.number1: ${this.number1}, this.number2: ${this.number2}`);
    this.number1 *= 2;
    this.number2 -= 1;
    return this.number1 * this.number2;
}

const obj1 = {
    number1: 4,
    number2: 3 
};

console.log(`obj1.number1: ${obj1.number1} and obj1.number2: ${obj1.number2}` );

//console.log(Obj.func1.apply(obj1));
console.log(func1.apply(obj1));

console.log("**************end of this script************");

// *************************************************************

function minOfArray(arr) {
    let min1 = Infinity;
    //let QUANTUM = 32768; //original var
    let QUANTUM = 3;
    console.log(`min1 is ${min1} and QUANTUM is ${QUANTUM}`);
  
    for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
      console.log(`i: ${i}, len: ${len} `);
      console.log(`arr.slice(i, Math.min(i+QUANTUM, len)): ${arr.slice(i, Math.min(i+QUANTUM, len))}`)
      var submin = Math.min.apply(null,
                                  arr.slice(i, Math.min(i+QUANTUM, len)));
      min1 = Math.min(submin, min);
    }  
    return min1;
  }
  
  let min1 = minOfArray([5, 6, 2, 3, 7]);
  console.log(min1);


