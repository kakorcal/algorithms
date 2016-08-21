let swap = require('./sorting_part1').swap;

function merge(arr1, arr2){
  // merges two sorted arrays into a new array
  // 1. declare a new empty array, and pointers corresponding to indices 
    // in arr1 and arr2 (set them both to 0)
  let arr = [];
  let i1 = i2 = 0;
  // 2. if the first element in arr1 is less than the first element in 
    // arr2, push the first element in arr1 to the new array, and move the 
    // pointer for arr1 one spot to the right. Otherwise, do this for arr2.
  while(true){
    // 3. Repeat this process until you've gone through one of the arrays
      // return the new array, concatenated with whatever elements are remaining 
      // from the array that you haven't exhausted yet.  
    if(arr1[i1] < arr2[i2]){
      arr.push(arr1[i1++]);
    }else if(arr1[i1] > arr2[i2]){
      arr.push(arr2[i2++]);
    }else{
      return arr.concat(arr1.slice(i1), arr2.slice(i2));
    }
  }
}

function mergeSort(arr){
  // if the array length is 1, return that array
  if(arr.length === 1){
    return arr;
  }else{
    return merge(mergeSort(arr.slice(0, arr.length/2)), mergeSort(arr.slice(arr.length/2, arr.length)));
  }
}

function partition(arr, left, right){
  // 1. Set the pivot value to be the value at the left index, and set a variable 
  //    called partitionIndex equal to left. The partitionIndex will help us keep track 
  //    of where to perform our swaps so that we wind up with values correctly placed on 
  //    either side of the pivot.
  let pivotValue = arr[left];
  let partitionIndex = left;
  // 2. For every index greater than left and less than right + 1, compare the array 
  //    value to the pivot value.
  for(let i = left + 1; i <= right; i++){
    // 3. If the array value at the given index is less than the pivot value, increment 
    //    the partition index and swap the array value with the value at the partition index.
    if(pivotValue > arr[i]){
      swap(arr, i, ++partitionIndex);
    }
  }
  // 4. At the end, swap the pivot value with the value at the partition index 
  //    (this ensures that the pivot ends up in between values less than it and values 
  //    greater than it).
  swap(arr, left, partitionIndex);
  // 5. Return the partition index. 
  return partitionIndex;
}

function quickSort(arr, left=0, right=arr.length - 1) {
  // If left is less than right, declare a variable called partitionIndex which is 
    // equal to the result of a call to partition, passing in arr, left, and right. 
    // After the call to partition, perform a quicksort to the two subarrays to the 
    // left and right of the partitionIndex.
  if(left < right){
    var partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

module.exports = {mergeSort, quickSort, merge, partition};