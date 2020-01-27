'use strict';

const LinkedList = require('../linked-list');

describe('linked List', () => {

  it('insert() instantiates an empty array', () => {
    let list = new LinkedList;
    list.insert();
    expect(list.head.value).toEqual(undefined);
    expect(list.head.next).toEqual(null);
    list.insert(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(undefined);

  });

  it('insert() successfully creates a new node to the linked list', () => {

    let list = new LinkedList;

    list.insert(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next.value).toEqual(1);

  });

  it('includes() searches through the Linked List returns true if found and false if not found', () => {

    let list = new LinkedList;
    let testArray = [ 1, true, 'test', null ];

    testArray.forEach( test => {
      list.insert( test );
    });

    testArray.forEach( test => {
      expect(list.includes( test )).toEqual(true);
    });

    expect(list.includes( {} )).toEqual(false);

  });

  it('toString() returns a string representing all values in Linked List', () => {

    let list = new LinkedList;
    let testArray = [ 1, true, 'test', null, {}, () => {} ];

    testArray.forEach( test => {
      list.insert( test );
    });

    expect(list.toString()).toEqual('() => {} [object Object]  test true 1');

  });
  test('insertBefore() inserts a node before a node in the middle of the Linked List', () => {

    let list = new LinkedList;
    let array = [ 50,40,20,10 ];

    array.forEach( value => {
      list.insert( value );
    });

    let target = 40;
    let newValue = 30;

    list.insertBefore( target, newValue );

    expect(list.toString()).toEqual('10 20 30 40 50');

  });

  test('insertBefore() can insert a node as the head in the linked list', () => {

    let list = new LinkedList;

    let target = 40;
    let newValue = 30;

    list.insertBefore( target, newValue );

    expect(list.toString()).toEqual('30');

  });

  test('insertAfter() can insert a node in an empty linked list', () => {

    let list = new LinkedList;

    list.insertAfter( 10, 20 );

    expect(list.toString()).toEqual('20');

  });

  test('insertAfter() can insert after a node in the middle of the linked list', () => {

    let list = new LinkedList;
    let array = [ 50,40,20,10 ];

    array.forEach( value => {
      list.insert( value );
    });

    let target = 20;
    let newValue = 30;

    list.insertAfter( target, newValue );

    expect(list.toString()).toEqual('10 20 30 40 50');

  });

  test('append() can insert a node after the last node of the linked list', () => {

    let list = new LinkedList;
    let array = [ 50,40,30,20,10 ];

    array.forEach( value => {
      list.insert( value );
    });

    list.append( 60 );

    expect(list.toString()).toEqual('10 20 30 40 50 60');

  });

  test('append() can insert a node in an empty list', () => {

    let list = new LinkedList;

    list.append( 10 );

    expect(list.toString()).toEqual('10');

  });

  test('llkthFromEnd() returns null if given negative input', () => {

    let list = new LinkedList;

    let array = [ 50,40,30,20,10 ];

    array.forEach( value => {
      list.insert( value );
    });

    expect(list.llkthFromEnd(-1)).toEqual(null);

  });

  test('llkthFromEnd()  gets the correct value of a node k nodes from the end of the linked list', () => {

    let list = new LinkedList;

    let array = [ 10,9,8,7,6,5,4,3,2,1 ];

    array.forEach( value => {
      list.insert( value );
    });

    expect(list.llkthFromEnd(0)).toEqual(10);
    expect(list.llkthFromEnd(5)).toEqual(5);
    expect(list.llkthFromEnd(9)).toEqual(1);

  });

  test('llkthFromEnd() if the value greater than the length return null', () => {

    let list = new LinkedList;

    let array = [ 5,4,3,2,1 ];

    array.forEach( value => {
      list.insert( value );
    });

    expect(list.llkthFromEnd(10)).toBeNull();

  });

  test('llkthFromEnd() if the value and the list length are equal return null', () => {

    let list = new LinkedList;

    let array = [ 10,9,8,7,6,5,4,3,2,1 ];

    array.forEach( value => {
      list.insert( value );
    });

    expect(list.llkthFromEnd(10)).toEqual(null);

  });

  test('llkthFromEnd() returns null if list length is 1 and k > 0', () => {

    let list = new LinkedList;

    list.insert( 1 );

    expect(list.llkthFromEnd(0)).toEqual(1);
    expect(list.llkthFromEnd(1)).toEqual(null);

  });

});
