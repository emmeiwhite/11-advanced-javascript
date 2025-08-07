function foo(a) {
  return a
}

const foo2 = a => {
  return a
}

// HOF
const func = fn => {
  fn('hello')
}
