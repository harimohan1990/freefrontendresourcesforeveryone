class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;

    while (current) {
        let next = current.next; // Store the next node
        current.next = prev;     // Reverse the current node's pointer
        prev = current;          // Move prev to the current node
        current = next;          // Move to the next node
    }

    return prev; // prev is the new head of the reversed list
}

// Example Usage
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let reversedHead = reverseList(head);

// Output the reversed list
let node = reversedHead;
while (node) {
    console.log(node.val); // Output: 5 4 3 2 1
    node = node.next;
}
