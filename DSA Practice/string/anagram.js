var isAnagram = function(s, t) {
    let map = {};
    for(let i = 0; i < s.length; i ++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }
        else map[s[i]] ++;
    }
    for(let i = 0; i < t.length; i ++){
        if(!map[t[i]] || map[t[i]] < 0){
            return false;
        }
        else map[t[i]] --;
    }
    for(let key in map){
        if(map[key] !== 0) return false;
    }

    return true;
};


// --------

function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = {};

    // Count characters in the first string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        count[char] = (count[char] || 0) + 1;
    }

    // Decrease count for characters in the second string
    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }

    // Final check to ensure all counts are zero
    for (let char in count) {
        if (count[char] !== 0) {
            return false;
        }
    }

    return true;
}

// Example usage:
const s = "listen";
const t = "silent";
console.log(isAnagram(s, t)); // Output: true
