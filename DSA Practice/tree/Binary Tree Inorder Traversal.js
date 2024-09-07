function inorderTraversal(root) {
    const result = [];
    const stack = [];
    let current = root;
    
    while (current !== null || stack.length > 0) {
        // Reach the leftmost node of the current node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        
        // Current must be null at this point, pop the top of the stack
        current = stack.pop();
        result.push(current.val);  // Visit the node
        
        // We have visited the node and its left subtree, now visit the right subtree
        current = current.right;
    }
    
    return result;
}


function inorderTraversal(root) {
    const result = [];
    
    function traverse(node) {
        if (node === null) return;
        traverse(node.left);  // Visit left subtree
        result.push(node.val);  // Visit root
        traverse(node.right);  // Visit right subtree
    }
    
    traverse(root);
    return result;
}
