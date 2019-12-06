function Node(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
}

function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = null;
}

DoublyLinkedList.prototype.push = function(val) {
    let node = new Node(val);
    
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        let temp = this.tail;
        
        this.tail = node;
        node.prev = temp;
        temp.next = node;
    }
    
    this.length += 1;
}

DoublyLinkedList.prototype.pop = function() {
    if (this.length === 1) {
        this.head = null;
        this.tail = null;
    } else {
        let temp = this.tail.prev;
        
        this.tail = temp;
        this.tail.next = null;
        this.tail.prev = temp.prev;
    }
    
    this.length -= 1;
}

DoublyLinkedList.prototype.unshift = function(val) {
    let node = new Node(val);
    
    if (!this.head) {
        this.head = node;
        this.tail = node;
        this.length += 1;
    } else {
        let temp = this.head;
        
        this.head = node;
        this.head.next = temp;
        node.prev = null;
        temp.prev = node;
    }
    
    this.length += 1;
}

DoublyLinkedList.prototype.shift = function() {
    if (this.length === 1) {
        this.head = null;
        this.tail = null;
    } else {
        let temp = this.head.next;
        
        this.head = temp;
        temp.prev = null;
    }
    
    this.length -= 1;
}

DoublyLinkedList.prototype.insert = function(index, val) {
    let node = new Node(val);
    let current = this.head;
    
    if (index < this.length) {
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        
        let curPrev = current.prev;
        let curNext = current.next;
        
        curPrev.next = node;
        node.next = current;
        node.prev = curPrev;
        current.prev = node;
        
        this.length += 1;
        
        return val;
    } else {
        return false;
    }
}

DoublyLinkedList.prototype.remove = function(val) {
    if (this.head.value === val) {
        this.shift();
    } else if (this.tail.value === val) {
        this.pop();
    } else {
        let current = this.head.next;
        
        let curPrev = current.prev;
        let curNext = current.next;
        
        for (let i = 0; i < this.length; i++) {
            if (current.value === val) {
                curPrev.next = curNext;
                curNext.prev = curPrev;
                
                this.length -= 1;
                
                return val;
            } else {
                current = current.next;
                
                curPrev = current.prev;
                curNext = current.next;
                
            }
        }
    }
    
    return false;
}

DoublyLinkedList.prototype.replace = function(old, val) {
    let current = this.head;
    
    for (let i = 0; i < this.length; i++) {
        if (current.value === old) {
            current.value = val;
            
            return true;
        } else {
            current = current.next;
        }
    }
    
    return false;
}

DoublyLinkedList.prototype.print = function() {
    let temp = [];
    let current = this.head;
    
    for (let i = 0; i < this.length; i++) {
        temp.push(current)
        current = current.next;
    }
    
    return temp;
}
