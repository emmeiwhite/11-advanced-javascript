const person = {
  name: 'Imran',
  greet() {
    console.log(`Hello, ${this.name}`)
  }
}

console.log(person.__proto__) // points to Object.prototype
