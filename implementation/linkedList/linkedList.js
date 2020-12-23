class Node {
  constructor(data = 0, next = null) {
    this.data = data;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //ADD TO HEAD OF LIST
  addToHead = (data) => {
    let newNode = new Node(data);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = this.tail = newNode;
    }
  };

  //ADD TO TAIL OF LIST
  addToTail = (data) => {
    let newNode = new Node(data);
    if (this.tail) {
      this.tail.next = this.tail = newNode;
      return;
    }
    this.head = this.tail = newNode;
    return;
  };

  //INSERT NODE AT A SPECIFIC POSITION
  insertNode(data, pos) {
    var newNode = new Node(data);
    var currentNode = this.head;
    var prevNode;
    var count = 0;

    if (!this.head) {
      this.head = newNode;
      return;
    }

    if (pos == 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    while (count < pos) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }
    newNode.next = currentNode;
    prevNode.next = newNode;
  }

  //DELETE A NODE
  delete(pos) {
    var currentNode = this.head;
    var prevNode;
    var count = 0;

    if (pos == 0) {
      this.head = this.head.next;
      return;
    }

    while (count < pos) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    if (currentNode.next) {
      prevNode.next = currentNode.next;
    } else {
      prevNode.next = null;
    }
  }
}

//PRINT
linkedList.prototype.print = function () {
  let current = this.head;
  let strprint = "";
  while (current) {
    strprint = strprint + current.data + " ";
    current = current.next;
  }
  console.log(strprint);
};

//PRINT IN REVERSE RECURSIVELY O(n)
linkedList.prototype.recursiveReversePrint = function (num = null) {
  if (!num) {
    num = this.head;
    this.recursiveReversePrint(num);
  } else {
    if (num.next) {
      this.recursiveReversePrint(num.next);
      process.stdout.write(num.data + " ");
    } else {
      process.stdout.write(num.data + " ");
    }
  }
};

//It's always possible to turn recursion into iteration using a stack.
//PRINT IN REVERSE WITHOUT RECURSION O(n)
linkedList.prototype.reversePrint = function (num = null) {
  let stack = [];
  num = this.head;
  while (num) {
    stack.push(num.data);
    num = num.next;
  }
  while (stack && stack.length != 0) {
    process.stdout.write(stack.pop() + " ");
  }
};

function main() {
  linkTest = new linkedList();

  linkTest.addToHead("item 1");
  linkTest.addToHead("item 2");
  linkTest.addToTail("item 3");
  linkTest.print();
  linkTest.insertNode("item 4", 1);
  linkTest.recursiveReversePrint();
  console.log();
  linkTest.delete(1);
  linkTest.reversePrint();
}

main();
