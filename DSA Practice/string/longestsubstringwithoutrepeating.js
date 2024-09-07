function lengthOfLongestSubstring(s) {
    let n = s.length;
    let maxLength = 0;
    let map = new Map();
    let left = 0;

    for (let right = 0; right < n; right++) {
        let currentChar = s[right];
        
        // If the character is already in the map, move the left pointer
        if (map.has(currentChar)) {
            left = Math.max(map.get(currentChar) + 1, left);
        }
        
        // Update the character's index in the map
        map.set(currentChar, right);
        
        // Calculate the maxLength of the current window
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}
