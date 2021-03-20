/* eslint-disable no-undef */
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  //Inserting at the beginning of the list is an O(1)
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, value) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    let currNode = this.head;
    console.log(currNode);
    while (currNode.next.value !== value && currNode.next.next !== null) {
      currNode = currNode.next;
    }
    if (currNode.next.value === value) {
      let newNode = new _Node(item, currNode.next);
      currNode.next = newNode;
    } else {
      console.log("Previous item can't find");
      return;
    }
  }
  insertAfter(item, value) {
    if (this.head === null) {
      this.insertLast(item);
    }

    let currNode = this.head;

    while (currNode.value !== value && currNode.next !== null) {
      currNode = currNode.next;
    }

    if (currNode.value === value) {
      let newNode = new _Node(item, currNode.next);
      currNode.next = newNode;
    } else {
      console.log("Next value can't find");
      return ;
    }
  }
  insertAt(item, position){
      if(this.head === null){
          return this.insertFirst(item);
      }

      let count = 1;
      let currNode = this.head;
      while(count !== position){
          currNode = currNode.next;
          count++;
      }
      let newNode = new _Node(item, currNode.next);
      currNode.next = newNode;
  }
  //Inserting at the end of the list requires iterating over all of the nodes individually in sequence until you reach the end.
  find(item) {
    //start at the head
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    //check for the item
    while (currNode.value !== item) {
      //Return null if it's the end of the list and the item is not on the list
      if (currNode.next === null) {
        return null;
      } else {
        //otherwise, keep looking
        currNode = currNode.next;
      }
    }
    //fount it
    return currNode;
  }
  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head;
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log(`item can't found`);
      return;
    }
    previousNode.next = currNode.next;
  }
  //best-case performance is O(1), and the average and worst cases are O(n) due to finding the node
}

module.exports = LinkedList;
