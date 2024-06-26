class stack {
  constructor() {
    this.item = [];
  }
  push(element) {
    this.item.push(element);
  }
  pop() {
    return this.item.pop();
  }
  peek() {
    return this.item[this.item.length - 1];
  }
  isEmpty() {
    return this.item.length == 0;
  }
}

///Q1///
// function reversAraay() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let arrRevers = [];
//   let stack1 = new stack();
//   for (let i = 0; i < arr.length; i++) {
//     stack1.push(arr[i]);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     arrRevers.push(stack1.pop());
//   }
//   console.log(arrRevers);
// }
// reversAraay();

///Q2///
// function stack1() {
//   let stack1 = new stack();
//   let stack2 = new stack();

//   let arr = [1, 2, 3, 4, 5];
//   for (let i = 0; i < arr.length; i++) {
//     stack1.push(arr[i]);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     stack2.push(stack1.pop());
//   }
//   for (let i = 0; i < arr.length; i++) {
//     console.log(stack2.pop());
//   }
// }
// stack1();

///Q3///

let arr = [1, 2, 3];
let num = arr.length - 1;
function sum(num) {
  if (num == 0) {
    return arr[0];
  } else {
    return arr[num] + sum(num - 1);
  }
}

console.log(sum(num));
