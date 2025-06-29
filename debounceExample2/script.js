const inputElem = document.querySelector('input')
const prodContainer = document.querySelector('.products-container')

// Step-1: function which makes API call

function searchProducts(e) {
  console.log('Calling API', e.target.value)
}

function debounce(func, delay) {
  let timerID
  return function (...args) {
    // rest operator
    clearTimeout(timerID)
    timerID = setTimeout(() => {
      func(...args) // spread operator
    }, delay)
  }
}

const debouncedSearch = debounce(searchProducts, 1000)

// Step-2: Debounced Function - To call the searchProducts only once user stops typing for a brief period, That's when we'll make an API call

inputElem.addEventListener('input', debouncedSearch)
