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
