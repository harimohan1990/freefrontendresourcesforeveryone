

const nestedArray = [1,[2,3],[4,[5,6]]]; 

function FlattenArray(arr) {
    let result = []; 

    function flatten(item) {
        if (Array.isArray(item)) {
            for (let i = 0; i < item.length; i++) {
                flatten(item[i]); // Recursively flatten each element
            }
        } else {
            result.push(item); // Push non-array items to the result
        }
    }

    flatten(arr); // Call the recursive function on the input array
    return result;
}

// Example usage
const arr = [1, [2, [3, 4], 5], 6, [7, 8, [9]]];
const flattenedArray = FlattenArray(arr);
console.log(flattenedArray);


// ---------

const nestedObject ={
    a:1, 
    b:{
        c:2,
        d:{
            e:3, 
            f:4
        }
    },
}


function flattenObject(obj, parent = '', res = {}) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const propName = parent ? parent + '.' + key : key;

            if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
                // Recursively flatten for nested objects
                flattenObject(obj[key], propName, res);
            } else {
                // Assign flattened property
                res[propName] = obj[key];
            }
        }
    }
    return res;
}

// Example usage
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4
        }
    },
    g: 5
};

const flattenedObj = flattenObject(obj);
console.log(flattenedObj);
