

var lengthOfLongestSubstringTwoDistinct = function(s) {
    let left = 0, maxLen = 0;
    let map = new Map();

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        map.set(char, (map.get(char) || 0) + 1);

        while (map.size > 2) {
            let leftChar = s[left];
            map.set(leftChar, map.get(leftChar) - 1);
            if (map.get(leftChar) === 0) {
                map.delete(leftChar);
            }
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};


