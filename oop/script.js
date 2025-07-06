// The function uses this keyword. The value of this depends on how greet is invoked
const greet = msg => {
  console.log(`${msg}, ${this.userName}`)
}

const person = {
  userName: 'Tomi'
}

greet.call(person, 'hello') // hello, undefined, because arrow fxn does not have their this keyword
