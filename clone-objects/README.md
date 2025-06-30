# ✅ Q2) Cloning in JavaScript: Shallow vs Deep vs JSON.stringify

## 🔹 1. Shallow Clone

`📌 Copies only 1 level deep. Nested objects are still references.`

#### Methods:

```js
let original = { a: 1, b: { c: 2 } }

// Using spread
let copy1 = { ...original }

// Using Object.assign
let copy2 = Object.assign({}, original)

// Modify nested value
copy1.b.c = 99

console.log(original.b.c) // ❗ 99 (original also affected!)
```

## 🔹 2. Deep Clone

`📌 Full copy — even nested objects are cloned.`

```js
// ✅ Best modern way (in interviews):
import structuredClone from 'structuredClone' // (built-in in modern browsers)

let deepCopy = structuredClone(original)
```
