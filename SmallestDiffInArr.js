function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

/* Given an array, finds the smallest difference 
   between any two elements.
   Ignores non-numbers when present in array.

   Returns :
   undefined : When input is not an array
   NaN : when only non-numbers are present in array
   number : when at least one number is present in array 
*/
var findSmallestDifference = function(arr) {
  var min = 0;
  
  //check whether input passed in is actually an array
  if (!isArray(arr))
    return undefined;
  
  // remove non-numbers since comparison of non-numbers is invalid
  // for findSmallestDifference function
  var numArr = arr.filter(
    function(value) {
     return !isNaN(value) && ((typeof value) === 'number')
    });

  //To find the difference we need at least two numbers. 
  //Else return 'undefined'
  if (numArr.length < 2)
    return undefined;
  
  //console.log(numArr);

  //We know that we have a array with at least 2 or more numbers
  //sort the array so that we are not making unnecessary comparisons
  numArr.sort(function(a, b) {return a-b});

  //initialize min for the first time
  min = Math.abs(numArr[1] - numArr[0]);

  for (var i = 0; i < numArr.length - 1; i++) {
      var diff = Math.abs(numArr[i+1] - numArr[i]);
      if (diff < min)
        min = diff;  
  }

  return min;

}

var result = findSmallestDifference([100, 500, 300, 1000, -200, 990]);
console.log(result); 