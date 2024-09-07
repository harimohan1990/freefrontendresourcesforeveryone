function canPermutePalindrome(s) {
    const charCount = new Map();
    
    // Count the frequency of each character
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    let oddCount = 0;
    
    // Count how many characters have an odd frequency
    for (let count of charCount.values()) {
        if (count % 2 !== 0) {
            oddCount++;
        }
        
        // If more than one character has an odd frequency, return false
        if (oddCount > 1) {
            return false;
        }
    }
    
    return true;
}
