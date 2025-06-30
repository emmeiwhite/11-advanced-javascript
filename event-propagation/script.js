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
