import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDescription from "./pages/ProductDescription";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    async function getProducts() {
      const res = await fetch(
        "https://api.escuelajs.co/api/v1/products"
      );

      const data = await res.json();

      setItems(data);
    }

    getProducts();
  }, []);

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
          />
        }
      >
        <Route
          index
          element={
            <Home
              filteredItems={filteredItems}
            />
          }
        />

        <Route
          path="products"
          element={<Products />}
        />

        <Route path="about" element={<About />} />

        <Route path="cart" element={<Cart />} />

        <Route path="checkout" element={<Checkout />}/>

        <Route path="order-success" element={<OrderSuccess />}/>

        <Route
          path="product-description/:slug"
          element={<ProductDescription />}
        />
      </Route>
    </Routes>
  );
}

export default App;