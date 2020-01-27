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

  // Linked List insertion

  append( value ){

    if( this.head === null ){
      this.head = new Node( value );
    } else {
      appendHandler( this.head, value );
    }

    function appendHandler ( currentNode, value ){
      if( currentNode.next === null ){
        let newNext = new Node( value );
        currentNode.next = newNext;
      } else {
        currentNode = currentNode.next;
        appendHandler( currentNode, value );
      }
    }

  }

  insertBefore( val, newVal ){

    if( this.head === null){
      this.head = new Node ( newVal );
    } else {
      findVal( this.head, val, newVal );
    }

    function findVal ( currentNode, val, newVal ){
      if( currentNode.next.value === val ){
        let newNode = new Node ( newVal );
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      } else {
        currentNode = currentNode.next;
        findVal( currentNode, val, newVal );
      }
    }
  }

  insertAfter( val, newVal ){

    if( this.head === null){
      this.head = new Node ( newVal );
    } else {
      findVal( this.head, val, newVal );
    }

    function findVal ( currentNode, val, newVal ){
      if( currentNode.value === val ){
        let newNode = new Node( newVal );
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      } else {
        currentNode = currentNode.next;
        findVal( currentNode, val, newVal );
      }
    }
  }
  llkthFromEnd(value){
    let counter = this.head;
    let nodeContent = null;
    let nodeContentExist = false;
    let countdown = value;

    if (value < 0 ) null;

    while(counter !== null){
      if(countdown === 0 ) {
        countdown--;
        nodeContent = this.head;
        nodeContentExist = true;
      }
      if(nodeContentExist && counter.next !== null ){
        counter = counter.next;
        nodeContent = nodeContent.next;
      } else {
        counter = counter.next;
      }

      if (countdown > 0 ) countdown--;
    }
    return nodeContentExist ? nodeContent.value : null;
  }

}

module.exports = LinkedList;
