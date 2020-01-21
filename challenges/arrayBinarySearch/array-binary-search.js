'use strict';

const index = (arr, key) => {
    let index =  0;
  for (let i=0; i<arr.length ; i++){
    if (key === arr[i]){
      index = i;
    } 
    else{
      index = -1;
    }
  }
  return index
  }
  
  
  
  
  console.log(index([1,2,6,7,9,25], 25))