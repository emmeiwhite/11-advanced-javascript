try {
  console.log(c + d) // ReferenceError: c is not defined
} catch (error) {
  console.log(error.message)
}
