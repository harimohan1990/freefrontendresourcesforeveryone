// Abstract class representing a Shape
class Shape {
    constructor(name) {
      if (new.target === Shape) {
        throw new Error("Cannot instantiate an abstract class.");
      }
      this.name = name;
    }
  
    // Abstract method
    calculateArea() {
      throw new Error("Abstract method must be implemented.");
    }
  
    // Abstract method
    calculatePerimeter() {
      throw new Error("Abstract method must be implemented.");
    }
  }
  
  // Concrete class: Circle
  class Circle extends Shape {
    constructor(radius) {
      super("Circle");
      this.radius = radius;
    }
  
    // Implement abstract method
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    // Implement abstract method
    calculatePerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Concrete class: Rectangle
  class Rectangle extends Shape {
    constructor(width, height) {
      super("Rectangle");
      this.width = width;
      this.height = height;
    }
  
    // Implement abstract method
    calculateArea() {
      return this.width * this.height;
    }
  
    // Implement abstract method
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // Usage
  const circle = new Circle(5);
  console.log(`${circle.name} Area:`, circle.calculateArea());
  console.log(`${circle.name} Perimeter:`, circle.calculatePerimeter());
  
  const rectangle = new Rectangle(4, 7);
  console.log(`${rectangle.name} Area:`, rectangle.calculateArea());
  console.log(`${rectangle.name} Perimeter:`, rectangle.calculatePerimeter());
  