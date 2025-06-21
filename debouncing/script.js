// 🔧 Pure JavaScript Implementation of Debounce

// Step-1: A factory function which does search for us

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
