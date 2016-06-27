function swap(arr, i1, i2){
  // if the indexes are not within the array length, return undefined
  if(i1 >= arr.length || i2 >= arr.length || i1 < 0 || i2 < 0) return;
  // es2015 swap
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

function bubbleSort(arr){
  for(i = 0; i < arr.length; i++){
    for(j = 0; j < arr.length - i; j++){
      // push sorted elements to the back of the array
      if(arr[j] > arr[j+1]) swap(arr, j, j+1);
    }
  }
  return arr;
}

function selectionSort(arr){
  let [min, idx] = [arr[0], 0];
  for(i = 0; i < arr.length; i++){
    for(j = i; j < arr.length; j++){
      // find minimum value and index
      if(arr[j] < min) [min, idx] = [arr[j], j];
    }
    // push the sorted elements to the front of the array
    swap(arr, i, idx);
    // reset minimum
    [min, idx] = [arr[i+1], i+1];
  }
  return arr;
}

function insertionSort(arr){
  for(let i = 0; i < arr.length; i++){
    // save current value
    let current = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > current; j--){
      // only loop if elements on left of the index i is greater than the saved value
      // push every element to the right 
      arr[j + 1] = arr[j];
    }
    // inserting the current value to where the inner for loop stopped
    arr[j + 1] = current;
  }
  return arr;
}

module.exports = {swap, bubbleSort, selectionSort, insertionSort};