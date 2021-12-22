
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
  let temp=head;
  const node=new LinkedListNode(data)
    if(position==0)
    { node.next=temp;
     head=node;
     return head;
    }
  let count=0;
  while(count<position-1)
  { temp=temp.next
    count++;
  }
  node.next=temp.next;
  temp.next=node;
  
  return head;
    
}

