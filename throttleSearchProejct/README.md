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

### ✅ Step 2: Add Scroll Listener with Throttle

Below your fetchProducts() function (after initial load), add:

```js
function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement

  // Check if user is within 100px from bottom
  if (scrollTop + clientHeight >= scrollHeight - 100) {
    console.log('🎯 User is near the bottom!')
  }
}

window.addEventListener('scroll', throttle(handleScroll, 300))
```

### 🧠 What We’re Destructuring

`const { scrollTop, scrollHeight, clientHeight } = document.documentElement;`

We're extracting 3 properties from the `document.documentElement (i.e., the <html> tag)`.

### 📦 Definitions (With Real-World Feel)

| Property       | What it means                                                    |
| -------------- | ---------------------------------------------------------------- |
| `scrollTop`    | 📦 How far user has scrolled **from the top**                    |
| `scrollHeight` | 📜 Total height of the scrollable content (even the hidden part) |
| `clientHeight` | 🪟 Height of the visible viewport (what user can see now)        |
