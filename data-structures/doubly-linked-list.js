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
        this.length += 1;
    } else {
        this.tail = node;
        node.prev = this.tail;
        this.tail.next = node;
    }
    
    this.length += 1;
    return this;
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
        this.head.prev = null;
    }
}