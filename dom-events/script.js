// 1. Memory Leaks (in this example)

const div = document.createElement('div')
div.textContent = 'I am created on the fly'

document.body.appendChild(div)

setInterval(() => {
  console.log('🔥 Still running...')
}, 1000)

// Later...
document.body.removeChild(div) // ❗ But interval still runs!
