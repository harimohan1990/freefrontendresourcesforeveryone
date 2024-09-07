class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function isPalindrome(head) {
    if (!head || !head.next) return true;

    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let prev = null;
    while (slow) {
        let nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }

    // Step 3: Compare the first half with the reversed second half
    let left = head;
    let right = prev; // This is the head of the reversed second half

    while (right) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }

    return true;
}

// Example Usage
let head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(isPalindrome(head)); // Output: true
