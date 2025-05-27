/** --- PROMISES --- */

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

/** Q4: 🧠 Bonus: Simulate a fake fetch request using the Factory + Delay combo */
function fakeFetch(data, delayMs = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        json: () => Promise.resolve({ ...data, isAdmitted: true })
      })
    }, delayMs)
  })
}

fakeFetch({ name: 'rafs', age: 20 }, 3000)
  .then(response => {
    return response.json()
  })
  .then(data => console.log(data))
  .catch(error => console.log(error))
