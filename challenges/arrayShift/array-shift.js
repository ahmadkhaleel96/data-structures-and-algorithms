'use strict';

const insertShiftArray = (arr, value) => {
    for( let i=0; i< arr.length; i++){
        if (value => arr[i] || value <= arr[i+1]){
            arr[arr.i]=value
        }
    }
   return arr;
};

console.log(insertShiftArray([1,2,6,7,9,25], 8))