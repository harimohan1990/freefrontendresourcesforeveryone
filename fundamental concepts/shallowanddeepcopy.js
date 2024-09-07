// Shallow Copy
// Shallow copy method creates a copy where the source and the copied variable reference remain the same. This means that modifications made in one place would affect both places.

// const first_person = {
//     name: "Jack",
//     age: 24,
//     }
    
//     const second_person = first_person;
    
//     second_person.age = 25;
    
//     console.log(first_person.age); // output: 25
//     console.log(second_person.age); // output: 25


//     Deep Copy
// Deep copy method creates a copy where the source and the copied variable reference are completely different. This means that modifications made in one place would only affect the variable where we are making a change.

// Spread (...) operator
// Using the spread syntax, we can create a deep copy if there is no nesting.


// const first_person = {
//     name: "Jack",
//     age: 24,
//     }
    
//     const second_person = { ...first_person };
    
//     second_person.age = 25;
    
//     console.log(first_person.age); // output: 24
//     console.log(second_person.age); // output: 25


//     const first_person = {
//         name: "Jack",
//         age: 24,
//         address: {
//           apartment: "A",
//           city: "London"
//         }
//       };
      
//       const second_person = { ...first_person };
      
//       second_person.age = 25;
//       second_person.address.apartment = "N";
//       console.log(first_person.address.apartment); // output: N
//       console.log(second_person.address.apartment); // output: N



      //https://dev.to/aditi05/shallow-copy-and-deep-copy-10hh