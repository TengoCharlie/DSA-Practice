module.exports = class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert_node(pos, no) {
        if(pos < 1 || pos > this.size + 1) return;
        if(this.head == null){
            if(pos == 1){
                this.head = new LNode(no);
                this.size++;
                return;
            } 
        } else {
            const newNode = new LNode(no);
            let temp = this.head;
            if(pos == 1){
                newNode.next = temp;
                this.head = newNode;
                this.size++;
                return;
            }

            for(let i = 2; i< pos; i++){
                 temp = temp.next;
            }
           
            newNode.next = temp.next;
            temp.next = newNode;
            this.size++;
        }

        return;
    }

    delete_node(pos) {
        if(pos<1 || pos>this.size) return;
        if(pos==1){
            this.head = this.head.next;
            this.size--;
            return;
        }
        let temp = this.head;
        for(let i = 2; i<pos; i++){
            temp = temp.next;
        }
        temp.next=temp.next.next;
        this.size--;
        return;
    }

    print_ll() {
        if(this.size<=0) return;
        let temp = this.head;
        let list = `${temp.value}`;
        for(let i = 2; i<=this.size; i++){
            temp = temp.next;
            list = `${list} ${temp.value}`
        }
        console.log(list);
        return list;
    }
}


class LNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

