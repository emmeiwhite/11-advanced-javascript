let original = { a: 1, b: { c: 2 } }

// 1. Copy with spread operator. Only works upto one level (Shallow Clone) Nested objects are still referenced

const copy1 = { ...original }

// 2. Using Object.assign({},obj)
const copy2 = Object.assign({}, original)

// console.log(copy1, copy2)

copy1.b.c = 99
/* ---
console.log(copy1)

console.log(original)
--- */

// 2. Deep Clone: Fully copy - even the objects are cloned.

let user = { name: 'Imran', skills: { js: true } }

const copyUser = structuredClone(user)

copyUser.skills.js = false

console.log('After Deep Clone')
console.log(user.skills)
console.log(copyUser.skills)
