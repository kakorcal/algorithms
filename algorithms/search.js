Array.prototype.linearSearch = function(val){
  // return the index of this[index] = val;
  for(let i = 0; i < this.length; i++){
    if(this[i] === val) return i;
  }
  return -1;
};

Array.prototype.binarySearch = function(val){
  // assume the array is sorted. return the index of this[index] = val;
  function search(arr){
    let first = 0;
    let last = arr.length - 1;
    let middle = Math.floor(last / 2);

    while(last - first !== 0){
      if(arr[middle] === val){
        // compare the middle element of the array with the target value.
        return middle;
      }

      if(arr[middle] > val){
        // if the target value is less than the middle element, continue search on lower half of array.
        // set last = previous middle
        last = middle;
        // new middle = last / 2;
        middle = Math.floor(last / 2);
      }else{
        // if the target value is greater than the middle element, continue search on upper half of array.
        // set first = previous middle
        first = middle;
        // new middle = (last + first) / 2
        middle = Math.floor((last + first) / 2);
      }
    }
    return -1;
  }

  return search(this);
};

//***************************************************************************

  // RECURSIVE ATTEMPT  
  // function search(arr){
  //   // if the array is empty, return -1;
  //   if(!arr.length) return -1;

  //   let middle = Math.floor(arr.length/2);
  //   // compare the middle element of the array with the target value.
  //   if(arr[middle] === val){
  //     return middle;
  //   }
  //   if(arr[middle] > val){
  //     // if the target value is less than the middle element, continue search on lower half of array.
  //     return search(arr.slice(0, middle));
  //   }else{
  //     // if the target value is greater than the middle element, continue search on upper half of array.
  //     return search(arr.slice(middle, arr.length));
  //   }
  // }

//***************************************************************************

module.exports = { Array };