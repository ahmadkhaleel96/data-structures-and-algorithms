'use strict';

let insertShiftArr = module.exports = {};
insertShiftArr.insertShiftArray = (arr, val) => {
  let newArr = [];
  let mid = Math.ceil(arr.length / 2);

  for (let i = 0; i <= arr.length; i++) {
    if (i > mid) {
      newArr[i] = arr[i - 1];
    }
    if (i < mid) {
      newArr[i] = arr[i];
    }

    if (i === mid) {
      newArr[i] = val;
    }
  }
  return newArr;
}