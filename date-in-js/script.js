// A) Initial Requirement
const now = new Date()
console.log(now)

console.log(now.toLocaleString()) // 21/07/2025, 16:10:34
console.log(now.toDateString()) // Mon Jul 21 2025

const date = document.querySelector('.date')
const buttonElem = document.querySelector('.btn')

buttonElem.addEventListener('click', () => {
  date.innerHTML = `<p>${now.toDateString()}</p>`
})

// B)  Now, now more interactivity
const form = document.querySelector('form')
const inputText = document.querySelector('.countInput')

// C)  Date update
const dateElem = document.querySelector('.date-update span')
const date2 = new Date()
dateElem.innerHTML = date2.toDateString()

form.addEventListener('submit', e => {
  e.preventDefault()
  if (!inputText.value) return

  const date = new Date()
  console.log(date.toDateString())

  date.setDate(date.getDate() + Number(inputText.value))
  dateElem.innerHTML = date.toDateString()

  // So you don’t need to calculate months manually — it auto-wraps!
})

let x = 20
console.log(x)
