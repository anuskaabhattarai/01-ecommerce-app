import { useEffect, useState, useContext } from "react";
import ItemList from "../components/ItemList";
//import { useFetch } from "@/hooks/useFetch";

function Home({ filteredItems }) {
  //const [products, setProducts] = useState(filteredItems);

  const [selectedCategory, setSelectedCategory] = useState("");

  const products =
    selectedCategory === ""
      ? filteredItems
      : filteredItems.filter(
          (item) => item.category?.id === selectedCategory
        );

  /*const { products: categories } = useFetch(
    "https://api.escuelajs.co/api/v1/categories"
  );*/
  

  const categories = [
    { id: 1, name: "Clothes" },
    { id: 2, name: "Electronics" },
    { id: 3, name: "Furniture" },
    { id: 4, name: "Shoes" },
    { id: 5, name: "Miscellaneous" },
  ];

  /* useEffect(() => {
    setProducts(filteredItems);
  }, [filteredItems]);

  async function handleCategory(id) {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/categories/${id}/products`
    );

    const data = await res.json();

    setProducts(data);
  }*/

  function handleCategory(id) {
    if (selectedCategory === id) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(id);
    }
  }

  return (
    <>
      <section className="hero">
        <p className="eyebrow">Fresh picks</p>

        <h1>Only the items you'll love</h1>

        <p className="hero-text">
          Discover simple, stylish essentials for everyday living.
        </p>
      </section>

      <div className="home-container">
        <aside>
          <h3>Categories</h3>

          {categories.map((category) => (
            <label key={category.id}>
              <input
                type="checkbox"
                checked={selectedCategory === category.id}
                onChange={() => handleCategory(category.id)}
              />

              {category.name}
            </label>
          ))}
        </aside>

        <ItemList items={products} />
      </div>
    </>
  );
}

export default Home;