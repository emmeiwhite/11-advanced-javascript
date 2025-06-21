/* --- 
let count = 0 
function increment() {
  count += 1
  return count
}

console.log(increment())
console.log(increment())
console.log(increment())

Here we are polluting the global scope, now advised!
--- */

function increment() {
  let count = 0
  return function () {
    count += 1
    return count
  }
}

const myInc = increment() // At this point, myInc function still has access to the lexical environment, where count is initialized. count=0;

console.log(myInc()) // count: 0--->0+1 = 1
console.log(myInc()) // count: 1--->1+1 = 2
console.log(myInc()) // count: 2--->2+1 = 3
