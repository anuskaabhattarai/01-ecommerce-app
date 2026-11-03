# React Assignment 01 – Props & Rendering Lists (E-commerce App)

## Objective

In this assignment, you will build a simple e-commerce application using React Components and Props.

You are expected to apply the concepts covered in class:

- Creating Components
- Importing & Exporting Components
- Passing Props
- Rendering Lists using `map()`
- Conditional Rendering
- Organizing files into folders

---

# Learning Outcomes

After completing this assignment, you should be able to:

- Create reusable React components.
- Pass data from parent to child components.
- Render multiple products dynamically.
- Display UI based on conditions.
- Organize a React project using a proper folder structure.

---

# Project Setup

## Step 1

Create a new React project using Vite.

```bash
npm create vite@latest
```

Project Name:

```
trend-shop
```

Framework:

```
React
```

Variant:

```
JavaScript
```

---

## Step 2

Install all dependencies.

```bash
npm install
```

---

## Step 3

Run the project.

```bash
npm run dev
```

---

## Step 4

Create the following folder structure.

```
src
│
├── components
│     ├── Header.jsx
│     ├── Footer.jsx
│     ├── Item.jsx
│     └── ItemList.jsx
│
├── data
│     └── products.js
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## Step 5

Copy the provided dataset into

```
src/data/products.js
```

---

# Tasks

## Task 1 – Create Components

Create the following components.

- [ ] Header
- [ ] Footer
- [ ] ItemList
- [ ] Item

---

## Task 2 – Header Component

Build a Header component containing:

- [ ] Store logo or emoji
- [ ] Store name
- [ ] Search input
- [ ] Search button
- [ ] Navigation links
- [ ] Cart button

The design does not need to exactly match the sample, but it should be neat and responsive.

---

## Task 3 – Footer Component

Create a Footer component displaying:

- [ ] Copyright
- [ ] Current year (hardcoded is fine)

Example:

```
© 2026 Trend Shop
```

---

## Task 4 – Render Components

Inside **App.jsx**

- [ ] Import Header
- [ ] Import Footer
- [ ] Import ItemList
- [ ] Import products dataset
- [ ] Render all components

---

## Task 5 – Pass Props

Pass the products array to ItemList.

Example:

```jsx
<ItemList products={products} />
```

---

## Task 6 – Render Product List

Inside ItemList

- [ ] Receive products using props.
- [ ] Loop through the array using `map()`.
- [ ] Render an Item component for every product.

Example:

```jsx
products.map(...)
```

---

## Task 7 – Pass Individual Product

Pass a single product object to Item.

Example:

```jsx
<Item product={product} />
```

---

## Task 8 – Product Card

Each product card must display:

- [ ] Product Image
- [ ] Product Name
- [ ] Brand
- [ ] Category
- [ ] Description
- [ ] Rating
- [ ] Price
- [ ] Add to Bag button

---

## Task 9 – Low Stock Badge

If

```js
stock <= 12;
```

Display a badge.

Example:

```
Only 12 left
```

---

## Task 10 – Empty Product List

If there are no products available,

display

```
No products available
```

instead of rendering product cards.

Hint:

Use conditional rendering.

---

## Task 11 – Sold Out Products

If

```js
stock === 0;
```

then

- [ ] Change the card background to grey.
- [ ] Disable the "Add to Bag" button.
- [ ] Change button text to

```
Sold Out
```

Hint:

Use conditional rendering and dynamic class names.

---

# Bonus Challenges

## Bonus 1

If

```js
rating >= 4.8;
```

display

```
⭐ Best Seller
```

---

## Bonus 2

If

```js
price > 250;
```

display

```
Premium
```

---

## Bonus 3

Display

```
★★★★★
```

instead of only the rating number.

---

## Bonus 4

Display the total number of products above the product list.

Example:

```
9 Products Available
```

---

# Project Requirements

Your project should demonstrate the following React concepts:

- Components
- Props
- Import & Export
- map()
- Conditional Rendering
- Reusable Components

---

# Submission

1. Complete all required tasks.
2. Test your application.
3. Ensure there are no console errors.
4. Push your project to GitHub.
5. Submit your GitHub repository link.

---

# Suggested Commit Messages

```
Create Header component

Create Footer component

Render ItemList component

Pass products as props

Render Item component

Display stock badge

Handle Sold Out products

Complete Props assignment
```

---

# Academic Integrity

This assignment must be completed individually.

You may discuss ideas with classmates, but all code submitted must be your own work.

---
