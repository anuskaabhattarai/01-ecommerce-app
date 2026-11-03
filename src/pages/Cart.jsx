import CartContext from "@/context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 10 : 0;

  const tax = subtotal * 0.08;

  const total = subtotal + shipping + tax;

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div>
          <h2>Your cart is empty.</h2>

          <Link to="/products">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">

          {/* CART ITEMS */}
          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 border rounded-xl p-5 shadow-sm"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 rounded-lg object-cover"
                />

                <div className="flex-1">

                  <h2 className="text-xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-green-600 text-xl font-bold mt-3">
                    Rs. {item.price}
                  </p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-4 mt-4">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="border px-3 py-1 rounded"
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="border px-3 py-1 rounded"
                    >
                      +
                    </button>

                    {/* REMOVE */}
                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="text-red-500 ml-6"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* ORDER SUMMARY */}
          <div className="border rounded-xl p-6 h-fit shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Subtotal</span>

                <span>
                  Rs. {subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>

                <span>
                  Rs. {shipping.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>

                <span>
                  Rs. {tax.toFixed(2)}
                </span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold">

                <span>Total</span>

                <span>
                  Rs. {total.toFixed(2)}
                </span>

              </div>

              <Link to="/checkout">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6">
                  Proceed to Checkout
                </button>
              </Link>

            </div>
          </div>

        </div>
      )}
    </div>
  );
}