let a, b, others;

[a, b, ...others] = [1, 2, 3, 4, 5];

console.log(`a = ${a}, b = ${b}`);
console.log(`others = ${others}`);

console.log(others);
console.log(typeof(others));
console.log(others.length);


console.log("******************************");

const user = {
    id: 4,
    isVerified: false
};

const { id, isVerified } = user;

console.log(`id = ${id}`); // 42
console.log(`isVerified = ${isVerified}`); // true

console.log("******************************");

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