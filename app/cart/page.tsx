"use client";

import { useCart } from "@/lib/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = item?.price || 0;
    const quantity = item?.quantity || 1;
    return sum + price * quantity;
  }, 0);

  return (
    <main className="min-h-screen bg-gray-100 px-4 md:px-10 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        🛒 Your Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Your cart is empty.</p>
          <Link
            href="/shop"
            className="text-blue-500 underline mt-4 inline-block"
          >
            Go back to Shop
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product list */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="bg-white border p-4 rounded-xl shadow-sm flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image || "/products/placeholder.png"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded"
                  />

                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-9 h-9 text-xl bg-black border border-gray-300 rounded-full shadow hover:bg-gray-300 transition text-white"
                        aria-label="Decrease quantity"
                        disabled={item.quantity <= 1}
                      >
                        –
                      </button>
                      <span className="min-w-[32px] text-center font-semibold text-gray-800">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-9 h-9 text-xl bg-black border border-gray-300 rounded-full shadow hover:bg-gray-300 transition text-white"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-medium text-gray-800">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Summary */}
          <div className="bg-white p-6 rounded-xl shadow-md h-fit sticky top-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h3>
            <div className="space-y-2 text-gray-600 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>$5.00</span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold text-gray-800 text-base">
                <span>Total</span>
                <span>${(total + 5).toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="block mt-6 bg-amber-400 hover:bg-amber-300 text-black text-center py-3 rounded-full transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
