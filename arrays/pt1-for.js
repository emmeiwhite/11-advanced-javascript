// good use of a for look - add elements to an empty array

const arrayOfNums = []
for (let value = 10; value <= 50; value += 10) {
  arrayOfNums.push(value)
}

console.log(arrayOfNums)

// bad | iterate
for (let i = 0; i <= arrayOfNums.length; i++) {
  console.log(arrayOfNums[i])
}
