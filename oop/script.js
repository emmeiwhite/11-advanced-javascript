/** 1. Every object has a __proto__ property pointing to the prototype of the object */
const person = {
  name: 'Imran',
  greet() {
    console.log(`Hello, ${this.name}`)
  }
}

console.log(person.__proto__) // points to Object.prototype

/** 2. Every function has a .prototype property property, and when the function is used as the contructor function to create objects, this .prototype becomes the object's internal __proto__ */

function Person(name) {
  this.name = name
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`)
}

const person1 = new Person('Emmei')
person1.greet()

console.log(Person.prototype === person1.__proto__)
