let a = 10
let b = 20

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(console.log)

console.log(a + b)
