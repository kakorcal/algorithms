function merge(arr1, arr2){
  // merges two sorted arrays into a new array
  // 1. declare a new empty array, and pointers corresponding to indices 
    // in arr1 and arr2 (set them both to 0)
  let arr = [];
  let i1 = i2 = 0;
  // 2. if the first element in arr1 is less than the first element in 
    // arr2, push the first element in arr1 to the new array, and move the 
    // pointer for arr1 one spot to the right. Otherwise, do this for arr2.
  while(i1 < arr1.length || i2 < arr2.length){
    // 3. Repeat this process until you've gone through one of the arrays
      // return the new array, concatenated with whatever elements are remaining 
      // from the array that you haven't exhausted yet.  
    if(arr1[i1] < arr2[i2]){
      arr.push(arr1[i1++]);
    }else{
      arr.push(arr2[i2++]);
    }  
  }
  return arr;
}

function partition(arr, left, right){

}

function mergeSort(arr){
  // if the array length is 1, return that array
  if(arr.length === 1){
    return arr;
  }else{
    return merge(mergeSort(arr.slice(0, arr.length/2)), mergeSort(arr.slice(arr.length/2, arr.length)));
  }
}

function quickSort(arr){

}

module.exports = {
  mergeSort, 
  quickSort, 
  merge,
  partition
};