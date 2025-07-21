## 🛠️ 2. Common Getters

Use these methods to extract different parts of a date:

| Method          | What it gives                  | Example               |
| --------------- | ------------------------------ | --------------------- |
| `getFullYear()` | 4-digit year                   | `2025`                |
| `getMonth()`    | Month (0–11)                   | `6` → July (0-based!) |
| `getDate()`     | Day of the month (1–31)        | `21`                  |
| `getDay()`      | Day of the week (0–6)          | `1` → Monday          |
| `getHours()`    | Hours (0–23)                   | `14`                  |
| `getMinutes()`  | Minutes (0–59)                 | `53`                  |
| `getSeconds()`  | Seconds (0–59)                 | `12`                  |
| `getTime()`     | Milliseconds since Jan 1, 1970 | `1721546592213`       |

📌 Tip: getMonth() starts at 0, so January = 0, July = 6, etc.

## 🔧 3. Common Setters

Set or update parts of the date:

```js
const date = new Date()

// Add 5 days
date.setDate(date.getDate() + 5)

// Set month to August (7, since 0-based)
date.setMonth(7)

// Set year to 2030
date.setFullYear(2030)
```

## 📅 4. Date Formatting Methods

1. 👉 toDateString()

```js
new Date().toDateString() // "Mon Jul 21 2025"`
```

2. 👉 toISOString()

```js
new Date().toISOString()
// "2025-07-21T09:23:30.123Z" (in UTC)
```

3. 👉 toLocaleDateString()

```js
new Date().toLocaleDateString('en-US')
// "7/21/2025"
```

You can customize:

```js
new Date().toLocaleDateString('en-GB', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})
// "Monday, 21 July 2025""
```

## 🧠 5. Bonus: Date Arithmetic

JavaScript `Date` objects allow auto adjustment:

```js
const date = new Date('2025-07-21')
date.setDate(date.getDate() + 40) // Handles overflow to next month
console.log(date.toDateString()) // "Sat Aug 30 2025"
```

So you don’t need to calculate months manually — it auto-wraps!

## ✅ Summary Table

| Operation       | Code Example                   | Output Type       |
| --------------- | ------------------------------ | ----------------- |
| Today’s date    | `new Date()`                   | Date object       |
| Just date       | `.toDateString()`              | "Mon Jul 21 2025" |
| Add days        | `d.setDate(d.getDate() + X)`   | Mutates date      |
| ISO format      | `.toISOString()`               | "2025-07-21T..."  |
| Locale format   | `.toLocaleDateString('en-US')` | "7/21/2025"       |
| Time since 1970 | `.getTime()`                   | milliseconds      |
