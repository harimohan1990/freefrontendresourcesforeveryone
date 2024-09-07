var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    let prefLen = pref.length;

    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        while (pref !== s.substring(0, prefLen)) {
            prefLen--;
            if (prefLen === 0) {
                return "";
            }
            pref = pref.substring(0, prefLen);
        }
    }

    return pref;    
};

/*

The provided code is an implementation of the `longestCommonPrefix` function, which finds the longest common prefix string amongst an array of strings. If there is no common prefix, it returns an empty string `""`.

### Code Breakdown:

```javascript
var longestCommonPrefix = function(strs) {
    // Initialize the prefix with the first string in the array
    let pref = strs[0];
    let prefLen = pref.length;

    // Iterate through the rest of the strings in the array
    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        
        // Reduce the length of the prefix until it matches the start of the current string
        while (pref !== s.substring(0, prefLen)) {
            prefLen--; // Shorten the prefix length by 1
            if (prefLen === 0) {
                return ""; // If no common prefix exists, return an empty string
            }
            pref = pref.substring(0, prefLen); // Update the prefix to the shortened version
        }
    }

    // Return the longest common prefix found
    return pref;    
};
```

### Explanation:

1. **Initialization:**
   - `let pref = strs[0];`  
     - The variable `pref` is initialized with the first string in the array `strs`. This string is considered the potential longest common prefix.
   - `let prefLen = pref.length;`  
     - `prefLen` stores the length of the current prefix. Initially, it is the length of the first string.

2. **Loop Through the Array:**
   - `for (let i = 1; i < strs.length; i++)`  
     - The loop starts from the second string (index `1`) and iterates through all the strings in the array.
   - `let s = strs[i];`  
     - `s` represents the current string in the array that we are comparing with the prefix.

3. **Check for Common Prefix:**
   - `while (pref !== s.substring(0, prefLen))`  
     - The while loop checks if the current prefix `pref` is equal to the beginning of the string `s` (up to the length of the current prefix). The `substring(0, prefLen)` method extracts the first `prefLen` characters from the string `s`.
   - If `pref` does not match the start of `s`, the prefix is shortened by reducing `prefLen` by 1 (`prefLen--`). The prefix is then updated to this shortened version (`pref = pref.substring(0, prefLen);`).
   - This process continues until either a common prefix is found or the prefix length is reduced to `0`.

4. **Return Empty String If No Common Prefix:**
   - `if (prefLen === 0) { return ""; }`  
     - If at any point the prefix length becomes `0`, it means there is no common prefix among the strings, and the function returns an empty string `""`.

5. **Return the Longest Common Prefix:**
   - After the loop finishes, the remaining value of `pref` is the longest common prefix shared by all strings in the array. This is returned as the result.

### Example Walkthrough:

Consider the input `["flower", "flow", "flight"]`:

- **Initial Setup:**  
  - `pref = "flower"`  
  - `prefLen = 6`
  
- **First Iteration (Comparing with "flow"):**
  - `"flower"` vs `"flow"`:
    - `"flower"` (not equal to `"flow"`) → Reduce `prefLen` to `5`
    - `"flowe"` (not equal to `"flow"`) → Reduce `prefLen` to `4`
    - `"flow"` (equal to `"flow"`) → Match found, move to next string

- **Second Iteration (Comparing with "flight"):**
  - `"flow"` vs `"flight"`:
    - `"flow"` (not equal to `"flig"`) → Reduce `prefLen` to `3`
    - `"flo"` (not equal to `"fli"`) → Reduce `prefLen` to `2`
    - `"fl"` (equal to `"fl"`) → Match found
  
- **Final Result:**  
  - The longest common prefix is `"fl"`, which is returned by the function.

### Time Complexity:
- **Time Complexity:** `O(S)` where `S` is the sum of the lengths of all strings in the array. In the worst case, we might have to compare every character of every string.
- **Space Complexity:** `O(1)` because no additional data structures are used that grow with input size.

This implementation efficiently finds the longest common prefix by iteratively shortening the prefix based on comparisons with each subsequent string.


*/