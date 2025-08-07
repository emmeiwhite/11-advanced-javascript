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

const func2 = () => {
  let x = 3
  return () => {
    return x
  }
}

function Book() {
  this.name = name
}
