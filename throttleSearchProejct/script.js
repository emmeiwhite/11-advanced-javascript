/** --- Step-1: Fetch 10 products initially ---  */

const url = 'https://dummyjson.com/products?limit=10&skip=0'

const productsWrapper = document.querySelector('.productsWrapper')

async function fetchProducts() {
  productsWrapper.innerHTML = '<p>Loading ...</p>'
  const resp = await fetch(url)
  if (!resp.ok) {
    productsWrapper.innerHTML = `<p>Error Loading Products</p>`
    return
  }

  const data = await resp.json()

  console.log(data)

  let htmlProducts = data.products
    .map(product => {
      return `<div style="border: 1px solid #ccc; margin: 10px; padding: 10px; border-radius: 8px; max-width: 300px;">
            <h2 style="margin-bottom: 6px;">${product.title}</h2>
            <p><strong>Price:</strong> $${product.price}</p>
            <p style="font-size: 0.9rem; color: #555;">${product.description.slice(0, 60)}...</p>
          </div>`
    })
    .join('')

  console.log(htmlProducts)
  productsWrapper.innerHTML = htmlProducts
}

// Initial Load
fetchProducts()
