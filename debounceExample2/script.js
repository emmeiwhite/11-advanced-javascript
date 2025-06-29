const inputElem = document.querySelector('input')
const prodContainer = document.querySelector('.products-container')

// Step-1: function which makes API call

function searchProducts(e) {
  console.log(e.target.value)
}

inputElem.addEventListener('input', searchProducts)
