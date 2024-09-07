const isPalindrome = (s) => {
    // Helper function to determine if a character is alphanumeric
    const isAlphanumeric = (c) => {
        return (c >= 'a' && c <= 'z') ||
               (c >= 'A' && c <= 'Z') ||
               (c >= '0' && c <= '9');
    };

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move left pointer to the next alphanumeric character
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }

        // Move right pointer to the previous alphanumeric character
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // Compare the characters at left and right pointers
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

// Example Usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
