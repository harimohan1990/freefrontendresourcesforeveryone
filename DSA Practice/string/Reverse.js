const reverseString = (s) => {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Swap characters
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};

// Example Usage:
let strArray = ["h", "e", "l", "l", "o"];
reverseString(strArray);
console.log(strArray); // Output: ["o", "l", "l", "e", "h"]

// recursive 


function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString("hello");