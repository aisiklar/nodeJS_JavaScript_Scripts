
// iterator "in" in objects give "keys"
function dump_props(obj, obj_name) {
    let result = '';
    for (let i in obj) {
      result += obj_name + '.' + i + ' = ' + obj[i] + '\n';
    }
    return result;
  }

let car = {
      make: "Ford",
      model: "Mustang"
  }

console.log(dump_props(car, "car"));

console.log("************************");

myObject = {
    key1: "some Value",
    key2: 23,
    key3: true
}
// iterating the keys
for (i in myObject) {
    console.log(i); // key1 \n key2 \n key3
}
// iterating the values
for (j in myObject) {
    console.log(myObject[j]);
}

// this doesnt work!
/* for (j of myObject) {
    console.log(myObject[j]);
}
 */

// in vs of in arrays
anArray = ['a', 'b', 'c', 'd'];
for (i in anArray) {
    console.log(i);
}
for (i of anArray) {
    console.log(i);
}