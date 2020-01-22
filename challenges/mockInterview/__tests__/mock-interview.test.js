'use strict';

let challenges = require('../mock-interview.js')


describe('Sum of Array',()=>{
    it('should specific a sum for each array inside a new array',()=>{
        expect(challenges.SumInnerArray([ [1, 2, 3], [3, 5, 7], [1, 7, 10] ])).toStrictEqual([6, 15, 18]);
        expect(challenges.SumInnerArray([ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ])).toStrictEqual([6, 5, 20]);
    })
    it('should specific length of  array that involve the sum',()=>{
        expect(challenges.SumInnerArray([ [1, 2, 3], [3, 5, 7], [1, 7, 10] ]).length).toBe(3);
        expect(challenges.SumInnerArray([ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ]).length).toBe(3);
        expect(challenges.SumInnerArray([ [0, 1, 5], [-4, 7, 2], [-3, 12, 11], [-3, -12, 15], [0, 12, 1] ]).length).toBe(5);
    })
});

describe('Fibonocci Sequence',()=>{
    it('the input is equal the index for the Fiboconni Sequence and should return the value',()=>{
        expect(challenges.fibonacciSequence(8)).toStrictEqual(21);
        expect(challenges.fibonacciSequence(14)).toStrictEqual(377);
    });
    it('use another method to solve the previous challenge (for the Fiboconni Sequence)',()=>{
        expect(challenges.fibonacciSequence2(9)).toStrictEqual(34);
        expect(challenges.fibonacciSequence2(19)).toStrictEqual(4181);
    });
});