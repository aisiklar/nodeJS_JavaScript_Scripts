// destructuring in arrays..

let a, b, others;

[a, b, ...others] = [1, 2, 3, 4, 5];

console.log(`a = ${a}, b = ${b}`); // a = 1, b = 2
console.log(`others = ${others}`); //others = 3,4,5

console.log(others); //[ 3, 4, 5 ]
console.log(typeof(others)); // object
console.log(others.length); // 3

// use , for omitting items. Below you omit first two items and destructure the rest:
[, , ...someOthers] = [1, 2, 3, 4, 5];
console.log(`someOthers: ${someOthers}`); // 3,4,5


console.log("******************************");

const user = {
    id: 4,
    isVerified: false
};

const { id, isVerified } = user;

console.log(`id = ${id}`); // 42
console.log(`isVerified = ${isVerified}`); // true

console.log("******************************");

// changing the variable name in object destructuring

const o = {
    p: 42, 
    q: true
};
console.log("initial values: ", o.p, o.q);

const { p, q } = o;
console.log(`p and q values are: ${p}, ${q}`); //42, true
//console.log(p, q);

const {p: foo, q: bar} = o;

console.log(`foo = ${foo}`); // 42
console.log(`bar = ${bar}`); // true
console.log(`p = ${p}`); //42
console.log(`q = ${q}`); // true

console.log("******************************");

const newObject = {
    key1: "this is a string",
    key2: 34,
    key3: "another string",
    key4: true,
    key5: false
}

const {key2, key5} = newObject;
console.log(` key2 = ${key2}, key5 = ${key5}`);

console.log("******************************");

//

const profileData = {
    name: "some name",
    age: 23,
    nationality: "world citizen"
}

const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    }
  

profileUpdate(profileData);


const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = (stats) => (stats.max + stats.min) / 2.0; 
  // Only change code above this line

console.log(half(stats));

// alternative 
/* 
function half (stats) {
    return (stats.max + stats.min)/2;
}
console.log(half(stats)); */

// destructuring:
const half2 = ({max, min}) => {
    return (max + min) / 2; 
  }
console.log(half2(stats));