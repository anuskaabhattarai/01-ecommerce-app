import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "@/context/CartContext";

export default function Checkout() {
  const { cart, placeOrder } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    payment: "Credit / Debit Card",
  });

  const [errors, setErrors] = useState({});

  // Calculate subtotal from cart
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Shipping
  const shipping = cart.length > 0 ? 10 : 0;

  // Tax
  const tax = subtotal * 0.08;

  // Final total
  const total = subtotal + shipping + tax;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Don't place order if cart is empty
    if (cart.length === 0) {
      alert("Your cart is empty!");
      navigate("/cart");
      return;
    }

    // Check form validation
    if (!validate()) {
      return;
    }

    // Place order
    placeOrder();
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        Checkout
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 gap-8">

          {/* ================= SHIPPING INFORMATION ================= */}
          <div className="lg:col-span-2 space-y-6">

            <div className="border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">
                Shipping Information
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                {/* First Name */}
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border rounded-lg p-3 w-full"
                  />

                  <p className="text-red-500 text-sm">
                    {errors.firstName}
                  </p>
                </div>

                {/* Last Name */}
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border rounded-lg p-3 w-full"
                  />

                  <p className="text-red-500 text-sm">
                    {errors.lastName}
                  </p>
                </div>

                {/* Email */}
                <div className="md:col-span-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded-lg p-3 w-full"
                  />

                  <p className="text-red-500 text-sm">
                    {errors.email}
                  </p>
                </div>

                {/* Phone */}
                <div className="md:col-span-2">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border rounded-lg p-3 w-full"
                  />

                  <p className="text-red-500 text-sm">
                    {errors.phone}
                  </p>
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border rounded-lg p-3 w-full"
                  />

                  <p className="text-red-500 text-sm">
                    {errors.address}
                  </p>
                </div>

                {/* City */}
                <div>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="border rounded-lg p-3 w-full"
                  />

                  <p className="text-red-500 text-sm">
                    {errors.city}
                  </p>
                </div>

                {/* Postal Code */}
                <div>
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="border rounded-lg p-3 w-full"
                  />

                  <p className="text-red-500 text-sm">
                    {errors.postalCode}
                  </p>
                </div>

              </div>
            </div>

            {/* ================= PAYMENT ================= */}

            <div className="border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">
                Payment Method
              </h2>

              <div className="space-y-4">

                <label className="flex gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="Credit / Debit Card"
                    checked={
                      formData.payment === "Credit / Debit Card"
                    }
                    onChange={handleChange}
                  />

                  Credit / Debit Card
                </label>

                <label className="flex gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    checked={
                      formData.payment === "Cash on Delivery"
                    }
                    onChange={handleChange}
                  />

                  Cash on Delivery
                </label>

                <label className="flex gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="eSewa"
                    checked={formData.payment === "eSewa"}
                    onChange={handleChange}
                  />

                  eSewa
                </label>

                <label className="flex gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="Khalti"
                    checked={formData.payment === "Khalti"}
                    onChange={handleChange}
                  />

                  Khalti
                </label>

              </div>
            </div>

          </div>

          {/* ================= ORDER SUMMARY ================= */}

          <div className="border rounded-xl p-6 h-fit shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-500">
                Your cart is empty.
              </p>
            ) : (
              <div className="space-y-4">

                {/* Cart Products */}
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between gap-4"
                  >
                    <div>
                      <p className="font-medium">
                        {item.title}
                      </p>

                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <span>
                      Rs.{" "}
                      {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}

                <hr />

                {/* Subtotal */}
                <div className="flex justify-between">
                  <span>Subtotal</span>

                  <span>
                    Rs. {subtotal.toFixed(2)}
                  </span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between">
                  <span>Shipping</span>

                  <span>
                    Rs. {shipping.toFixed(2)}
                  </span>
                </div>

                {/* Tax */}
                <div className="flex justify-between">
                  <span>Tax</span>

                  <span>
                    Rs. {tax.toFixed(2)}
                  </span>
                </div>

                <hr />

                {/* Total */}
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>

                  <span>
                    Rs. {total.toFixed(2)}
                  </span>
                </div>

                {/* Place Order */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
                >
                  Place Order
                </button>

              </div>
            )}

          </div>

        </div>
      </form>
    </div>
  );
}