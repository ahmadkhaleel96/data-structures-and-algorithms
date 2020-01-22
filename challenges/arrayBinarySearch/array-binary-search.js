'use strict';
let arrayBinarySearch = module.exports = {};

/**
 * the function checks if the key is located in the array and returns the value of the index
 * @param arr
 * @param key
 * @return {boolean}
 */
arrayBinarySearch.indexNum = (arr, key) => {
  let arrStart = 0;
  let arrEnd = arr.length -1;
    let index =  0;
     while (arrStart <= arrEnd){
       let middleIndex = Math.floor((arrStart + arrEnd)/2)
       if ( arr[middleIndex] === key){
         index = middleIndex;
         break;
       } else if(arr[middleIndex] < key) {
         arrStart = middleIndex +1;
       } else {
         arrEnd = middleIndex -1; 
       }
       index = -1;
     }
  return index
  }
