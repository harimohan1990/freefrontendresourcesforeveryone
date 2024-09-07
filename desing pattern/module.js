// Module Pattern

//Purpose: Encapsulates private and public methods and variables, providing a namespace for functionalities.

const myModule = (function() {
    const privateVar = 'I am private';

    function privateMethod() {
        console.log(privateVar);
    }

    return {
        publicMethod: function() {
            privateMethod();
        }
    };
})();

myModule.publicMethod();  // Outputs: I am private




