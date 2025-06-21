// memoization: calculate and cache the result the first time and return the result onwards
// It is an application of closure

function simpleSquare() {
  return function (n) {
    return n * n
  }
}

const memoSquare = simpleSquare()
// Non Memoized Simple Square, return n*n; and this calculation happens on every call
console.log(memoSquare(5))
console.log(memoSquare(5))
console.log(memoSquare(5))
console.log(memoSquare(5))
console.log(memoSquare(5))
console.log(memoSquare(5))
