import CartContext from "@/context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


function Item({ item }) {

  const {addToCart : handleAddToCart } = useContext(CartContext);


  return (
    <article className="item-card">
      <div className="item-meta">
        <span className="item-category">
          {item.category?.id === 1 && "Clothes"}
          {item.category?.id === 2 && "Electronics"}
          {item.category?.id === 3 && "Furniture"}
          {item.category?.id === 4 && "Shoes"}
          {item.category?.id === 5 && "Miscellaneous"}
        </span>
      </div>

      <div className="item-image-container">
        <img
          src={item.images?.[0]}
          alt={item.title}
          className="item-image"
        />
      </div>

      <div className="item-info">
        <h3>{item.title}</h3>

        <p className="item-description">
          {item.description}
        </p>
      </div>

      <div className="item-footer">
  <span className="price">
    Rs. {item.price}
  </span>

  <button
    type="button"
    className="add-to-bag-button"
    onClick={() => handleAddToCart(item)}
  >
    Add to bag
  </button>

  <Link
    to={`/product-description/${item.slug}`}
    className="view-link"
  >
    <button
      type="button"
      className="add-to-bag-button"
    >
      View
    </button>
  </Link>
</div>
    </article>
  );
}

export default Item;