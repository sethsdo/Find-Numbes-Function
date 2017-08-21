//takes an array and return just the numbers
function numbersOnly(arr) {
  var newArray = [];
  for(var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number"){
      newArray.push(arr[i]);
    }
  } return newArray;
}
//removes any numbers from arr and returns the array
function removeNumbers(arr) {
  for(var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number"){
      arr.splice(i, 1);
    }
  } return arr;
}
removeNumbers([1, "apple", -3, "orange", 0.5]);
numbersOnly([1, "apple", -3, "orange", 0.5]);
