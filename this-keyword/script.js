'use strict'
console.log(this) // window

function normalFxn() {
  console.log(this)
}

normalFxn()
