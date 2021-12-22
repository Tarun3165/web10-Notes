const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
 let temp=head   ;
  let count=0;
  while(temp.next!=null)
  { count++;
   temp=temp.next;
  }
  let position=count-n;
  temp=head;
  count=0;
   while(count<=position)
  { count++;
   temp=temp.next;
  }
  return temp.data
}
