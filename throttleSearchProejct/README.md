# 🧭 Our Mission: Infinite Scroll with Throttle

`🚧 End Goal:
A webpage that loads 10 products, then loads 10 more as you scroll down — using throttle to avoid too many fetches.`

## 🛠️ Step-by-Step Plan

- ✅ 1:
  `Setup a simple HTML page and fetch first 10 products`
- ✅ 2
  `Let’s now go to Step 2: Add Throttled Scroll Detection.`

Our goal in this step is not to fetch data yet, but just to:

✅ Detect when user scrolls near the bottom of the page — but using throttle so it doesn’t fire too often.

## 🧠 Step-by-Step Plan

| Step | Task                                                          |
| ---- | ------------------------------------------------------------- |
| ✅ 1 | Add a `throttle` function                                     |
| ✅ 2 | Add a `scroll` event listener using `window.addEventListener` |
| ✅ 3 | Inside it, detect when user is **near bottom**                |
| ✅ 4 | For now, just log `"Near bottom"` (we’ll fetch more later)    |

### ✅ Step 1: Add Throttle Function

```js
function throttle(func, delay) {
  let lastCall = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastCall > delay) {
      lastCall = now
      func(...args)
    }
  }
}
```
