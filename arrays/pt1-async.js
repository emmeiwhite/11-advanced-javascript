function getById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Got data for ${id}`)
      resolve(id)
    }, 1000)
  })
}

const ids = [10, 20, 30]

async function fetchAllSequentially() {
  for (let id of ids) {
    await getById(id)
  }
}

fetchAllSequentially()
