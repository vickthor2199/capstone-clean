"use client";

import { useCart } from "../../lib/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/utils/formatCurrency";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#101828] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Secure Checkout</h1>

        {submitted ? (
          <div className="text-green-600 text-2xl font-semibold text-center">
            ✅ Order placed successfully! Redirecting...
          </div>
        ) : (
          <form onSubmit={handleCheckout} className="grid md:grid-cols-2 gap-10">
            {/* ORDER SUMMARY */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Order Summary</h2>
              <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
                {cart.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="flex justify-between items-center border p-4 rounded-lg bg-gray-50"
                  >
                    <span className="font-medium text-gray-700">{item.name}</span>
                    <span className="font-semibold text-gray-800">
                      {formatCurrency(item.price)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between text-xl font-bold border-t pt-4 text-gray-900">
                <span>Total:</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>

            {/* PAYMENT INFO */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Payment Details</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-800">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Victor Williams"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-800">
                    Card Number
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-800">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-800">CVV</label>
                    <input
                      type="password"
                      required
                      placeholder="123"
                      maxLength={4}
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 rounded-lg mt-6 transition duration-300 shadow-md hover:shadow-lg"
                >
                  💳 Pay & Place Order
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
