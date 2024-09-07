function rightSideView(root) {
    const result = [];
    if (!root) return result;

    function traverse(node, level) {
        if (!node) return;
        if (level === result.length) result.push(node.val);
        traverse(node.right, level + 1);
        traverse(node.left, level + 1);
    }

    traverse(root, 0);
    return result;
}
