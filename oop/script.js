// 1. The function uses this keyword. The value of this depends on how greet is invoked
function greet(msg) {
  console.log(`${msg}, ${this.userName}`)
}

const person = {
  userName: 'Tomi'
}

greet.call(person, 'Hello')
// hello, undefined, because arrow fxn does not have their this keyword

greet.apply(person, ['Hi'])

// bind(): returns a new function with fixed "this"

const boundGreet = greet.bind(person, 'Hey!')
boundGreet()

// 2. Scenario-2 is that we can reuse a function with call, apply

function getDetails() {
  return this.name + ' ' + this.age
}

const emmei = { name: 'Emmei', age: '32', getDetails }
const rawa = { name: 'Rawa', age: '27', getDetails }

const emmeiDetails = emmei.getDetails()
const rawaDetails = rawa.getDetails()

console.log(emmeiDetails)
console.log(rawaDetails)
