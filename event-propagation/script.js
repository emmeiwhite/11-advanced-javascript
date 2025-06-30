const grandParent = document.getElementById('grand-parent')
const parent = document.getElementById('parent')
const child = document.getElementById('child')

grandParent.addEventListener('click', () => {
  console.log('Grand Parent Div Clicked!')
})

parent.addEventListener('click', () => {
  console.log('Parent Div Clicked!')
})

child.addEventListener('click', () => {
  console.log('Child - button clicked')
})

/** Capture Phase --- Handled always first, since capturing of event happens first and when the second parameter of eventHandler
 * is set to true, that particular event is fired first.
 */
parent.addEventListener(
  'click',
  () => {
    console.log('Parent Div Clicked!')
  },
  true
)

// Event-Delegation: One Parent Handler to rule them all

const fruitList = document.querySelector('.fruit-list')
const addNewBtn = document.querySelector('.add-new')

fruitList.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    console.log('list-item clicked: ', e.target.innerText)
  }
})

addNewBtn.addEventListener('click', e => {
  const btn = e.target
  btn.disabled = true
  btn.textContent = 'Adding...'

  setTimeout(() => {
    const listItem = document.createElement('li')
    listItem.textContent = 'New Fruit'
    fruitList.appendChild(listItem)

    // Reset button after 1 second
    e.target.disabled = false
    btn.textContent = 'Add new Item'
  }, 1000)
})
