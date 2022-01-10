// exercise from freecodecamp

/* var printNumberTwo;
let count = 0;
for (let i = 0; i < 3; i++) {
    count++;
    console.log("count = ", count , "i = " , i);
    if (i == 2) {
        console.log("in the if block...")
        console.log("count = ", count , "i = " , i); 
        printNumberTwo = () => {
            return i;
        }
    }
}
console.log("out of for loop block...")
//console.log("count = ", count , "i = " , i);
console.log("printNumberTwo = ", printNumberTwo());
 */

// **************************************************************************
// another exercise

function checkScope() {
    let i = 'function scope';
    if (true) {
      console.log("inside the if block:");
      //console.log("i = ", i);
     let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  console.log(checkScope());