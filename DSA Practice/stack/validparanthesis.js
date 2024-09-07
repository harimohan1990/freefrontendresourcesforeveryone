function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (map[char]) {
            // If the character is an opening bracket, push the corresponding closing bracket onto the stack
            stack.push(map[char]);
        } else {
            // If the character is a closing bracket, check if it matches the top of the stack
            if (stack.length === 0 || stack.pop() !== char) {
                return false;
            }
        }
    }
    
    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
}
