// https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/

function myRegularFunction() {
    const myArrowFunction = () => {
      console.log(arguments);
    }
    myArrowFunction('c', 'd');
  }
  myRegularFunction('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2 }