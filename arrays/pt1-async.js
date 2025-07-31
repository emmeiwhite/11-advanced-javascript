function getById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Got data for ${id}`)
      resolve(id)
    }, 1000)
  })
}

const ids = [10, 20, 30]

// for-of
async function fetchAllSequentially() {
  //   for (let id of ids) {
  //     await getById(id)
  //   }
}

fetchAllSequentially()

// for-each
ids.forEach(async id => {
  await getById(id)
})
