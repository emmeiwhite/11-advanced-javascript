let a = 10
let b = 20

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(console.log)

console.log(a + b)

/** Q3. Write a function that returns a promise which resolves after n milliseconds? */

const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data served')
    }, ms)
  })
}

// Usage
delay(1000).then(res => console.log(res))
