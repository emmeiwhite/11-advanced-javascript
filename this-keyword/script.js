'use strict'
console.log(this) // window

function normalFxn() {
  console.log(this)
}

normalFxn()

// Function expressions do have their own this, they use this from the outer scope or outer execution context
const fxn2 = () => {
  console.log(this)
}

fxn2()
