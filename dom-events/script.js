// 1. Memory Leaks (in this example)
/** ---
const div = document.createElement('div')
div.textContent = 'I am created on the fly'

document.body.appendChild(div)

setInterval(() => {
  console.log('🔥 Still running...')
}, 1000)

// Later...
document.body.removeChild(div) // ❗ But interval still runs!
--- */

// 1. setInterval or setTimeout

/* ---
console.log('🔹 1. setInterval or setTimeout – Needs Manual Clear')
const div = document.createElement('div')
div.textContent = 'I am created on the fly'

document.body.appendChild(div)

const intervalId = setInterval(() => {
  console.log('🌟 Running 🏃🏃🏃!')
}, 1000)

console.log(intervalId)

// Clean up
setTimeout(() => {
  clearInterval(intervalId)
  document.body.removeChild(div)
  console.log('🧼 Cleaned!')
}, 5000)

--- */

// 2. DOM EVENT LISTENERS (Bad Approach, handler stays in the memory)
/** --- 
console.log('🔹 2. DOM Event Listeners — Remove on Cleanup')

const button = document.createElement('button')
button.textContent = 'Click Me'
document.body.appendChild(button)

button.addEventListener('click', () => {
  console.log('clicked')
})

// Remove button, but not listener (stays in memory)
document.body.removeChild(button)
--- */
function handleClick() {
  console.log('Button Clicked')
}
const button = document.createElement('button')
button.innerHTML = 'Click Me'

document.body.appendChild(button)

button.addEventListener('click', handleClick)

// Clean up

const cleanUpBtn = document.querySelector('.clean-up-btn')

// Idea is: On click of this DOM button from index.html, we'll destroy the button node along with its handler function
cleanUpBtn.addEventListener('click', () => {
  setTimeout(() => {
    // First release the resource, then destroy the node - button
    button.removeEventListener('click', handleClick)
    document.body.removeChild(button)
  }, 3000)
})

// 🔥 In React (Interview-Ready Angle):

/*---
useEffect(() => {
  const interval = setInterval(() => {
    console.log('⏳ ticking...');
  }, 1000);

  return () => {
    clearInterval(interval); // ✅ Cleanup when component unmounts
  };
}, []);

---*/
