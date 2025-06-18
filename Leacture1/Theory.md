🎬 Episode 01 - Inception

---

### ❓ What is **Emmet**?

**Ans:** `Emmet` is a plugin that helps developers write HTML and CSS code much more **quickly** and **efficiently** using abbreviations and shortcuts.

---

### 🔥 Why use Emmet?

* ⚡ **Speeds up** HTML and CSS coding with shortcuts
* 🧠 **Reduces errors** by expanding correct snippet patterns
* 🛠️ Built into popular editors like `VS Code`, `Sublime Text`, and `Atom`
* 📈 Leads to **faster development cycles**

---

### 💡 Example

**Input (Emmet abbreviation):**

```emmet
ul>li*3
```

**Output (HTML):**

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

---

### 🧱 What is `createElement()`?

* 🛠️ `document.createElement()` is a JavaScript method that creates a new HTML element.
* 📌 It takes a string (e.g., `'div'`, `'p'`, `'h1'`) as an argument.

```js
const newElement = document.createElement('div');
```

* ➕ Add content:

```js
newElement.textContent = 'This is some text.';
newElement.innerHTML = '<b>This is bold text.</b>';
```

* 🧩 Insert into DOM:

```js
const rootDiv = document.getElementById('root');
rootDiv.appendChild(newElement);
```

---

### ⚖️ `append()` vs `appendChild()`

* 🧱 `appendChild()` – Adds **one node**.
* 🧱 `append()` – Can add **multiple nodes/strings**.

---

### 🧠 How Browsers Understand This

* 🧱 **HTML → DOM**: Browser builds DOM from HTML
* 🔍 `getElementById` locates elements
* 🛠️ `createElement` creates nodes
* ➕ `appendChild` adds to DOM

✅ All this is done via Web APIs provided by the browser — not JS itself.

---

### 🚫 Can We Do the Same in React?

❌ No. Browsers don’t understand React natively.

✅ We need tools like Babel and ReactDOM to interpret and render React code.

---

### 🌍 What is CDN?

**Ans:** A `CDN (Content Delivery Network)` is a globally distributed server system that delivers content **faster** and **more efficiently**.

---

### 💡 Why Use a CDN?

* 🌐 Brings data **closer to users**
* 🚀 **Faster page loads**
* 📈 **Scalable** during traffic spikes
* 💰 **Saves bandwidth** on main servers

---

### 📦 Adding React via CDN

Paste these before closing `</body>`:

```html
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

✅ `react.development.js` – Core library
✅ `react-dom.development.js` – DOM bridge

---

### 👋 Hello World in React

**Step-by-step:**

1️⃣ Create element

```js
const heading = React.createElement('h1', {}, 'Hello World From React');
```

2️⃣ Create root

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
```

3️⃣ Render

```js
root.render(heading);
```

✅ This renders: `<h1>Hello World From React</h1>`

---

### 📁 Splitting Code into Files

1️⃣ `index.html`:

```html
<div id="root"></div>
<script src="react.js"></script>
<script src="react-dom.js"></script>
<script src="App.js"></script>
```

2️⃣ `App.js`:

```js
const heading = React.createElement("h1", {}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

✅ Keeps code modular and clean.

---

### 🔄 DOM Manipulation in React

* ✅ React uses **Virtual DOM**
* ❌ No manual DOM changes
* 🧠 React handles updates automatically

---

### 🧪 Deep Dive into `React.createElement()`

✅ Syntax:

```js
React.createElement(type, props, children)
```

📌 Example:

```js
const heading = React.createElement("h1", { id: "title" }, "Hello React");
```

---

### 🧱 Nested & Sibling Elements in React

✅ Nested:

```js
React.createElement("div", {},
  React.createElement("h1", {}, "Nested Element")
)
```

✅ Siblings (using array):

```js
React.createElement("div", {}, [
  React.createElement("h1", {}, "Sibling 1"),
  React.createElement("h2", {}, "Sibling 2")
])
```

---

### 💖 JSX Makes Life Easier

✅ JSX Version:

```jsx
const jsx = (
  <div>
    <h1>Hello</h1>
    <h2>World</h2>
  </div>
);
```

✅ Looks like HTML but compiles to `React.createElement()`

---

### ⚠️ Script Order Matters

❌ Wrong:

```html
<script src="App.js"></script>
<script src="react.js"></script>
```

✅ Correct:

```html
<script src="react.js"></script>
<script src="react-dom.js"></script>
<script src="App.js"></script>
```

---

### 🧠 React Only Works Inside the `#root`

```html
<div id="root"></div>
```

✅ ReactDOM targets `#root` only. Any other ID will not work.

---

🎯 **Key Takeaways**

* React uses a virtual DOM and works inside a root div
* `React.createElement()` can build complex UIs
* JSX is a friendly syntax alternative
* Use CDN for quick setup
* Structure code with `App.js` and external files for clarity
V