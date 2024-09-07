var minWindow = function(s, t) {
    const map = new Map();
    for (let char of t) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let left = 0;
    let right = 0;
    let required = map.size;
    let minLen = Infinity;
    let minWindow = "";

    while (right < s.length) {
        let char = s[right];
        if (map.has(char)) {
            map.set(char, map.get(char) - 1);
            if (map.get(char) === 0) required--;
        }

        while (required === 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minWindow = s.substring(left, right + 1);
            }

            let leftChar = s[left];
            if (map.has(leftChar)) {
                map.set(leftChar, map.get(leftChar) + 1);
                if (map.get(leftChar) > 0) required++;
            }
            left++;
        }
        right++;
    }

    return minWindow;
};


/*  



*/