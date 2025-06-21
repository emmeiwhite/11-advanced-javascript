// memoization: calculate and cache the result the first time and return the result onwards
// It is an application of closure

function simpleSquare() {
  return function (n) {
    return n * n
  }
}

const square = simpleSquare()
// Non Memoized Simple Square, return n*n; and this calculation happens on every call
console.log(square(5))
console.log(square(5))
console.log(square(5))
console.log(square(5))
console.log(square(5))
console.log(square(5))

console.log('-------********** Square Memoized *********** ---------')

function memoizedSquare() {
  const cache = {} // cache object
  return function (n) {
    if (n in cache) {
      console.log('Memoized/Cached value returned!')
      return cache[n]
    }

    console.log('Calculated and setup value initial process')
    cache[n] = n * n
    return cache[n]
  }
}

const memoSquare = memoizedSquare()

console.log(memoSquare(7))
console.log(memoSquare(7))
console.log(memoSquare(7))
console.log(memoSquare(7))
console.log(memoSquare(7))
console.log(memoSquare(7))
