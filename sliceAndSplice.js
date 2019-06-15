function frankenSplice(arr1, arr2, n) {
 
  // It's alive. It's alive!
//   return arr2;
    // sliceArr2.splice(0, arr1,2);
    var arrSlice1 = arr1;
    var arrSlice2 =arr2;
    arrSlice2.splice(1,0, arrSlice1);
    arrSlice2 =
console.log(arrSlice2);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//How to get elements from the arr1 to arr2

// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

//should return [4, 1, 2, 3, 5].