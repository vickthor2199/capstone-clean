"use client";

import { useCart } from "../../lib/CartContext"; // ✅ Make sure this path is correct
import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/utils/formatCurrency";


export default function CheckoutPage() {
  const { cart, clearCart } = useCart(); // ✅ Include clearCart
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    setSubmitted(true);
    clearCart(); // ✅ Clear the cart after successful checkout
    setTimeout(() => {
      router.push("/"); // Redirect to home after 3 seconds
    }, 3000);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      {submitted ? (
        <div className="text-green-600 text-xl font-semibold">
          ✅ Order placed successfully! Redirecting to home...
        </div>
      ) : (
        <>
          <div className="mb-6 space-y-2">
  {cart.map((item, index) => (
    <div key={`${item.id}-${index}`} className="border p-4 rounded">
      <h2 className="font-semibold">{item.name}</h2>
      <p>{formatCurrency(item.price)}</p>
    </div>
  ))}
</div>

<div className="text-right font-bold text-xl mb-4">
  Total: {formatCurrency(total)}
</div>

          <button
            onClick={handleCheckout}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Place Order
          </button>
        </>
      )}
    </main>
  );
}
