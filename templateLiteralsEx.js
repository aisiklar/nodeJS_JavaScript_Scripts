const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Only change code below this line
  /* const failureItems = [
    `<li class="text-warning">${arr[0]}</li>`, 
    `<li class="text-warning">${arr[1]}</li>`, 
    `<li class="text-warning">${arr[2]}</li>`]; */
  let failureItems = [];
  for (let i in arr) {
      console.log(arr);
      console.log(i);

    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line
  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);

