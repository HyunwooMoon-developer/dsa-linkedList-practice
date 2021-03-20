/* eslint-disable no-undef */
const LinkedList = require('./LinkedList');

function main(){
    const SLL = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertFirst('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    console.log(SLL);
    SLL.insertFirst('Tauhida');
    console.log(SLL);
    SLL.remove('squirrel');
    console.log(SLL); //item can't find.
    SLL.insertBefore('Apple', 'Boomer');
    console.log(SLL);
    SLL.insertAfter('Banana', 'Tauhida');
    console.log(SLL);
    SLL.insertAt('Cat', 1);
    console.log(SLL);
    SLL.remove('Cat');
    console.log(SLL);
    display(SLL);
    size(SLL);
    console.log(isEmpty(SLL));
    console.log(findPrevious(SLL, 'Banana'));
    console.log(findLast(SLL));
    console.log(reverseList(SLL));
    console.log(thirdFromTheEnd(SLL));

    console.log(middleOfList(SLL));

}

function display(list){
    let currNode = list.head;
    while(currNode !== null){
        console.log(currNode.value);
        currNode = currNode.next;
    }
}

function size(list){
    let currNode = list.head;
    let count = 0;
    while(currNode !== null){
        count++;
        currNode = currNode.next;
    }
    console.log('count : ', count);
    return;
}

function isEmpty(list){
    let currNode = list.head;
    if(currNode === null){
        return true;
    }
    return false;
}

function findPrevious(list, item){
    let currNode = list.head;
    if(currNode === null){
        console.log('Item not found');
        return;
    }
    while(currNode.next.value !== item){
        currNode = currNode.next;
    }
    return currNode.value;
}

function findLast(list){
    let currNode = list.head;
    if(currNode === null){
        console.log('List is empty')
        return;
    }
    while(currNode.next !==null){
        currNode = currNode.next;
    }
    return currNode.value;
}


function reverseList(list){
    let currNode = list.head;
    let previousNode = null;

    while(currNode){
        let nextNode = currNode.next;
           //reverse pointer 
        currNode.next = previousNode;
            //increase previous to current
        previousNode = currNode;
            // increase current to next or end of the list
        currNode = nextNode;
    }
    list.head = previousNode;

    return previousNode;
}

function thirdFromTheEnd(list){
    let currNode = list.head;
    if(currNode === null){
        console.log('item not found');
        return;
    }
    while(currNode.next.next.next !== null){
        currNode = currNode.next;
    }
    return currNode.value;
}

function middleOfList(list){
    let currNode = list.head;

    if(currNode === null){
        console.log('item not found');
    }else if(currNode.next === null){
        return currNode;
    }
    else{
        let fast = list.head;
        let slow = list.head;

        while((fast !== null)&&(fast.next !== null)){
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow.value;
    }
}

main();