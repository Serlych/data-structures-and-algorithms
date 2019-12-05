function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList(val) {
    this.head = new Node(val);
    this.tail = this.head;
    this.name = 'joel';
}

LinkedList.prototype.add = function () {

}