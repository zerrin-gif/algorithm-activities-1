const ds = require('datastructures-js');
​
// console.time('test');
// console.timeEnd('test');
​
const linkedList = new ds.DoublyLinkedList();
const arr = [];
​
// console.time('arr');
// for (var i = 0; i < 100000; i++) {
//   arr.unshift(i);
// }
// console.timeEnd('arr');
​
// console.time('list')
// for (var i = 0; i < 100000; i++) {
//   linkedList.insertFirst(i);
// }
// console.timeEnd('list');
​
// linkedList.insertFirst(1);
// console.log(linkedList.head());
​
/* Given a head of a linked list with bunch of letters,
remove the vowels and return the head. 
Node: {
  getValue()
  getNext()
  getPrev()
  setNext()
  setPrev()
}
​
*/
​
const removeVowels = (node) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let currNode = node;
  let head = node;
​
  while (currNode !== null) {
    if (vowels.includes(currNode.getValue())) {
      let prev = currNode.getPrev();
      let next = currNode.getNext();
      if (prev !== null) {
        prev.setNext(next);
      }
      if (next !== null) {
        next.setPrev(prev);
      }
      if (head === currNode) {
        head = currNode.getNext();
      }
    }
    currNode = currNode.getNext();
  }
​
  return head;
}
​
linkedList.insertLast('a');
linkedList.insertLast('b');
linkedList.insertLast('t');
linkedList.insertLast('i');
linkedList.insertLast('l');
linkedList.insertLast('a');
​
​
const ans = removeVowels(linkedList.head());
let c = ans;
// Let's print the linked list
while (c!== null) {
  console.log(c.getValue());
  c = c.getNext();
}
​
​
