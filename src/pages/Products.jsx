import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { useFetch } from "@/hooks/useFetch";

function Products({ handleAddToCart, cart }) {
const {products}= useFetch("https://api.escuelajs.co/api/v1/products")
  
  return (
    <>
      <h1>All Products</h1>

      <ItemList
        items={products}
        handleAddToCart={handleAddToCart}
        cart={cart}
      />
    </>
  );
}

export default Products;