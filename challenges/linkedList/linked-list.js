'use strict';

class Node {
  constructor( value ){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{

  constructor(){
    this.head = null;
  }

  insert( value ){

    let newNode = new Node ( value );

    if ( this.head === null ) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

  }

  includes( value ){

    let currentNode = this.head;

    while ( currentNode !== null ) {
      if ( currentNode.value === value ) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  toString() {

    let currentNode = this.head;
    let listStringified = [];

    while ( currentNode !== null ) {
      listStringified.push( currentNode.value );
      currentNode = currentNode.next;
    }

    return listStringified.join(' ');

  }

}

module.exports = LinkedList;
