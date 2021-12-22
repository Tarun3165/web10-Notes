
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function(head) {
    
    let current=head;
    let prev=null;
    let future=null;
    
    while(current!=null)
    {
        future=current.next;
        current.next=prev;
        prev=current;
        current=future;
        
    }
    
    let temp = prev;
    let carry=1;
        
    while(prev!=null)
    {
        prev.data = prev.data + carry;
        if (prev.data > 9)
        {
            prev.data = 0;
            carry = 1;
        }
        
      prev=prev.next;
    }
     
    current=temp;
    prev=null;
    future=null;
    
    while(current!=null)
    {
        future=current.next;
        current.next=prev;
        prev=current;
        current=future;
        
    }
    if (carry == 1)
    {
        let node = new LinkedListNode(1);
        node.next = prev;
        return node
    }
    
    return prev;
    
    
    
};

