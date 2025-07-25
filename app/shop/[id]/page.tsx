"use client";

import { useCart } from "@/lib/CartContext";
import { formatCurrency } from "../../../utils/formatCurrency";
import products from "@/lib/products";
import { notFound, useParams } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductDetail() {
  const { addToCart } = useCart();
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return notFound();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 flex items-center justify-center px-4 py-12">
      <ToastContainer aria-label="Toast Notifications" />

      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-4xl grid md:grid-cols-2 gap-6 p-6 md:p-10">
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-contain rounded-xl border border-gray-200 bg-white shadow"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-2xl text-green-600 font-semibold mb-6">
              {formatCurrency(product.price)}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {product.description}
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-auto bg-black text-white py-3 px-6 rounded-full text-lg hover:bg-gray-800 transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
