import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";
import CartContext from "@/context/CartContext";

function ProductDescription() {
  const { slug } = useParams();

  const { addToCart } = useContext(CartContext);

  const { products: product } = useFetch(
    `https://api.escuelajs.co/api/v1/products/slug/${slug}`
  );

  const [quantity, setQuantity] = useState(1);

  if (!product.id) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div>
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="w-full h-[500px] object-cover rounded-xl"
          />

          <div className="flex gap-4 mt-4">
            {product.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.title}
                className="w-24 h-24 rounded-lg border"
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500 uppercase">
            {product.category?.name}
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {product.title}
          </h1>

          <p className="text-3xl font-semibold text-green-600 mt-4">
            Rs. {(product.price * 135).toFixed(2)}
          </p>

          <div className="mt-6">
            <h2 className="font-semibold text-xl">
              Description
            </h2>

            <p className="text-gray-600 mt-3">
              {product.description}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <button
              className="border px-4 py-2"
              onClick={() =>
                quantity > 1 && setQuantity(quantity - 1)
              }
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              className="border px-4 py-2"
              onClick={() =>
                setQuantity(quantity + 1)
              }
            >
              +
            </button>
          </div>

          <button
            className="bg-black text-white px-8 py-3 rounded-lg mt-6"
            onClick={() => addToCart(product, quantity)}
          >
            Add to Cart
          </button>

          <div className="mt-8">
            <p>
              <b>Category:</b> {product.category?.name}
            </p>

            <p>
              <b>Availability:</b> In Stock
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductDescription;