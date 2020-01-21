'use strict';
let arrayBinarySearch = module.exports = {};

/**
 * the function checks if the key is located in the array and returns the value of the index
 * @param arr
 * @param key
 * @return {boolean}
 */
arrayBinarySearch.indexNum = (arr, key) => {
  let index =  0;
  for (let i=0; i<arr.length ; i++){
    if (key === arr[i]){
      index = i;
      break;
    } 
    else{
      index = -1;
    }
  }
  return index
  }
