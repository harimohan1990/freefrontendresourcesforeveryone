function myAtoi(s) {
    // Constants for integer limits
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    
    // Trim leading whitespace
    s = s.trim();
    
    // Edge case: empty string
    if (s.length === 0) return 0;
    
    // Initialize variables
    let sign = 1;
    let result = 0;
    let index = 0;
    
    // Handle sign if present
    if (s[index] === '+' || s[index] === '-') {
        sign = s[index] === '-' ? -1 : 1;
        index++;
    }
    
    // Convert characters to integer
    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
        result = result * 10 + (s[index] - '0');
        
        // Check for overflow and clamp if necessary
        if (sign * result > INT_MAX) return INT_MAX;
        if (sign * result < INT_MIN) return INT_MIN;
        
        index++;
    }
    
    return sign * result;
}
