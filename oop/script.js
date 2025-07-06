/** 1. Every object has a __proto__ property pointing to the prototype of the object 
const person = {
  name: 'Imran',
  greet() {
    console.log(`Hello, ${this.name}`)
  }
}
*/
console.log(person.__proto__) // points to Object.prototype

/** 2. Every function has a .prototype property property, and when the function is used as the contructor function to create objects, this .prototype becomes the object's internal __proto__ 

function Person(name) {
  this.name = name
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`)
}

const person1 = new Person('Emmei')
person1.greet()
*/
// console.log(Person.prototype === person1.__proto__)

/**3. Constructor Functions & new Keyword:
 * new creates a new empty object → sets __proto__ → binds this → returns object.

function Animal(type) {
  this.type = type
}

Animal.prototype.greet = function () {
  console.log(`${this.type} is greeted!`)
}
const cat = new Animal('Cat')
console.log(cat.type) // 'Cat'

console.log('******* isProtoTypeOf ******')
console.log(Animal.prototype.isPrototypeOf(cat))

// Since each and every object in JavaScript is linked to a prototype, let's test what is the prototype of Construction function itself, since Constructor Function is also nothing but a function, and function are called first-class objects or citizens

console.log('Testing the prototype of Constructor Function')
console.log(Animal.__proto__ === Function.prototype)
console.log(Animal.prototype.__proto__ === Object.prototype)
 */
/* --- 
We can remember like this: 

Q:1) What is the prototype of Animal?---> Function.prototype
A:1) Which means Animal.__proto__ points to Function.prototype

Q:2) Since Function Constructor is also an object, What is the prototype of Function?
A:2) The prototype of Function is the object from which it inherits, which is Object.prototype.
Hence, Function.__proto__ === Object.prototype


const person2 = {
  name: 'Imran',
  speak: function () {
    console.log(this.name)
  }
}

console.log(person2.speak()) // this in speak method depends on how it is called.

const speak = person2.speak

console.log('scope lost now, hence', speak()) // this is lost
--- */

// The function uses this keyword. The value of this depends on how greet is invoked
function greet(msg) {
  console.log(`${msg}, ${this.name}`)
}
