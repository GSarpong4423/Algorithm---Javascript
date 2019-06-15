largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function largestOfFour(arr) {
  
let largestNumbers =[];
     
    for (var i = 0; i < arr.length; i++) {
      let largestNumber = -10020;
      for (var j = 0; j < arr[i].length; j++) {
          if (arr[i][j] > largestNumber) {
              largestNumber = arr[i][j];
          }
    //   testing output to confirm that we have access to each individual element
    //console.log(arr[i][j]);
     }
     largestNumbers.push(largestNumber);
   }
   return largestNumbers;
}
console.log(largestOfFour([[400, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1], [-1000, -1000, -857, -1]]));