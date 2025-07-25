"use client";

import { useState, useMemo } from "react";
import { formatCurrency } from "@/utils/formatCurrency";

import products from "@/lib/products";
import { useCart } from "@/lib/CartContext";
import Link from "next/link";
import { toast } from "react-toastify";


export default function ShopPage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const allCategories = [
    ...new Set(products.map((p) => p.category.toLowerCase())),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        selectedCategory === "" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <main className="px-4 md:px-10 py-6">
      <h1 className="text-2xl font-bold mb-6">🛍️ Explore CNG Products</h1>

      {/* 🔍 Search + Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 text-gray-800 bg-white rounded p-2 outline-none shadow-sm focus:ring-2 focus:ring-black cursor-pointer"
        >
          <option value="">All Categories</option>
          {allCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name or description..."
          className="border border-gray-300 text-white-700 rounded p-2 w-full md:w-1/2 outline-none shadow-sm focus:ring-2 focus:ring-black"
        />
      </div>

      {/* 🧱 Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white"
          >
            {/* 🖼️ Product Image */}
            <div className="relative w-full h-48 bg-gray-100 rounded-xl overflow-hidden mb-3 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain object-center transition-transform duration-200 hover:scale-105"
              />
            </div>

            {/* 🧾 Product Info */}
            <h3 className="font-semibold text-lg capitalize mb-1 text-gray-900">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2 capitalize">
              {product.category}
            </p>

            {/* 💸 Price */}
            <p className="text-xl font-bold text-black">
  {formatCurrency(product.price)}
</p>

            {/* 🛒 Actions */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
  addToCart(product);
  toast.success(`${product.name} added to cart!`);
}}

                className="cursor-pointer bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>

              <Link href={`/shop/${product.id}`}>
                <button className="cursor-pointer text-sm text-blue-600 hover:underline">
                  View
                </button>
              </Link>
            </div>
          </div>
        ))}

        {/* 🧺 No Results */}
        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No matching products found.
          </p>
        )}
      </div>
    </main>
  );
}
