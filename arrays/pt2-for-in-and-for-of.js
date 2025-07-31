// for-in : old school javascript
const arrOfStrings = ['success', 'pending', 'rejected']

for (let index in arrOfStrings) {
  console.log(index)
  console.log(arrOfStrings[index])
}

// for-of (ES6) | clean code

for (let response of arrOfStrings) {
  console.log(response)
}
