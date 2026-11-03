const nikeAirMaxImage = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80";
const adidasHoodieImage = "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&auto=format&fit=crop&q=80";
const airpodsImage = "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const levisJeansImage = "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop&q=80";
const galaxyWatchImage = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80";
const pumaShirtImage = "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80";
const backpackImage = "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80";
const sonyHeadphonesImage = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80";
const casioWatchImage = "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&auto=format&fit=crop&q=80";


const items = [
  {
    id: 1,
    title: "Nike Air Max 270",
    slug: "nike-air-max-270",
    price: 149,
    description: "Comfortable everyday sneakers with Air cushioning.",
    brand: "Nike",
    rating: 4.8,
    stock: 18,
    category: {
      id: 1,
      name: "Shoes",
      slug: "shoes",
    },
    images: [
      nikeAirMaxImage,
    ],
  },
  {
    id: 2,
    title: "Adidas Essentials Hoodie",
    slug: "adidas-essentials-hoodie",
    price: 59,
    description: "Soft fleece hoodie for casual everyday wear.",
    brand: "Adidas",
    rating: 4.6,
    stock: 32,
    category: {
      id: 2,
      name: "Clothing",
      slug: "clothing",
    },
    images: [
      adidasHoodieImage,
    ],
  },
  {
    id: 3,
    title: "Apple AirPods Pro (2nd Gen)",
    slug: "apple-airpods-pro-2nd-gen",
    price: 249,
    description: "Premium wireless earbuds with noise cancellation.",
    brand: "Apple",
    rating: 4.9,
    stock: 12,
    category: {
      id: 3,
      name: "Electronics",
      slug: "electronics",
    },
    images: [
      airpodsImage,
    ],
  },
  {
    id: 4,
    title: "Levi's 511 Slim Fit Jeans",
    slug: "levis-511-slim-fit-jeans",
    price: 79,
    description: "Classic slim-fit stretch denim jeans.",
    brand: "Levi's",
    rating: 4.5,
    stock: 26,
    category: {
      id: 2,
      name: "Clothing",
      slug: "clothing",
    },
    images: [
      levisJeansImage,
    ],
  },
  {
    id: 5,
    title: "Samsung Galaxy Watch 7",
    slug: "samsung-galaxy-watch-7",
    price: 299,
    description: "Smartwatch with health tracking and GPS.",
    brand: "Samsung",
    rating: 4.7,
    stock: 20,
    category: {
      id: 3,
      name: "Electronics",
      slug: "electronics",
    },
    images: [
      galaxyWatchImage,
    ],
  },
  {
    id: 6,
    title: "Puma Running T-Shirt",
    slug: "puma-running-t-shirt",
    price: 34,
    description: "Lightweight performance t-shirt for workouts.",
    brand: "Puma",
    rating: 4.4,
    stock: 50,
    category: {
      id: 2,
      name: "Clothing",
      slug: "clothing",
    },
    images: [
      pumaShirtImage,
    ],
  },
  {
    id: 7,
    title: "Herschel Classic Backpack",
    slug: "herschel-classic-backpack",
    price: 69,
    description: "Spacious backpack with a padded laptop sleeve.",
    brand: "Herschel",
    rating: 4.8,
    stock: 14,
    category: {
      id: 4,
      name: "Bags",
      slug: "bags",
    },
    images: [
      backpackImage,
    ],
  },
  {
    id: 8,
    title: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    price: 399,
    description: "Wireless noise-cancelling over-ear headphones.",
    brand: "Sony",
    rating: 4.9,
    stock: 10,
    category: {
      id: 3,
      name: "Electronics",
      slug: "electronics",
    },
    images: [
      sonyHeadphonesImage,
    ],
  },
  {
    id: 9,
    title: "Casio Vintage Digital Watch",
    slug: "casio-vintage-digital-watch",
    price: 49,
    description: "Retro digital watch with an iconic classic design.",
    brand: "Casio",
    rating: 4.7,
    stock: 40,
    category: {
      id: 5,
      name: "Accessories",
      slug: "accessories",
    },
    images: [
      casioWatchImage,
    ],
  },
];