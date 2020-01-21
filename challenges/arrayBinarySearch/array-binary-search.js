'use strict';
let arrayBinarySearch = module.exports = {};

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
