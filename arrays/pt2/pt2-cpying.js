const arrOfNums = [10, 20, 30, 40, 50]

const copyOfNums = [...arrOfNums] // we spread the array elements
copyOfNums
copyOfNums[1] = 56
copyOfNums
arrOfNums

// Array of Objects
const arrOfObjects = [{ name: 'Jack' }, { name: 'doe' }]
const copyObjects = [...arrOfObjects]
copyObjects

// JavaScript is reference based in order to maintain performant nature of JavaScript, and in order to perform clone we can use structuredClone() from ES7(I believe) or _.deepClone() from loadash

const deepCloneObjects = structuredClone(arrOfObjects)
deepCloneObjects[0].name = 'Imran'

deepCloneObjects
arrOfObjects
