// https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/

// "use strict"

function myRegularFunction() {
    const myArrowFunction = () => {
      console.log(arguments);
    }
    myArrowFunction('c', 'd');
  }
  myRegularFunction('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2 }

console.log("****************************")
// about this value:

//During a simple invocation the 
//value of this equals to the global object (or undefined if the function runs in strict mode)

  function myFunction() {
    console.log(this);
  }
  // Simple invocation
  myFunction(); // logs global object (window)

  console.log("****************************")

  // During a method invocation the value of this is the object owning the method:

  const myObject = {
    method() {
      console.log(this);
    }
  };
  // Method invocation
  myObject.method(); // logs myObject

  console.log("****************************")

/* 
  During an indirect invocation using myFunc.call(thisVal, arg1, ..., argN) or myFunc.apply(thisVal, [arg1, ..., argN]) the value of this equals to the first argument */

  function myFunction() {
    console.log(this);
  }
  const myContext = { value: 'A' };
  myFunction.call(myContext);  // logs { value: 'A' }
  myFunction.apply(myContext); // logs { value: 'A' }

  console.log("****************************")

  // During a constructor invocation using new keyword this equals to the newly created instance:

  function MyFunction2() {
    console.log(this);
  }
  new MyFunction2(); // logs an instance of MyFunction2

  console.log("****************************")

  /*
No matter how or where being executed, this value inside of an arrow function always equals this value from the outer function. In other words, the arrow function resolves this lexically
  */

const myObject2 = {
  myMethod(items) {
    console.log(this); // logs myMethod
    const callback = () => {
      console.log(this); // logs myMethod
    };
    items.forEach(callback);
  }
};
myObject2.myMethod([1, 2, 3]); 
