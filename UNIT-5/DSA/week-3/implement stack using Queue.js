

class Stack {
    constructor()
    {
        this.Q1 = new Queue()
        this.Q2 = new Queue()
    }
    push(value) {
        this.Q2.enqueue(value);
        while(this.Q1.length!=0)
        {
            this.Q2.push(this.Q1.front);
            this.Q1.pop();
        }
        let temp ;
        temp = this.Q1;
        this.Q1 = this.Q2;
        this.Q2 = temp;

      
    }
    pop() {
        return this.Q1.pop();
    }
    top() {
return this.Q1[this.Q1.length-1]
    }
    isEmpty() {
 return !(this.Q1.length-1)
    }
}
