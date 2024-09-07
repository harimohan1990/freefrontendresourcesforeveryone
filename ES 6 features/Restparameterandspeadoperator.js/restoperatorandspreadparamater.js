





// Spread operator: The spread operator helps us expand an iterable such as an array where multiple arguments are needed, it also helps to expand the object expressions. In cases where we require all the elements of an iterable or object to help us achieve a task, we use a spread operator.

// Note: There can be more than one spread operator in javascript functions.


const obj = {
    firstname: "Divit",
    lastname: "Patidar",
};
const obj2 = { ...obj };
console.log(obj2);



// The rest parameter is converse to the spread operator. while the spread operator expands elements of an iterable, the rest parameter compresses them. It collects several elements. In functions when we require to pass arguments but were not sure how many we have to pass, the rest parameter makes it easier. 

function average(...args) {
    console.log(args);
    var avg =
        args.reduce(function (a, b) {
            return a + b;
       }, 0) / args.length;
    return avg;
}
console.log("average of numbers is : "
    + average(1, 2, 3, 4, 5));
console.log("average of numbers is : "
    + average(1, 2, 3));













//https://www.geeksforgeeks.org/what-is-the-rest-parameter-and-spread-operator-in-javascript/
