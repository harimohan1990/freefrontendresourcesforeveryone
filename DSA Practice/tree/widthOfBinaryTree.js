function widthOfBinaryTree(root) {
    if (!root) return 0;
    let maxWidth = 0;
    const queue = [[root, 0]]; // [node, position]

    while (queue.length > 0) {
        const length = queue.length;
        const firstPos = queue[0][1];
        let lastPos = firstPos;

        for (let i = 0; i < length; i++) {
            const [node, pos] = queue.shift();
            lastPos = pos;

            if (node.left) queue.push([node.left, 2 * pos]);
            if (node.right) queue.push([node.right, 2 * pos + 1]);
        }

        maxWidth = Math.max(maxWidth, lastPos - firstPos + 1);
    }

    return maxWidth;
}
