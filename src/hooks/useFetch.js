import { useEffect, useState } from "react";

export function useFetch(url) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, [url]);

  return { products };
}