// Base class representing an Animal
class Animal {
    makeSound() {
      console.log("Some generic animal sound");
    }
  }
  
  // Subclass for Dogs
  class Dog extends Animal {
    makeSound() {
      console.log("Woof! Woof!");
    }
  }
  
  // Subclass for Cats
  class Cat extends Animal {
    makeSound() {
      console.log("Meow! Meow!");
    }
  }
  
  // Subclass for Cows
  class Cow extends Animal {
    makeSound() {
      console.log("Moo! Moo!");
    }
  }
  
  // Create instances of different animals
  const dog = new Dog();
  const cat = new Cat();
  const cow = new Cow();
  
  // Invoke the makeSound() method on each animal
  dog.makeSound(); // Outputs: Woof! Woof!
  cat.makeSound(); // Outputs: Meow! Meow!
  cow.makeSound(); // Outputs: Moo! Moo!