'use strict';

let challenges = module.exports ={};

challenges.SumInnerArray=(arr)=>{
    let result =[];
  for(let i=0; i<arr.length;i++){
    let sum=0;
    for(let j=0; j<arr[i].length;j++){
      sum +=arr[i][j]
    }
      result.push(sum)
  }
  return result
  }

challenges.fibonacciSequence = (index) => {
        let sum = 0;
            var goldenRatioResult = 1;
            var subGoldenRatioResult = 1;
            for ( let i = 0; i < index; i++) {
            goldenRatioResult *= 1.61803399;
            subGoldenRatioResult *= 1-1.61803399;
            }
            sum = Math.floor((goldenRatioResult - subGoldenRatioResult)/2.23606797400862)
      return sum
      }
    
challenges.fibonacciSequence2=(number)=>{
    let sum=0;
    let num2=1;
    let num1=0;
    let counter=1;
  while(counter<number){
  sum = num1 +num2;
  counter++;
  num1 = num2;
  num2 = sum;
  }
  return sum
  }