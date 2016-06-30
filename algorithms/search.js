Array.prototype.linearSearch = function(val){
  // return the index of this[index] = val;
  for(let i = 0; i < this.length; i++){
    if(this[i] === val) return i;
  }
  return -1;
};

Array.prototype.binarySearch = function(val){

};

module.exports = { Array };