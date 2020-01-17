'use strict'

const reverseArray = (arr) => {
    let reversedArray = [];
    for (let i= arr.length; i>=0; i--){
        reversedArray[reversedArray.length]=arr[i];
    };
    return reversedArray;
};