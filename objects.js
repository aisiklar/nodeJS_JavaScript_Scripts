// four variables are created and assigned in a single go,
// separated by commas
const myObj = new Object(),
      str = 'myString',
      rand = Math.random(),
      obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'anObject';
myObj['']               = 'Even an empty string';

console.log(myObj);
