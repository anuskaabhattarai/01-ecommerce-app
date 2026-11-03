import CartContext from "@/context/CartContext";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CartProvider({ children }) {
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");

    return storedCart ? JSON.parse(storedCart) : [];
  });

  const cartLength = cart.length;

  // ADD TO CART
  function addToCart(item, quantity = 1) {
    setCart((cart) => {
      const existingItem = cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
              }
            : cartItem
        );
      }

      return [
        ...cart,
        {
          id: item.id,
          title: item.title,
          image: item?.images?.[0],
          price: item.price,
          quantity: quantity,
        },
      ];
    });

    toast.success(`${item.title} added to cart!`);
  }

  // INCREASE QUANTITY
  function increaseQuantity(id) {
    setCart((cart) =>
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  // DECREASE QUANTITY
  function decreaseQuantity(id) {
    setCart((cart) =>
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // REMOVE ITEM
  function removeFromCart(id) {
    setCart((cart) =>
      cart.filter((item) => item.id !== id)
    );

    toast.success("Item removed from cart");
  }

  // PLACE ORDER
  function placeOrder() {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    // Clear cart
    setCart([]);

    // Clear localStorage
    localStorage.removeItem("cart");

    toast.success("Order placed successfully!");

    // Go to success page
    navigate("/order-success");
  }

  // Save cart whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartLength,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;