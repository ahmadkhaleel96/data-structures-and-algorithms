'use strict'; 

  const arraySearch = require('../array-binary-search');


describe('Finding the index if a matching elements in an array', ()=>{
    it('Return the index of the element matching the key',()=>{
      expect(arraySearch.indexNum([1,2,3,4,5,6,7,8,9] , 4)).toStrictEqual(3)
    });
    it('Return -1 if the key does not match any element in the Array', ()=> {
        expect(arraySearch.indexNum([1,2,3,4,5,6,7,8,9], 10)).toStrictEqual(-1)
    });
    })