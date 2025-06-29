// 🔧 Pure JavaScript Implementation of Debounce

// Step-1: A function which does search for us
/* ---
function search(query) {
  console.log(`API called with: ${query}`)
}

search('H')
search('Ha')
search('Har')
search('Hard')
search('Hard ')
search('Hard J')
search('Hard JS')

// On each letter the user types, the API is called
console.log('---------***** A Debounced Version *****--------')
// We will now create a debounce function which takes search function and delay as an argument

function debounce(fn, delay) {
  let timerId
  // closure in action again
  return function (...args) {
    clearTimeout(timerId) // cancel the last call
    timerId = setTimeout(() => {
      fn(...args)
      // Call this function after a delay, in case the debounced fxn is invoked before the delay, clearTimeout, set a new timer
    }, delay)
  }
}

const searchWithDebounce = debounce(search, 1000) // Returns a function

searchWithDebounce('H')
searchWithDebounce('Ha')
searchWithDebounce('Har')
searchWithDebounce('Hard')
searchWithDebounce('Hard ')
searchWithDebounce('Hard J')
searchWithDebounce('Hard JS')
--- */
// Revisit:

const form = document.getElementById('searchForm')
const input = document.getElementById('searchInput')

const resultsContainer = document.querySelector('.productsWrapper')

const url = 'https://dummyjson.com/products/search'

async function normalSearch(searchTerm) {
  if (!searchTerm.trim()) {
    resultsContainer.innerHTML = '' //Clear if input is empty
    return
  }

  /**  --- 1)  Loading State --- */
  resultsContainer.innerHTML = '<p>Loading...</p>'
  console.log(`API invoked with ${searchTerm}`)

  // Simulate a real API call

  try {
    const resp = await fetch(`${url}?q=${searchTerm}`)
    const data = await resp.json()

    if (data.products.length === 0) {
      resultsContainer.innerHTML = `<p>No results found for "${searchTerm}".</p>`
      return
    }

    console.log(data.products)

    /** 2. Success Results */
    resultsContainer.innerHTML = data.products
      .map(product => {
        return `
            <div style="border:1px solid #ccc; margin:10px; padding:10px;">
          <h3>${product.title}</h3>
          <p>Price: $${product.price}</p>
          <img src="${product.thumbnail}" alt="${product.title}" style="width:100px;" />
        </div>
      `
      })
      .join('')
  } catch (error) {
    console.log('API Error:', error)

    resultsContainer.innerHTML =
      '<p style="color: red;">Failed to fetch data. Please try again.</p>'
  }
}

function debounced(func, delay) {
  let timerID
  return function (...args) {
    clearTimeout(timerID)
    timerID = setTimeout(() => {
      func(...args) // Here we are invoking normalSearch fxn with the searchTerm
    }, delay)
  }
}

const debouncedSearch = debounced(normalSearch, 1000)

input.addEventListener('input', e => {
  const formData = new FormData(form)
  const searchTerm = formData.get('searchTerm')
  debouncedSearch(searchTerm)
})
// debouncedFxn('H')
