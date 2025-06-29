/** Normal Scenario */
function sendMessage(msg) {
  console.log(msg)
}

console.log('----- Without Throttle -----')
sendMessage('Hello')
sendMessage('How are you')
sendMessage('How is life')
sendMessage('Any discounts on latest courses')

console.log('----- With Throttle -----')

function throttle(func, delay) {
  let lastCall = 0
  return function (...args) {
    let now = Date.now()
    if (now - lastCall > delay) {
      lastCall = now
      func(...args)
    }
  }
}

const sendMessageWithSlowMode = throttle(sendMessage, 3 * 1000) // until 3s no message should go

sendMessageWithSlowMode('Hello')
sendMessageWithSlowMode('How are you')
sendMessageWithSlowMode('How is life')
sendMessageWithSlowMode('Any discounts on latest courses')
