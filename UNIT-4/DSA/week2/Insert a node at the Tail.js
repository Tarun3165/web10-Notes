
const LinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};

// Complete the function below

function insertNodeAtTail(head, data) {
var temp = head;
const node = new LinkedListNode(data);

if (head == null) {
  node.next = head;
  head=node;
  return head;
}

else
{
  while (temp.next != null) {
    temp = temp.next;
  }

   temp.next=node;
  node.next = null;
  }
  
temp = head;

while (temp.next != null) {

  temp = temp.next;
}
return head;
}


