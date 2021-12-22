
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
    let temp=head;
  if(head==null) 
    return null;
  else if(head.next==null)
        return null;
  let count=0;
  while(count<position-1)
  { temp=temp.next
    count++;
  }
  temp.next=temp.next.next;
  return head;
}

